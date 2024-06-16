// Global Variables
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKEY = '8566c3b1fdacf05d0bd69e1615f10652';

// Create a new date instance dynamically with JS
let d = new Date();
let newMonth = d.getMonth() + 1;
let newDate = d.getDate() + '.' + newMonth + '.' + d.getFullYear();

// Event listener for generate button 
document.getElementById('generate').addEventListener('click', performAction);

// Callback function for event listener
function performAction(e) {
  e.preventDefault();
  // Users input
  const zipCode = document.getElementById('zip').value;
  const userFeels = document.getElementById('feelings').value;

  // Form validation
  if (zipCode.length == 0) {
    alert("Please enter zip code");
    return
  }
  if (userFeels.length == 0) {
    alert("Please enter feelings");
    return
  }

  getWeatherData(baseURL, zipCode, apiKEY)
    .then(function (data) {
      postData('/addData', { date: newDate, temp: data.main.temp, content: userFeels });
    })
    .then(function () {
      // Reset the form
      document.getElementById('myForm').reset();
      // Reshowing the new entry
      document.getElementById('collapseWidthExample').classList.add('show');
    })
    .then(
      updateUI
    )
    .catch(function (error) {
      console.log('error', error);
    })
}

// Async function with get request to OpenWeatherMaps API
const getWeatherData = async (base, zip, key) => {
  const res = await fetch(base+zip+'&units=metric'+'&appid='+key);

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
}

// Async function to post data to projectData object on server-side
const postData = async (url = '', appData = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(appData),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

// Async function requesting from server to update the UI
const updateUI = async () => {
  const req = await fetch('/all');
  try {
    const appData = await req.json();
    const recentEntry = appData[appData.length - 1];
    document.getElementById('date').innerHTML = 'Date: ' + recentEntry.date;
    document.getElementById('temp').innerHTML = 'Temperature: ' + Math.round(recentEntry.temp) + '°C';
    document.getElementById('content').innerHTML = 'Feelings: ' + recentEntry.content;
  } catch (error) {
    console.log('error', error);
  }
}
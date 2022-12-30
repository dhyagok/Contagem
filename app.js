const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutsContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const nextyearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')


const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`)

nextyearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? "0" + unit : unit

const inserCountdownValues = ({ days, hours, minuts, seconds }) => {

  daysContainer.textContent = getTimeUnit(days)
  hoursContainer.textContent = getTimeUnit(hours)
  minutsContainer.textContent = getTimeUnit(minuts)
  secondsContainer.textContent = getTimeUnit(seconds)
}



const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newYearTime - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minuts = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  inserCountdownValues({ days, hours, minuts, seconds })
}



const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = "flex"
};

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountdown, 1000);
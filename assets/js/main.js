let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 500) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#0F9D58 ${scrollValue}%,  #F4B400 ${scrollValue}%)`;
};    
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

// FORM TO GOOGLE SHEETS - Email Subscription

const scriptURL = 'https://script.google.com/macros/s/AKfycbzfaMzt2aq9PSBfDJ38kEPx3Fr2ePkum8-nr0Ed6waKXmO81B2XCxhVL1Qa1Z2xcQe0/exec'
const form = document.forms['vyf-subsheet']
const subscribed = document.getElementById("subscribed")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      subscribed.innerHTML = "<br>Thank you for subscribing!"
      setTimeout(function(){
        subscribed.innerHTML = "<br>"
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const scriptURL2 = 'https://script.google.com/macros/s/AKfycbwSmDMsrEBQ8DUW2BBF4JoxqmzOMHyeYnyqBu1ZrNfKz_I4gZiMsDRkGqkbuqFMk-hz/exec'
const form2 = document.forms['vyf-contact-form']
const message = document.getElementById("message")

form2.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
    .then(response => {
      message.innerHTML = "<br>Thank you for contacting us!"
      setTimeout(function(){
        message.innerHTML = "<br>"
      },5000)
      form2.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

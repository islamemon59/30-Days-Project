const scriptURL = 'https://script.google.com/macros/s/AKfycbziiOcDPXifQV2aTEaN5gqsgQQ7Md2in_Uo2aNM_6XiabySx9glghZ7MEq1OcSbsx7g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(() => {
            msg.innerHTML = "";
        },5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});
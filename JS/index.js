// CONTACT ME FORM

const scriptURL = 'https://script.google.com/macros/s/AKfycbyuuj1zzT8haw17gRs-bkZy9AH_yWLCC8ELzs1KFppBaY8yZ_TdIhYjsS4tTyfgx9WgBw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout( function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
})


var submenu = document.getElementById("submenu");

function openMenu(){
    submenu.style.right = "0";
}

function closeMenu(){
    submenu.style.right = "-200px";
}
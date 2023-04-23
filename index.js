const email = document.getElementById('email');
const submit = document.getElementById('email-form');

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('clicked');

    //email code
    Email.send({
        SecureToken : "00e3ed1a-a1d6-472b-99f7-68f09f64dfcd",
        To : 'vyfnetworksinc4@gmail.com',
        From : "vyfnetworksinc4@gmail.com",
        Subject : "Testing email subject",
        Body : "Testing email body"
    }).then(
      message => alert(message)
    );
});


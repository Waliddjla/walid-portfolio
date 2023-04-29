const firebaseConfig = {
    apiKey: "AIzaSyAdda8h5kzheUaC1hBJ9ypxXakLOCOiIcc",
    authDomain: "portfolio-walid-f87ee.firebaseapp.com",
    databaseURL: "https://portfolio-walid-f87ee-default-rtdb.firebaseio.com",
    projectId: "portfolio-walid-f87ee",
    storageBucket: "portfolio-walid-f87ee.appspot.com",
    messagingSenderId: "208108619366",
    appId: "1:208108619366:web:78e183ce13b2da6e750fa7",
    measurementId: "G-XPMF6XB2YR"
  };

firebase.initializeApp(firebaseConfig);

const contactFormDB = firebase.database().ref('portfolio-walid');

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = getElementVal('name');
    const email = getElementVal('email');
    const message = getElementVal('message');
   
    saveMessage(name, email, message);


    document.querySelector('.alert').style.display ="block";
    setTimeout(() => {
        document.querySelector('.alert').style.display ="none";
    }, 3000);

    document.getElementById("contactForm").reset();
    
}
const saveMessage = (name ,email, message) => {
    const newMessage = contactFormDB.push();
    newMessage.set({
        name: name,
        email: email,
        message: message,
    });
};

const getElementVal = (id)=> {
    return document.getElementById(id).value;
}

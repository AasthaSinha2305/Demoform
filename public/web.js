var config = {
  apiKey: "AIzaSyAmjeiCZEOREdnN_85T32q57IBi9UmfJF0",
  authDomain: "demoform-ef05d.firebaseapp.com",
  databaseURL: "https://demoform-ef05d.firebaseio.com",
  projectId: "demoform-ef05d",
  storageBucket: "demoform-ef05d.appspot.com",
  messagingSenderId: "1033335981126",
  appId: "1:1033335981126:web:7c9ebe89a9adb2122eb647",
  measurementId: "G-PL899CG2ZS"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();


  // Get values
  var name= getInputVal('name');
  var rollno = getInputVal('rollno');
  var collage = getInputVal('collage');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var branch = getInputVal('branch');
  var year = getInputVal('year');
  var gender = getInputVal('gender');
  var message = getInputVal('message');

saveMessage(name, rollno,collage, email, phone,branch, year,gender,message);
// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,rollno,collage,email, phone,branch,year,gender, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    rollno:rollno,
    collage :collage,
    email:email,
    phone:phone,
    branch:branch,
    year:year,
    gender:gender,
    message:message
  });

}
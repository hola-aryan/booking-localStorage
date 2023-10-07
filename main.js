var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var myForm = document.getElementById('my-form');
var localStorageDataList = document.getElementById("localStorageData");

myForm.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    // Get user input values
    const name = nameInput.value;
    const email = emailInput.value;

    // Create an object to store user data
    const userData = { name, email };

    // Store user data in localStorage
    localStorage.setItem(email, JSON.stringify(userData));

    // Clear the form inputs
    nameInput.value = "";
    emailInput.value = "";

    // Display localStorage data
    displayLocalStorageData();
}

function displayLocalStorageData() {
    localStorageDataList.innerHTML = ""; // Clear previous data

    for (let i = 0; i < localStorage.length; i++) {
        const email = localStorage.key(i);
        const userData = JSON.parse(localStorage.getItem(email));

        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${userData.name}, Email: ${userData.email}`;

        localStorageDataList.appendChild(listItem);
    }
}


// const cat = localStorage.getItem("myCat");
// const cat = localStorage.getItem("myCat");
// login functionality
const signUpButton = document.getElementById('Sign-Up');
const projectName = 'Hospital Patient Management Api';

console.log(`Welcome to the ${projectName}`);
signUpButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

const signinButton = document.getElementById('Sign-In');

signinButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === 'admin' && password === 'password123') {
        alert('Sign-In successful!');
    } else {
        alert('Invalid username or password.');
    }
});
const apiUrl = 'https://api.hospitalmanagement.com/patients';
const fetchPatientsButton = document.getElementById('Fetch-Patients');

fetchPatientsButton.addEventListener('click', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Patient Data:', data);
            alert('Patient data fetched successfully! Check console for details.');
        })
        .catch(error => {
            console.error('Error fetching patient data:', error);
            alert('Failed to fetch patient data.');
        });
});

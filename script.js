// Part 1: Event Handling

const clickMeBtn = document.getElementById('clickMeBtn');
const clickMessage = document.getElementById('clickMessage');

clickMeBtn.addEventListener('click', function() {
    clickMessage.textContent = 'Hello! This button was just clicked.';
});

// Part 2: Interactive Elements

// Dark/Light mode toggle with section background fix
const toggleModeBtn = document.getElementById('toggleModeBtn');
const modeMessage = document.getElementById('modeMessage');
let darkMode = false;

toggleModeBtn.addEventListener('click', function() {
    darkMode = !darkMode;
    const sections = document.querySelectorAll('section');
    
    if (darkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        modeMessage.textContent = 'Current mode: Dark';
        sections.forEach(section => {
            section.style.backgroundColor = '#444';
            section.style.color = '#fff';
        });
    } else {
        document.body.style.backgroundColor = '#f5f7fa';
        document.body.style.color = '#333';
        modeMessage.textContent = 'Current mode: Light';
        sections.forEach(section => {
            section.style.backgroundColor = '#fff';
            section.style.color = '#333';
        });
    }
});

// Simple counter logic
let counterValue = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

incrementBtn.addEventListener('click', function() {
    counterValue++;
    counter.textContent = counterValue;
});

decrementBtn.addEventListener('click', function() {
    counterValue--;
    counter.textContent = counterValue;
});

// Part 3: Custom Form Validation

const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    // Clear previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate password
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Success message
    if (isValid) {
        formSuccess.textContent = 'Form submitted successfully! Thank you.';
        signupForm.reset();
    }
});
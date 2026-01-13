// Dynamic Greeting based on time of day
const greetingElement = document.getElementById('greeting');
const hour = new Date().getHours();
let greetingText = 'Hello!';

if (hour < 12) {
    greetingText = 'Good Morning, I\'m JT Tutor.';
} else if (hour < 18) {
    greetingText = 'Good Afternoon, I\'m JT Tutor.';
} else {
    greetingText = 'Good Evening, I\'m JT Tutor.';
}

greetingElement.innerText = greetingText;

// Simple console log to prove JS is working
console.log("JS loaded");
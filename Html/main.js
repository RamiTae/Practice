// main.js
console.log(document.getElementById('greeting'));
const getGreeting = document.querySelector('#greeting');
console.log(getGreeting);
getGreeting.innerHTML = 'Hi greeting';
getGreeting.innerHTML = '<div>In div</div>'
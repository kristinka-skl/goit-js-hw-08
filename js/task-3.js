const inputElem = document.querySelector('#name-input');
const nameElem = document.querySelector('#name-output');
inputElem.addEventListener('input', inputElemHandler);
function inputElemHandler() {    
    const username = inputElem.value.trim();  
    nameElem.textContent = username === '' ? 'Anonymous': username;    
};

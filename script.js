let charVal = document.getElementById('textarea')
let totalCount = document.getElementById('total-counter')
let remainingCount = document.getElementById('remaining-counter')

let userChar = 0;

const updateCounter = () => {
    userChar = charVal.value.length;

    totalCount.innerHTML = userChar
    remainingCount.innerHTML = 150 - userChar
}

charVal.addEventListener('keyup', () => updateCounter())

// copy the text 
const copyText = () => {
    charVal.select()
    charVal.setSelectionRange(0, 9999); // Mobile 
    navigator.clipboard.writeText(charVal.value)
}


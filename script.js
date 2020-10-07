const display = document.querySelector('#display')
const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')
const inputFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector("#show-color")
const inputBg = document.querySelector("#input-bg-color")
const showBg = document.querySelector("#show-bg-color")
const inputText = document.querySelector("#enter-text")



function handleInput() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}

function handleFont() {
    const fontType = inputFont.value

    display.style.fontFamily = fontType

    showFont.innerHTML = fontType
}

function handleColor() {
    const fontColor = inputColor.value

    display.style.color = fontColor

    showColor.innerHTML = fontColor
}

function handleBG() {
    const bgColor = inputBg.value

    display.style.backgroundColor = bgColor

    showBg.innerHTML = bgColor
}

function replace_text() {
    const text = inputText.value

    display.innerHTML = text
}

inputSize.addEventListener('input', handleInput)
inputFont.addEventListener('input', handleFont)
inputColor.addEventListener('input', handleColor)
inputBg.addEventListener('input', handleBG)
inputText.addEventListener('input', replace_text)

const firePixelArray = []
const fireWidth = 10
const fireHeight = 10

function start(){
	createFireDataStructure()
	renderFire()
}

function createFireDataStructure(){
	const numberOfPixel = fireWidth * fireHeight

	for(let i=0; i < numberOfPixel; i++){
		firePixelArray[i] = 0
	}

}

function calculateFirePropagation(){

}

function renderFire(){
	let html = '<table cellpadding=0 cellspacing=0>'

	for(let row=0; row < fireHeight; row++){
		html += '<tr>'

		for(let column=0; column<fireWidth; column++){
			const pixexIndex = column + (fireWidth * row)
			const fireIntensity = firePixelArray[pixexIndex]

			html += '<td>'
			html += `<div class="pixel-index">${pixexIndex}</div>`
			html += fireIntensity
			html += '</td>'
		}
	html += '</tr>'
	
	}
	html += '</table>'

	document.querySelector('#fireCanvas').innerHTML = html
}

function createFireSource(){
for(let column = 0; column <= fireWidth; column++){
	const overflowPixelIndex = fireWidth * fireHeight
	const pixelIndex = (overflowPixelIndex - fireWidth) + column

	firePixelArray[pixelIndex] = 36
}

}

start()
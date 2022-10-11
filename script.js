'use strict';
const zone = document.querySelector('.zone');
const textures = document.querySelector('.textures');
const div = document.querySelector('.textures div');

for (let i = 0; i < textures.children.length; i++) {
	textures.children[i].draggable = true;
}

zone.addEventListener('dragover', (e) => {
	e.preventDefault();
});

zone.addEventListener('drop', (e) => {
	let n = e.dataTransfer.getData('texture');
	e.currentTarget.style.background = `url("texturas/texture${n}.jpg")`;
	zone.textContent = '';
});

for (let i = 1; i < textures.children.length + 1; i++) {
	document
		.querySelector(`.texture${i}`)
		.addEventListener('dragstart', (e) => {
			changeTexture(i, e);
		});
}

const changeTexture = (n, e) => {
	e.dataTransfer.setData('texture', n);
};

// Next Project ()

// let array = ["valor1", "valor2", "valor3"];

// array.splice(1,2);

// console.log(array)

// const request = fetch("info.txt");

// request
// .then(res =>res.json())
// .then(res => console.log(res))

// const geolocation = navigator.geolocation;

// const gps = (pos)=>{
//     console.log(pos)
// }

// geolocation.getCurrentPosition(gps)

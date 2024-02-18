import { homePg } from './extra modules/home';
import { menuPg } from './extra modules/menu';
import { aboutPg } from './extra modules/about';
import './index.css';

const homePage = document.querySelector('#homeBtn')
const menuPage = document.querySelector('#menuBtn')
const aboutPage = document.querySelector('#aboutBtn')

homePg()

//add home elements
homePage.addEventListener('click', () =>{
console.log('clicked')
	homePg()
})

//fix adding menu elemets every time the button is clicked
menuPage.addEventListener('click', () =>{
	console.log('clicked')
	menuPg()
})

//add about elements

aboutPage.addEventListener('click', ()=>{
	console.log('clicked')
	aboutPg()
})




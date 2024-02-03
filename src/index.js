import { homePg } from './extra modules/home';
import { menuPg } from './extra modules/menu';
import { aboutPg } from './extra modules/about';

import './index.css';

const homePage = document.querySelector('#homeBtn')
const menuPage = document.querySelector('#menuBtn')
const aboutPage = document.querySelector('#aboutBtn')


homePg()


homePage.addEventListener('click', () =>{
console.log('clicked')
	homePg()
})

menuPage.addEventListener('click', () =>{
	console.log('clicked')

	menuPg()
})

aboutPage.addEventListener('click', ()=>{
	console.log('clicked')


	aboutPg()
})




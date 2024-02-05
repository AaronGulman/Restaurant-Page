export function aboutPg(){
	const content = document.querySelector("#content")
	content.innerHTML = '';
	const menuTitle = document.createElement('h1');
	content.appendChild(menuTitle);
	menuTitle.textContent = "Contact us";
	const articleOne = document.createElement('p')
	content.appendChild(articleOne);
	articleOne.textContent = "At Urban Bites, we're more than just a restaurant – we're a culinary experience. Nestled in the heart of the city, our cozy yet vibrant space welcomes guests to indulge in a fusion of flavors from around the world." 
}
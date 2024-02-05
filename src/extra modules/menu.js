export function menuPg(){
	const content = document.querySelector("#content");
	content.innerHTML = ""
	const menuTitle = document.createElement('h1');
	content.appendChild(menuTitle);
	menuTitle.textContent = "Menu";
	const articleOne = document.createElement('p');
	content.appendChild(articleOne);
	articleOne.textContent = "Our menu is a culinary masterpiece, carefully crafted to tantalize your taste buds and satisfy your cravings. From the moment you take your first bite of our crispy calamari, you'll be transported to a realm of unparalleled flavor and delight." 
}
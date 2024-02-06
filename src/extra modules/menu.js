export function menuPg(){
	const content = document.querySelector("#content");
	content.innerHTML = ""
	const menuTitle = document.createElement('h1');
	content.appendChild(menuTitle);
	menuTitle.textContent = "Menu";
	const articleOne = document.createElement('p');
	content.appendChild(articleOne);
	articleOne.textContent = "Our menu is a culinary masterpiece, carefully crafted to tantalize your taste buds and satisfy your cravings. From the moment you take your first bite of our crispy calamari, you'll be transported to a realm of unparalleled flavor and delight." 


	//images
	
	let img1 = document.createElement('img')
	img1.setAttribute('class','size')
	img1.src = "/src/assets/food/burger.png";
	content.appendChild(img1);

	let img2 = document.createElement('img')
	img2.setAttribute('class','size')
	img2.src = "/src/assets/food/hotdog.png"
	content.appendChild(img2);

	let img3 = document.createElement('img')
	img3.setAttribute('class','size')
	img3.src = "/src/assets/food/French_Fries.png"
	content.appendChild(img3);

	let img4 = document.createElement('img')
	img4.setAttribute('class','size')
	img4.src = "/src/assets/food/Nuggets.png"
	content.appendChild(img4);

	let img5 = document.createElement('img')
	img5.setAttribute('class','size')
	img5.src = "/src/assets/food/pizza.png"
	content.appendChild(img5);

	let img6 = document.createElement('img')
	img6.setAttribute('class','size')
	img6.src = "/src/assets/food/taco.png"
	content.appendChild(img6);

	
}
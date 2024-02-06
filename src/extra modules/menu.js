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

	//img1
	
	let imgBox1 = document.createElement('div')
	imgBox1.setAttribute('class','menuBox')

	let img1 = document.createElement('img')

	img1.setAttribute('class','size')
	img1.src = "/src/assets/food/burger.png";

	let img1Text = document.createElement('p')
	img1Text.textContent = "Hello";

	let img1Header = document.createElement('h1')
	img1Header.textContent = "Max Burger";


	content.appendChild(imgBox1);
	imgBox1.appendChild(img1);
	imgBox1.appendChild(img1Header);
	imgBox1.appendChild(img1Text);





	//img2
	let img2 = document.createElement('img')
	img2.setAttribute('class','size')
	img2.src = "/src/assets/food/hotdog.png"
	content.appendChild(img2);

	
	//img3

	let img3 = document.createElement('img')
	img3.setAttribute('class','size')
	img3.src = "/src/assets/food/French_Fries.png"
	content.appendChild(img3);

	//img4

	let img4 = document.createElement('img')
	img4.setAttribute('class','size')
	img4.src = "/src/assets/food/Nuggets.png"
	content.appendChild(img4);

	//img5

	let img5 = document.createElement('img')
	img5.setAttribute('class','size')
	img5.src = "/src/assets/food/pizza.png"
	content.appendChild(img5);

	//img6


	let img6 = document.createElement('img')
	img6.setAttribute('class','size')
	img6.src = "/src/assets/food/taco.png"
	content.appendChild(img6);



	
}
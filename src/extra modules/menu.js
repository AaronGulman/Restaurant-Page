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

	let textBox = document.createElement('div')
	textBox.setAttribute('class','textBox')

	let nutrValue = document.createElement('div')
	nutrValue.setAttribute('class','nutrValue')
	

	let img1 = document.createElement('img')

	img1.setAttribute('class','size')
	img1.src = "/src/assets/food/burger.png";

	let img1Text = document.createElement('p')
	img1Text.textContent = "Calories: 895 , Carbs: 52, Fat: 60g , Protein: 38g";

	let img1Header = document.createElement('h1')
	img1Header.textContent = "Max Burger";

	imgBox1.addEventListener('mouseover', function(){
		nutrValue.classList.add('nutriVisibile')
	})
	imgBox1.addEventListener('mouseleave', function(){
		nutrValue.classList.remove('nutriVisibile')
	})
	
	content.appendChild(imgBox1);
	imgBox1.appendChild(img1);
	imgBox1.appendChild(nutrValue)
	imgBox1.appendChild(textBox)
	textBox.appendChild(img1Header);
	nutrValue.appendChild(img1Text);
	



	//img2
	let imgBox2 = document.createElement('div')
	imgBox2.setAttribute('class','menuBox')
	let img2 = document.createElement('img')
	img2.setAttribute('class','size')
	img2.src = "/src/assets/food/hotdog.png"
	content.appendChild(img2);

	let img2Text = document.createElement('p')
	img2Text.textContent = "Hello";

	let img2Header = document.createElement('h1')
	img2Header.textContent = "Hotdog";


	content.appendChild(imgBox2);
	imgBox2.appendChild(img2);
	imgBox2.appendChild(img2Header);
	imgBox2.appendChild(img2Text);

	
	//img3

	let imgBox3 = document.createElement('div')
	imgBox3.setAttribute('class','menuBox')
	let img3 = document.createElement('img')
	img3.setAttribute('class','size')
	img3.src = "/src/assets/food/French_Fries.png"
	content.appendChild(img3);

	let img3Text = document.createElement('p')
	img3Text.textContent = "Hello";
	let img3Header = document.createElement('h1')
	img3Header.textContent = "French Fries";


	content.appendChild(imgBox3);
	imgBox3.appendChild(img3);
	imgBox3.appendChild(img3Header);
	imgBox3.appendChild(img3Text);

	//img4

	let imgBox4 = document.createElement('div')
	imgBox4.setAttribute('class','menuBox')
	let img4 = document.createElement('img')
	img4.setAttribute('class','size')
	img4.src = "/src/assets/food/Nuggets.png"
	content.appendChild(img4);

	let img4Text = document.createElement('p')
	img4Text.textContent = "Hello";
	let img4Header = document.createElement('h1')
	img4Header.textContent = "Nuggets";

	content.appendChild(imgBox4);
	imgBox4.appendChild(img4);
	imgBox4.appendChild(img4Header);
	imgBox4.appendChild(img4Text);

	//img5

	let imgBox5 = document.createElement('div')
	imgBox5.setAttribute('class','menuBox')
	let img5 = document.createElement('img')
	img5.setAttribute('class','size')
	img5.src = "/src/assets/food/pizza.png"
	content.appendChild(img5);

	let img5Text = document.createElement('p')
	img5Text.textContent = "Hello";
	let img5Header = document.createElement('h1')
	img5Header.textContent = "Pizza";

	content.appendChild(imgBox5);
	imgBox5.appendChild(img5);
	imgBox5.appendChild(img5Header);
	imgBox5.appendChild(img5Text);

	//img6


	let imgBox6 = document.createElement('div')
	imgBox6.setAttribute('class','menuBox')
	let img6 = document.createElement('img')
	img6.setAttribute('class','size')
	img6.src = "/src/assets/food/taco.png"
	content.appendChild(img6);

	let img6Text = document.createElement('p')
	img6Text.textContent = "Hello";
	let img6Header = document.createElement('h1')
	img6Header.textContent = "Taco";

	content.appendChild(imgBox6);
	imgBox6.appendChild(img6);
	imgBox6.appendChild(img6Header);
	imgBox6.appendChild(img6Text);

	

	
}
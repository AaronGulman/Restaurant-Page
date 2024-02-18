export function menuPg(){
	const content = document.querySelector("#content");
	content.innerHTML = ""
	const menuTitle = document.createElement('h1');
	content.appendChild(menuTitle);
	menuTitle.textContent = "Menu";
	const articleOne = document.createElement('p');
	content.appendChild(articleOne);
	articleOne.textContent = "Our menu is a culinary masterpiece, carefully crafted to tantalize your taste buds and satisfy your cravings. From the moment you take your first bite of our crispy calamari, you'll be transported to a realm of unparalleled flavor and delight." 

	function menuItem(imgBox,textBox,srcText,nutrText,itemName,nutrValue,img,imgText,price,priceTxt,imgHeader){
		imgBox = document.createElement('div')
		imgBox.setAttribute('class','menuBox')
		textBox = document.createElement('div')
		textBox.setAttribute('class','textBox')
		nutrValue = document.createElement('div')
		nutrValue.setAttribute('class','nutrValue')
		img = document.createElement('img')
		img.setAttribute('class','size')
		img.src = srcText;
		imgText = document.createElement('p')
		imgText.textContent = nutrText;
		price = document.createElement('p')
		price.textContent = priceTxt;
		price.setAttribute('class','priceTag')
		imgHeader = document.createElement('h1')
		imgHeader.textContent = itemName;
		
		imgBox.addEventListener('mouseover', function(){
			nutrValue.classList.add('nutriVisibile')
		})
		imgBox.addEventListener('mouseleave', function(){
			nutrValue.classList.remove('nutriVisibile')
		})
	
		content.appendChild(imgBox);
		imgBox.appendChild(img);
		imgBox.appendChild(nutrValue)
		imgBox.appendChild(textBox)
		imgBox.appendChild(price)
		textBox.appendChild(imgHeader);
		nutrValue.appendChild(imgText);
	}
		//burger
		let srcText1 = "./src/assets/food/burger.png"
		let nutrText1 = "Calories: 895 , Carbs: 52g, Fat: 60g , Protein: 38g"
		let itemName1 = "Max burger"
		let priceTxt1 = '$10'
		let imgBox1,textBox1,nutrValue1,img1,imgText1,price1,imgHeader1
		menuItem(imgBox1,textBox1,srcText1,nutrText1,itemName1,nutrValue1,img1,imgText1,price1,priceTxt1,imgHeader1)
		
		//French Fries

		let srcText2 = "./src/assets/food/Hotdog.png"
		let nutrText2 = "Calories: 186 , Carbs: 2g, Fat: 17 g , Protein: 7g"
		let itemName2 = "Hotdog"
		let priceTxt2 = '$5'
		let imgBox2,textBox2,nutrValue2,img2,imgText2,price2,imgHeader2
	
		menuItem(imgBox2,textBox2,srcText2,nutrText2,itemName2,nutrValue2,img2,imgText2,price2,priceTxt2,imgHeader2)
		
		//Hotdog
		let srcText3 = "./src/assets/food/French_Fries.png"
		let nutrText3 = "Calories: 413 , Carbs: 56.1g, Fat: 19.6g , Protein: 5.7g"
		let itemName3 = "French Fries"
		let priceTxt3 = '$11'
		let imgBox3,textBox3,nutrValue3,img3,imgText3,price3,imgHeader3
	
		menuItem(imgBox3,textBox3,srcText3,nutrText3,itemName3,nutrValue3,img3,imgText3,price3,priceTxt3,imgHeader3)

		//Nuggets
		let srcText4 = "./src/assets/food/Nuggets.png"
		let nutrText4 = "Calories: 417 , Carbs: 25g, Fat: 27g , Protein: 19g"
		let itemName4 = "Nuggets"
		let priceTxt4 = '$15'
		let imgBox4,textBox4,nutrValue4,img4,imgText4,price4,imgHeader4
	
		menuItem(imgBox4,textBox4,srcText4,nutrText4,itemName4,nutrValue4,img4,imgText4,price4,priceTxt4,imgHeader4)

		//Mexicana
		let srcText5 = "./src/assets/food/pizza.png"
		let nutrText5 = "Calories: 1839 , Carbs: 111g, Fat: 105g , Protein: 111g"
		let itemName5 = "Mexicana"
		let priceTxt5 = '$40'
		let imgBox5,textBox5,nutrValue5,img5,imgText5,price5,imgHeader5
	
		menuItem(imgBox5,textBox5,srcText5,nutrText5,itemName5,nutrValue5,img5,imgText5,price5,priceTxt5,imgHeader5)

		//Taco
		let srcText6 = "./src/assets/food/taco.png"
		let nutrText6 = "Calories: 210 , Carbs: 21g, Fat: 9.9g , Protein: 9.4g"
		let itemName6 = "Taco"
		let priceTxt6 = '$5'
		let imgBox6,textBox6,nutrValue6,img6,imgText6,price6,imgHeader6
	
		menuItem(imgBox6,textBox6,srcText6,nutrText6,itemName6,nutrValue6,img6,imgText6,price6,priceTxt6,imgHeader6)
		}	

		
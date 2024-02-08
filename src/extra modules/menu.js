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
	
		let srcText1 = "./src/assets/food/burger.png"
		let nutrText1 = "Calories: 895 , Carbs: 52, Fat: 60g , Protein: 38g"
		let itemName1 = "Max burger"
		let priceTxt1 = '$15'
		let imgBox1,textBox1,nutrValue1,img1,imgText1,price1,imgHeader1
	
		menuItem(
			
			imgBox1,textBox1,srcText1,nutrText1,itemName1,nutrValue1,img1,imgText1,price1,priceTxt1,imgHeader1
	
			)

		let srcText2 = "./src/assets/food/Hotdog.png"
		let nutrText2 = "Calories: 895 , Carbs: 52, Fat: 60g , Protein: 38g"
		let itemName2 = "Max burger"
		let priceTxt2 = '$15'
		let imgBox2,textBox2,nutrValue2,img2,imgText2,price2,imgHeader2
	
		menuItem(
			
			imgBox2,textBox2,srcText2,nutrText2,itemName2,nutrValue2,img2,imgText2,price2,priceTxt2,imgHeader2
	
			)
	
	
		}	

		
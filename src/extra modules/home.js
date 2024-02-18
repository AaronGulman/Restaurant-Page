export function homePg(){
	const content = document.querySelector("#content")
	content.innerHTML = ""
		const menuTitle = document.createElement('h1');
		content.appendChild(menuTitle);
		menuTitle.textContent = "Urban Bites";
		const articleOne = document.createElement('p')
		content.appendChild(articleOne);
		articleOne.textContent = "Urban Bites draws its inspiration from the vibrant energy of city life, where diverse cultures, flavors, and experiences converge. The name 'Urban Bites' reflects the dynamic fusion of urban living with culinary delights. It's a place where people can come together to savor the flavors of the city, whether it's a quick bite on the go or a leisurely meal shared with friends. The concept celebrates the hustle and bustle of urban living while offering a culinary journey that tantalizes the taste buds and leaves a lasting impression." 
}
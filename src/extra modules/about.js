export function aboutPg(){
	const content = document.querySelector("#content")
	content.innerHTML = '';
	const menuTitle = document.createElement('h1');
	content.appendChild(menuTitle);
	menuTitle.textContent = "Contact us";
	const articleOne = document.createElement('p')
	content.appendChild(articleOne);
	articleOne.textContent = "At Urban Bites, we're more than just a restaurant – we're a culinary experience. Nestled in the heart of the city, our cozy yet vibrant space welcomes guests to indulge in a fusion of flavors from around the world."
	const iframe = document.createElement('iframe');
	iframe.setAttribute('id','map')
	iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6159.572460581201!2d-79.38687309608002!3d43.65126715809759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sco!4v1707443919432!5m2!1sen!2sco'
	content.appendChild(iframe)

}
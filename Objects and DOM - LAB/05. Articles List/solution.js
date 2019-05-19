function createArticle() {
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");

	if (title.value && content.value) {
		let h3 = document.createElement("h3");
		h3.textContent = title.value;

		let p = document.createElement("p");
		p.textContent = content.value;

		let article = document.createElement("article");
		article.appendChild(h3);
		article.appendChild(p);

		document.getElementById("articles").appendChild(article);
		
		title.value = "";
		content.value = ""

	}
}
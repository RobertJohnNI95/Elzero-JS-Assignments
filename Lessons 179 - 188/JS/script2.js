fetch("articles.json")
    .then((result) => result.json())
    .then((articles) => {
        articles.length = 5;
        for (let i in articles) {
            let myDiv = document.createElement("div");
            myDiv.innerHTML = `<h3>${articles[i].title}</h3>`;
            myDiv.innerHTML += `<p>${articles[i].description}</p>`;
            document.body.appendChild(myDiv);
        }
    })
    .catch((error) => {
        let errorDiv = document.createElement("div");
        errorDiv.innerHTML = `<h3>Sorry :(</h3>`;
        errorDiv.innerHTML += `<p>No Valid Data Found</p>`;
        document.body.appendChild(errorDiv);
    });
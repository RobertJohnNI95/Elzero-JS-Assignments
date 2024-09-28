let articlePromise = new Promise((accept, reject) => {
    let articleRequest = new XMLHttpRequest();
    articleRequest.open("GET", "articles.json");
    articleRequest.send();
    articleRequest.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            accept(JSON.parse(this.responseText));
        } else {
            reject(Error("No Valid Data Found"));
        }
    }
});

articlePromise.then(
    (articleObj) => {
        articleObj.length = 5;
        for (let i in articleObj) {
            let myDiv = document.createElement("div");
            myDiv.innerHTML = `<h3>${articleObj[i].title}</h3>`;
            myDiv.innerHTML += `<p>${articleObj[i].description}</p>`;
            document.body.appendChild(myDiv);
        }
    }
).catch(
    (errorMsg) => {
        console.log(errorMsg);
        let errorDiv = document.createElement("div");
        errorDiv.innerHTML = `<h3>Sorry :(</h3>`;
        errorDiv.innerHTML += `<p>No Valid Data Found</p>`;
        document.body.appendChild(errorDiv);
    }
)

/*
articlePromise.then((acceptValue) => {
    let articleRequest = new XMLHttpRequest();
    articleRequest.open("GET", "articles.json");
    articleRequest.send();
    articleRequest.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            let articleObj = JSON.parse(this.responseText);
            articleObj.length = 5;
            for (let i in articleObj) {
                let myDiv = document.createElement("div");
                myDiv.innerHTML = `<h3>${articleObj[i].title}</h3>`;
                myDiv.innerHTML += `<p>${articleObj[i].description}</p>`;
                document.body.appendChild(myDiv);
            }
        }
    }
});
*/
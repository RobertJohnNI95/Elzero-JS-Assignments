let req = new XMLHttpRequest();
req.open('GET', 'articles.json');
req.send();
req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.responseText);
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
        document.body.appendChild(document.createElement("div")).id = "data";
        let mainDiv = document.getElementById("data");
        for (let i in mainData) {
            let myDiv = document.createElement("div");
            
            let titleElement = document.createElement("h2");
            titleElement.innerHTML = mainData[i].title;
            myDiv.appendChild(titleElement);
            
            let bodyElement = document.createElement("p");
            bodyElement.innerHTML = mainData[i].body;
            myDiv.appendChild(bodyElement);
            
            let authorElement = document.createElement("p");
            authorElement.innerHTML = "Author: " + mainData[i].author;
            myDiv.appendChild(authorElement);
            
            let categoryElement = document.createElement("p");
            categoryElement.innerHTML = "Category: " + mainData[i].category;
            myDiv.appendChild(categoryElement);
            
            if (i != 0) mainDiv.appendChild(document.createElement("hr")); // Optional
            mainDiv.appendChild(myDiv);
        }
    }
}
let req = new XMLHttpRequest();
req.open('GET', 'articles.json');
req.send();
req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
        let mainData = JSON.parse(req.responseText);
        for (let i in mainData) {
            mainData[i].category = "All";
        }
        console.log(mainData);
        let updatedData = JSON.stringify(mainData);
        console.log(updatedData);
    }
}
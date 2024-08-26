function createSelectBox(startYear, endYear) {
    if (startYear > endYear) {
        console.log("Couldn't Create Selectbox because the start year was larger than the end year.");
        return;
    }
    document.write(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option>${i}</option>`);
    }
    document.write(`</select>`);
}

createSelectBox(2000, 2021);
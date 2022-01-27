function displayExport() {
    var id = location.search.substring(5);
    console.log(id);
    readProduct(id);
}
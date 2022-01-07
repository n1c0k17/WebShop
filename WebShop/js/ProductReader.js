var input = "../txt/Products.txt";
var wordList;
var product = {
    productType: "",
    productName: "",
    productSeries: "",
    productPower: "",
    energySupply: "",
    cableLength: "",
    productColor: "",
    price: "",
    volumeLevel: "",
    filter: "",
    filterCapacity: "",
    wlan: "",
    appControl: "",
    imageURL: ""
};

function readProduct() {
    fetch(input)
        .then(response => response.text())
        .then(text => {
            wordList = text.split("1234")
            declareProduct(wordList[1]);
        });
}

function declareProduct(productInfo) {
    var infos = productInfo.split("'");
    product.productType = infos[1];
    product.productName = infos[3];
    product.productSeries = infos[5];
    product.productPower = infos[7];
    product.energySupply = infos[9];
    product.cableLength = infos[11];
    product.productColor = infos[13];
    product.price = infos[15];
    product.volumeLevel = infos[17];
    product.filter = infos[19];
    product.filterCapacity = infos[21];
    product.wlan = infos[23];
    product.appControl = infos[25];
    product.imageURL = infos[27];
}
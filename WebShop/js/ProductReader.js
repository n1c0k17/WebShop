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

function readProduct(articleID, elementID) {
    fetch(input)
        .then(response => response.text())
        .then(text => {
            wordList = text.split(articleID);
            displayValues(elementID, wordList[1]);
        });
}

function declareProduct(productInfo, elementID) {
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
    displayValues(elementID)
}

function displayValues(elementID, productInfo) {
    var infos = productInfo.split("'");
    document.getElementById(elementID).innerHTML = "";
    for (var index = 0; index < infos.length; index++) {
        if (infos[index] == "\r\nimgURL: ") {
            document.getElementById(elementID + "Img").src = infos[index + 1];
            break;
        }
        if (index != 0 && index % 2 != 0) {
            document.getElementById(elementID).innerHTML =
                document.getElementById(elementID).innerHTML +
                infos[index] +
                "<br>";

        } else {
            document.getElementById(elementID).innerHTML =
                document.getElementById(elementID).innerHTML +
                infos[index];
        }
    }

}
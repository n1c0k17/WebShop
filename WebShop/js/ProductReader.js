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

function readChoosenProduct(articleID) {
    fetch(input)
        .then(response => response.text())
        .then(text => {
            wordList = text.split(articleID);
            buyDisplay(wordList[1]);
        });
}

function displayValues(elementID, productInfo) {
    var infos = productInfo.split("'");
    document.getElementById(elementID).innerHTML = "";
    for (var index = 0; index < infos.length; index++) {
        if (infos[index] == "\r\nimgURL: ") {
            document.getElementById(elementID + "Img").src = infos[index + 1];
            break;

        } else if (infos[index] == "\r\nPreis: ") {
            document.getElementById(elementID + "Price").innerHTML = infos[index + 1];
            index++
            continue;

        } else if (index != 0 && index % 2 != 0) {
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

function buyDisplay(product) {
    var infos = product.split("'");
    for (var index = 0; index < infos.length; index++) {
        if (infos[index] == "\r\nPreis: ") {
            document.getElementById("price").innerHTML = infos[index + 1];
        } else if (infos[index] == "\r\nname: ") {
            document.getElementById("article").innerHTML = infos[index + 1];
            break;
        } else if (infos[index] == "\r\nimgURL: ") {
            document.getElementById("choosenArticle").src = infos[index + 1];
        }
    }
}
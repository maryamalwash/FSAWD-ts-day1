var menu = ['burger', 'wrapper', 'toast'];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2];
for (var i = 0; i < menu.length; i++) {
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(menu[i]));
    document.body.appendChild(newdiv);
}
function newItem() {
    var new_item = document.getElementById('new-item').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.body.appendChild(newdiv);
}
function promotion(item, price) {
    return "Don't miss our promotion of " + item + " for just " + price + " Euro";
}
document.getElementById('target').innerHTML = promotion(itemThree, 1);

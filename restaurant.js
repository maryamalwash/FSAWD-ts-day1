var menu = ['pasta', 'salad', 'pizza'];
var itemOne = menu[0], itemTwo = menu[1], itemThree = menu[2];
var price = [3.5, 2.5, 10];
var priceOne = price[0], priceTwo = price[1], priceThree = price[2];
for (var i = 0; i < menu.length; i++) {
  //  document.getElementById("cont").innerHTML += menu[i] + "<br>" + price[i] + "<br>";
}
function newItem() {
    var new_item = document.getElementById('new-item').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.body.appendChild(newdiv);
}

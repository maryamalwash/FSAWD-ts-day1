let menu : Array<string> =['kebab','salad', 'pizza'];
const [itemOne,itemTwo,itemThree]=  menu;



let price : Array<number> = [3.5,2.5,10];
const [priceOne,priceTwo,priceThree]= price;
for(let i=0; i< menu.length; i++){
	document.getElementById("cont").innerHTML += menu[i]+"<br>"+ price[i]+"<br>"  ;
}

function newItem(): void{
    let new_item = (<HTMLInputElement>document.getElementById('new-item')).value;
    var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.body.appendChild(newdiv);

}
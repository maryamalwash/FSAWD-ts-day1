var menu : Array<string>=['burger','wrapper','toast'];
const [itemOne,itemTwo,itemThree] = menu;

for(let i =0 ; i < menu.length ; i++){
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(menu[i]));
   document.body.appendChild(newdiv);
}



function newItem(): void{
   let new_item = (<HTMLInputElement>document.getElementById('new-item')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.body.appendChild(newdiv);
}

function promotion(item: string,price: number): any {
   return "Don't miss our promotion of "+item + " for just "+price+" Euro"; 
}
document.getElementById('target').innerHTML=promotion(itemThree,1);


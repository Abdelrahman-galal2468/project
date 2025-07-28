let price = document.getElementById('price');
let ads = document.getElementById('ads');
let taxes =  document.getElementById('taxes');
let discount =document.getElementById('discount');
let total = document.getElementById('TOTAL');
let title = document.getElementById('title');
let create = document.getElementById('create');
let count = document.getElementById('count');
let category = document.getElementById('category')
let Deletebtn = document.getElementById('Deletebtn')
let mode='create';
 let tmp;
function gettotal(){
   if (price.value != ''){

   
let rel= (Number(price.value) + Number(ads.value) + Number(taxes.value) ) - Number(discount.value);
total.innerHTML=rel;
total.style.background = "green";
total.style.border= 'green'
}
else{
    total.style.background = "rgb(230, 80, 80)";
total.style.border= 'rgb(230, 80, 80)';
total.innerHTML=" "
}
}
 let newproducts;
if(localStorage.product != null){
newproducts = JSON.parse(localStorage.product)
}
else{
     newproducts = [];
}

 create.onclick=function(){
let newproduct={
    title:title.value,
    price:price.value,
    ads:ads.value,
    taxes:taxes.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
}
if (mode ==='create'){
if(newproduct.count > 1){
    for(let i =0; newproduct.count > i;i++){
newproducts.push(newproduct)
    }

}else{
    newproducts.push(newproduct)
   
}
}else{
newproducts[tmp] = newproduct;
count.style.display='block'
mode='create'
create.textContent="Create"
}
localStorage.setItem('product' , JSON.stringify(newproducts))
 
Deletebtn.style.display='block'
cleardata()
showpoduct();


 }

onload = function(){
    if(newproducts != 0 ){
        Deletebtn.style.display = 'block'
    }
    else{
        Deletebtn.style.display = 'none'
    }
    
 }
 function cleardata(){
    title.value = '';
price.value = '';
taxes.value = '';
ads.value=    '';
discount.value='';
total.innerHTML='';
category.value='';
 }

function showpoduct(){
let table= '';
for(let i =0; i< newproducts.length ; i++ )
    table +=
`

<tr>
    <td>${i}</td>

<td>${newproducts[i].title}</td>
<td>${newproducts[i].price}</td>
<td>${newproducts[i].taxes}</td>
<td>${newproducts[i].ads}</td>
<td>${newproducts[i].discount}</td>
<td>${newproducts[i].total}</td>
<td>${newproducts[i].category}</td>
<td><button onclick="updateitem(${i})">UPDATE</button></td>
<td><button onclick = "deleteitem(${i})" >DELETE</button></td>
</tr>

`
document.getElementById('tbody').innerHTML=table;

}
Deletebtn.onclick = function(){
localStorage.removeItem('product');
this.style.display='none'
}

 function deleteitem(i){
  newproducts.pop(newproducts[i]);
  localStorage.product = JSON.stringify(newproducts);
  showpoduct(); 
}
function updateitem(i){
title.value =    newproducts[i].title;
price.value =   newproducts[i].price;
taxes.value =     newproducts[i].taxes;
ads.value=      newproducts[i].ads;
discount.value = newproducts[i].discount;
total.innerHTML = newproducts[i].total;
category.value = newproducts[i].category;
count.style.display='none';
create.textContent='Update';
mode= 'update';
tmp=i;


 
}





showpoduct();


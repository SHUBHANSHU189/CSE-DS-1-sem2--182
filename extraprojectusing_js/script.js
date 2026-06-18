const foods = [
{
id:1,
name:"Cheese Burger",
category:"burger",
price:199,
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},
{
id:2,
name:"Pepperoni Pizza",
category:"pizza",
price:399,
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591"
},
{
id:3,
name:"Chocolate Cake",
category:"dessert",
price:149,
image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587"
},
{
id:4,
name:"Cold Coffee",
category:"drink",
price:99,
image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
},
{
id:5,
name:"Veg Pizza",
category:"pizza",
price:299,
image:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
},
{
id:6,
name:"Chicken Burger",
category:"burger",
price:249,
image:"https://images.unsplash.com/photo-1550547660-d9450f859349"
},
{
id:7,
name:"French Fries",
category:"burger",
price:129,
image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
}
];

const menu = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

let cart = [];

function displayFoods(data){

menu.innerHTML="";

data.forEach(food=>{

menu.innerHTML += `
<div class="food-card">

<img src="${food.image}" alt="food">

<div class="food-info">

<h3>${food.name}</h3>

<p class="price">₹${food.price}</p>

<button class="add-btn"
onclick="addToCart(${food.id})">
Add To Cart
</button>

</div>

</div>
`;
});
}

function addToCart(id){

const food = foods.find(item=>item.id===id);

cart.push(food);

updateCart();
}

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `
<div class="cart-item">

<span>${item.name}</span>

<button onclick="removeItem(${index})">
❌
</button>

</div>
`;
});

cartCount.textContent = cart.length;
totalDisplay.textContent = total;
}

function removeItem(index){

cart.splice(index,1);

updateCart();
}

document.querySelectorAll(".category")
.forEach(button=>{

button.addEventListener("click",()=>{

document
.querySelectorAll(".category")
.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const category =
button.dataset.category;

if(category==="all"){
displayFoods(foods);
}
else{
displayFoods(
foods.filter(
food=>food.category===category
)
);
}

});
});

document.getElementById("search")
.addEventListener("keyup",(e)=>{

const value =
e.target.value.toLowerCase();

const filtered =
foods.filter(food=>
food.name.toLowerCase()
.includes(value)
);

displayFoods(filtered);
});

document.querySelector(".checkout-btn")
.addEventListener("click",()=>{

if(cart.length===0){
alert("Cart is Empty!");
return;
}

alert("Order Placed Successfully 🎉");
cart=[];
updateCart();
});

displayFoods(foods);
let openshopping=document.querySelector('.shopping')
let closeShopping=document.querySelector('.closeShopping')
let list=document.querySelector('.list')
let listCard=document.querySelector('.listCard')
let body=document.querySelector('body')
let total=document.querySelector('.total')
let quantity=document.querySelector('.quantity')

openshopping.addEventListener('click',()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active')
})

let products=[
    {
        id:1,
        name:'Pizza',
        image:'../image/food-1.jpg',
        price:500
    },
    {
        id:2,
        name:'Chicken Balls',
        image:'../image/food-2.jpg',
        price:450
    },
    {
        id:3,
        name:'Burger',
        image:'../image/food-3.jpg',
        price:150
    },
    {
        id:4,
        name:'French fries',
        image:'../image/food-4.jpg',
        price:200
    },
    {
        id:5,
        name:'Soup',
        image:'../image/food-5.jpg',
        price:350
    },
    {
        id:6,
        name:'Oven Pizza',
        image:'../image/food-6.jpg',
        price:1500
    }

]
let listCards=[]

function initApp(){
    products.forEach((value,key)=>{
        let newDiv=document.createElement('div')
        newDiv.classList.add('item')

        newDiv.innerHTML=`
        <img src='image/${value.image}'/>
        <div class='title'>${value.name}</div>
        <div class='price'>&#8377; ${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>
        
        `
        list.appendChild(newDiv)
    })

}
initApp()

function addToCart(key){
    console.log("working")
    if(listCards[key]==null){
        listCards[key]={...products[key],quantity:1}
    }
    else{
        listCards[key].quantity+=1
    }
    reloadCard()
}
function reloadCard(){
    listCard.innerHTML=""
    let count=0;
    let totalPrice=0;

    
    listCards.forEach((value,key)=>{
        if(value!=null){
        totalPrice+=value.price*value.quantity
        count+=value.quantity;
        let newDiv=document.createElement('li')
        newDiv.innerHTML=`
        <img src='../image/${value.image}'/>
        <div>${value.name}</div>
        <div>${(value.price*value.quantity).toLocaleString()}</div>
        <div>
        <button onclick="changequantity(${key},${value.quantity-1})">-</button>
        <div class='count'>${value.quantity}</div>
        
        <button onclick="changequantity(${key},${value.quantity+1})">+</button>
       
        </div>
        `
        listCard.appendChild(newDiv)
    }

    })
    total.innerText=totalPrice.toLocaleString()
    quantity.innerText=count

}
function changequantity(key,quantity){
    if(quantity<=0){
        delete listCards[key]
    }else{
        listCards[key].quantity=quantity
    }
    reloadCard()
}

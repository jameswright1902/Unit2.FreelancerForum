// DO NOT USE .write()


const root = document.getElementById("root");
const data = [
    {
        name:"LEGO SET 2",
        price:199.99,
        coolness:true
    },
    {
        name:"SONIC LEGO Set",
        price:19.99,
        coolness:false
    }
]

data.forEach((itm)=>{
    const ele = document.createElement("div");
    ele.classList.add("product");
    const title = document.createElement("h1");
    title.innerHTML=itm.name
    const price = document.createElement("h2");
    price.innerHTML=itm.price
    const fancyBox = document.createElement("div")

    if(itm.coolness){
        fancyBox.style.backgroundColor="rebeccapurple"
        fancyBox.style.border="5px black solid"
    }


    ele.appendChild(title);
    ele.appendChild(price);
    ele.appendChild(fancyBox);
    root.appendChild(ele);
})
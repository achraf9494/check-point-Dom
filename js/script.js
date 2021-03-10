
var btnsAddTag = document.getElementsByClassName("add")
var btns = document.getElementsByClassName("remove")
var checktags = document.getElementsByClassName("check")
var heart = document.getElementsByClassName("fas fa-heart")
var byby = document.getElementsByClassName("delete")



for(var i=0; i < btnsAddTag.length; i++){
btnsAddTag[i].addEventListener("click", add)
checktags[i].addEventListener("click", total)
heart[i].addEventListener("click", color)
byby[i].addEventListener("click", out)
btns[i].addEventListener("click", remove)

} 
function out (event) {
    
    var byby = event.target
    var xxx= byby.parentElement.parentElement
    xxx.remove()
    // var totalTag =document.querySelector("#total")
    // var total = Number(document.querySelector("#total").innerHTML)
    //     // var Price = Number(checktag.parentElement.parentElement.querySelector(".price").innerHTML)
    //     // total= total - Price
    //     total= 0 

    //     totalTag.innerHTML=total 
    total(event)
}


function color(event){
    var heart = event.target
    // heart.style.color = 'red';
    if(heart.style.color != 'red'){
    heart.style.color = 'red';}
    else{
        heart.style.color = 'black';
    }
}

function add(event){
    var btnAddTag = event.target
    var tdElt = btnAddTag.parentElement
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number(inputTag.value) 
    quantity++
    inputTag.value = quantity
    var unitPrice = Number(btnAddTag.parentElement.parentElement.querySelector(".Punity").innerHTML)
    var PriceTag = btnAddTag.parentElement.parentElement.querySelector(".price")
    var Price= Number(PriceTag.innerHTML)
    Price = quantity*unitPrice
    PriceTag.innerHTML=Price
}
// for(var i=0; i < btns.length; i++){
    
//     btns[i].addEventListener("click", remove)

//     }
     
    function remove(event){
        
        var btn = event.target
        console.log(btn)
        var tdE = btn.parentElement
        var input = tdE.querySelector(".quantity")
        var quantity = Number(input.value)
        if(quantity>0){
        quantity--}
        input.value = quantity
        var unitPrice = Number(btn.parentElement.parentElement.querySelector(".Punity").innerHTML)
        var PriceTag = btn.parentElement.parentElement.querySelector(".price")
        var Price= Number(PriceTag.innerHTML)
        Price =  (quantity*unitPrice)
        PriceTag.innerHTML=Price
        
    }

    function total(event){
        var checktag = event.target
        var totalTag =document.querySelector("#total")

        var total = Number(document.querySelector("#total").innerHTML)
        var Price = Number(checktag.parentElement.parentElement.querySelector(".price").innerHTML)
        var btnAddTag = checktag.parentElement.parentElement.querySelector(".add")
    
        var btn = checktag.parentElement.parentElement.querySelector(".remove")

        if(checktag.checked === true){
            
            total= total + Price 
            btnAddTag.setAttribute("disabled",true)
            btn.setAttribute("disabled",true)


        }
        else{
            total= total - Price
            btnAddTag.removeAttribute("disabled")
            btn.removeAttribute("disabled")
            
            // init quantity
            var quantityxx = btn.parentElement.querySelector(".quantity")
            var quantity = Number(btn.parentElement.querySelector(".quantity").value)
            quantity=0
            quantityxx.value=quantity

            // init Price
            var PriceTag = btn.parentElement.parentElement.querySelector(".price")
            var Price= Number(PriceTag.innerHTML)
            Price =  0
            PriceTag.innerHTML=Price

        }

        totalTag.innerHTML=total

    }
        

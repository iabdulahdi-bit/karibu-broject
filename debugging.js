function login(){
    const name = document.getElementById("name").value ;
    const item = document.getElementById("item").value ;
    const price = parseFloat( document.getElementById("price").value) ;
    const quantity = parseFloat(document.getElementById("item").value );
    let result = document.getElementById("result")
    

    // debugging
 
    if(   !name ||  !item || isNaN(price) || isNaN(quantity)){
        warning("please fill all the feilds")
    return
}
if(price < 10000){

    warning("price can not be less than 10,000")
    return
}
let totalCost = price * quantity;

result.innerHTML = `The total Amount is = ${totalCost}`;

result.className = "Success"

}
function warning() {

    let result = document.getElementById("result")

    result.innerHTML = "Error"   
     result.className = "error"




    
}
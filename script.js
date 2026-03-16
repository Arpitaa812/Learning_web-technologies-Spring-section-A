let unitPrice = 1000;
 
let quantityInput = document.getElementById("quantity");
let totalInput = document.getElementById("total");
 
quantityInput.addEventListener("input", function(){
 
    let quantity = quantityInput.value;
 
    if(quantity < 0){
        alert("Quantity cannot be negative");
        quantity = 0;
        quantityInput.value = 0;
    }
 
    let total = unitPrice * quantity;
 
    totalInput.value = total;
 
    if(total > 1000){
        alert("Congratulations! You are eligible for a gift coupon.");
    }
 
}
);
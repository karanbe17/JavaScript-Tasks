function applyCoupon(amount, couponCode){
    if(couponCode='SAVE10'){
        let discount = amount*0.1;
        return amount - discount;
    } else if(couponCode='SAVE20'){
        let discount = amount*0.2;
        return amount - discount;
    } else{
        return amount;
    }
}

console.log(applyCoupon(1000,"SAVE10"));
console.log(applyCoupon(2000,"SAVE20"));
console.log(applyCoupon(500,"NONE"));
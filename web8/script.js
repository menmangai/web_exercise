function calculateTotal() {

    let adults = document.getElementById("a").value;
    let children = document.getElementById("c").value;
    if(adults==parseInt(adults)&&children==parseInt(children)){
        let total = parseInt(adults) * 10 + parseInt(children) * 5;
        document.getElementById("t").value = "Rs. " + total+" /-";
    }
    else{
        alert("The inputs should be a whole number!\nIt cannot be in decimals!")
    }
    
}
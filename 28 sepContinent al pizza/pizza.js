function getvalue(){
    Amt=document.getElementById('price').innerHTML
    Final_price=Amt*0.5
    
    
    document.getElementById('final_amt').innerHTML=Final_price
}

function getvalue1(){
    alert("Yahhh!! you won 3 Free Deliveries");
    document.getElementById('final_amt').innerHTML=document.getElementById('price').innerHTML
}
var id = prompt("hello");


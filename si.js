function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate+"%";
}function Compute(){
    // simple interest 
    let a=document.getElementById("amount").value;
    let b=document.getElementById("rate").value;
    let c=document.getElementById("time").value;

    let si=a*b*c/100
    var year = new Date().getFullYear()+parseInt(c);

    
    let s=document.getElementById("a").innerHTML="If you deposit "+a 
    let d=document.getElementById("b").innerHTML="at an interest rate of"+b
    let r=document.getElementById("si").innerHTML="You will receive an amount of "+si
    let final=document.getElementById("c").innerHTML="in the year "+year
    if(parseInt(a)<1){
	    alert("Please Enter a positive number")}
//    alert funtion
    if(a==""){
        alert("please enter Amount");
        
    }
    
    if(b==""){
        alert("please enter Rate");

    }
   
    if(c==""){
        alert("please enter Time");
    } 

   
    
}

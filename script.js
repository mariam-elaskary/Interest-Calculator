function compute()
{
    // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    if (principal == '' || principal == 0 || principal < 0){
        alert('Enter a Positive Number');
        principal.focus();
        return;
    }

    document.getElementById("result").innerHTML = "If you deposit \<span class='results'\>"+principal+"\</span\>,\<br\>at an interest rate of \<span class='results'\>"+rate+"%\</span\>\<br\>You will receive an amount of \<span class='results'\>"+interest+"\</span\>,\<br\>in the year \<span class='results'\>"+year+"\</span\>\<br\>"
}


function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
 
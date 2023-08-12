// In is the temprature page design and all buttons function are written
alert("Hello...\nWellcome to you...\nALert:- First you have to choose form which temperature,to which temperature you wish to convert\nThen enter the number.\nThankYou...");
let a1=document.getElementById("b2");
a1.style.backgroundColor="";
a1.style.borderTop="";
a1.style.borderLeft="";
a1.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a1.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a1.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h2").style.color="black";

let a2=document.getElementById("b3");
a2.style.backgroundColor="";
a2.style.borderTop="";
a2.style.borderLeft="";
a2.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a2.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a2.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h3").style.color="black";

let a5=document.getElementById("b5");
a5.style.backgroundColor="";
a5.style.borderTop="";
a5.style.borderLeft="";
a5.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a5.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a5.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h5").style.color="black";

let a6=document.getElementById("b6");
a6.style.backgroundColor="";
a6.style.borderTop="";
a6.style.borderLeft="";
a6.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a6.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a6.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h6").style.color="black";

let a7=document.getElementById("b7");
a7.style.backgroundColor="";
a7.style.borderTop="";
a7.style.borderLeft="";
a7.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a7.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a7.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h7").style.color="black";

let a9=document.getElementById("b9");
a9.style.backgroundColor="";
a9.style.borderTop="";
a9.style.borderLeft="";
a9.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a9.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a9.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h9").style.color="black";

let a10=document.getElementById("b10");
a10.style.backgroundColor="";
a10.style.borderTop="";
a10.style.borderLeft="";
a10.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a10.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a10.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h10").style.color="black";

let a11=document.getElementById("b11");
a11.style.backgroundColor="";
a11.style.borderTop="";
a11.style.borderLeft="";
a11.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a11.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a11.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h11").style.color="black";

let a13=document.getElementById("b13");
a13.style.backgroundColor="";
a13.style.borderTop="";
a13.style.borderLeft="";
a13.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a13.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a13.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h13").style.color="black";

let a14=document.getElementById("b14");
a14.style.backgroundColor="";
a14.style.borderTop="";
a14.style.borderLeft="";
a14.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a14.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a14.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h14").style.color="black";

let a15=document.getElementById("b15");
a15.style.backgroundColor="";
a15.style.borderTop="";
a15.style.borderLeft="";
a15.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a15.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a15.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h15").style.color="black";

let a17=document.getElementById("b17");
a17.style.backgroundColor="";
a17.style.borderTop="";
a17.style.borderLeft="";
a17.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a17.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a17.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h17").style.color="black";

let a18=document.getElementById("b18");
a18.style.backgroundColor="";
a18.style.borderTop="";
a18.style.borderLeft="";
a18.style.borderBottom="3px solid rgba(202, 237, 206, 0)";
a18.style.borderRight="3px solid rgba(202, 237, 206, 0)";
a18.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h18").style.color="black";

let ip_val = document.getElementById("input1");
let ip_auto_val= document.getElementById("input2");
let num,f_val,s_val;


function num_b(v)
{

    ip_val.value+=v;
    num=ip_val.value;
    if(f_val == 1 && s_val == 2) //km -> m
    {
        ip_auto_val.value=(num-32)*(5/9);
    }

    else if(f_val == 2 && s_val == 1) // m -> km
    {
        ip_auto_val.value=(num*(9/5))+32;
    }
    else if(f_val == s_val) 
    {
        ip_auto_val.value=num;
    }
}
function ac_b()
{
    ip_val.value=" ";
    ip_auto_val.value=" ";
}

function c_b()
{
    ip_val.value=ip_val.value.substr(0,ip_val.value.length-1);
    num=ip_val.value;
    if(f_val == 1 && s_val == 2) 
    {
        ip_auto_val.value=(num-32)*(5/9);
    }

    else if(f_val == 2 && s_val == 1)
    {
        ip_auto_val.value=(num*(9/5))+32;
    }
    else if(f_val == s_val) 
    {
        ip_auto_val.value=num;
    }
}
function val1(i)
{
    f_val=i;
}
function val2(i)
{
    s_val=i;
}

function back_bt()
{
    window.location.href='index.html';
}
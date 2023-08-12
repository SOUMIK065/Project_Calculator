// In is the length page design and all buttons function are written
alert("Hello...\nWellcome to you...\nALert:- First you have to choose (from which unit) <-> (to which unit) you wish to convert\nThen after you enter the number.\nThankYou...");
let a1=document.getElementById("b2");
a1.style.backgroundColor="";
a1.style.borderTop="";
a1.style.borderLeft="";
a1.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h2").style.color="black";

let a2=document.getElementById("b3");
a2.style.backgroundColor="";
a2.style.borderTop="";
a2.style.borderLeft="";
a2.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h3").style.color="black";

let a5=document.getElementById("b5");
a5.style.backgroundColor="";
a5.style.borderTop="";
a5.style.borderLeft="";
a5.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h5").style.color="black";

let a6=document.getElementById("b6");
a6.style.backgroundColor="";
a6.style.borderTop="";
a6.style.borderLeft="";
a6.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h6").style.color="black";

let a7=document.getElementById("b7");
a7.style.backgroundColor="";
a7.style.borderTop="";
a7.style.borderLeft="";
a7.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h7").style.color="black";

let a9=document.getElementById("b9");
a9.style.backgroundColor="";
a9.style.borderTop="";
a9.style.borderLeft="";
a9.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h9").style.color="black";

let a10=document.getElementById("b10");
a10.style.backgroundColor="";
a10.style.borderTop="";
a10.style.borderLeft="";
a10.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h10").style.color="black";

let a11=document.getElementById("b11");
a11.style.backgroundColor="";
a11.style.borderTop="";
a11.style.borderLeft="";
a11.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h11").style.color="black";

let a13=document.getElementById("b13");
a13.style.backgroundColor="";
a13.style.borderTop="";
a13.style.borderLeft="";
a13.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h13").style.color="black";

let a14=document.getElementById("b14");
a14.style.backgroundColor="";
a14.style.borderTop="";
a14.style.borderLeft="";
a14.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h14").style.color="black";

let a15=document.getElementById("b15");
a15.style.backgroundColor="";
a15.style.borderTop="";
a15.style.borderLeft="";
a15.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h15").style.color="black";

let a17=document.getElementById("b17");
a17.style.backgroundColor="";
a17.style.borderTop="";
a17.style.borderLeft="";
a17.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
document.getElementById("h17").style.color="black";

let a18=document.getElementById("b18");
a18.style.backgroundColor="";
a18.style.borderTop="";
a18.style.borderLeft="";
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
        ip_auto_val.value=num*1000;
    }
    else if(f_val == 1 && s_val == 3) //km -> cm
    {
        ip_auto_val.value=num*100000;
    }
    else if(f_val == 1 && s_val == 4) //km -> nm
    {
        ip_auto_val.value=num*1000000000000;
    }
    else if(f_val == 1 && s_val == 5) //km -> mm
    {
        ip_auto_val.value=num*1000000;
    }
    else if(f_val == 1 && s_val == 6) // km -> in
    {
        ip_auto_val.value=num*39370.078740157;
    }
    else if(f_val == 1 && s_val == 7) // km -> ft
    {
        ip_auto_val.value=num*3280.8398950131;
    }
    else if(f_val == 1 && s_val == 8) // km -> mi
    {
        ip_auto_val.value=num*0.62137119223733;
    }

    else if(f_val == 2 && s_val == 1) // m -> km
    {
        ip_auto_val.value=num*0.001;
    }
    else if(f_val == 2 && s_val == 3) // m -> cm 
    {
        ip_auto_val.value=num*100;
    }
    else if(f_val == 2 && s_val == 4) // m -> nm
    {
        ip_auto_val.value=num/0.000000001;
    }
    else if(f_val == 2 && s_val == 5) // m -> mm
    {
        ip_auto_val.value=num*1000;
    }
    else if(f_val == 2 && s_val == 6) // m -> in
    {
        ip_auto_val.value=num*39.370078740157;
    }
    else if(f_val == 2 && s_val == 7) // m -> ft
    {
        ip_auto_val.value=num*3.2808398950131;
    }
    else if(f_val == 2 && s_val == 8) // m -> mi
    {
        ip_auto_val.value=num*0.00062137119223733;
    }


    else if(f_val == 3 && s_val == 1) // cm -> km
    {
        ip_auto_val.value=num*0.00001;
    }
    else if(f_val == 3 && s_val == 2) // cm -> m
    {
        ip_auto_val.value=num*0.01;
    }
    else if(f_val == 3 && s_val == 4) // cm -> nm
    {
        ip_auto_val.value=num/0.0000001;
    }
    else if(f_val == 3 && s_val == 5) // cm -> mm
    {
        ip_auto_val.value=num*10;
    }
    else if(f_val == 3 && s_val == 6) // cm -> in
    {
        ip_auto_val.value=num*0.39370078740157;
    }
    else if(f_val == 3 && s_val == 7) // cm -> ft
    {
        ip_auto_val.value=num*0.032808398950131;
    }
    else if(f_val == 3 && s_val == 8) // cm -> mi
    {
        ip_auto_val.value=num*0.0000062137119223733;
    }


    else if(f_val == 4 && s_val == 1) // nm -> km
    {
        ip_auto_val.value=num/1000000000000;
    }
    else if(f_val == 4 && s_val == 2) // nm -> m
    {
        ip_auto_val.value=num*0.000000001;
    }
    else if(f_val == 4 && s_val == 3) // nm -> cm
    {
        ip_auto_val.value=num*0.0000001;
    }
    else if(f_val == 4 && s_val == 5) // nm ->in
    {
        ip_auto_val.value=num*(3.93700787 * 0.00000001);
    }
    else if(f_val == 4 && s_val == 6) // nm ->ft
    {
        ip_auto_val.value=num * (3.28084 * 0.000000001);
    }
    else if(f_val == 4 && s_val == 7) // nm ->mi
    {
        ip_auto_val.value=num*(6.2137 * 0.000000000001);
    }


    else if(f_val == 5 && s_val == 1) // mm -> km
    {
        ip_auto_val.value=num*0.000001;
    }
    else if(f_val == 5 && s_val == 2) // mm -> m
    {
        ip_auto_val.value=num*0.001;
    }
    else if(f_val == 5 && s_val == 3) // mm -> cm
    {
        ip_auto_val.value=num*0.1;
    }
    else if(f_val == 5 && s_val == 4) // mm -> nm
    {
        ip_auto_val.value=num/0.0000001;
    }
    else if(f_val == 5 && s_val == 6) // mm -> in
    {
        ip_auto_val.value=num*0.039370078740157;
    }
    else if(f_val == 5 && s_val == 7) // mm -> ft
    {
        ip_auto_val.value=num*0.0032808398950131;
    }
    else if(f_val == 5 && s_val == 8) // mm -> mi
    {
        ip_auto_val.value=num*0.00000062137119223733;
    }


    else if(f_val == 6 && s_val ==1 ) // in --> km
    {
        ip_auto_val.value=num*0.0000254;
    }
    else if(f_val == 6 && s_val == 2) // in --> m
    {
        ip_auto_val.value=num*0.0254;
    }
    else if(f_val == 6 && s_val == 3) // in --> cm
    {
        ip_auto_val.value=num*2.54;
    }
    else if(f_val == 6 && s_val == 4) // in --> nm
    {
        ip_auto_val.value=num/(3.93700787 * 0.00000001);
    }
    else if(f_val == 6 && s_val == 5) // in --> mm
    {
        ip_auto_val.value=num*25.4;
    }
    else if(f_val == 6 && s_val == 7) // in --> ft
    {
        ip_auto_val.value=num*0.083333333333333;
    }
    else if(f_val == 6 && s_val == 8) // in --> mi
    {
        ip_auto_val.value=num*0.000015782828282828;
    }

    else if(f_val == 7 && s_val ==1 ) // ft --> km
    {
        ip_auto_val.value=num*0.0003048;
    }
    else if(f_val == 7 && s_val == 2) // ft --> m
    {
        ip_auto_val.value=num*0.3048;
    }
    else if(f_val == 7 && s_val == 3) // ft --> cm
    {
        ip_auto_val.value=num*30.48;
    }
    else if(f_val == 7 && s_val == 4) // ft --> nm
    {
        ip_auto_val.value=num/(3.28084 * 0.000000001);
    }
    else if(f_val == 7 && s_val == 5) // ft --> mm
    {
        ip_auto_val.value=num*304.8;
    }
    else if(f_val == 7 && s_val == 6) // ft --> in
    {
        ip_auto_val.value=num*12;
    }
    else if(f_val == 7 && s_val == 8) // ft --> mi
    {
        ip_auto_val.value=num*0.00018939393939394;
    }


    else if(f_val == 8 && s_val == 1) // mi --> km
    {
        ip_auto_val.value=num*1.609344;
    }
    else if(f_val == 8 && s_val == 2) // mi --> m
    {
        ip_auto_val.value=num*1609.344;
    }
    else if(f_val == 8 && s_val == 3) // mi --> cm
    {
        ip_auto_val.value=num*160934.4;
    }
    else if(f_val == 8 && s_val == 4) // mi --> nm
    {
        ip_auto_val.value=num/(6.2137 * 0.000000000001);
    }
    else if(f_val == 8 && s_val == 5) // mi --> mm
    {
        ip_auto_val.value=num*1609344;
    }
    else if(f_val == 8 && s_val == 6) // mi --> in
    {
        ip_auto_val.value=num*63360;
    }
    else if(f_val == 8 && s_val == 7) // mi --> ft
    {
        ip_auto_val.value=num*5280;
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
    if(f_val == 1 && s_val == 2) //km -> m
    {
        ip_auto_val.value=num*1000;
    }
    else if(f_val == 1 && s_val == 3) //km -> cm
    {
        ip_auto_val.value=num*100000;
    }
    else if(f_val == 1 && s_val == 4) //km -> nm
    {
        ip_auto_val.value=num*1000000000000;
    }
    else if(f_val == 1 && s_val == 5) //km -> mm
    {
        ip_auto_val.value=num*1000000;
    }
    else if(f_val == 1 && s_val == 6) // km -> in
    {
        ip_auto_val.value=num*39370.078740157;
    }
    else if(f_val == 1 && s_val == 7) // km -> ft
    {
        ip_auto_val.value=num*3280.8398950131;
    }
    else if(f_val == 1 && s_val == 8) // km -> mi
    {
        ip_auto_val.value=num*0.62137119223733;
    }

    else if(f_val == 2 && s_val == 1) // m -> km
    {
        ip_auto_val.value=num*0.001;
    }
    else if(f_val == 2 && s_val == 3) // m -> cm 
    {
        ip_auto_val.value=num*100;
    }
    else if(f_val == 2 && s_val == 4) // m -> nm
    {
        ip_auto_val.value=num/0.000000001;
    }
    else if(f_val == 2 && s_val == 5) // m -> mm
    {
        ip_auto_val.value=num*1000;
    }
    else if(f_val == 2 && s_val == 6) // m -> in
    {
        ip_auto_val.value=num*39.370078740157;
    }
    else if(f_val == 2 && s_val == 7) // m -> ft
    {
        ip_auto_val.value=num*3.2808398950131;
    }
    else if(f_val == 2 && s_val == 8) // m -> mi
    {
        ip_auto_val.value=num*0.00062137119223733;
    }


    else if(f_val == 3 && s_val == 1) // cm -> km
    {
        ip_auto_val.value=num*0.00001;
    }
    else if(f_val == 3 && s_val == 2) // cm -> m
    {
        ip_auto_val.value=num*0.01;
    }
    else if(f_val == 3 && s_val == 4) // cm -> nm
    {
        ip_auto_val.value=num/0.0000001;
    }
    else if(f_val == 3 && s_val == 5) // cm -> mm
    {
        ip_auto_val.value=num*10;
    }
    else if(f_val == 3 && s_val == 6) // cm -> in
    {
        ip_auto_val.value=num*0.39370078740157;
    }
    else if(f_val == 3 && s_val == 7) // cm -> ft
    {
        ip_auto_val.value=num*0.032808398950131;
    }
    else if(f_val == 3 && s_val == 8) // cm -> mi
    {
        ip_auto_val.value=num*0.0000062137119223733;
    }


    else if(f_val == 4 && s_val == 1) // nm -> km
    {
        ip_auto_val.value=num/1000000000000;
    }
    else if(f_val == 4 && s_val == 2) // nm -> m
    {
        ip_auto_val.value=num*0.000000001;
    }
    else if(f_val == 4 && s_val == 3) // nm -> cm
    {
        ip_auto_val.value=num*0.0000001;
    }
    else if(f_val == 4 && s_val == 5) // nm ->in
    {
        ip_auto_val.value=num*(3.93700787 * 0.00000001);
    }
    else if(f_val == 4 && s_val == 6) // nm ->ft
    {
        ip_auto_val.value=num * (3.28084 * 0.000000001);
    }
    else if(f_val == 4 && s_val == 7) // nm ->mi
    {
        ip_auto_val.value=num*(6.2137 * 0.000000000001);
    }


    else if(f_val == 5 && s_val == 1) // mm -> km
    {
        ip_auto_val.value=num*0.000001;
    }
    else if(f_val == 5 && s_val == 2) // mm -> m
    {
        ip_auto_val.value=num*0.001;
    }
    else if(f_val == 5 && s_val == 3) // mm -> cm
    {
        ip_auto_val.value=num*0.1;
    }
    else if(f_val == 5 && s_val == 4) // mm -> nm
    {
        ip_auto_val.value=num/0.0000001;
    }
    else if(f_val == 5 && s_val == 6) // mm -> in
    {
        ip_auto_val.value=num*0.039370078740157;
    }
    else if(f_val == 5 && s_val == 7) // mm -> ft
    {
        ip_auto_val.value=num*0.0032808398950131;
    }
    else if(f_val == 5 && s_val == 8) // mm -> mi
    {
        ip_auto_val.value=num*0.00000062137119223733;
    }


    else if(f_val == 6 && s_val ==1 ) // in --> km
    {
        ip_auto_val.value=num*0.0000254;
    }
    else if(f_val == 6 && s_val == 2) // in --> m
    {
        ip_auto_val.value=num*0.0254;
    }
    else if(f_val == 6 && s_val == 3) // in --> cm
    {
        ip_auto_val.value=num*2.54;
    }
    else if(f_val == 6 && s_val == 4) // in --> nm
    {
        ip_auto_val.value=num/(3.93700787 * 0.00000001);
    }
    else if(f_val == 6 && s_val == 5) // in --> mm
    {
        ip_auto_val.value=num*25.4;
    }
    else if(f_val == 6 && s_val == 7) // in --> ft
    {
        ip_auto_val.value=num*0.083333333333333;
    }
    else if(f_val == 6 && s_val == 8) // in --> mi
    {
        ip_auto_val.value=num*0.000015782828282828;
    }

    else if(f_val == 7 && s_val ==1 ) // ft --> km
    {
        ip_auto_val.value=num*0.0003048;
    }
    else if(f_val == 7 && s_val == 2) // ft --> m
    {
        ip_auto_val.value=num*0.3048;
    }
    else if(f_val == 7 && s_val == 3) // ft --> cm
    {
        ip_auto_val.value=num*30.48;
    }
    else if(f_val == 7 && s_val == 4) // ft --> nm
    {
        ip_auto_val.value=num/(3.28084 * 0.000000001);
    }
    else if(f_val == 7 && s_val == 5) // ft --> mm
    {
        ip_auto_val.value=num*304.8;
    }
    else if(f_val == 7 && s_val == 6) // ft --> in
    {
        ip_auto_val.value=num*12;
    }
    else if(f_val == 7 && s_val == 8) // ft --> mi
    {
        ip_auto_val.value=num*0.00018939393939394;
    }


    else if(f_val == 8 && s_val == 1) // mi --> km
    {
        ip_auto_val.value=num*1.609344;
    }
    else if(f_val == 8 && s_val == 2) // mi --> m
    {
        ip_auto_val.value=num*1609.344;
    }
    else if(f_val == 8 && s_val == 3) // mi --> cm
    {
        ip_auto_val.value=num*160934.4;
    }
    else if(f_val == 8 && s_val == 4) // mi --> nm
    {
        ip_auto_val.value=num/(6.2137 * 0.000000000001);
    }
    else if(f_val == 8 && s_val == 5) // mi --> mm
    {
        ip_auto_val.value=num*1609344;
    }
    else if(f_val == 8 && s_val == 6) // mi --> in
    {
        ip_auto_val.value=num*63360;
    }
    else if(f_val == 8 && s_val == 7) // mi --> ft
    {
        ip_auto_val.value=num*5280;
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
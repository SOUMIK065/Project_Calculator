//This is for the computer view --> 
let height2=screen.height;
let width2=screen.width;
if(width2 > 1024 && width2 < 3000)
{
    document.getElementById("input1").style.border="0.5px solid rgba(0, 0, 255, 0.229)";
    document.getElementById("input1").style.borderRadius="10em";
    document.getElementById("input2").style.border="0.5px solid rgba(238, 130, 238, 0.495)";
    document.getElementById("input2").style.borderRadius="10em";
    document.getElementById("history1").style.border="2px solid rgba(255, 192, 203, 0.91)";
    document.getElementById("h_id").style.display="none";
    document.getElementById("mob_clr_c").style.display="none";
    document.getElementById("calculator1").style.paddingTop="0px";
    document.getElementById("dropmenu_i").style.display="none";
    document.getElementById("button_mob").style.display="none";
    document.getElementById("additional_b").style.display="none";
    document.getElementById("history1").style.height="25vh";
    document.getElementById("input1").style.fontSize="4vh";
    document.getElementById("input2").style.fontSize="4vh";
    
    let b_id = document.getElementById("button_id");
    b_id.style.paddingLeft="1.5vw";
    b_id.style.paddingRight="1.5vw";
    b_id.style.columnGap="1vw";
    b_id.style.rowGap="2vh";
    b_id.style.paddingTop="1vh";
    b_id.style.paddingBottom="1vh";

    function opt_b()
    {
        document.getElementById("slide_id").style.left="0px";
        document.getElementById("slide_id").style.transition="2s";
        document.getElementById("opt1").style.left="-350px";
        document.getElementById("opt1").style.transition="3s";
        document.getElementById("slide_id").style.left="0px";
    }
    function show()
    {
        document.getElementById("slide_id").style.left="-305px";
        document.getElementById("opt1").style.left="0px";
    }
    function dk_mode()
    {
        document.getElementById("button_mob").style.display="none";
        document.getElementById("history1").style.color="white";
        document.getElementById("input1").style.color="white";
        document.getElementById("input2").style.color="white";
        let item=document.querySelector("*");
        item.style.setProperty('--background','rgb(29, 28, 28)');

        document.getElementById("b1").style.backgroundColor="rgba(121, 120,120,0.5)";
        document.getElementById("b1").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b1").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b1").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b1").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b1").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h1").style.color="white";

        document.getElementById("b2").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b2").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b2").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b2").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b2").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b2").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h2").style.color="white";

        document.getElementById("b3").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b3").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b3").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b3").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b3").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b3").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h3").style.color="white";

        document.getElementById("b4").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b4").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b4").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b4").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b4").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b4").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h4").style.color="white";
       
        document.getElementById("b8").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b8").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b8").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b8").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b8").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b8").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h8").style.color="white";

        document.getElementById("b12").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b12").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b12").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b12").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b12").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b12").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h12").style.color="white";

        document.getElementById("b16").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b16").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b16").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b16").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b16").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b16").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h16").style.color="white";

        document.getElementById("b20").style.backgroundColor="rgb(121, 120, 120,0.5)";
        document.getElementById("b20").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b20").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b20").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b20").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b20").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h20").style.color="white";
        
        document.getElementById("b5").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b5").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b5").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b5").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b5").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b5").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h5").style.color="white";

        document.getElementById("b6").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b6").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b6").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b6").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b6").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b6").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h6").style.color="white";

        document.getElementById("b7").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b7").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b7").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b7").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b7").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b7").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h7").style.color="white";

        document.getElementById("b9").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b9").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b9").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b9").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b9").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b9").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h9").style.color="white";

        document.getElementById("b10").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b10").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b10").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b10").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b10").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b10").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h10").style.color="white";

        document.getElementById("b11").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b11").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b11").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b11").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b11").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b11").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h11").style.color="white";

        document.getElementById("b13").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b13").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b13").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b13").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b13").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b13").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h13").style.color="white";

        document.getElementById("b14").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b14").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b14").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b14").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b14").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b14").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h14").style.color="white";

        document.getElementById("b15").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b15").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b15").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b15").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b15").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b15").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h15").style.color="white";

        document.getElementById("b17").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b17").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b17").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b17").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b17").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b17").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h17").style.color="white";

        document.getElementById("b18").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b18").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b18").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b18").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b18").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b18").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h18").style.color="white";

        document.getElementById("b19").style.backgroundColor=" rgba(211, 211, 211, 0.5)";
        document.getElementById("b19").style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b19").style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        document.getElementById("b19").style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b19").style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        document.getElementById("b19").style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h19").style.color="white";

        let b1=document.getElementById("b21");
        b1.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b1.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b1.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b1.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b1.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b1.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h21").style.color="white";

        let b2=document.getElementById("b22");
        b2.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b2.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b2.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b2.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b2.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b2.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h22").style.color="white";

        let b3=document.getElementById("b23");
        b3.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b3.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b3.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b3.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b3.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b3.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h23").style.color="white";

        let b4=document.getElementById("b24");
        b4.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b4.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b4.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b4.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b4.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b4.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h24").style.color="white";

        let b5=document.getElementById("b25");
        b5.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b5.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b5.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b5.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b5.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b5.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h25").style.color="white";

        let b6=document.getElementById("b26");
        b6.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b6.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b6.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b6.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b6.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b6.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h26").style.color="white";

        let b7=document.getElementById("b27");
        b7.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b7.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b7.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b7.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b7.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b7.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h27").style.color="white";

        let b8=document.getElementById("b28");
        b8.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b8.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b8.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b8.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b8.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b8.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h28").style.color="white";

        let b9=document.getElementById("b29");
        b9.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b9.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b9.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b9.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b9.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b9.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h29").style.color="white";

        let b10=document.getElementById("b31");
        b10.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b10.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b10.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b10.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b10.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b10.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h31").style.color="white";

        let b11=document.getElementById("b32");
        b11.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b11.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b11.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b11.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b11.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b11.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h32").style.color="white";

        let b12=document.getElementById("b33");
        b12.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b12.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b12.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b12.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b12.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b12.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h33").style.color="white";

        let b14=document.getElementById("b34");
        b14.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b14.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b14.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b14.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b14.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b14.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h34").style.color="white";

        let b15=document.getElementById("b35");
        b15.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b15.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b15.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b15.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b15.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b15.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h35").style.color="white";

        let b17=document.getElementById("b37");
        b17.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b17.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b17.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b17.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b17.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b17.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h37").style.color="white";

        let b18=document.getElementById("b38");
        b18.style.backgroundColor="rgb(121, 120, 120,0.5)";
        b18.style.borderTop="1px dotted rgb(121, 120, 120,0.5)";
        b18.style.borderLeft="1px dotted rgb(121, 120, 120,0.5)";
        b18.style.borderBottom="3px solid rgba(202, 237, 206, 0.94)";
        b18.style.borderRight="3px solid rgba(202, 237, 206, 0.94)";
        b18.style.boxShadow="8px 8px 10px 0px  rgba(45, 45, 45,0.1)";
        document.getElementById("h38").style.color="white";

        document.getElementById("slide_id").style.backgroundColor="rgba(19, 19, 20, 0.734)";
        document.getElementById("slide_id").style.borderColor="black";
    }
    function lt_mode()
    {
        document.getElementById("history1").style.color="black";
        document.getElementById("input1").style.color="black";
        document.getElementById("input2").style.color="black";
        let item=document.querySelector("*");
        item.style.setProperty('--background','rgb(240, 248, 255)');

        let a=document.getElementById("b1");
        a.style.backgroundColor="";
        a.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h1").style.color="black";

        let a1=document.getElementById("b2");
        a1.style.backgroundColor="";
        a1.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a1.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a1.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a1.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a1.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h2").style.color="black";

        let a2=document.getElementById("b3");
        a2.style.backgroundColor="";
        a2.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a2.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a2.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a2.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a2.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h3").style.color="black";

        let a4=document.getElementById("b4");
        a4.style.backgroundColor="";
        a4.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a4.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a4.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a4.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a4.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h4").style.color="black";

        let a5=document.getElementById("b5");
        a5.style.backgroundColor="";
        a5.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a5.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a5.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a5.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a5.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h5").style.color="black";

        let a6=document.getElementById("b6");
        a6.style.backgroundColor="";
        a6.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a6.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a6.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a6.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a6.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h6").style.color="black";

        let a7=document.getElementById("b7");
        a7.style.backgroundColor="";
        a7.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a7.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a7.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a7.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a7.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h7").style.color="black";

        let a8=document.getElementById("b8");
        a8.style.backgroundColor="";
        a8.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a8.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a8.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a8.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a8.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h8").style.color="black";

        let a9=document.getElementById("b9");
        a9.style.backgroundColor="";
        a9.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a9.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a9.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a9.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a9.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h9").style.color="black";

        let a10=document.getElementById("b10");
        a10.style.backgroundColor="";
        a10.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a10.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a10.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a10.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a10.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h10").style.color="black";

        let a11=document.getElementById("b11");
        a11.style.backgroundColor="";
        a11.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a11.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a11.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a11.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a11.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h11").style.color="black";

        let a12=document.getElementById("b12");
        a12.style.backgroundColor="";
        a12.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a12.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a12.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a12.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a12.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h12").style.color="black";

        let a13=document.getElementById("b13");
        a13.style.backgroundColor="";
        a13.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a13.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a13.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a13.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a13.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h13").style.color="black";

        let a14=document.getElementById("b14");
        a14.style.backgroundColor="";
        a14.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a14.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a14.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a14.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a14.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h14").style.color="black";

        let a15=document.getElementById("b15");
        a15.style.backgroundColor="";
        a15.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a15.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a15.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a15.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a15.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h15").style.color="black";

        let a16=document.getElementById("b16");
        a16.style.backgroundColor="";
        a16.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a16.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a16.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a16.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a16.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h16").style.color="black";

        let a17=document.getElementById("b17");
        a17.style.backgroundColor="";
        a17.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a17.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a17.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a17.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a17.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h17").style.color="black";

        let a18=document.getElementById("b18");
        a18.style.backgroundColor="";
        a18.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a18.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a18.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a18.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a18.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h18").style.color="black";

        let a19=document.getElementById("b19");
        a19.style.backgroundColor="";
        a19.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a19.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a19.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a19.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a19.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h19").style.color="black";

        let a20=document.getElementById("b20");
        a20.style.backgroundColor="";
        a20.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a20.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a20.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a20.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a20.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h20").style.color="black";

        let a21=document.getElementById("b21");
        a21.style.backgroundColor="";
        a21.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a21.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a21.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a21.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a21.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h21").style.color="black";

        let a22=document.getElementById("b22");
        a22.style.backgroundColor="";
        a22.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a22.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a22.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a22.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a22.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h22").style.color="black";

        let a23=document.getElementById("b23");
        a23.style.backgroundColor="";
        a23.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a23.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a23.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a23.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a23.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h23").style.color="black";

        let a24=document.getElementById("b24");
        a24.style.backgroundColor="";
        a24.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a24.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a24.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a24.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a24.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h24").style.color="black";

        let a25=document.getElementById("b25");
        a25.style.backgroundColor="";
        a25.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a25.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a25.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a25.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a25.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h25").style.color="black";

        let a26=document.getElementById("b26");
        a26.style.backgroundColor="";
        a26.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a26.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a26.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a26.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a26.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h26").style.color="black";

        let a27=document.getElementById("b27");
        a27.style.backgroundColor="";
        a27.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a27.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a27.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a27.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a27.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h27").style.color="black";

        let a28=document.getElementById("b28");
        a28.style.backgroundColor="";
        a28.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a28.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a28.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a28.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a28.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h28").style.color="black";

        let a29=document.getElementById("b29");
        a29.style.backgroundColor="";
        a29.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a29.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a29.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a29.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a29.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h29").style.color="black";

        let a30=document.getElementById("b31");
        a30.style.backgroundColor="";
        a30.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a30.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a30.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a30.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a30.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h31").style.color="black";

        let a31=document.getElementById("b32");
        a31.style.backgroundColor="";
        a31.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a31.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a31.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a31.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a31.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h32").style.color="black";

        let a32=document.getElementById("b33");
        a32.style.backgroundColor="";
        a32.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a32.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a32.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a32.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a32.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h33").style.color="black";

        let a33=document.getElementById("b34");
        a33.style.backgroundColor="";
        a33.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a33.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a33.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a33.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a33.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h34").style.color="black";

        let a34=document.getElementById("b35");
        a34.style.backgroundColor="";
        a34.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a34.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a34.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a34.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a34.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h35").style.color="black";

        let a36=document.getElementById("b37");
        a36.style.backgroundColor="";
        a36.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a36.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a36.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a36.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a36.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h37").style.color="black";

        let a37=document.getElementById("b38");
        a37.style.backgroundColor="";
        a37.style.borderTop="0.5px solid rgba(238, 130, 238, 0.43)";
        a37.style.borderLeft="0.5px solid rgba(238, 130, 238, 0.43)";
        a37.style.borderBottom="0.5px solid rgba(0, 0, 255, 0.43)";
        a37.style.borderRight="0.5px solid rgba(0, 0, 255, 0.43)";
        a37.style.boxShadow="8px 8px 10px 0px rgba(202, 237, 206, 0.94)";
        document.getElementById("h38").style.color="black";

        document.getElementById("slide_id").style.backgroundColor="rgba(234, 234, 255, 0.734)";
        document.getElementById("slide_id").style.borderColor="white";
    }

    function sc_cal()
    {
        document.getElementById("calculator1").style.paddingTop="0px";

        document.getElementById("b21").style.left="0px";
        document.getElementById("b21").style.transition="3s";

        document.getElementById("b22").style.left="0px";
        document.getElementById("b22").style.transition="3s";

        document.getElementById("b23").style.left="0px";
        document.getElementById("b23").style.transition="3s";

        document.getElementById("b24").style.left="0px";
        document.getElementById("b24").style.transition="3s";

        document.getElementById("b25").style.right="0px";
        document.getElementById("b25").style.transition="3s";

        document.getElementById("b26").style.right="0px";
        document.getElementById("b26").style.transition="3s";

        document.getElementById("b27").style.right="0px";
        document.getElementById("b27").style.transition="3s";

        document.getElementById("b28").style.right="0px";
        document.getElementById("b28").style.transition="3s";

        document.getElementById("b29").style.left="0px";
        document.getElementById("b29").style.transition="3s";
    
        document.getElementById("b31").style.left="0px";
        document.getElementById("b31").style.transition="3s";

        document.getElementById("b32").style.left="0px";
        document.getElementById("b32").style.transition="3s";

        document.getElementById("b33").style.left="0px";
        document.getElementById("b33").style.transition="3s";

        document.getElementById("b34").style.right="0px";
        document.getElementById("b34").style.transition="3s";
        
        document.getElementById("b35").style.right="0px";
        document.getElementById("b35").style.transition="3s";
        
        document.getElementById("b37").style.right="0px";
        document.getElementById("b37").style.transition="3s";

        document.getElementById("b38").style.right="0px";
        document.getElementById("b38").style.transition="3s";

        document.getElementById("b1").style.width="100%";
        document.getElementById("b2").style.width="100%";
        document.getElementById("b3").style.width="100%";
        document.getElementById("b4").style.width="100%";
        document.getElementById("b5").style.width="100%";
        document.getElementById("b6").style.width="100%";
        document.getElementById("b7").style.width="100%";
        document.getElementById("b8").style.width="100%";
        document.getElementById("b9").style.width="100%";
        document.getElementById("b10").style.width="100%";
        document.getElementById("b11").style.width="100%";
        document.getElementById("b12").style.width="100%";
        document.getElementById("b13").style.width="100%";
        document.getElementById("b14").style.width="100%";
        document.getElementById("b15").style.width="100%";
        document.getElementById("b16").style.width="100%";
        document.getElementById("b17").style.width="100%";
        document.getElementById("b18").style.width="100%";
        document.getElementById("b19").style.width="100%";
        document.getElementById("b20").style.width="100%";

    document.getElementById("b1").style.left="0px";
    document.getElementById("b2").style.left="0px";
    document.getElementById("b3").style.left="0px";
    document.getElementById("b4").style.right="0px";
    document.getElementById("b5").style.left="0px";
    document.getElementById("b6").style.left="0px";
    document.getElementById("b7").style.left="0px";
    document.getElementById("b8").style.right="0px";
    document.getElementById("b9").style.left="0px";
    document.getElementById("b10").style.left="0px";
    document.getElementById("b11").style.left="0px";
    document.getElementById("b12").style.right="0px";
    document.getElementById("b13").style.left="0px";
    document.getElementById("b14").style.left="0px";
    document.getElementById("b15").style.left="0px";
    document.getElementById("b16").style.right="0px";
    document.getElementById("b17").style.left="0px";
    document.getElementById("b18").style.left="0px";
    document.getElementById("b19").style.left="0px";
    document.getElementById("b20").style.right="0px";
    }
   
    document.getElementById("b1").style.width="140%";
    document.getElementById("b2").style.width="140%";
    document.getElementById("b3").style.width="140%";
    document.getElementById("b4").style.width="140%";
    document.getElementById("b5").style.width="140%";
    document.getElementById("b6").style.width="140%";
    document.getElementById("b7").style.width="140%";
    document.getElementById("b8").style.width="140%";
    document.getElementById("b9").style.width="140%";
    document.getElementById("b10").style.width="140%";
    document.getElementById("b11").style.width="140%";
    document.getElementById("b12").style.width="140%";
    document.getElementById("b13").style.width="140%";
    document.getElementById("b14").style.width="140%";
    document.getElementById("b15").style.width="140%";
    document.getElementById("b16").style.width="140%";
    document.getElementById("b17").style.width="140%";
    document.getElementById("b18").style.width="140%";
    document.getElementById("b19").style.width="140%";
    document.getElementById("b20").style.width="140%";


    document.getElementById("b3").style.left="-17vw";
    document.getElementById("b5").style.left="-17vw";
    document.getElementById("b9").style.left="-17vw";
    document.getElementById("b13").style.left="-17vw";
    document.getElementById("b17").style.left="-17vw";

    document.getElementById("b2").style.left="-8vw";
    document.getElementById("b6").style.left="-8vw";
    document.getElementById("b10").style.left="-8vw";
    document.getElementById("b14").style.left="-8vw";
    document.getElementById("b18").style.left="-8vw";

    document.getElementById("b1").style.left="1vw";
    document.getElementById("b7").style.left="1vw";
    document.getElementById("b11").style.left="1vw";
    document.getElementById("b15").style.left="1vw";
    document.getElementById("b19").style.left="1vw";

    document.getElementById("b4").style.right="-10vw";
    document.getElementById("b8").style.right="-10vw";
    document.getElementById("b12").style.right="-10vw";
    document.getElementById("b16").style.right="-10vw";
    document.getElementById("b20").style.right="-10vw";

    document.getElementById("b21").style.left="-300px";
    document.getElementById("b22").style.left="-300px";
    document.getElementById("b23").style.left="-300px";
    document.getElementById("b24").style.left="-300px";
    document.getElementById("b25").style.right="-300px";
    document.getElementById("b26").style.right="-900px";
    document.getElementById("b27").style.right="-600px";
    document.getElementById("b28").style.right="-300px";
    document.getElementById("b29").style.left="-300px";
    document.getElementById("b31").style.left="-300px";
    document.getElementById("b32").style.left="-600px";
    document.getElementById("b33").style.left="-900px";
    document.getElementById("b34").style.right="-300px";
    document.getElementById("b35").style.right="-300px";
    document.getElementById("b37").style.right="-300px";
    document.getElementById("b38").style.right="-300px";

    function sl_cal()
    {
        document.getElementById("calculator1").style.paddingTop="0px";
        
        document.getElementById("b21").style.left="-300px";
        document.getElementById("b21").style.transition="3s";

        document.getElementById("b22").style.left="-300px";
        document.getElementById("b22").style.transition="3s";

        document.getElementById("b23").style.left="-300px";
        document.getElementById("b23").style.transition="3s";

        document.getElementById("b24").style.left="-300px";
        document.getElementById("b24").style.transition="3s";

        document.getElementById("b25").style.right="-300px";
        document.getElementById("b25").style.transition="3s";

        document.getElementById("b26").style.right="-900px";
        document.getElementById("b26").style.transition="3s";

        document.getElementById("b27").style.right="-600px";
        document.getElementById("b27").style.transition="3s";

        document.getElementById("b28").style.right="-300px";
        document.getElementById("b28").style.transition="3s";

        document.getElementById("b29").style.left="-300px";
        document.getElementById("b29").style.transition="3s";

        document.getElementById("b31").style.left="-300px";
        document.getElementById("b31").style.transition="3s";

        document.getElementById("b32").style.left="-600px";
        document.getElementById("b32").style.transition="3s";

        document.getElementById("b33").style.left="-900px";
        document.getElementById("b33").style.transition="3s";

        document.getElementById("b34").style.right="-300px";
        document.getElementById("b34").style.transition="3s";
        
        document.getElementById("b35").style.right="-300px";
        document.getElementById("b35").style.transition="3s";
        
        document.getElementById("b37").style.right="-300px";
        document.getElementById("b37").style.transition="3s";

        document.getElementById("b38").style.right="-300px";
        document.getElementById("b38").style.transition="3s";

    document.getElementById("b1").style.width="140%";
    document.getElementById("b2").style.width="140%";
    document.getElementById("b3").style.width="140%";
    document.getElementById("b4").style.width="140%";
    document.getElementById("b5").style.width="140%";
    document.getElementById("b6").style.width="140%";
    document.getElementById("b7").style.width="140%";
    document.getElementById("b8").style.width="140%";
    document.getElementById("b9").style.width="140%";
    document.getElementById("b10").style.width="140%";
    document.getElementById("b11").style.width="140%";
    document.getElementById("b12").style.width="140%";
    document.getElementById("b13").style.width="140%";
    document.getElementById("b14").style.width="140%";
    document.getElementById("b15").style.width="140%";
    document.getElementById("b16").style.width="140%";
    document.getElementById("b17").style.width="140%";
    document.getElementById("b18").style.width="140%";
    document.getElementById("b19").style.width="140%";
    document.getElementById("b20").style.width="140%";


    document.getElementById("b3").style.left="-17vw";
    document.getElementById("b5").style.left="-17vw";
    document.getElementById("b9").style.left="-17vw";
    document.getElementById("b13").style.left="-17vw";
    document.getElementById("b17").style.left="-17vw";

    document.getElementById("b2").style.left="-8vw";
    document.getElementById("b6").style.left="-8vw";
    document.getElementById("b10").style.left="-8vw";
    document.getElementById("b14").style.left="-8vw";
    document.getElementById("b18").style.left="-8vw";

    document.getElementById("b1").style.left="1vw";
    document.getElementById("b7").style.left="1vw";
    document.getElementById("b11").style.left="1vw";
    document.getElementById("b15").style.left="1vw";
    document.getElementById("b19").style.left="1vw";

    document.getElementById("b4").style.right="-10vw";
    document.getElementById("b8").style.right="-10vw";
    document.getElementById("b12").style.right="-10vw";
    document.getElementById("b16").style.right="-10vw";
    document.getElementById("b20").style.right="-10vw";

    }
    function lth()
    {
         window.location.href='length.html';
    }
    function temp()
    {
         window.location.href='temp.html';
    }
    function prf()
    {
        window.location.href='about_computer.html';
    }

    /*function resize(w)
    {
        if(w.matches)
        {
            document.getElementById("b1").style.width="100%";
            document.getElementById("b2").style.width="100%";
            document.getElementById("b3").style.width="100%";
            document.getElementById("b4").style.width="100%";
            document.getElementById("b5").style.width="100%";
            document.getElementById("b6").style.width="100%";
            document.getElementById("b7").style.width="100%";
            document.getElementById("b8").style.width="100%";
            document.getElementById("b9").style.width="100%";
            document.getElementById("b10").style.width="100%";
            document.getElementById("b11").style.width="100%";
            document.getElementById("b12").style.width="100%";
            document.getElementById("b13").style.width="100%";
            document.getElementById("b14").style.width="100%";
            document.getElementById("b15").style.width="100%";
            document.getElementById("b16").style.width="100%";
            document.getElementById("b17").style.width="100%";
            document.getElementById("b18").style.width="100%";
            document.getElementById("b19").style.width="100%";
            document.getElementById("b20").style.width="100%";
    
            document.getElementById("b1").style.left="0px";
            document.getElementById("b2").style.left="0px";
            document.getElementById("b3").style.left="0px";
            document.getElementById("b4").style.right="0px";
            document.getElementById("b5").style.left="0px";
            document.getElementById("b6").style.left="0px";
            document.getElementById("b7").style.left="0px";
            document.getElementById("b8").style.right="0px";
            document.getElementById("b9").style.left="0px";
            document.getElementById("b10").style.left="0px";
            document.getElementById("b11").style.left="0px";
            document.getElementById("b12").style.right="0px";
            document.getElementById("b13").style.left="0px";
            document.getElementById("b14").style.left="0px";
            document.getElementById("b15").style.left="0px";
            document.getElementById("b16").style.right="0px";
            document.getElementById("b17").style.left="0px";
            document.getElementById("b18").style.left="0px";
            document.getElementById("b19").style.left="0px";
            document.getElementById("b20").style.right="0px";
        }
        else
        {

        }
    }
    var w=window.matchMedia(("max-width: 1100px"));
    resize(w);
    w.addEventListener(resize);*/
}

// In is the mobile view function are written

let height1=screen.height;
let width1=screen.width;
let h=window.innerHeight;
let v=window.innerWidth;
if(width1<=500)
{
    if(h < 1750)
    {
        document.getElementById("button_mob").style.rowGap="9px";
        document.getElementById("button_mob").style.paddingBottom="35px";
    }
    else if(h >= 1750)
    {
        document.getElementById("button_mob").style.rowGap="32px";
        document.getElementById("button_mob").style.paddingBottom="65px";
    }

    document.getElementById("input1").style.left="48vw";
    document.getElementById("input2").style.left="48vw";
    document.getElementById("history_btn").style.display="none";
    document.getElementById("button_id").style.display="none";
    document.getElementById("additional_b").style.paddingLeft="750px"
    document.getElementById("img").style.display="none";
    document.getElementById("history1").style.display="none";
    document.getElementById("opt1").style.display="none";
    document.getElementById("dropmenu_i").style.visibility="hidden";
    document.getElementById("slide_id").style.display="none";

    document.getElementById("calculator1").style.gridTemplateRows="60px 60px 60px 60px 60px";
    document.getElementById("calculator1").style.height="200%";
    document.getElementById("calculator1").style.paddingTop="0px"

    let ip = document.getElementById("input1");
    ip.style.gridColumnEnd="7";
    ip.style.height="100px";
    ip.style.fontSize="80px";
    ip.style.position="relative";
    ip.style.bottom="-100px";
    ip.style.transition="3s";
    ip.style.transition="color 1s ease";
    ip.style.zIndex="1";

    let ip2 = document.getElementById("input2");
    ip2.style.gridColumnEnd="7";
    ip2.style.fontSize="80px";
    ip2.style.position="relative";
    ip2.style.bottom="-90px";
    ip2.style.transition="3s";
    ip2.style.transition="color 1s ease";

    let b_id = document.getElementById("button_mob");
    b_id.style.columnGap="45px";
    b_id.style.paddingLeft="10px";
    b_id.style.paddingRight="10px";
    b_id.style.paddingTop="10px";

    let b1 = document.getElementById("bt1");
    b1.style.height="200px";
    b1.style.borderRadius="50%";
    b1.style.backgroundColor="lightblue";
    document.getElementById("ht1").style.backgroundColor="lightblue";
    document.getElementById("ht1").style.fontSize="70px";
    

    let b2 = document.getElementById("bt2");
    b2.style.height="200px";
    b2.style.borderRadius="50%";
    b2.style.backgroundColor="lightblue";
    document.getElementById("ht2").style.backgroundColor="lightblue";
    document.getElementById("ht2").style.fontSize="70px";

    let b3 = document.getElementById("bt3");
    b3.style.height="200px";
    b3.style.borderRadius="50%";
    b3.style.backgroundColor="lightgreen";
    document.getElementById("ht3").style.backgroundColor="lightgreen";
    document.getElementById("ht3").style.fontSize="70px";


    let b4 = document.getElementById("bt4");
    b4.style.height="200px";
    b4.style.borderRadius="50%";
    b4.style.backgroundColor="lightblue";
    document.getElementById("ht4").style.backgroundColor="lightblue";
    document.getElementById("ht4").style.fontSize="70px";

    let b5 = document.getElementById("bt5");
    b5.style.height="200px";
    b5.style.borderRadius="50%";
    b5.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b5.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht5").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht5").style.fontSize="70px";

    let b6 = document.getElementById("bt6");
    b6.style.height="200px";
    b6.style.borderRadius="50%";
    b6.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b6.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht6").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht6").style.fontSize="70px";

    let b7 = document.getElementById("bt7");
    b7.style.height="200px";
    b7.style.borderRadius="50%";
    b7.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b7.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht7").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht7").style.fontSize="70px";

    let b8 = document.getElementById("bt8");
    b8.style.height="200px";
    b8.style.borderRadius="50%";
    b8.style.backgroundColor="lightblue";
    document.getElementById("ht8").style.backgroundColor="lightblue";
    document.getElementById("ht8").style.fontSize="70px";

    let b9 = document.getElementById("bt9");
    b9.style.height="200px";
    b9.style.borderRadius="50%";
    b9.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b9.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht9").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht9").style.fontSize="70px";

    let b10 = document.getElementById("bt10");
    b10.style.height="200px";
    b10.style.borderRadius="50%";
    b10.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b10.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht10").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht10").style.fontSize="70px";

    let b11 = document.getElementById("bt11");
    b11.style.height="200px";
    b11.style.borderRadius="50%";
    b11.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b11.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht11").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht11").style.fontSize="70px";

    let b12 = document.getElementById("bt12");
    b12.style.height="200px";
    b12.style.borderRadius="50%";
    b12.style.backgroundColor="lightblue";
    document.getElementById("ht12").style.backgroundColor="lightblue";
    document.getElementById("ht12").style.fontSize="70px";

    let b13 = document.getElementById("bt13");
    b13.style.height="200px";
    b13.style.borderRadius="50%";
    b13.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b13.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht13").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht13").style.fontSize="70px";

    let b14 = document.getElementById("bt14");
    b14.style.height="200px";
    b14.style.borderRadius="50%";
    b14.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b14.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht14").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht14").style.fontSize="70px";

    let b15 = document.getElementById("bt15");
    b15.style.height="200px";
    b15.style.borderRadius="50%";
    b15.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b15.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht15").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht15").style.fontSize="70px";

    let b16 = document.getElementById("bt16");
    b16.style.height="200px";
    b16.style.borderRadius="50%";
    b16.style.backgroundColor="lightblue";
    document.getElementById("ht16").style.backgroundColor="lightblue";
    document.getElementById("ht16").style.fontSize="70px";

    let b17 = document.getElementById("bt17");
    b17.style.height="200px";
    b17.style.borderRadius="50%";
    b17.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b17.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht17").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht17").style.fontSize="70px";

    let b18 = document.getElementById("bt18");
    b18.style.height="200px";
    b18.style.borderRadius="50%";
    b18.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b18.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht18").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht18").style.fontSize="70px";

    let b19 = document.getElementById("bt19");
    b19.style.height="200px";
    b19.style.borderRadius="50%";
    b19.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b19.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht19").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht19").style.fontSize="70px";

    let b20 = document.getElementById("bt20");
    b20.style.height="200px";
    b20.style.borderRadius="50%";
    b20.style.backgroundColor="lightsalmon";
    document.getElementById("ht20").style.backgroundColor="lightsalmon";
    document.getElementById("ht20").style.fontSize="70px";

    let b21 = document.getElementById("bt21");
    b21.style.height="100%";
    b21.style.borderRadius="50%";
    b21.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b21.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht21").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht21").style.fontSize="70px";

    let b22 = document.getElementById("bt22");
    b22.style.height="100%";
    b22.style.borderRadius="50%";
    b22.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b22.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht22").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht22").style.fontSize="70px";

    let b23 = document.getElementById("bt23");
    b23.style.height="100%";
    b23.style.borderRadius="50%";
    b23.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b23.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht23").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht23").style.fontSize="70px";

    let b24 = document.getElementById("bt24");
    b24.style.height="100%";
    b24.style.borderRadius="50%";
    b24.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b24.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht24").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht24").style.fontSize="70px";

    let b25 = document.getElementById("bt25");
    b25.style.height="100%";
    b25.style.borderRadius="50%";
    b25.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b25.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht25").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht25").style.fontSize="70px";

    let b26 = document.getElementById("bt26");
    b26.style.height="100%";
    b26.style.borderRadius="50%";
    b26.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b26.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht26").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht26").style.fontSize="70px";

    let b27 = document.getElementById("bt27");
    b27.style.height="100%";
    b27.style.borderRadius="50%";
    b27.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b27.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht27").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht27").style.fontSize="70px";

    let b28 = document.getElementById("bt29");
    b28.style.height="100%";
    b28.style.borderRadius="50%";
    b28.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b28.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht29").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht29").style.fontSize="70px";

    let b29 = document.getElementById("bt31");
    b29.style.height="100%";
    b29.style.borderRadius="50%";
    b29.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b29.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht31").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht31").style.fontSize="70px";

    let b30 = document.getElementById("bt32");
    b30.style.height="100%";
    b30.style.borderRadius="50%";
    b30.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b30.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht32").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht32").style.fontSize="70px";

    let b31 = document.getElementById("bt33");
    b31.style.height="100%";
    b31.style.borderRadius="50%";
    b31.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b31.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht33").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht33").style.fontSize="70px";

    let b32 = document.getElementById("bt34");
    b32.style.height="100%";
    b32.style.borderRadius="50%";
    b32.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b32.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht34").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht34").style.fontSize="70px";

    let b33 = document.getElementById("bt35");
    b33.style.height="100%";
    b33.style.borderRadius="50%";
    b33.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b33.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht35").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht35").style.fontSize="70px";

    let b34 = document.getElementById("bt36");
    b34.style.height="100%";
    b34.style.borderRadius="50%";
    b34.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b34.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht36").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht36").style.fontSize="70px";

    let b35 = document.getElementById("bt37");
    b35.style.height="100%";
    b35.style.borderRadius="50%";
    b35.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b35.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht37").style.backgroundColor="rgba(247, 242, 242, 0.864)";
    document.getElementById("ht37").style.fontSize="70px";

    function more_button()
    {
        let sbm=document.getElementById("dropmenu_i");
        if(sbm.style.visibility=="hidden")
        {
            sbm.style.visibility="visible";
        }
        else if(sbm.style.visibility=="visible")
        {
            sbm.style.visibility="hidden";
        }
    }
    document.getElementById('sm_cal').style.visibility="hidden";
    document.getElementById('sc_cal').style.visibility="visible";

    document.getElementById("bt21").style.left="-300px";
    document.getElementById("bt22").style.left="-300px";
    document.getElementById("bt23").style.left="-300px";
    document.getElementById("bt24").style.left="-300px";
    document.getElementById("bt25").style.right="-300px";
    document.getElementById("bt26").style.right="-900px";
    document.getElementById("bt27").style.right="-600px";
    document.getElementById("bt29").style.left="-300px";
    document.getElementById("bt31").style.left="-300px";
    document.getElementById("bt32").style.left="-600px";
    document.getElementById("bt33").style.left="-900px";
    document.getElementById("bt34").style.right="-600px";
    document.getElementById("bt35").style.right="-300px";
    document.getElementById("bt36").style.left="-300px";
    document.getElementById("bt37").style.left="-600px";

    document.getElementById("bt3").style.left="-180px";
    document.getElementById("bt5").style.left="-180px";
    document.getElementById("bt9").style.left="-180px";
    document.getElementById("bt13").style.left="-180px";
    document.getElementById("bt17").style.left="-180px";

    document.getElementById("bt2").style.left="-140px";
    document.getElementById("bt6").style.left="-140px";
    document.getElementById("bt10").style.left="-140px";
    document.getElementById("bt18").style.left="-140px";
    document.getElementById("bt14").style.left="-140px";

    document.getElementById("bt1").style.left="-100px";
    document.getElementById("bt7").style.left="-100px";
    document.getElementById("bt15").style.left="-100px";
    document.getElementById("bt19").style.left="-100px";
    document.getElementById("bt11").style.left="-100px";

    document.getElementById("bt4").style.left="-60px";
    document.getElementById("bt8").style.left="-60px";
    document.getElementById("bt12").style.left="-60px";
    document.getElementById("bt16").style.left="-60px";
    document.getElementById("bt20").style.left="-60px";

    document.getElementById("bt3").style.top="-80px";
    document.getElementById("bt5").style.top="-60px";
    document.getElementById("bt9").style.top="-40px";
    document.getElementById("bt13").style.top="-20px";
    document.getElementById("bt2").style.top="-80px";
    document.getElementById("bt6").style.top="-60px";
    document.getElementById("bt10").style.top="-40px";
    document.getElementById("bt14").style.top="-20px";
    document.getElementById("bt1").style.top="-80px";
    document.getElementById("bt7").style.top="-60px";
    document.getElementById("bt11").style.top="-40px";
    document.getElementById("bt15").style.top="-20px";
    document.getElementById("bt4").style.top="-80px";
    document.getElementById("bt8").style.top="-60px";
    document.getElementById("bt12").style.top="-40px";
    document.getElementById("bt16").style.top="-20px";

    document.getElementById("bt1").style.width="120%";
    document.getElementById("bt1").style.height="120%";
    document.getElementById("bt2").style.width="120%";
    document.getElementById("bt2").style.height="120%";
    document.getElementById("bt3").style.width="120%";
    document.getElementById("bt3").style.height="120%";
    document.getElementById("bt4").style.width="120%";
    document.getElementById("bt4").style.height="120%";
    document.getElementById("bt5").style.width="120%";
    document.getElementById("bt5").style.height="120%";
    document.getElementById("bt6").style.width="120%";
    document.getElementById("bt6").style.height="120%";
    document.getElementById("bt7").style.width="120%";
    document.getElementById("bt7").style.height="120%";
    document.getElementById("bt8").style.width="120%";
    document.getElementById("bt8").style.height="120%";
    document.getElementById("bt9").style.width="120%";
    document.getElementById("bt9").style.height="120%";
    document.getElementById("bt10").style.width="120%";
    document.getElementById("bt10").style.height="120%";
    document.getElementById("bt11").style.width="120%";
    document.getElementById("bt11").style.height="120%";
    document.getElementById("bt12").style.width="120%";
    document.getElementById("bt12").style.height="120%";
    document.getElementById("bt13").style.width="120%";
    document.getElementById("bt13").style.height="120%";
    document.getElementById("bt14").style.width="120%";
    document.getElementById("bt14").style.height="120%";
    document.getElementById("bt15").style.width="120%";
    document.getElementById("bt15").style.height="120%";
    document.getElementById("bt16").style.width="120%";
    document.getElementById("bt16").style.height="120%";
    document.getElementById("bt17").style.width="120%";
    document.getElementById("bt17").style.height="120%";
    document.getElementById("bt18").style.width="120%";
    document.getElementById("bt18").style.height="120%";
    document.getElementById("bt19").style.width="120%";
    document.getElementById("bt19").style.height="120%";
    document.getElementById("bt20").style.width="120%";
    document.getElementById("bt20").style.height="120%";

    document.getElementById("nit").style.visibility="visible";
    document.getElementById("day").style.visibility="hidden";

    function nit_mode()
    {
        document.getElementById("nit").style.visibility="hidden";
        document.getElementById("day").style.visibility="visible";
        let item=document.querySelector("*");
        item.style.setProperty('--background','rgb(29, 28, 28)');
        document.getElementById("mb_i").style.color="white";
        document.getElementById("sc_cal").style.color="white";
        document.getElementById("sm_cal").style.color="white";
        document.getElementById("input1").style.color="white";
        document.getElementById("input2").style.color="white";
        document.getElementById("dropmenu_i").style.color="grey";
   
    let b5 = document.getElementById("bt5");
    b5.style.backgroundColor="grey";
    b5.style.boxShadow="none";
    document.getElementById("ht5").style.backgroundColor="grey";
    document.getElementById("ht5").style.color="white";

    let b6 = document.getElementById("bt6");
    b6.style.boxShadow="none";
    b6.style.backgroundColor="grey";
    document.getElementById("ht6").style.backgroundColor="grey";
    document.getElementById("ht6").style.color="white";

    let b7 = document.getElementById("bt7");
    b7.style.boxShadow="none";
    b7.style.backgroundColor="grey";
    document.getElementById("ht7").style.backgroundColor="grey";
    document.getElementById("ht7").style.color="white";

    let b9 = document.getElementById("bt9");
    b9.style.boxShadow="none";
    b9.style.backgroundColor="grey";
    document.getElementById("ht9").style.backgroundColor="grey";
    document.getElementById("ht9").style.color="white";

    let b10 = document.getElementById("bt10");
    b10.style.boxShadow="none";
    b10.style.backgroundColor="grey";
    document.getElementById("ht10").style.backgroundColor="grey";
    document.getElementById("ht10").style.color="white";

    let b11 = document.getElementById("bt11");
    b11.style.boxShadow="none";
    b11.style.backgroundColor="grey";
    document.getElementById("ht11").style.backgroundColor="grey";
    document.getElementById("ht11").style.color="white";

    let b13 = document.getElementById("bt13");
    b13.style.boxShadow="none";
    b13.style.backgroundColor="grey";
    document.getElementById("ht13").style.backgroundColor="grey";
    document.getElementById("ht13").style.color="white";

    let b14 = document.getElementById("bt14");
    b14.style.boxShadow="none";
    b14.style.backgroundColor="grey";
    document.getElementById("ht14").style.backgroundColor="grey";
    document.getElementById("ht14").style.color="white";

    let b15 = document.getElementById("bt15");
    b15.style.boxShadow="none";
    b15.style.backgroundColor="grey";
    document.getElementById("ht15").style.backgroundColor="grey";
    document.getElementById("ht15").style.color="white";

    let b17 = document.getElementById("bt17");
    b17.style.boxShadow="none";
    b17.style.backgroundColor="grey";
    document.getElementById("ht17").style.backgroundColor="grey";
    document.getElementById("ht17").style.color="white";

    let b18 = document.getElementById("bt18");
    b18.style.boxShadow="none";
    b18.style.backgroundColor="grey";
    document.getElementById("ht18").style.backgroundColor="grey";
    document.getElementById("ht18").style.color="white";

    let b19 = document.getElementById("bt19");
    b19.style.boxShadow="none";
    b19.style.backgroundColor="grey";
    document.getElementById("ht19").style.backgroundColor="grey";
    document.getElementById("ht19").style.color="white";


    let b21 = document.getElementById("bt21");
    b21.style.boxShadow="none";
    b21.style.backgroundColor="grey";
    document.getElementById("ht21").style.backgroundColor="grey";
    document.getElementById("ht21").style.color="white";

    let b22 = document.getElementById("bt22");
    b22.style.boxShadow="none";
    b22.style.backgroundColor="grey";
    document.getElementById("ht22").style.backgroundColor="grey";
    document.getElementById("ht22").style.color="white";

    let b23 = document.getElementById("bt23");
    b23.style.boxShadow="none";
    b23.style.backgroundColor="grey";
    document.getElementById("ht23").style.backgroundColor="grey";
    document.getElementById("ht23").style.color="white";

    let b24 = document.getElementById("bt24");
    b24.style.boxShadow="none";
    b24.style.backgroundColor="grey";
    document.getElementById("ht24").style.backgroundColor="grey";
    document.getElementById("ht24").style.color="white";

    let b25 = document.getElementById("bt25");
    b25.style.boxShadow="none";
    b25.style.backgroundColor="grey";
    document.getElementById("ht25").style.backgroundColor="grey";
    document.getElementById("ht25").style.color="white";

    let b26 = document.getElementById("bt26");
    b26.style.boxShadow="none";
    b26.style.backgroundColor="grey";
    document.getElementById("ht26").style.backgroundColor="grey";
    document.getElementById("ht26").style.color="white";

    let b27 = document.getElementById("bt27");
    b27.style.boxShadow="none";
    b27.style.backgroundColor="grey";
    document.getElementById("ht27").style.backgroundColor="grey";
    document.getElementById("ht27").style.color="white";

    let b28 = document.getElementById("bt29");
    b28.style.boxShadow="none";
    b28.style.backgroundColor="grey";
    document.getElementById("ht29").style.backgroundColor="grey";
    document.getElementById("ht29").style.color="white";

    let b29 = document.getElementById("bt31");
    b29.style.boxShadow="none";
    b29.style.backgroundColor="grey";
    document.getElementById("ht31").style.backgroundColor="grey";
    document.getElementById("ht31").style.color="white";

    let b30 = document.getElementById("bt32");
    b30.style.boxShadow="none";
    b30.style.backgroundColor="grey";
    document.getElementById("ht32").style.backgroundColor="grey";
    document.getElementById("ht32").style.color="white";

    let b31 = document.getElementById("bt33");
    b31.style.boxShadow="none";
    b31.style.backgroundColor="grey";
    document.getElementById("ht33").style.backgroundColor="grey";
    document.getElementById("ht33").style.color="white";

    let b32 = document.getElementById("bt34");
    b32.style.boxShadow="none";
    b32.style.backgroundColor="grey";
    document.getElementById("ht34").style.backgroundColor="grey";
    document.getElementById("ht34").style.color="white";

    let b33 = document.getElementById("bt35");
    b33.style.boxShadow="none";
    b33.style.backgroundColor="grey";
    document.getElementById("ht35").style.backgroundColor="grey";
    document.getElementById("ht35").style.color="white";

    let b34 = document.getElementById("bt36");
    b34.style.boxShadow="none";
    b34.style.backgroundColor="grey";
    document.getElementById("ht36").style.backgroundColor="grey";
    document.getElementById("ht36").style.color="white";

    let b35 = document.getElementById("bt37");
    b35.style.boxShadow="none";
    b35.style.backgroundColor="grey";
    document.getElementById("ht37").style.backgroundColor="grey";
    document.getElementById("ht37").style.color="white";

    document.getElementById("2x").style.backgroundColor="grey";
    document.getElementById("10x").style.backgroundColor="grey";
    document.getElementById("x2").style.backgroundColor="grey";
    document.getElementById("xy").style.backgroundColor="grey";
    


    }
    function day_mode()
    {

        document.getElementById("nit").style.visibility="visible";
        document.getElementById("day").style.visibility="hidden";
        let item1=document.querySelector("*");
        item1.style.setProperty('--background','rgb(240, 248, 255)');
        document.getElementById("mb_i").style.color="black";
        document.getElementById("sc_cal").style.color="olivedrab";
        document.getElementById("sm_cal").style.color="olivedrab";
        document.getElementById("input1").style.color="black";
        document.getElementById("input2").style.color="black";
        document.getElementById("dropmenu_i").style.color="rgba(247, 242, 242, 0.864)";
    
    let b5 = document.getElementById("bt5");
    b5.style.backgroundColor="rgba(247, 242, 242, 1)";
    b5.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    document.getElementById("ht5").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht5").style.color="black";

    let b6 = document.getElementById("bt6");
    b6.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b6.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht6").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht6").style.color="black";

    let b7 = document.getElementById("bt7");
    b7.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b7.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht7").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht7").style.color="black";

    let b9 = document.getElementById("bt9");
    b9.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b9.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht9").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht9").style.color="black";

    let b10 = document.getElementById("bt10");
    b10.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b10.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht10").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht10").style.color="black";

    let b11 = document.getElementById("bt11");
    b11.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b11.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht11").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht11").style.color="black";

    let b13 = document.getElementById("bt13");
    b13.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b13.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht13").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht13").style.color="black";

    let b14 = document.getElementById("bt14");
    b14.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b14.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht14").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht14").style.color="black";

    let b15 = document.getElementById("bt15");
    b15.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b15.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht15").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht15").style.color="black";

    let b17 = document.getElementById("bt17");
    b17.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b17.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht17").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht17").style.color="black";

    let b18 = document.getElementById("bt18");
    b18.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b18.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht18").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht18").style.color="black";

    let b19 = document.getElementById("bt19");
    b19.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b19.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht19").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht19").style.color="black";


    let b21 = document.getElementById("bt21");
    b21.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b21.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht21").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht21").style.color="black";

    let b22 = document.getElementById("bt22");
    b22.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b22.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht22").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht22").style.color="black";

    let b23 = document.getElementById("bt23");
    b23.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b23.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht23").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht23").style.color="black";

    let b24 = document.getElementById("bt24");
    b24.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b24.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht24").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht24").style.color="black";

    let b25 = document.getElementById("bt25");
    b25.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b25.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht25").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht25").style.color="black";

    let b26 = document.getElementById("bt26");
    b26.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b26.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht26").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht26").style.color="black";

    let b27 = document.getElementById("bt27");
    b27.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b27.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht27").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht27").style.color="black";

    let b28 = document.getElementById("bt29");
    b28.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b28.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht29").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht29").style.color="black";

    let b29 = document.getElementById("bt31");
    b29.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b29.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht31").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht31").style.color="black";

    let b30 = document.getElementById("bt32");
    b30.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b30.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht32").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht32").style.color="black";

    let b31 = document.getElementById("bt33");
    b31.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b31.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht33").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht33").style.color="black";

    let b32 = document.getElementById("bt34");
    b32.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b32.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht34").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht34").style.color="black";

    let b33 = document.getElementById("bt35");
    b33.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b33.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht35").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht35").style.color="black";

    let b34 = document.getElementById("bt36");
    b34.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b34.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht36").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht36").style.color="black";

    let b35 = document.getElementById("bt37");
    b35.style.boxShadow="6px 6px 20px 1px rgba(202, 237, 206, 0.94)";
    b35.style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht37").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("ht37").style.color="black";

    document.getElementById("2x").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("10x").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("x2").style.backgroundColor="rgba(247, 242, 242, 1)";
    document.getElementById("xy").style.backgroundColor="rgba(247, 242, 242, 1)";
    


    }

   function scin_calculator()
   {
    document.getElementById('sc_cal').style.visibility="hidden";
    document.getElementById('sm_cal').style.visibility="visible";

    ip.style.bottom="5px";
    ip2.style.bottom="5px";

    let b_id = document.getElementById("button_mob");
    b_id.style.columnGap="40px";

    document.getElementById("bt21").style.left="0px";
    document.getElementById("bt22").style.left="0px";
    document.getElementById("bt23").style.left="0px";
    document.getElementById("bt24").style.left="0px";
    document.getElementById("bt25").style.right="0px";
    document.getElementById("bt26").style.right="0px";
    document.getElementById("bt27").style.right="0px";
    document.getElementById("bt29").style.left="0px";
    document.getElementById("bt31").style.left="0px";
    document.getElementById("bt32").style.left="0px";
    document.getElementById("bt33").style.left="0px";
    document.getElementById("bt34").style.right="0px";
    document.getElementById("bt35").style.right="0px";
    document.getElementById("bt36").style.left="0px";
    document.getElementById("bt37").style.left="0px";

    document.getElementById("bt3").style.left="0px";
    document.getElementById("bt5").style.left="0px";
    document.getElementById("bt9").style.left="0px";
    document.getElementById("bt13").style.left="0px";
    document.getElementById("bt17").style.left="0px";

    document.getElementById("bt2").style.left="0px";
    document.getElementById("bt6").style.left="0px";
    document.getElementById("bt10").style.left="0px";
    document.getElementById("bt18").style.left="0px";
    document.getElementById("bt14").style.left="0px";

    document.getElementById("bt1").style.left="0px";
    document.getElementById("bt7").style.left="0px";
    document.getElementById("bt15").style.left="0px";
    document.getElementById("bt19").style.left="0px";
    document.getElementById("bt11").style.left="0px";

    document.getElementById("bt4").style.left="0px";
    document.getElementById("bt8").style.left="0px";
    document.getElementById("bt12").style.left="0px";
    document.getElementById("bt16").style.left="0px";
    document.getElementById("bt20").style.left="0px";

    document.getElementById("bt3").style.top="0px";
    document.getElementById("bt5").style.top="0px";
    document.getElementById("bt9").style.top="0px";
    document.getElementById("bt13").style.top="0px";
    document.getElementById("bt2").style.top="0px";
    document.getElementById("bt6").style.top="0px";
    document.getElementById("bt10").style.top="0px";
    document.getElementById("bt14").style.top="0px";
    document.getElementById("bt1").style.top="0px";
    document.getElementById("bt7").style.top="0px";
    document.getElementById("bt11").style.top="0px";
    document.getElementById("bt15").style.top="0px";
    document.getElementById("bt4").style.top="0px";
    document.getElementById("bt8").style.top="0px";
    document.getElementById("bt12").style.top="0px";
    document.getElementById("bt16").style.top="0px";

    document.getElementById("bt1").style.width="100%";
    document.getElementById("bt1").style.height="100%";
    document.getElementById("bt2").style.width="100%";
    document.getElementById("bt2").style.height="100%";
    document.getElementById("bt3").style.width="100%";
    document.getElementById("bt3").style.height="100%";
    document.getElementById("bt4").style.width="100%";
    document.getElementById("bt4").style.height="100%";
    document.getElementById("bt5").style.width="100%";
    document.getElementById("bt5").style.height="100%";
    document.getElementById("bt6").style.width="100%";
    document.getElementById("bt6").style.height="100%";
    document.getElementById("bt7").style.width="100%";
    document.getElementById("bt7").style.height="100%";
    document.getElementById("bt8").style.width="100%";
    document.getElementById("bt8").style.height="100%";
    document.getElementById("bt9").style.width="100%";
    document.getElementById("bt9").style.height="100%";
    document.getElementById("bt10").style.width="100%";
    document.getElementById("bt10").style.height="100%";
    document.getElementById("bt11").style.width="100%";
    document.getElementById("bt11").style.height="100%";
    document.getElementById("bt12").style.width="100%";
    document.getElementById("bt12").style.height="100%";
    document.getElementById("bt13").style.width="100%";
    document.getElementById("bt13").style.height="100%";
    document.getElementById("bt14").style.width="100%";
    document.getElementById("bt14").style.height="100%";
    document.getElementById("bt15").style.width="100%";
    document.getElementById("bt15").style.height="100%";
    document.getElementById("bt16").style.width="100%";
    document.getElementById("bt16").style.height="100%";
    document.getElementById("bt17").style.width="100%";
    document.getElementById("bt17").style.height="100%";
    document.getElementById("bt18").style.width="100%";
    document.getElementById("bt18").style.height="100%";
    document.getElementById("bt19").style.width="100%";
    document.getElementById("bt19").style.height="100%";
    document.getElementById("bt20").style.width="100%";
    document.getElementById("bt20").style.height="100%";
   }
   function simp_calculator()
   {
    document.getElementById('sm_cal').style.visibility="hidden";
    document.getElementById('sc_cal').style.visibility="visible";

    ip.style.bottom="-50px";
    ip2.style.bottom="-90px";

    let b_id = document.getElementById("button_mob");
    b_id.style.columnGap="45px";

    document.getElementById("bt21").style.left="-300px";
    document.getElementById("bt22").style.left="-300px";
    document.getElementById("bt23").style.left="-300px";
    document.getElementById("bt24").style.left="-300px";
    document.getElementById("bt25").style.right="-300px";
    document.getElementById("bt26").style.right="-900px";
    document.getElementById("bt27").style.right="-600px";
    document.getElementById("bt29").style.left="-300px";
    document.getElementById("bt31").style.left="-300px";
    document.getElementById("bt32").style.left="-600px";
    document.getElementById("bt33").style.left="-900px";
    document.getElementById("bt34").style.right="-600px";
    document.getElementById("bt35").style.right="-300px";
    document.getElementById("bt36").style.left="-300px";
    document.getElementById("bt37").style.left="-600px";

    document.getElementById("bt3").style.left="-180px";
    document.getElementById("bt5").style.left="-180px";
    document.getElementById("bt9").style.left="-180px";
    document.getElementById("bt13").style.left="-180px";
    document.getElementById("bt17").style.left="-180px";

    document.getElementById("bt2").style.left="-140px";
    document.getElementById("bt6").style.left="-140px";
    document.getElementById("bt10").style.left="-140px";
    document.getElementById("bt18").style.left="-140px";
    document.getElementById("bt14").style.left="-140px";

    document.getElementById("bt1").style.left="-100px";
    document.getElementById("bt7").style.left="-100px";
    document.getElementById("bt15").style.left="-100px";
    document.getElementById("bt19").style.left="-100px";
    document.getElementById("bt11").style.left="-100px";

    document.getElementById("bt4").style.left="-60px";
    document.getElementById("bt8").style.left="-60px";
    document.getElementById("bt12").style.left="-60px";
    document.getElementById("bt16").style.left="-60px";
    document.getElementById("bt20").style.left="-60px";

    document.getElementById("bt3").style.top="-80px";
    document.getElementById("bt5").style.top="-60px";
    document.getElementById("bt9").style.top="-40px";
    document.getElementById("bt13").style.top="-20px";
    document.getElementById("bt2").style.top="-80px";
    document.getElementById("bt6").style.top="-60px";
    document.getElementById("bt10").style.top="-40px";
    document.getElementById("bt14").style.top="-20px";
    document.getElementById("bt1").style.top="-80px";
    document.getElementById("bt7").style.top="-60px";
    document.getElementById("bt11").style.top="-40px";
    document.getElementById("bt15").style.top="-20px";
    document.getElementById("bt4").style.top="-80px";
    document.getElementById("bt8").style.top="-60px";
    document.getElementById("bt12").style.top="-40px";
    document.getElementById("bt16").style.top="-20px";

    document.getElementById("bt1").style.width="120%";
    document.getElementById("bt1").style.height="120%";
    document.getElementById("bt2").style.width="120%";
    document.getElementById("bt2").style.height="120%";
    document.getElementById("bt3").style.width="120%";
    document.getElementById("bt3").style.height="120%";
    document.getElementById("bt4").style.width="120%";
    document.getElementById("bt4").style.height="120%";
    document.getElementById("bt5").style.width="120%";
    document.getElementById("bt5").style.height="120%";
    document.getElementById("bt6").style.width="120%";
    document.getElementById("bt6").style.height="120%";
    document.getElementById("bt7").style.width="120%";
    document.getElementById("bt7").style.height="120%";
    document.getElementById("bt8").style.width="120%";
    document.getElementById("bt8").style.height="120%";
    document.getElementById("bt9").style.width="120%";
    document.getElementById("bt9").style.height="120%";
    document.getElementById("bt10").style.width="120%";
    document.getElementById("bt10").style.height="120%";
    document.getElementById("bt11").style.width="120%";
    document.getElementById("bt11").style.height="120%";
    document.getElementById("bt12").style.width="120%";
    document.getElementById("bt12").style.height="120%";
    document.getElementById("bt13").style.width="120%";
    document.getElementById("bt13").style.height="120%";
    document.getElementById("bt14").style.width="120%";
    document.getElementById("bt14").style.height="120%";
    document.getElementById("bt15").style.width="120%";
    document.getElementById("bt15").style.height="120%";
    document.getElementById("bt16").style.width="120%";
    document.getElementById("bt16").style.height="120%";
    document.getElementById("bt17").style.width="120%";
    document.getElementById("bt17").style.height="120%";
    document.getElementById("bt18").style.width="120%";
    document.getElementById("bt18").style.height="120%";
    document.getElementById("bt19").style.width="120%";
    document.getElementById("bt19").style.height="120%";
    document.getElementById("bt20").style.width="120%";
    document.getElementById("bt20").style.height="120%";
   }
   function profile_b()
   {
    window.location.href='about_mobile.html';
   }
   document.getElementById('button_id').classList.remove("hover");

   let history=document.getElementById("h_id");
   let clear=document.getElementById("mob_clr_c");
   history.style.left="-1000px";
   clear.style.left="-1000px";
   function history_b()
   {
    history.style.left="0px";
    clear.style.left="0px";
   }
   function close_mob()
   {
    history.style.left="-1000px";
    clear.style.left="-1000px";
   }
}
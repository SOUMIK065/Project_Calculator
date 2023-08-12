//In this --> calculator all number buttons functions are written
let val = document.getElementById("input1");
let auto_val = document.getElementById("input2");
let history_val = document.getElementById("history1");
let history_val1 = document.getElementById("h_id1");
let x=1,val2,logic=50,a=50,check="p";
let value1,value2;
function num_b(v)
{
    let val1 , val3;
    if(v =='+')
    {
        val.value+=v;
        document.getElementById('b16').disabled = true;
    }
    else if(v =='-')
    {
        val.value+=v;
        document.getElementById('b12').disabled = true;  
    }
    else if(v =='*')
    {
        val.value+=v;
        document.getElementById('b8').disabled = true;
    }
    else if(v =='/')
    {
        val.value+=v;
        document.getElementById('b4').disabled = true;
    }
    else if(v =='.')
    {
        val.value+=v;
        document.getElementById('b19').disabled = true;
    }
    else if(v =='%')
    {
        val.value+=v;
        document.getElementById('b1').disabled = true;
    }
    else if(v =='^')
    {
        val.value+=v;
        val2=val.value;
        logic = 0;
    }
    else if(v =='(')
    {
        val.value+=v;
        a=7;
        auto_val.value=" ";
    }
    else if(v ==')')
    {
        val.value+=v;
        a=7;
        auto_val.value=" ";
        value2=value2+v;
    }
    else if(v!='+' || v!='/' || v!='*' || v!='-' || v!='.' || v!='%')
    {
        val.value+=v;
        check=val.value;
        if(a == 7)
        {
            value2=val.value;
        }
        document.getElementById('b16').disabled = false;
        document.getElementById('b12').disabled = false;
        document.getElementById('b8').disabled = false;
        document.getElementById('b4').disabled = false;
        document.getElementById('b19').disabled = false;
        document.getElementById('b1').disabled = false;
        if(logic != 0 && a != 7)
        {
            auto_val.value=eval(val.value);
            document.getElementById('b2').disabled = false;
            value1=auto_val.value;
            value2=val.value;
        }
        else if(logic == 0)
        {
            let length=val2.length;
            val1=val.value.substr(0,length-1)
            val3=val.value.substr(length,val.value.length)
            val3=val.value.substr(length,val.value.length)
            auto_val.value=Math.pow(val1,val3);
            document.getElementById('b2').disabled = true;
            value1=auto_val.value;
            value2=val.value;
            history_val.value+=value2 + " = " + value1 + "\n \n";
            history_val1.value+=value2 + " = " + value1 + "\n \n";
            logic=1;
        }
    }   
}

function ac_b()
{
    val.value=" ";
    auto_val.value=" ";
    check="p";
}

function c_b()
{
    val.value=val.value.substr(0,val.value.length-1);
    auto_val.value=val.value.substr(0,val.value.length-1);
    auto_val.value=eval(val.value);
    document.getElementById('b16').disabled = false;
    document.getElementById('b12').disabled = false;
    document.getElementById('b8').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b19').disabled = false;
    document.getElementById('b1').disabled = false;
}

function clear_hist()
{
    history_val.value=" ";
}
function mobclear_hist()
{
    history_val1.value=" ";
}

function eql_b()
{
    if((val.value=eval(val.value)) == 'Infinity')
    {
        val.value="Cannot divide it";
    }
    else if((val.value=eval(val.value)) == 'false')
    {
        val.value="Error";
    }
    else
    {
        val.value=eval(val.value);
        if(a == 7)
        {
            value1=val.value;
        }
        auto_val.value=" ";
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
        check="p";
    }
}
function sin(s)
{
    
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the sin() button")
    } 
    else
    {
        val1=val.value;
        val.value=s + " " +val1;
        let x=val1*(3.14/180);
        auto_val.value=Math.sin(x);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
    
}
function cos(c)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the cos() button")
    } 
    else
    {
        val1=val.value;
        val.value=c + " " +val1;
        let x=val1*(3.14/180);
        auto_val.value=Math.cos(x);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function tan(t)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the tan() button")
    } 
    else
    {
        val1=val.value;
        val.value=t + " " +val1;
        let x=val1*(3.14/180);
        auto_val.value=Math.tan(x);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function log(l)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=l + ' ' + val1;
        auto_val.value=Math.log10(val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function pi(p)
{
    val.value=p;
    auto_val.value= Math.PI; 
    value1=auto_val.value;
    value2=val.value;
    history_val.value+=value2 + " = " + value1 + "\n \n";
    history_val1.value+=value2 + " = " + value1 + "\n \n";
}

function x_pow_2()
{
    val1=val.value;
    val.value=val1 + '^' + 2;
    auto_val.value=Math.pow(val1 , 2);
    value1=auto_val.value;
    value2=val.value;
    history_val.value+=value2 + " = " + value1 + "\n \n";
    history_val1.value+=value2 + " = " + value1 + "\n \n";
}
function root_x(r)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=r + '' + val1;
        auto_val.value=Math.sqrt(val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function ten_pow_x()
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=10 + '^' + val1;
        auto_val.value=Math.pow(10 , val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function ctb_root_x(c1)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=c1 + '' + val1;
        auto_val.value=Math.cbrt(val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function two_pow_x()
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=2 + '^' + val1;
        auto_val.value=Math.pow(2 , val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}
function x_fact()
{
    val1=val.value;
    let fac=1;
    val.value=val1 + '!' ;
    if(val1 == 0)
    {
        auto_val.value=8;
        value1=auto_val.value;
    }
    else if(val1 == 1)
    {
        auto_val.value=9;
        value1=auto_val.value;
    }
    else if(val1 >= 1)
    {
        for(let i=1 ; i<=val1 ; i++)
        {
            fac=fac*i;
        }
        auto_val.value=fac;
        value1=auto_val.value;
    }
    value2=val.value;
    history_val.value+=value2 + " = " + value1 + "\n \n";
    history_val1.value+=value2 + " = " + value1 + "\n \n";
}
function ln(i)
{
    val1=val.value;
    val.value=i + ' ' + val1;
    auto_val.value=Math.log(val1);
    value1=auto_val.value;
    value2=val.value;
    history_val.value+=value2 + " = " + value1 + "\n \n";
    history_val1.value+=value2 + " = " + value1 + "\n \n";
}
function x_inv(i)
{
    if(val.value == 0 && check == "p")
    {
        alert("Please first Enter the value \nThen Press the button")
    } 
    else
    {
        val1=val.value;
        val.value=i + val1;
        auto_val.value=(1/val1);
        value1=auto_val.value;
        value2=val.value;
        history_val.value+=value2 + " = " + value1 + "\n \n";
        history_val1.value+=value2 + " = " + value1 + "\n \n";
    }
}

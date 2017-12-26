

$(document).ready(function(){
   

    $("button").click(function(){
        var account = $("#txt_login").val();
        var password = $("#txt_pwd").val();

        if((CheckTaiwanID(account) == true) && (CheckPassWord(password) == true))
        {
            alert("登入成功");
    
        }
        else
        {
            alert("帳號 & 密碼錯誤 ");
        }

        
    });

    
});


function CheckTaiwanID( userid ) { //身份證檢查函式
    var reg=/^[A-Z]{1}[1-2]{1}[0-9]{8}$/;  //身份證的正規表示式
    if( reg.test( userid ) ) 
    {
        var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //把A取代成10,把B取代成11...的作法
        var ct = ["10","11","12","13","14","15","16","17","34","18","19","20","21",
                       "22","35","23","24","25","26","27","28","29","32","30","31","33"];
        var i = s.indexOf(userid.charAt(0));
        var tempuserid = ct[i] + userid.substr(1, 9); //若此身份證號若是A123456789=>10123456789
        var num = tempuserid.charAt(0)*1;

        for( i=1 ; i<=9 ; i++ ) 
        {
        num += tempuserid.charAt(i)*(10-i);
        }

        num += tempuserid.charAt(10)*1;
 
        if( (num%10)==0 ) 
        {
           return true;
        }
        else 
        {
           return false;
        }
    }
    else 
    {
        return false;
    }
}


function CheckPassWord( password )
{
     
    var reg = password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])).{8,20}/);
    var pwd = password.split("");


    if(reg == null)
    {
        return false;
    }
    else
    {
        return true;
    }
     
  
}







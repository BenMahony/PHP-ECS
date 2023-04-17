var url = "http://localhost/phpecs/";


function registerbutton(){
    document.getElementById("registerbuton").disabled = true;

    var data = $("#bregisterform").serialize();
    $.ajax({
        type : "POST",
        url : url + "/inc/register.php",
        data : data,
        success : function(result){
            if($.trim(result) == "empty"){alert("boş alan bırakmayınız");
            document.getElementById("registerbuton").disabled = false;}
            else if($.trim(result) == "format")  {alert("eposta formatı hatalı");
            document.getElementById("registerbuton").disabled = false;}
            else if($.trim(result) == "match")   {alert("şifreler uyuşmadı");
            document.getElementById("registerbuton").disabled = false;}
            else if($.trim(result) == "already") {alert("bu eposta zaten kayıtlı");
            document.getElementById("registerbuton").disabled = false;}
            else if($.trim(result) == "error")   {alert("bir hata oluştu");
            document.getElementById("registerbuton").disabled = false;}
            else if($.trim(result) == "ok")      {alert("üyelik oluşturuldu");
            window.location.href = url;}
        }
    });

}

function loginbutton() {

    document.getElementById("loginbuton").disabled = true;

    var data = $("#bloginform").serialize();
    $.ajax({
        type    : "POST",
        url     : url + "inc/login.php",
        data    : data,
        success : function(result) {
            if($.trim(result) == "empty"){
                alert('boş alan var');
                document.getElementById("loginbuton").disabled = false;
            }else if($.trim(result) == "error"){
                alert('ad, eposta veya şifre yanlış');
                document.getElementById("loginbuton").disabled = false;
            }else if($.trim(result) == "passive"){
                alert('üyelik pasiv durumda');
                document.getElementById("loginbuton").disabled = false;
            }else if($.trim(result) == "ok"){
                alert('giriş başarılı');
                window.location.href = url;
            }
        }
    })
}
$(document).ready(function(){

    $('#btn_aleatorio').click(function(){
        generarUusario();
        generarContraseña();
    });
    $('#btn_registro').click(function(){
        recolector = "bandera_mail=" +$('#us_mail').val()+
                        "&bandera_password=" + $('#us_password').val();
        $.ajax({
            type: 'POST', 
            url: './control/control_registro.php',
            data: recolector,
            success: function(resultado){
                if (resultado == 1) {
                    alert("Conexion con exito");
                    console.log(resultado);
                    return false;
                }else{
                    alert("Conexion fallida");
                    console.log(resultado);
                    return false;
                }
            }
        });
    });
});
function generarContraseña(){
    $.ajax({
        type: 'POST',
        url:'./control/control_contrasena.php',
        success: function(response){
            $("#us_password").val(response);
        }
    })
}
function generarUusario(){
    var usuario = ["Ulises","Alejandro","Ivonne","Yael","Pablo","Sonia","Armando","Emily","Margarita","Sandra"];
    var aleatorio= Math.floor(Math.random()*9);
    var us=usuario[aleatorio];
    var tamano = us.length;
    console.log(tamano);
    console.log(us);
    if (tamano == 10) {
        
    }else{
        k=10 - tamano;
        console.log(k);
        if (k==1) {
            us=us+Math.floor((Math.random()*10)+1);
        }else if(k==2){
            us=us+Math.floor((Math.random()*100)+1);
        }else if(k==3){
            us=us+Math.floor((Math.random()*1000)+1);
        }else if(k==4){
            us=us+Math.floor((Math.random()*10000)+1);
        }else if(k==5){
            us=us+Math.floor((Math.random()*100000)+1);
        }else if(k==6){
            us=us+Math.floor((Math.random()*1000000)+1);
        }
    }
    recolector = "usuarios=" + us ;
    $.ajax({
        type: 'POST',
        data: recolector,
        url:'./control/control_usuario.php',
        success: function(response){
            $("#us_mail").val(response);
            return false;
        }
    });
}
$(document).ready(function(){

    $('#btn_login').click(function(){
        if ($('#mail_login').val() == "") {
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Nombre esta vacio"',

                footer:"Powered by Mich"

              });
        }else if($('#password_login').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Apellido Paterno esta vacio"',

                footer:"Powered by Mich"

              });
        }else{
            window.location = "entrada";
        }
       recolector = "bandera_usuario=" +$('#mail_login').val()+
                        "&bandera_contraseña=" + $('#password_login').val();
        
        $.ajax({
            type: 'POST', 
            url: './control/control_login.php',
            data: recolector,
            success: function(resultado){
                if (resultado == 1) {
                    alert("Hola bienvenido");
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

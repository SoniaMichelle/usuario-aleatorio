$(document).ready(function(){

    $('#btn_registro').click(function(){
        if ($('#us_mail').val() == "") {
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Nombre esta vacio"',

                footer:"Powered by Mich"
              });
              return false;
        }else if($('#us_password').val() == ""){
            Swal.fire({

                imageUrl: "./raw/img/error.png",

                title: "Upps!",

                text:'"Apellido Paterno esta vacio"',

                footer:"Powered by Mich"

              });
              return false;
        }else{
            Swal.fire({

                imageUrl: "./raw/img/bien.png",

                title: "Registro existoso!",

                text:'"Bien"',

                footer:"Powered by Mich"

              });
        }
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

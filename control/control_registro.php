<?php
    

    require_once '../app/conexion.php';

    $conexion = conexion();

    $datosrecibidos = array (
        
    $nombre = $_POST['bandera_mail'],
    $paterno = $_POST['bandera_password']
    );
    //                            nombre de la tabla
    $query_insert = "INSERT INTO registro_usuario(us_mail,us_password)values(?,?)"; 
    $insert_preparado = $conexion->prepare($query_insert);
    $insert_preparado->bind_param('ss', $datosrecibidos[0],$datosrecibidos[1]); 

    echo $insert_preparado -> execute();
    $insert_preparado -> close();

?>
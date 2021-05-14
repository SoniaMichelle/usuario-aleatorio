<?php
session_start();
require_once "../app/conexion.php";

$objeto_conexion=conexion();
$usuario_recibido = $_POST['bandera_usuario'];
$password_recibido = $_POST['bandera_contraseña'];


$query_de_busqueda = "SELECT * FROM registro_usuario WHERE us_mail='$usuario_recibido' AND us_password='$password_recibido' ";

$resultado_del_query = mysqli_query($objeto_conexion, $query_de_busqueda);

if(mysqli_num_rows($resultado_del_query)>0){
  echo 1;
}else{
  
}

?>
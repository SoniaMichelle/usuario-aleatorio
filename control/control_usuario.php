<?php
session_start();
$usuario = $_POST['usuarios'];
$_SESSION['usuario_aleatorio']=$usuario;
echo $usuario;

?>
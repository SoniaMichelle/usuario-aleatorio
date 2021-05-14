<?php
$contrasena ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
$logintud = 10;
echo substr(str_shuffle($contrasena), 0, $logintud);
?>
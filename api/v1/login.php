<?php 
require 'initialize.php';

$table = 'admins';
$json_fields = [];

$data = json_decode(file_get_contents("php://input")); // Get raw posted data
$username = $data->username;
$passwd = sha1($data->passwd);
$res = json_encode(selectRecord($table, $json_fields, "username=:username AND passwd=:passwd", ['username' => $username, 'passwd' => $passwd]));

print_r($res);
?>

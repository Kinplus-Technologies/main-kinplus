<?php 
	require_once('initialize.php');
	$res = '';

	$data = json_decode($_POST['data']);
	$image_name = $data->filename;
	$upload_path="../../uploads/interns/";

		if($image_name){
			@unlink($upload_path.$image_name);
		}
	
  $extension = strtolower(pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION));
  $filename = uuid().".".$extension;
  $filepath = $upload_path.$filename;	
  if($res = move_uploaded_file($_FILES['file']['tmp_name'], $filepath)){
		echo json_encode(['filename' => $filename]);
	} else {
		echo json_encode('Unable To Upload File');
		// var_dump($res);
	}
	
?>
<?php 
require 'initialize.php';

$method = $_SERVER['REQUEST_METHOD'];
$table = 'contacts';
$json_fields = [];
$res = '';
switch($method){
	case 'GET':
		$u = isset($_GET['u']) ? $_GET['u'] : '' ;
		$count = isset($_GET['count']) ? $_GET['count'] : '' ;
		if($u==2){
			if($count == 1){
				echo json_encode(countRecords($table));
			}else {
				echo json_encode(selectRecords($table, $json_fields, "1 ORDER BY created_at ASC"));
			}
		} else{
			echo json_encode([]);
		}
		break;
		
	case 'POST':
		$data = json_decode(file_get_contents("php://input"), true); 

		$id = $data['id'] = uuid();

			$column = "id, fullname, email, phoneno, subject, msg";

			$value = ":id, :fullname, :email, :phoneno, :subject, :msg";

			$res = insertRecord($table, $column, $value, $data);
            
			echo $res ? json_encode(['ok' => 1]) : json_encode(['ok' => 0]);
	 
		break;

	case 'PUT': 
	case 'PATCH': 
		$data = json_decode(file_get_contents("php://input"), true);
		$id = $data['id'];
		$res = '';
		extract($data);
		switch ($data['type']) {
			
			case 'treated':
				$column = "treated=:treated, treated_by=:treated_by";

				$update_data=['id'=>$id, 'treated'=>$treated, 'treated_by'=>$treated_by];

				$res = updateRecord($table, $column, "id=:id", $update_data);
				break;			
			default:				
				break;
		}
				
		echo $res ? json_encode(['ok' => 1]) : json_encode(['ok' => 0]);
		break;

	case 'DELETE':		
		$id = $_SERVER['QUERY_STRING'];			
		$res = deleteRecord($table, "id= :id",['id'=>$id]) ;
		echo $res ? json_encode(['ok' => 1]) : json_encode(['ok' => 0]);
		break;
	default:
		break;
}
?>
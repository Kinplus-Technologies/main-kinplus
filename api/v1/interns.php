<?php 
require 'initialize.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$mail     = new PHPMailer();

$method = $_SERVER['REQUEST_METHOD'];
$table = 'interns';
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
				echo json_encode(selectRecords($table, $json_fields, "1 ORDER BY created_on ASC"));
			}
		} else{
			echo json_encode([]);
		}
		break;
		
	case 'POST':
		$data = json_decode(file_get_contents("php://input"), true); 
		$email = $data['email'];
		$phoneno = $data['phoneno'];
		$res2 = selectRecord($table, [], "email=:email OR phoneno=:phoneno", ['email' => $email, 'phoneno' => $phoneno], "*");
			if ($res2) {
				if ($email == $res2['email']) {
					echo json_encode('A user with this email has already applied.');
				}elseif ($phoneno == $res2['phoneno']) {
					echo json_encode('A user with this phone number has already applied');					
				}
				return;
			}
		$id = $data['id'] = uuid();
/* process application no */
		$last_no = selectRecord('setup')['interns_last_no']; //select last number
		$last_no += 1; // increase last number
		$application_no = $data['application_no'] = 'KP21/B2'.$last_no; // generate application number e.g KP21/B21
		updateRecord('setup', "interns_last_no=:last_no", 1, ['last_no' => $last_no]); // update last number
			$column = "id,application_no,surname,firstname,middlename,gender,dob,email,phoneno,program,discipline,qualification,religion,resident_address,passport,cv,laptop,available";

			$value = ":id, :application_no, :surname, :firstname, :middlename, :gender, :dob, :email, :phoneno, :program, :discipline, :qualification, :religion, :resident_address, :passport, :cv, :laptop, :available";

			$res = insertRecord($table, $column, $value, $data);
		/* 		if ($res) {
					$mailsent = '';
					$maildata = mail_applicant($mail, $data);
					if($maildata['mailsent']){
						$mailsent="Email Sent";
					}else{
						$mailsent="Email Failed";
					}
					// $smsdata = message_applicant($applicant)?  'Success Messaging' : 'sms failed';				
				} */
            // 'message' => $mailsent,
			echo $res ? json_encode(['ok' => 1, 'application_no' => $application_no]) : json_encode(['ok' => 0]);
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
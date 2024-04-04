<?php
    header('Content-Type: application/json');
    $con = new mysqli('localhost','root','King','Guvi');
    if($con->connect_errno){
        echo $con->connect_error;
        die();
    }
    else{
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            $rawData = file_get_contents('php://input');
            parse_str($rawData,$dataArray);
            $jsonData = json_encode($dataArray);
            $email = $dataArray['email'];
            $password = $dataArray['password'];

            $flag = 0;
            $name = '';
            $stmt = "select * from users";
            $resData = $con->query($stmt);
            if($resData->num_rows>0){
                while($row = $resData->fetch_assoc()){
                    if(($email==$row["name"] && $password==$row["password"]) || ($email==$row["email"] && $password==$row["password"])){
                        $flag = 1;
                        $name = $row["name"];
                        $email = $row["email"];
                        $contact = $row["mobile"];
                    }
                }
                if($flag==1){
                    $response = array(
                        'status' => 'success',
                        'user' => $name,
                        'email' => $email,
                        'contact' => $contact,
                        'password' => $password,
                        'message' => 'User Exists',
                        'error' => 'No Error Encountered'
                    );
                    echo json_encode($response);
                }
                else{
                    $response = array(
                        'status' => 'error',
                        'email' => $email,
                        'password' => $password,
                        'message' => 'User does not Exists or Invalid UserName or Password'
                    );
                    echo json_encode($response);
                }
            }
            else{
                $response = array(
                    'status' => 'error',
                    'email' => $email,
                    'password' => $password,
                    'message' => 'No Datas Found'
                );
                echo json_encode($response);
            }
            
        }
        else{
            echo "Request Method was not POST..!\n";
        }
    }
?>

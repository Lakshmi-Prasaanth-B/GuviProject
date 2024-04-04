<?php
    header('Content-Type: application/json');
    $con = new mysqli('localhost','root','King','Guvi');
    if($con->connect_errno){
        echo $con->connect_error;
        die();
    }
    else{
        // echo connection
        if($_SERVER["REQUEST_METHOD"]=="POST"){
            $rawData = file_get_contents('php://input');
            parse_str($rawData,$dataArray);
            $jsonData = json_encode($dataArray);
            $name = $dataArray['name'];
            $email = $dataArray['s_email'];
            $contact = $dataArray['s_mobile'];
            $password = $dataArray['s_password'];
            $checkPassword = $dataArray['s_check_password'];
            if($password == $checkPassword){
                $flag = 0;
                $e = 1;
                $c = 1;
                $stmt = "select * from users";
                $resData = $con->query($stmt);
                if($resData->num_rows>0){
                    while($row = $resData->fetch_assoc()){
                        if($email==$row["email"]){
                            $e = 0;
                        }
                        if($contact==$row["mobile"]){
                            $c = 0;
                        }
                        if($e==0 && $c==0){
                            break;
                        }
                    }
                    if($e==1 && $c==1){
                        // $mysqli -> autocommit(FALSE);
                        $insertQry = 'insert into users (name,email,mobile,password) values ("'.$name.'","'.$email.'","'.$contact.'","'.$password.'")';
                        $con -> query($insertQry);
                        if(!$con -> commit()){
                            $response = array(
                                'status' => 'error',
                                'message' => 'Unable to Add User'
                            );
                            echo json_encode($response);
                        }
                        else{
                            $response = array(
                                'status' => 'success',
                                'user' => $name,
                                'message' => 'User Added Successfully'
                            );
                            echo json_encode($response);
                        }
                    }
                    else if($e==0){
                        $response = array(
                            'status' => 'error',
                            'message' => 'Email Already Exists'
                        );
                        echo json_encode($response);
                    }
                    else if($c==0){
                        $response = array(
                            'status' => 'error',
                            'message' => 'Mobile Number Already Exists'
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
                $response = array(
                    'status' => 'error',
                    'message' => 'Password does not match'
                );
                echo json_encode($response);
            }
        }
        else{
            echo "Request Method was not POST..!\n";
        }
    }
    ?>

<?php
    $con = new mysqli('localhost','root','King','Guvi');
    if($con->connect_errno){
        echo $con->connect_error;
        die();
    }
    else{
        echo "Database Connnected\n";
        
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $name = $_POST['name'];
            $s_email = $_POST['s_email'];
            $s_mobile = $_POST['s_mobile'];
            $s_password = $_POST['s_password'];
            $s_check_password = $_POST['s_check_password'];
            
            $flag = 0;
            $get = "select * from users";
            $res = $con->query($get);
            if($res->num_rows > 0){
                if($s_password===$s_check_password){

                    while($row = $res->fetch_assoc()){
                        if($s_email==$row["email"]){
                            $flag = 1;
                            echo "Email already Exists";
                            header("Location: ../register.html?email=true");
                            exit();
                        }
                        else if($s_mobile==$row["mobile"]){
                            $s_msg = $_GET['msg'];
                            $flag = 1;
                            echo "Mobile Number already Exists";
                            header("Location: ../register.html?number=true");
                            die();
                        }
                    }
                    if($flag==0){
                        $stmt = "insert into users(name, email, mobile, password) values('$name','$s_email','$s_mobile','$s_password')";
                        if($con->query($stmt)){
                            echo "Data Inserted Successfully";
                            header("Location: ../login.html",true);
                        }
                        else{
                            echo "Data Insert Failed!";
                        }
                    }
                }
                else{
                    echo '<script>alert("Password does not match")</script>';
                }
            }
            else{
                $stmt = "insert into users(name, email, mobile, password) values('$name','$s_email','$s_mobile','$s_password')";
                if($con->query($stmt)){
                    echo "Data Inserted Successfully";
                    header("Location: ../login.html",true);
                }
                else{
                    echo "Data Insert Failed!!";
                }
            }
        }
        else{
            echo "Request method was not Post<br>";
            echo "Request Method : ". $_SERVER["REQUEST_METHOD"];
            var_dump($_POST);
        }
    }

?>



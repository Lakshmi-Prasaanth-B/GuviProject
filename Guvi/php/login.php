<?php
    $con = new mysqli('localhost','root','password','Guvi');
    if($con->connect_errno){
        echo $con->connect_error;
        die();
    }
    else{
        
        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $email = $_POST['email'];
            $password = $_POST['password'];
            $flag = 0;
            $stmt = "select * from users";
            $res = $con->query($stmt);
            if($res-> num_rows > 0){
                while($row = $res->fetch_assoc()){
                    if(($email==$row["email"] && $password==$row["password"]) || ($email==$row["name"] && $password==$row["password"])){
                        $flag = 1;
                    }
                }
                if($flag==1){
                    echo "success";
                }
                else{
                    echo 'not exist';
                }
            }
            else{
                echo "0 Results Found...";
            }
        }
        else{
            echo "Request method was not POST<br>";
            echo "Request Method : ". $_SERVER["REQUEST_METHOD"];
            var_dump($_POST);
        }
    }

?>



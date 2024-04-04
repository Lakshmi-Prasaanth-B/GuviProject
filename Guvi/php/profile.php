<?php
    $host = 'localhost';
    $port = '27017';
    $name = 'Guvi';

    try{
        $mongoClient = new MongoDB\Client("mongodb://$host:$port");
        $database = $mongoClient->$name;
        echo "Connected to MongoDB Server successfully";
    }
    catch(MongoDB\Driver\Exception\Exception $e){
        echo "Error Connecting to MongoDb Server: ".$e->getMessage();
        exit;
    }
?>

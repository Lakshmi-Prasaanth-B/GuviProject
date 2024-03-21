<?php
    require 'vender/autoload.php';
    $mongoClient = new MongoDB\Client("mongodb://localhost:27017");
    $database = $mongoClient->selectDatabase('users');
    $collection = $database->selectCollection('profiles');
    $result = $collection->find();
    foreach($result as $document){
        echo $document;
    }
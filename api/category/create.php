<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../objects/category.php';

$database = new Database();
$db = $database->getConnection();

$category = new Category($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));


$category->name = $data->name;
$category->description = $data->description;
$category->created = date('Y-m-d H:i:s');

if ($category->create()) {
	# code...
	echo '{';
        echo '"message": "Category was created."';
    echo '}';
}else{
	echo '{';
        echo '"message": "Unable to create category."';
    echo '}';
}

?>
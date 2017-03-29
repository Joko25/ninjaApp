<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/category.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$category = new Category($db);
 
// set ID property of product to be edited
$category->id = isset($_GET['id']) ? $_GET['id'] : die();
 
// read the details of product to be edited
$category->readOne();
 
// create array
$product_arr = array(
    "id" =>  $category->id,
    "name" => $category->name,
    "description" => $category->description
 
);
 
// make it json format
print_r(json_encode($product_arr));
?>
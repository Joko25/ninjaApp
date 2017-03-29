<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/category.php';

$database = new Database();
$db = $database->getConnection();

$category = new Category($db);

$stmt = $category->read();
$num = $stmt->rowCount();

if ($num > 0) {
	# code...

	$category = array();
	$category["records"] = array();

	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		extract($row);

		$category_item = array(
			"id"=>$id,
			"name"=>$name,
			"description"=>$description
		);

		array_push($category["records"], $category_item);
	}

	echo json_encode($category);
}else{
	echo json_encode(
        array("message" => "No category found.")
    );
}
?>
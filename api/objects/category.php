<?php
/**
* 
*/
class Category{

	// database connection and table name
	private $conn;
	private $table_name = "categories";
	
	// object properties
	public $id;
	public $name;
	public $description;
	public $created;
	public $modified;

	function __construct($db)
	{
		# code...
		$this->conn = $db;
	}

	function read(){
		$query = "SELECT * FROM ".$this->table_name." order by created desc";

		$stmt = $this->conn->prepare($query);

		$stmt->execute();

		return $stmt;
	}

	function create(){
		$query = "INSERT INTO ".$this->table_name." set name=:name, description=:description, created=:created";

		$stmt = $this->conn->prepare($query);

		// sanitize
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->description=htmlspecialchars(strip_tags($this->description));
        $this->created=htmlspecialchars(strip_tags($this->created));

        // bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":created", $this->created);

        if($stmt->execute()){
            return true;
        }else{
            return false;
        }
	}

	function readOne(){
		$query = "SELECT * FROM " . $this->table_name . " 
                WHERE
                    id = ?
                LIMIT
                    0,1";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $this->name = $row['name'];
        $this->description = $row['description'];
        $this->id = $row['id'];

	}
}
?>
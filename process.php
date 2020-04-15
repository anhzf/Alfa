<?php
require_once 'connect.php';

	function decodeAll($val){
		if (is_array($val)) {
			array_walk($val, 'decodeAll');
		} elseif (is_string($val)) {
			if (preg_match("/\[(.*)\]/", $val) xor preg_match("/\{(.*)\}/", $val)) {
				return json_decode($val);
			} else {
				return $val;
			}
		}
	}


	class productInfo extends connect {
		
		function __construct ($db) {
			$this->connect($db);
		}

		public function get($prodID) {
			$query = $this->conn->prepare('SELECT * FROM `products_tbl` WHERE `product_id` = ?');
			$query->bind_param('i', $prodID);
			$query->execute();
			$result = $query->get_result();
			return $result;
		}

		function __destruct () {
			$this->conn->close();
		}
	}



if (isset($_GET)) {
	if (isset($_GET['productInfo'])) {
		$product_info = new productInfo('alfa_store');
		$result = $product_info->get($_GET['productInfo'])->fetch_assoc();
		$result['product_img'] = json_decode($result['product_img']);
		$result['product_label'] = json_decode($result['product_label']);

		print_r(json_encode($result));
	}
}
?>
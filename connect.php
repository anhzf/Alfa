<?php

	[
		'Databases' => $db,
		'Path' => $path
	] = parse_ini_file('conf.ini', true);


	/**
	 * CONNECT
	 */
	class connect {
		public function connect($dbName) {
			global $db;

			[
				'host' => $host,
				'user' => $user,
				'pass' => $pass,
			] = $db;

			$this->conn = new mysqli($host, $user, $pass, $dbName);

			return $this->conn;
		}
	}

	
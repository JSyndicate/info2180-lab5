<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$country=$_GET['country'];

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE %country%");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<table>
  <tr>
    <th scope="col">Country Name</th>
    <th scope="col"> Continent</th>
    <th scope="col">Independence Year</th>
    <th scope="col">Head of State</th>
</tr>
</table>
    
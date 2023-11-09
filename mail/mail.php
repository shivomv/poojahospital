<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $message = $_POST['message'];

    // Establish a connection to the MySQL database
    $servername = "your_mysql_server";
    $username = "your_mysql_username";
    $password = "your_mysql_password";
    $dbname = "your_database_name";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO your_table_name (name, phone, age, gender, message) VALUES ($name, $phone, $age, $gender, $message)");
    $stmt->bind_param("ssiss", $name, $phone, $age, $gender, $message);

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "error";
    }

    $stmt->close();
    $conn->close();
} else {
    // Handle the case where the form wasn't submitted properly
    header("Location: error.html");
}
?>

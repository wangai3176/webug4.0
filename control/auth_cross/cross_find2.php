<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET['id'])) {
    if (!empty($_GET['id'])) {
        $id = $_GET['id'];
        $sql = "SELECT id, username, password FROM user_test WHERE id = {$id}";
        $res = $dbConnect->query($sql);
        while ($row = mysqli_fetch_assoc($res)) {
            $user = $row['username'];
            echo "I am :{$user}";
        }
    }
}

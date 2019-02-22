<?php

/**
 * payload 1' or 1=1 #
 */
require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_POST["username"]) && isset($_POST['password'])) {
    if (!empty($_POST['username']) && !empty($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM user WHERE username = '{$username}' AND password = '{$password}'";
        $res = $dbConnect->query($sql);
        if (mysqli_num_rows($res) >=1 ){
            $s = "SELECT * FROM env_list WHERE envName LIKE '%万能密码登陆%'";
            $r = $dbConnect->query($s);
            $row = mysqli_fetch_assoc($r);
            echo "flag:  ".$row['envFlag'];die();
        }
    }
}
require_once TPMELATE."/universalpasswd.html";



<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    if (!empty($_POST['username']) && !empty($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $sql = "SELECT id, username, password FROM user_test WHERE username = '{$username}' AND password = '{$password}'";
        $res = $dbConnect->query($sql);
        while ($row = mysqli_fetch_assoc($res)) {
            $id = $row['id'];
            header("Location:/pt_env/control/auth_cross/cross_auth_passwd2.php?id={$id}");
        }
    }
}



require_once TPMELATE."/cross_auth_passwd.html";



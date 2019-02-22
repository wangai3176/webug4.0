<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_POST['oldPassword']) && isset($_POST['newPassword']) && isset($_GET['id'])) {
    if (!empty($_POST['oldPassword']) && !empty($_POST['newPassword']) && !empty($_GET['id'])) {
        $oldPassword = $_POST['oldPassword'];
        $newPassword = $_POST['newPassword'];
        $id = $_GET['id'];

        $sql = "UPDATE user_test SET password = '{$newPassword}' WHERE id = {$id}";
        $row = $dbConnect->query($sql);
        if ($row) {
            echo "<script>alert('ok')</script>";
        }

    }
}


require_once TPMELATE."/cross_auth_passwd_2.html";



<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
setcookie("flag", "", time() - 1);
if (isset($_GET["id"])) {
    if (!empty($_GET["id"])) {
        $id = strtolower($_GET['id']);
        if (strstr($id, 'script')) {
            header("Content-type:text/html;charset=utf-8");
            echo "<script>alert('请不要包含恶意函数')</script>";exit();
        }elseif (strstr($_GET['id'], 'alert')){
            $sql = "SELECT * FROM env_list WHERE id = 9";
            $res = $dbConnect->query($sql);
            $row = mysqli_fetch_assoc($res);
            setcookie("flag", $row['envFlag']);
        }

    }
}
require_once TPMELATE."/xss_1.html";



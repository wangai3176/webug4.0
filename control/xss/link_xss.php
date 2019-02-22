<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
setcookie("flag", "", time() - 1);
if (isset($_GET["id"])) {
    if (!empty($_GET["id"])) {
        $id = strtolower($_GET['id']);
        $filter = array('on', 'script');
        if (strstr($id, $filter)) {
            header("Content-type:text/html;charset=utf-8");
            echo "<script>alert('请不要包含恶意函数')</script>";exit();
        }

    }
}
require_once TPMELATE."/xss_1.html";



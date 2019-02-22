<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
setcookie("xss2_flag", "", time() - 1);
if (isset($_POST["message"])) {
    if (!empty($_POST["message"])) {
        $filter = array('insert', 'update', 'select', 'delete', 'from');
        $message = strtolower(trim($_POST["message"]));
        $userId = $_SESSION['user'];
        if (in_array($message, $filter)) {
            echo "<script>alert('Please don\'t try to deposit dangerous characters')</script>";exit();
        }else{
            if (strstr($message, "alert")) {
                $s = "SELECT * FROM env_list WHERE id = 10";
                $r = $dbConnect->query($s);
                $w = mysqli_fetch_assoc($r);
                setcookie("xss2_flag", $w['envFlag']);
            }
            $sql = "INSERT INTO storage_xss(content, userId) VALUES('{$message}', '{$userId}')";
            $res = $dbConnectWidth->query($sql);


        }

    }
}

$sql1 = "SELECT * FROM storage_xss WHERE userId = '".$_SESSION['user']."'";
$res1 = $dbConnectWidth->query($sql1);
require_once TPMELATE."/xss_2.html";



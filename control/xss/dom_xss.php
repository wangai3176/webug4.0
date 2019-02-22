<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
setcookie("flag", "", time() - 1);
if (isset($_POST["search"])) {
    if (!empty($_POST['search'])) {
        if (strstr($_POST['search'], 'alert')){
            $sql = "SELECT * FROM env_list WHERE envName LIKE '%DOM型xss%'";
            $res = $dbConnect->query($sql);
            $row = mysqli_fetch_assoc($res);
            setcookie("flag", $row['envFlag']);
        }
    }
}
require_once TPMELATE."/dom_xss.html";



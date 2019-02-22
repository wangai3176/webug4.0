<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["id"])) {
    if (!empty($_GET["id"])) {
        $sql = "SELECT * FROM sqlinjection WHERE id = '{$_GET['id']}'";
        $res = $dbConnect->query($sql);

    }
}
require_once TPMELATE."/bool-injection_1.html";



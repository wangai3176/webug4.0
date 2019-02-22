<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["id"])) {
    if (!empty($_GET["id"])) {
        // 过滤引号
        $id = addslashes($_GET['id']);
        $dbConnectWidth->query("SET names 'gbk'");
        $sql = "SELECT * FROM sqlinjection WHERE id = '{$id}'";
        $res = $dbConnectWidth->query($sql) or die("Invalid query: " . mysqli_stmt_error(). $sql);
    }
}
require_once TPMELATE."/manifest-error-injection.html";



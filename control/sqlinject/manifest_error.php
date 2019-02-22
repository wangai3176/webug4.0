<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["id"])) {
    if (!empty($_GET["id"])) {
        $sql = "SELECT * FROM sqlinjection WHERE id = '{$_GET['id']}'";
        $res = $dbConnect->query($sql) or die("Invalid query: " . mysqli_stmt_error(). $sql);

    }
}
require_once TPMELATE."/manifest-error-injection.html";



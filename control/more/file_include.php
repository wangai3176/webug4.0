<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["filename"])) {
    if (!empty($_GET["filename"])) {
        $path = $_GET['filename'];
        require_once $path;
    }
}



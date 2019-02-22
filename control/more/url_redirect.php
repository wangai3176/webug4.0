<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["url"])) {
    if (!empty($_GET["url"])) {
        $url = $_GET['url'];
        header("Location: {$url}");
    }
}
require_once TPMELATE."/url_redirect.html";



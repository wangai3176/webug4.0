<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET["url"])) {
    if (!empty($_GET["url"])) {
        $url = $_GET['url'];
    }
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_exec($ch);

    curl_close($ch);
}


?>
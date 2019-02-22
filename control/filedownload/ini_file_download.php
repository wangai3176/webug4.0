<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
if (isset($_GET["file"])) {
    if (!empty($_GET["file"])) {
        $filePath = ROOTPATH. $_GET['file'];
        $fileName = substr($filePath, -4);
        if (file_exists($filePath)) {
            $file = fopen($filePath, 'rb');
            Header ( "Content-type: application/octet-stream" );
            Header ( "Accept-Ranges: bytes" );
            Header ( "Accept-Length: " . filesize ( $filePath ) );
            header('Content-Disposition: attachment; filename=a'.$fileName);
            echo fread ( $file, filesize ( $filePath ) );
            fclose ( $file );
            exit ();
        }

    }
}
require_once TPMELATE."/file_download.html";



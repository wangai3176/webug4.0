<?php


require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if ($_FILES['file']['error']) {
    die();
}
if ($_FILES['file']) {
    $arr = $_FILES['file'];
    $file_ext = trim(strtolower(strrchr($arr['name'], ".")));
    if (strstr($file_ext, "php")) {
        $file_ext = str_replace("php", "", $file_ext);
    }
    if (file_exists(TPMELATE."/upload/".$arr['name'])){
        echo "<script>alert('该文件已经存在')</script>";
    } else{
        $filename = iconv("UTF-8","gb2312",TPMELATE."/upload/".time().$file_ext);
        move_uploaded_file($arr["tmp_name"],$filename);
        echo $filename;die();
    }
}
require_once TPMELATE."/upload_file_1.html";



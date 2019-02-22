<?php
require_once "dbConfig.php";

if (!$GLOBALS['sysDbConnect']) {
    try{
        $sysConnect = new mysqli($sysHost, $sysUser, $sysPwd, $sysDatabase);
        $GLOBALS['sysDbConnect'] = $sysConnect;
        mysqli_set_charset($sysConnect, "utf8");
    } catch (Exception $e) {
        exit("数据库连接错误");
    }
}

if (!$GLOBALS['dbConnect']) {
    try{
        $connect = new mysqli($host, $user, $pwd, $database);
        $GLOBALS['dbConnect'] = $connect;
        mysqli_set_charset($connect, "utf8");

    } catch (Exception $e) {
        exit("数据库连接错误");
    }
}

if (!$GLOBALS['dbConnectWidth']) {
    try{
        $connect = new mysqli('localhost', 'root', 'root', 'webug_width_byte');
        $GLOBALS['dbConnectWidth'] = $connect;
    } catch (Exception $e) {
        exit("数据库连接错误");
    }
}
?>


<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
/**
 * SELECT * FROM sqlinjection WHERE content = '1' or if(1=1, sleep(3),1); --+'
 */
$filter = array('select', 'SELECT');
if (isset($_POST["keyWordName"])) {
    if (!empty($_POST["keyWordName"])) {
        if (in_array($_POST['keyWordName'], $filter)) {
            echo "<script>alert('请不要尝试注入危险函数')</script>";
        } else{
            $sql = "SELECT * FROM sqlinjection WHERE content = '{$_POST["keyWordName"]}'";
            $res = $dbConnect->query($sql) or die("Invalid query: " . mysqli_stmt_error(). $sql);
        }

    }
}
require_once TPMELATE."/post-injection.html";



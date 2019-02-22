<?php

require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_GET['price'])) {
    if (!empty($_GET['price'])) {
        $price = $_GET['price'];
        echo "<script>alert('您花费了{$price}元购买了商品')</script>";

    }
}


require_once TPMELATE."/cross_permission_pay.html";



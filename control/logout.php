<?php

require_once "../common/common.php";
if (isset($_SESSION['user'])) {
    unset($_SESSION['user']);
    header("Location:login.php");
}

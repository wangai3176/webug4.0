<?php
/**
 * Created by PhpStorm.


21:52
 */
require_once "common/common.php";


if (isset($_SESSION['user'])) {
    header("Location:./control/we_bug_env.php");
} else{
    header("Location:./control/login.php");
}
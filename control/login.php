<?php

require_once "../common/common.php";
require_once MODEL."/user.php";
if (isset($_SESSION['user'])) {
    header("Location:./we_bug_env.php");
} else{
    if (isset($_REQUEST['submit'])) {
        if (isset($_REQUEST['username'])) {
            if (!empty($_REQUEST['username']) && !empty($_REQUEST['password'])) {
                $username = $_REQUEST['username'];
                $password = $_REQUEST['password'];
                $sql = "SELECT * FROM user WHERE username = ? AND password = ?";
                $stmt = $sysConnect->prepare($sql);
                $stmt->bind_param("ss", $username, $password);
                $result = $stmt->bind_result($id, $username, $password, $nickname, $credit);
                $stmt->execute();
                while ($stmt->fetch()) {
                    $user = new User();
                    $user->setId($id);
                    $user->setUsername($username);
                    $user->setPassword($password);
                    $user->setNickname($nickname);
                    $user->setCreait($credit);
                    $_SESSION['user'] = $id;
                    header("Location:we_bug_env.php");
                }
            }
        }
    }
    require_once TPMELATE."/login.php";
}
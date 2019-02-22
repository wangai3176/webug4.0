<?php

require_once "../../common/common.php";
require_once("../email.class.php");

if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}

if (isset($_POST['username'])) {
    if (!empty($_POST['username'])) {
        $email_addr = $_POST['username'];
        $smtpServer="smtp.126.com";
        $smtpServerPort="25";
        $smtpUserMail="webug226@126.com";
        $mailTo=$email_addr;
        $user="webug226";
        $mailPwd="wangai123";
        $mailTitle="hello world";
        $mailContent='<h1>测试邮件</h1>';
        $mailType="HTML";
        // true表示是否身份验证
        $smtp=new \smtp($smtpServer,$smtpServerPort,true,$user,$mailPwd);
        // 是否显示调试信息
        $smtp->debug=false;
        // 返回 bool
        $state=$smtp->sendmail($mailTo,$smtpUserMail,$mailTitle,$mailContent,$mailType);
    }
}


require_once TPMELATE."/email.html";



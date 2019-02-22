<?php


require_once "../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:./login.php");
}

if (isset($_REQUEST['id']) && isset($_REQUEST['flag'])) {

    if (!empty($_REQUEST['id']) && !empty($_REQUEST['flag'])) {
        $id = intval($_REQUEST['id']);
        $flag = trim($_REQUEST['flag']);
        $sql = 'SELECT * FROM  env_list WHERE id = '.$id;
        $res = $dbConnect->query($sql);
        $row = mysqli_fetch_assoc($res);
        if ($flag == $row['envFlag']) {
            $arr = array("result"=>"success");
        } else{
            $arr = array("result"=>"error");
        }
        echo json_encode($arr);

    }
}

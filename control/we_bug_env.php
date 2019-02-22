<?php


require_once "../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:./login.php");
}

if (isset($_REQUEST['level']) && isset($_REQUEST['type'])) {
    if (!empty($_REQUEST["level"]) && !empty($_REQUEST['type'])) {
        $result = array();
        $level = $_REQUEST["level"];
        $type = $_REQUEST["type"];
        $sql = "SELECT l.id as id , l.envName as envName, l.`level`, l.type, l.envDesc as envDesc, l.envIntegration as envIntegration, l.delFlag as delFlag, l.envFlag AS envFlag, p.path AS path, p.listId AS listId FROM env_list l LEFT JOIN env_path p ON p.listId = l.id WHERE l.delFlag = 0 AND p.delFlag = 0";
        if ($level != 9) {
            $sql = $sql." AND l.level={$level}";

        }
        if ($type != 9) {
            $sql = $sql." AND l.type={$type}";
        }
        $res = $dbConnect->query($sql);
        while ($row = mysqli_fetch_assoc($res)) {
            array_push($result, $row);
        }
        echo json_encode($result);die();
    }
}


require_once TPMELATE."/table-font-list.php";


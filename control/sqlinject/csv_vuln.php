<?php
require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
?>
<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title></title>
</head>
<style>
    body{font-family: Arial, Helvetica, sans-serif;}
    table{border-collapse: collapse;
        width: 50%;
        text-align: center;}
    td,th{border:1px solid #ccc; padding: 2px 5px;}
    button{padding: 5px;}
    div {
        line-height: 3;
    }
</style>
<body>
<?php
    $conn = mysqli_connect('localhost', 'root', 'mysql', 'webug');
    if ($conn) {
        $sql = "select * from data_crud";
        $res = $conn->query($sql);
    }
//    if (isset($_POST['name'])) {
//
//        for ($i=0; $i<count($_POST['name']); $i++) {
//            $id = $_POST['id'][$i];
//            $name = $_POST['name'][$i];
//            $age = $_POST['age'][$i];
//            $email = $_POST['email'][$i];
//            $sql = 'UPDATE data_crud SET name = "'.$name.'", age = "'.$age.'" , email = "'.$email.'"   WHERE id = '.$id;
//            echo $sql.'<br>';
//            if ($conn) {
//                $res = mysqli_query($conn, $sql);
//                header("location:csv_vuln.php");
//            }
//
//        }
//    }
?>
    <table id="table">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        <?php

        if ($res) {

            while (list($id, $name, $age, $email, $deflag) = mysqli_fetch_row($res)){
                echo '<tr>';
                echo '<input type="text" hidden="hidden" name="id[]" value="'.$id.'">';
                echo '<td><div contenteditable="true">'.$name.'</div></td>';
                echo '<td><div contenteditable="true">'.$age.'</div></td>';
                echo  '<td><div contenteditable="true">'.$email.'</div></td>';
                echo '</tr>';
            }
        }
        ?>
    </table>
    <div>
        <button type="button" id="button">导出</button>
    </div>
</body>
<script src="../../../aa/html/table-to-excel.js"></script>
    <script>
        var tableToExcel = new TableToExcel();
        document.getElementById('button').onclick = function () {

            tableToExcel.render("table");

        };
        
    </script>
</html>
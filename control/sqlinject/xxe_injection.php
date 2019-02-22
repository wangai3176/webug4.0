<?php
/**
 * payload
data=%3c%3f%78%6d%6c%20%76%65%72%73%69%6f%6e%3d%22%31%2e%30%22%3f%3e%0a%3c%21%44%4f%43%54%59%50%45%20%41%4e%59%20%5b%0a%20%20%20%20%3c%21%45%4e%54%49%54%59%20%63%6f%6e%74%65%6e%74%20%53%59%53%54%45%4d%20%22%66%69%6c%65%3a%2f%2f%2f%64%3a%2f%31%2e%74%78%74%22%3e%0a%5d%3e%0a%3c%6e%6f%74%65%3e%0a%20%20%20%20%3c%6e%61%6d%65%3e%26%63%6f%6e%74%65%6e%74%3b%3c%2f%6e%61%6d%65%3e%0a%3c%2f%6e%6f%74%65%3e%20%20%20%20%20
 *
 */
require_once "../../common/common.php";
if (!isset($_SESSION['user'])) {
    header("Location:../login.php");
}
if(isset($_GET['s'])){
	show_source(__FILE__);
	exit;
}
libxml_disable_entity_loader(false);
$data = isset($_POST['data'])?trim($_POST['data']):'';
$resp = '';
if($data != false){
	$dom = new DOMDocument();
	$dom->loadXML($data, LIBXML_NOENT);
	ob_start();
	var_dump($dom);
	$resp = ob_get_contents();
	ob_end_clean();
	echo "<pre>";
    echo htmlspecialchars($resp);
    echo "</pre>";
}

require_once TPMELATE."/login_xxe.php";
?>

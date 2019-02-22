<?php

define("BASEPATH",  str_replace("\\", '/', dirname(__FILE__) ) );
define("ROOTPATH", str_replace("\\", '/', substr(BASEPATH,0,-6) ));
define("TPMELATE", ROOTPATH."template");
define("DATAPATH", ROOTPATH."data");
define("CONTROL", ROOTPATH."control");
define("MODEL", ROOTPATH."model");
define("COMMON", ROOTPATH."common");
?>
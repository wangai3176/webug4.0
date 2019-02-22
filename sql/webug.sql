/*
Navicat MySQL Data Transfer

Source Server         : local_mysql
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : webug

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-01-23 20:38:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data_crud
-- ----------------------------
DROP TABLE IF EXISTS `data_crud`;
CREATE TABLE `data_crud` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of data_crud
-- ----------------------------
INSERT INTO `data_crud` VALUES ('1', '1321a', '20', 'wangai@163.com', '1');
INSERT INTO `data_crud` VALUES ('2', '432', '23', 'null@163.com', '1');

-- ----------------------------
-- Table structure for env_list
-- ----------------------------
DROP TABLE IF EXISTS `env_list`;
CREATE TABLE `env_list` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `envName` varchar(50) DEFAULT NULL,
  `envDesc` varchar(255) DEFAULT NULL,
  `envIntegration` int(10) DEFAULT NULL COMMENT '积分',
  `delFlag` tinyint(2) DEFAULT NULL,
  `envFlag` varchar(50) DEFAULT NULL,
  `level` int(10) DEFAULT NULL COMMENT '1、入门 2、初级 3、中级 4、高级',
  `type` int(10) DEFAULT NULL COMMENT '1、注入 2、xss 3、任意下载 4、上传 5、逻辑 6、编辑器 7、其他',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of env_list
-- ----------------------------
INSERT INTO `env_list` VALUES ('1', '显错注入', '显错注入', '3', '0', 'dfafdasfafdsadfa', '1', '1');
INSERT INTO `env_list` VALUES ('2', '布尔注入', '布尔注入', '3', '0', 'fdsafsdfa', '1', '1');
INSERT INTO `env_list` VALUES ('3', '延时注入', '延时注入', '3', '0', 'gfdgdfsdg', '1', '1');
INSERT INTO `env_list` VALUES ('4', 'post注入', 'post注入', '3', '0', 'dsfasdczxcg', '1', '1');
INSERT INTO `env_list` VALUES ('5', '过滤注入', '过滤注入', '3', '0', 'safsafasdfasdf', '2', '1');
INSERT INTO `env_list` VALUES ('6', '宽字节注入', '宽字节注入', '3', '0', 'dfsadfsadfas', '1', '1');
INSERT INTO `env_list` VALUES ('7', 'xxe注入', 'xxe注入', '3', '0', 'ddfasdfsafsadfsd', '1', '1');
INSERT INTO `env_list` VALUES ('8', 'csv注入', 'csv注入', '3', '0', '', '1', '1');
INSERT INTO `env_list` VALUES ('9', '反射型xss', '反射型xss', '3', '0', 'fsdafasdfas', '1', '2');
INSERT INTO `env_list` VALUES ('10', '存储型xss', '存储型xss', '3', '0', 'asdfsdfadfsdrew', '1', '2');
INSERT INTO `env_list` VALUES ('11', '万能密码登陆', '万能密码登陆', '3', '0', 'htryyujryfhyjtrjn', '1', '1');
INSERT INTO `env_list` VALUES ('12', 'DOM型xss', 'DOM型xss', '3', '0', 'uoijkhhnloh', '1', '2');
INSERT INTO `env_list` VALUES ('13', '过滤xss', '过滤xss', '3', '0', 'poipjklkjppoi', '1', '2');
INSERT INTO `env_list` VALUES ('14', '链接注入', '链接注入', '3', '0', null, '1', '2');
INSERT INTO `env_list` VALUES ('15', '任意文件下载', '任意文件下载', '3', '0', 'sadfvgsadfhe', '1', '3');
INSERT INTO `env_list` VALUES ('16', 'mysql配置文件下载', 'mysql配置文件下载', '3', '0', 'poiplmkounipoj', '1', '3');
INSERT INTO `env_list` VALUES ('17', '文件上传(前端拦截)', '文件上传(前端拦截)', '3', '0', 'sadfsadfsdadf', '1', '4');
INSERT INTO `env_list` VALUES ('18', '文件上传(解析漏洞)', '文件上传(解析漏洞)', '3', '0', 'sdfasdfgfddst', '1', '4');
INSERT INTO `env_list` VALUES ('19', '文件上传(畸形文件)', '文件上传(畸形文件)', '3', '0', 'vnghuytiuygui', '1', '4');
INSERT INTO `env_list` VALUES ('20', '文件上传(截断上传)', '文件上传(截断上传)', '3', '0', 'sadfhbvjyyiyukuyt', '1', '4');
INSERT INTO `env_list` VALUES ('21', '文件上传(htaccess)', '文件上传(htaccess)', '3', '0', 'vbchjgwestruyi', '1', '4');
INSERT INTO `env_list` VALUES ('22', '越权修改密码', '越权修改密码', '3', '0', null, '1', '5');
INSERT INTO `env_list` VALUES ('23', '支付漏洞', '支付漏洞', '3', '0', null, '1', '5');
INSERT INTO `env_list` VALUES ('24', '邮箱轰炸', '邮箱轰炸', '3', '0', null, '1', '5');
INSERT INTO `env_list` VALUES ('25', '越权查看admin', '越权查看admin', '3', '0', null, '1', '5');
INSERT INTO `env_list` VALUES ('26', 'URL跳转', 'URL跳转', '3', '0', null, '1', '6');
INSERT INTO `env_list` VALUES ('27', '文件包含漏洞', '文件包含漏洞', '3', '0', null, '1', '6');
INSERT INTO `env_list` VALUES ('28', '命令执行', '命令执行', '3', '0', null, '1', '6');
INSERT INTO `env_list` VALUES ('29', 'webshell爆破', 'webShell爆破', '3', '0', null, '1', '6');
INSERT INTO `env_list` VALUES ('30', 'ssrf', 'ssrf', '3', '0', null, '1', '6');

-- ----------------------------
-- Table structure for env_path
-- ----------------------------
DROP TABLE IF EXISTS `env_path`;
CREATE TABLE `env_path` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `delFlag` tinyint(2) DEFAULT NULL,
  `listId` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of env_path
-- ----------------------------
INSERT INTO `env_path` VALUES ('1', './sqlinject/manifest_error.php?id=1', '0', '1');
INSERT INTO `env_path` VALUES ('2', './sqlinject/bool_injection.php?id=1', '0', '2');
INSERT INTO `env_path` VALUES ('3', './sqlinject/bool_injection.php?id=1', '0', '3');
INSERT INTO `env_path` VALUES ('4', './sqlinject/post_injection.php', '0', '4');
INSERT INTO `env_path` VALUES ('5', './sqlinject/filter_injection.php', '0', '5');
INSERT INTO `env_path` VALUES ('6', './sqlinject/width_byte_injection.php?id=1', '0', '6');
INSERT INTO `env_path` VALUES ('7', './sqlinject/xxe_injection.php', '0', '7');
INSERT INTO `env_path` VALUES ('8', './sqlinject/csv_vuln.php', '0', '8');
INSERT INTO `env_path` VALUES ('9', './xss/xss_1.php?id=1', '0', '9');
INSERT INTO `env_path` VALUES ('10', './xss/xss_2.php', '0', '10');
INSERT INTO `env_path` VALUES ('11', './sqlinject/universal_passwd.php', '0', '11');
INSERT INTO `env_path` VALUES ('12', './xss/dom_xss.php', '0', '12');
INSERT INTO `env_path` VALUES ('13', './xss/filter_xss.php?id=1', '0', '13');
INSERT INTO `env_path` VALUES ('14', './xss/link_xss.php?id=1', '0', '14');
INSERT INTO `env_path` VALUES ('15', './filedownload/file_download.php', '0', '15');
INSERT INTO `env_path` VALUES ('16', './filedownload/ini_file_download.php', '0', '16');
INSERT INTO `env_path` VALUES ('17', './upload_file/upload_file_1.php', '0', '17');
INSERT INTO `env_path` VALUES ('18', './upload_file/upload_file_2.php', '0', '18');
INSERT INTO `env_path` VALUES ('19', './upload_file/upload_file_3.php', '0', '19');
INSERT INTO `env_path` VALUES ('20', './upload_file/upload_file_4.php', '0', '20');
INSERT INTO `env_path` VALUES ('21', './upload_file/upload_file_5.php', '0', '21');
INSERT INTO `env_path` VALUES ('22', './auth_cross/cross_auth_passwd.php', '0', '22');
INSERT INTO `env_path` VALUES ('23', './auth_cross/cross_permission_pay.php', '0', '23');
INSERT INTO `env_path` VALUES ('24', './auth_cross/email.php', '0', '24');
INSERT INTO `env_path` VALUES ('25', './auth_cross/cross_find.php', '0', '25');
INSERT INTO `env_path` VALUES ('26', './more/url_redirect.php', '0', '26');
INSERT INTO `env_path` VALUES ('27', './more/file_include.php?filename=../../template/dom_xss.html', '0', '27');
INSERT INTO `env_path` VALUES ('28', '/tp5/public/index.php', '0', '28');
INSERT INTO `env_path` VALUES ('29', './more/webshell.php', '0', '29');
INSERT INTO `env_path` VALUES ('30', './more/ssrf.php?url=localhost/control/xss/xss_1.php?id=1', '0', '30');

-- ----------------------------
-- Table structure for flag
-- ----------------------------
DROP TABLE IF EXISTS `flag`;
CREATE TABLE `flag` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flag` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of flag
-- ----------------------------
INSERT INTO `flag` VALUES ('1', 'dfafdasfafdsadfa');

-- ----------------------------
-- Table structure for sqlinjection
-- ----------------------------
DROP TABLE IF EXISTS `sqlinjection`;
CREATE TABLE `sqlinjection` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sqlinjection
-- ----------------------------
INSERT INTO `sqlinjection` VALUES ('1', '站长下载()是中国最大的站长类资源下载网站，提供最新最全的源码和站长类工具下载，专设源码报导栏目提供权威的源码评测和教程，推荐国内外优秀源码。');
INSERT INTO `sqlinjection` VALUES ('2', 'hello');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin');

-- ----------------------------
-- Table structure for user_test
-- ----------------------------
DROP TABLE IF EXISTS `user_test`;
CREATE TABLE `user_test` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_test
-- ----------------------------
INSERT INTO `user_test` VALUES ('1', 'admin', 'admin');
INSERT INTO `user_test` VALUES ('2', 'aaaaa', 'asdfsadf');

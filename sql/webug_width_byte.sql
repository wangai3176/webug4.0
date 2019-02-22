/*
Navicat MySQL Data Transfer

Source Server         : local_mysql
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : webug_width_byte

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2019-01-23 20:38:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sqlinjection
-- ----------------------------
DROP TABLE IF EXISTS `sqlinjection`;
CREATE TABLE `sqlinjection` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of sqlinjection
-- ----------------------------
INSERT INTO `sqlinjection` VALUES ('1', 'life is sort, you need me');

-- ----------------------------
-- Table structure for storage_xss
-- ----------------------------
DROP TABLE IF EXISTS `storage_xss`;
CREATE TABLE `storage_xss` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `userId` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of storage_xss
-- ----------------------------
INSERT INTO `storage_xss` VALUES ('10', '<script>alert(document.cookie)</script>', '1');
INSERT INTO `storage_xss` VALUES ('11', 'aaa', '1');
INSERT INTO `storage_xss` VALUES ('12', '<script>alert(document.cookie)</script>', '1');

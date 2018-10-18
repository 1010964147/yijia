/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-18 11:14:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop_user
-- ----------------------------
DROP TABLE IF EXISTS `shop_user`;
CREATE TABLE `shop_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shop_user
-- ----------------------------
INSERT INTO `shop_user` VALUES ('4', 'xixi', '12345', '', '1');
INSERT INTO `shop_user` VALUES ('3', 'xiaolan', '12345', '', '1');
INSERT INTO `shop_user` VALUES ('5', 'xixi', '12345', '', '1');
INSERT INTO `shop_user` VALUES ('6', '123', '123', null, null);
INSERT INTO `shop_user` VALUES ('7', '123456', '123456', null, null);
INSERT INTO `shop_user` VALUES ('8', '7878oo', '123123123', null, null);
INSERT INTO `shop_user` VALUES ('9', 'aaaa', '123123', null, null);
INSERT INTO `shop_user` VALUES ('10', '', '', null, null);
INSERT INTO `shop_user` VALUES ('11', '12378AAS', '123123', null, null);
INSERT INTO `shop_user` VALUES ('12', '12345678', '123456', null, null);
INSERT INTO `shop_user` VALUES ('13', '1234567811', '123456', null, null);
INSERT INTO `shop_user` VALUES ('14', '1234567811111', '123456', null, null);
INSERT INTO `shop_user` VALUES ('15', '11111111111', '111111', null, null);
INSERT INTO `shop_user` VALUES ('16', '9999999', '123456', null, null);
INSERT INTO `shop_user` VALUES ('17', '975478', '123456', null, null);
INSERT INTO `shop_user` VALUES ('18', '101096', '123455', null, null);
INSERT INTO `shop_user` VALUES ('19', '000000', '000000', null, null);
INSERT INTO `shop_user` VALUES ('20', '0000000', '0000000', null, null);
INSERT INTO `shop_user` VALUES ('21', '888888', '888888', null, null);
INSERT INTO `shop_user` VALUES ('22', '88888888', '88888888', null, null);

ALTER TABLE `semis` ADD `nom_semi` VARCHAR(100) NOT NULL AFTER `id_semi`;
ALTER TABLE `repiquages` CHANGE `repi_commentaire` `repi_commentaire` VARCHAR(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL;
ALTER TABLE `tunnels` ADD `tunnel_commentaire` VARCHAR(1000) NOT NULL AFTER `tunnel_fin`;
ALTER TABLE `graines` DROP `taux_germi`;
ALTER TABLE `semis` ADD `taux_germi` INT(20) NOT NULL AFTER `temperature_germi`;
ALTER TABLE `varietes` DROP `rendement`;
ALTER TABLE `semis` ADD `rendement` INT(20) NOT NULL AFTER `taux_germi`;
ALTER TABLE `varietes` CHANGE `description` `description` VARCHAR(2000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL;
ALTER TABLE `semis` CHANGE `ref_type_semis` `ref_type_semi` INT(5) NOT NULL;
ALTER TABLE `tunnels` CHANGE `tunnel_debut` `debut_tunnel` INT(20) NOT NULL;
ALTER TABLE `tunnels` CHANGE `tunnel_fin` `fin_tunnel` INT(20) NOT NULL;
ALTER TABLE `tunnels` CHANGE `tunnel_commentaire` `commentaire_tunnel` VARCHAR(1000) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL;
ALTER TABLE `tunnels` CHANGE `type` `type_tunnel` VARCHAR(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL;
ALTER TABLE `tunnels` CHANGE `ref_variete` `ref_semi` INT(11) NOT NULL;
ALTER TABLE `semis` DROP INDEX `id_plante`, ADD INDEX `id_variete` (`ref_variete`) USING BTREE;
ALTER TABLE `semis` DROP FOREIGN KEY `semis_ibfk_1`

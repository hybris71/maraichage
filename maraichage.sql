-- phpMyAdmin SQL Dump
-- version 4.6.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost
-- Généré le :  Dim 12 Mars 2017 à 18:44
-- Version du serveur :  5.5.53-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `maraichage`
--

-- --------------------------------------------------------

--
-- Structure de la table `associations`
--

CREATE TABLE `associations` (
  `id_asso` int(11) NOT NULL,
  `ref_plante` int(11) NOT NULL,
  `ref_plante_asso` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `associations`
--

INSERT INTO `associations` (`id_asso`, `ref_plante`, `ref_plante_asso`, `favorable`) VALUES
(16, 30, 64, 0),
(17, 30, 65, 0),
(18, 30, 66, 0),
(19, 30, 50, 0),
(20, 30, 32, 0),
(21, 30, 38, 0),
(22, 30, 56, 0),
(23, 30, 57, 0),
(24, 30, 31, 1),
(25, 30, 40, 1),
(26, 30, 44, 1),
(27, 54, 32, 0),
(28, 54, 50, 1),
(29, 54, 56, 1),
(30, 54, 67, 0),
(31, 55, 32, 0),
(32, 55, 33, 0),
(33, 55, 47, 0),
(34, 55, 30, 0),
(35, 55, 54, 0),
(36, 55, 31, 1),
(37, 32, 55, 0),
(38, 32, 54, 0),
(39, 32, 45, 0),
(40, 32, 26, 0),
(41, 32, 67, 0),
(42, 32, 68, 0),
(43, 32, 58, 0);

-- --------------------------------------------------------

--
-- Structure de la table `exportations`
--

CREATE TABLE `exportations` (
  `id_rendement` int(5) NOT NULL,
  `rendement` int(5) NOT NULL,
  `azote` int(5) NOT NULL,
  `phosphore` int(5) NOT NULL,
  `potassium` int(5) NOT NULL,
  `calcium` int(5) NOT NULL,
  `magnesium` int(5) NOT NULL,
  `ref_plante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `exportations`
--

INSERT INTO `exportations` (`id_rendement`, `rendement`, `azote`, `phosphore`, `potassium`, `calcium`, `magnesium`, `ref_plante`) VALUES
(2, 8, 100, 50, 85, 80, 15, 26),
(3, 7, 70, 20, 105, 60, 10, 27),
(4, 40, 300, 170, 280, 150, 40, 28),
(5, 40, 0, 0, 0, 0, 0, 29),
(6, 80, 240, 80, 480, 200, 65, 30),
(7, 30, 85, 35, 170, 25, 20, 31),
(8, 15, 120, 90, 145, 180, 14, 33),
(9, 10, 150, 150, 200, 0, 0, 37),
(10, 15, 180, 60, 240, 50, 5, 38),
(11, 25, 75, 30, 140, 80, 15, 39),
(12, 80, 120, 80, 240, 80, 20, 40),
(13, 35, 200, 110, 500, 0, 0, 41),
(14, 35, 200, 110, 500, 0, 0, 42),
(15, 35, 105, 45, 210, 70, 0, 43),
(16, 80, 120, 80, 240, 80, 20, 44),
(17, 15, 80, 75, 135, 0, 0, 45),
(18, 8, 35, 20, 75, 10, 10, 46),
(19, 30, 140, 40, 350, 40, 30, 47),
(20, 4, 50, 100, 150, 0, 0, 48),
(21, 1, 100, 100, 100, 100, 100, 49),
(22, 8, 27, 48, 200, 140, 10, 50),
(23, 30, 60, 30, 125, 30, 10, 51),
(24, 8, 30, 15, 50, 6, 10, 52),
(25, 20, 80, 35, 180, 95, 10, 53),
(26, 20, 75, 40, 60, 45, 10, 54),
(27, 20, 70, 40, 80, 0, 0, 55),
(28, 6, 20, 60, 120, 0, 0, 56),
(29, 20, 90, 90, 150, 0, 0, 57),
(30, 1, 100, 100, 100, 100, 100, 58),
(31, 20, 120, 80, 180, 0, 0, 59),
(32, 50, 250, 180, 400, 0, 0, 60),
(33, 40, 120, 60, 100, 100, 100, 61),
(34, 4, 120, 100, 200, 0, 0, 62),
(35, 30, 70, 50, 150, 0, 0, 63),
(36, 1, 0, 0, 0, 0, 0, 64),
(37, 1, 0, 0, 0, 0, 0, 65),
(38, 1, 0, 0, 0, 0, 0, 66),
(39, 1, 0, 0, 0, 0, 0, 67),
(40, 1, 0, 0, 0, 0, 0, 68);

-- --------------------------------------------------------

--
-- Structure de la table `familles`
--

CREATE TABLE `familles` (
  `id_famille` int(11) NOT NULL,
  `nom_famille` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `familles`
--

INSERT INTO `familles` (`id_famille`, `nom_famille`) VALUES
(1, 'Solanacées'),
(2, 'Astéracées'),
(3, 'Cucurbitacées'),
(4, 'Brassicacées'),
(5, 'Apiacées'),
(6, 'Lamiacées'),
(7, 'Tropaéolacées'),
(8, 'Fabacées (Légumineuses)'),
(9, 'Chénopodiacées'),
(10, 'Actinidiacées'),
(11, 'Amaranthacées'),
(12, 'Basellacées'),
(13, 'Convolvulacées'),
(14, 'Liliacées'),
(15, 'Poacées (Graminées)'),
(16, 'Polygonacées'),
(17, 'Portulacacées'),
(18, 'Rosacées'),
(19, 'Valérianacées'),
(20, 'Alliacées'),
(21, 'Pédaliacées');

-- --------------------------------------------------------

--
-- Structure de la table `graines`
--

CREATE TABLE `graines` (
  `id_graine` int(11) NOT NULL,
  `pmg` int(11) NOT NULL,
  `prix` int(11) DEFAULT NULL,
  `duree_vie` int(11) NOT NULL,
  `ref_variete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `graines`
--

INSERT INTO `graines` (`id_graine`, `pmg`, `prix`, `duree_vie`, `ref_variete`) VALUES
(4, 3, 0, 5, 6),
(5, 3, 0, 5, 7);

-- --------------------------------------------------------

--
-- Structure de la table `groupes`
--

CREATE TABLE `groupes` (
  `id_groupe` int(11) NOT NULL,
  `nom_groupe` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `groupes`
--

INSERT INTO `groupes` (`id_groupe`, `nom_groupe`) VALUES
(1, 'Racine'),
(2, 'Feuille'),
(3, 'Fruit'),
(4, 'Graine'),
(5, 'Fleur');

-- --------------------------------------------------------

--
-- Structure de la table `histoire_planches`
--

CREATE TABLE `histoire_planches` (
  `id_histoire` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_variete` int(11) NOT NULL,
  `id_planche` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `pedoclimat`
--

CREATE TABLE `pedoclimat` (
  `id_pedoclimat` int(11) NOT NULL,
  `climat_favorable` varchar(1000) NOT NULL,
  `climat_defavorable` varchar(1000) NOT NULL,
  `commentaire_climat` varchar(1000) NOT NULL,
  `temp_gel` int(2) NOT NULL,
  `sol_favorable` varchar(1000) NOT NULL,
  `sol_defavorable` varchar(1000) NOT NULL,
  `commentaire_sol` varchar(1000) NOT NULL,
  `fertilisation_favorable` varchar(1000) NOT NULL,
  `fertilisation_defavorable` varchar(1000) NOT NULL,
  `commentaire_fertilisation` varchar(1000) NOT NULL,
  `fumier_frais` tinyint(1) NOT NULL,
  `besoin_eau` varchar(1000) NOT NULL,
  `ref_plante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pedoclimat`
--

INSERT INTO `pedoclimat` (`id_pedoclimat`, `climat_favorable`, `climat_defavorable`, `commentaire_climat`, `temp_gel`, `sol_favorable`, `sol_defavorable`, `commentaire_sol`, `fertilisation_favorable`, `fertilisation_defavorable`, `commentaire_fertilisation`, `fumier_frais`, `besoin_eau`, `ref_plante`) VALUES
(12, 'Idèal: maritime\\r\\n20 - 22°C', 'Excès d\'humidité', 'Plante rustique résistante au froid.', -15, 'Fertile, léger bien drainé\\r\\npH>6', 'Argileux, asphyxiant', '', 'Peu exigeant, engrais organique et minéral naturel', 'Fumure organique fraîche', '', 0, '', 26),
(13, 'Doux et humide', 'Gelée -1°C', '', -1, 'Profond, frais, riche en humus, pH de 6.5 à 7', 'Léger, séchant', '', 'Exigeant, fumure de fond en année 1: compost + engrais naturel', 'Excès d\'azote', '', 1, '', 27),
(14, 'Chaleur 20 à 30°C le jour, (à cultiver sous abri en zone nord)', 'Vent, gelée -1°C', '', -1, 'Limo, profond, riche en humus, pH de 5.5 à 6.8', 'Argileux, froid, asphyxiant, sableux, superficiel', '', 'Très exigeant, compost+complément d\'engrais, besoin important en K', 'Fumier frais', '', 0, '', 28),
(15, 'Chaleur 20 à 30°C le jour ( à cultiver sous abri en zone nord)', 'Vent, gelée -1°C', '', -1, 'Limon profond, riche en humus, pH de 5.5 à 6.8', 'Argileux, froid, asphyxiant, sableux, superficiel', '', 'Très exigeant, compost+complément d\'engrais, besoin important en K', 'Fumier frais', '', 0, '', 29),
(16, 'Chaleur 20 à 30°C le jour et 15 à 20°C la nuit', 'Vent, excès d\'humidité, gelée -1°C', 'Cultiver sous abri dans le nord plein champs ou sous abri dans le sud', -1, 'Limon profond, riche en humus, ameubli sur au moins 30 cm\\r\\npH de 5.5 à 6.8', 'sol argileux, froid, asphyxiant, sableux, superficiel', 'Attention aux excès d\'humidité', 'Compost en grande quantité, engrais organique et minéral en complément', 'Fumier frais, excès d\'azote', 'Culture vorace', 0, '', 30),
(17, 'Doux et humide', 'Sécheresse', 'Peu d\'exigeance', 0, 'Frais et profond\\r\\npH de 5.8 à 7.5', 'Excès d\'humidité, asphyxiant, battant', '', 'Exigeant, compost + complément d\'engrais, besoin important en K', '', '', 1, '', 31),
(18, 'Doux et humide, forte exigence en eau ( plantation et grossissement)', 'Sécheresse', 'Gelée de -3 à -4°C', -3, 'Frais, riche en humus\\r\\npH de 6.5 à 7.5', 'Séchant, sensible aux maladies du sol', '', 'Exigence moyenne, compost mûr', 'Matière organique fraîche', '', 0, '', 33),
(19, 'Doux et humide', 'Sécheresse, forte chaleur', 'Gelée de -1 à -5°C', -1, 'Profond, argilo-sableux\\r\\npH de 6.5 à 7.5', 'Séchant, asphyxiant', '', 'Assez exigeant, compost mûr', 'Carence en soufre et bore', '', 0, '', 37),
(20, 'Doux et humide', 'Sécheresse, forte chaleur', 'Gelée de -1 à -5°C', -1, 'Profond, arilo-sableux\\r\\npH de6.5 à 7.5', 'Séchant, asphyxiant', '', 'Assez exigeant, compost mûr', 'Carence en soufre et bore', '', 0, '', 38),
(21, 'Douxet humide', 'Sécheresse, forte chaleur', 'Gelée de -1 à -5°C', -1, 'Profond, arilo-sableux\\r\\npH de 6.5 à 7.5', 'Séchant, asphyxiant', '', 'Assez exigeant, compost mûr', 'Carence en soufre et bore', '', 0, '', 39),
(22, 'chaud et humide', 'Froid', '', -1, 'Meuble, profond, riche en humus\\r\\npH de 5.6 à 7.5', 'Argileux, tassement', '', 'Très exigeant, compost en quantité', 'Fumure insuffisante ou trop fraîche', '', 0, '', 40),
(23, 'Chaud et humide', 'Froid', '', -1, 'Meuble, profond, riche en humus\\r\\npH de 5.6 à 7.5', 'Argileux, tassement', '', 'Très exigeant, compost en quantité', 'Fumure insuffisante ou trop fraîche ', '', 0, '', 41),
(24, 'Chaud et humide', 'Froid', 'Gelée -1°C', -1, 'Meuble, profond, riche en humus\\r\\npH de5.6 à 7.5', 'Argileux, tassement', '', 'Très exigeant, compost en quantité', 'Fumure insuffisante ou trop fraîche', '', 0, '', 42),
(25, 'Chaud et humide', 'Froid', 'Gelée -1°C', -1, 'Meuble, profond, riche en humus\\r\\npH de 5.6 à 7.5', 'Argileux, tassement', '', 'Très exigeant, compost en quantité', 'Fumure insuffisante ou trop fraîche', '', 0, '', 43),
(26, 'Chaud et humide', 'Froid', 'Gelée -1°C', -1, 'Meuble, profond, riche en humus\\r\\npHde 5.6 à 7.5', 'Argileux, tassement', '', 'Très exigeant, compost en quantité', 'Fumure insuffisante ou trop fraîche', '', 0, '', 44),
(27, 'Maritime', 'Trop humide, pluie d\'orage', 'mildiou', 0, 'Léger, assez riche, argilo-sableux\\r\\npH>6.5', 'Asphyxiant, sol acide, maladies transmises par le sol', '', 'Peu exigeant, engrais', 'Fumure organique fraîche', '', 0, '', 45),
(28, 'Doux et humide', 'Sécheresse et excès d\'eau', '', 0, 'Argilo-sableux\\r\\ntemp.>10°C', 'Argileux ou sableux, sol battant', '', 'Exigeance moyenne, engrais', 'Fumier et compost récent (<1 ans), excès d\'azote, carence en bore', '', 0, '', 46),
(29, 'Frais, peu exigeant en température', 'Sécheresse, chaleur', '', 0, 'Profond, bien drainé, riche en humus\\r\\npH de 6.5', 'Sol soufflé, asphyxiant, tassé', 'Très sensible', 'Assez exigeant, engrais, besoin important en K', 'Fumier frais', '', 0, '', 47),
(30, 'Peu exigeant', 'Excès de chaleur et sécheresse', '', -3, 'Souple, riche en humus\\r\\npH de 7 environ', 'Trop léger, séchant', '', 'Peu exigeant, engrais minéral', 'fumier frais', 'Capte l\'azote dans l\'air', 0, '', 48),
(31, 'Tempéré, supporte la chaleur', 'Excès d\'eau, sécheresse\\r\\n', 'Gelée printanière', 0, 'Argilo-limoneux, riche en humus\\r\\npH de 6 à 7', 'Sol soufflé, asphyxiant', '', 'Moyennement exigeant, compost en première année puis engrais', 'Fumier frais', '', 0, '', 49),
(32, 'Température douce, air plutôt sec', 'Forte chaleur, gelée', '', 0, 'Léger, riche \\r\\npH idéal de 6 à 7', 'Excès d\'eau', '', 'Peu exigeant, engrais minéral', 'Matière organique fraîche', 'Capte l\'azote dans l\'air', 0, '', 50),
(33, 'Tepéré', 'Excès d\'eau, chaleur, sécheresse, besoin important en eau', 'Variétés différentes selon le climat et la saison', 0, 'Argilo-sableux, riche en humus\\r\\npH de 6.5 à 7', 'Excès d\'humidité, sol soufflé, acidité', 'Maladies transmises par le sol', 'Assez peu exigeant, besoin important en K', 'Matière organique fraîche', '', 0, '', 51),
(34, 'Température fraîche, bonne aération sous abri', 'Excès d\'humidité, chaleur', '', 0, 'Léger', 'Excès d\'eau', '', 'Peu exigeant, reliquat + engrais organique si besoin', 'Excès d\'azote', '', 1, '', 52),
(35, 'Tempéré, même un peu froid', 'Chaleur, sécheresse, gelée', '', -3, 'Peu d\'exigence,sol gardant le fraîcheur\\r\\npH de 6 à 7', 'Sable grossier ', 'Blessure au lavage', 'Moyennement exigeant, reliquat + engrais organique si besoin', 'Fumure organique fraîche', '', 0, '', 53),
(36, 'Chaud ou tempéré, jours longs', 'Jours courts (sauf oignon blanc), sécheresse à la formation du bulbe', '', 0, 'Argilo-sableux drainant, peu exigeant sur le type de sol \\r\\npH > 6.5', 'Argileux, terre creuse\\r\\npH > 5.8', 'Maladies transmises par le sol', 'Moyennement exigeant, engrais ou compost très mûr', 'Fumure organique fraîche', '', 0, '', 54),
(37, 'Alimentation régulière en eau', 'Excès d\'eau', '', 0, 'Terre meuble, riche en humus', 'Sol argileux', '', 'Exigeant, engrais vert et compost', 'Fumure organique fraîche', '', 0, '', 55),
(38, 'Tempéré, beaucoup d\'eau, d\'air et de lumière', 'Sécheresse, excès de chaleur, temps trop humide', '', 0, 'Meuble en profondeur, argilo-limoneux\\r\\npH de 6 à 8', 'Asphyxiant, même sur une courte surée', '', 'Moyennement exigeant (P et K), capte l\'azote dans l\'air, engrais', 'Fumure organique fraîche', '', 0, '', 56),
(39, 'Océanique, chaleur suffisante', 'Excès de temps humide et doux, gelée', '', 0, 'Meuble sur 20 cm sans motte, limono-sableux\\r\\npH < 7', 'Imperméable, caillouteux, tassé, motteux', '', 'Exigeante, compost + engrais vert, besoin important en K', '', '', 1, '', 57),
(40, 'Tempéré, frais, pluviométrie abondante et régulière', 'Sec et chaud, gelée', '', 0, 'Riche et léger\\r\\npH de 6 à 7', 'Asphyxiant', '', 'Peu exigeant, reliquat + engrais si besoin', 'Fumure organique fraîche', '', 0, '', 58),
(41, 'Chaleur', 'Gelée', '', -2, 'Sol riche, et profond, bien drainé, argilo-sableux \\r\\npH de5.5 à 6.8', '', '', 'Compost de fumier bovin ou déchats verts sur précedent, apport d\'engrais organique', 'Fumure organique fraîche', '', 0, '', 59),
(42, 'Tempéré, chaud et humide,bon ensoleillement', 'Sécheresse,besoin en eau important', 'gelée -3°C', -3, 'Peu exigeante, sol profond, humidité, ', 'Acide', '', 'Compost', 'fractionner les apports d\'azote', '', 1, '', 60),
(43, 'Chaleur, ', 'Craint le gel, le vent,temps froids', '', 0, 'Sol lourd, profond, riche en matière organique\\r\\npH de 5.5 à 6.8', 'Sol trop humide, sol sableux, ', '', 'Fumure organique et minérale', 'Fumure organique fraîche', '', 0, '', 61),
(44, 'Doux et humide', 'Froid, chaleur', '', 0, 'Riche en matière organique\\r\\npH proche de 7', 'Trop léger,', '', 'Matière organique très mûr, complément d\'engrais potassique', 'Fumure organique fraîche, excès d\'azote, carence en bore', '', 0, '', 62),
(45, 'Doux ethumide, ', 'Déshydratation et racine ramolit par le froid', '', -5, 'Sol sableux et drainant, riche en potasse, profond, riche en humus, frais', 'Sécheresse, carence en bore, sol lourd, matière organique trop élevée', '', 'Compost mûr, apport en potasse, ', 'Fumure fraîche', '', 0, '', 63),
(46, '', '', 'Tout types de climats en France', 0, 'Sol drainé, argileux, humide, calcaire, riche en humus\\r\\npH neutre', '', '', '', '', '', 1, '', 64),
(47, 'Chaleur et soleil', 'Froid en dessous de 10°C', '', 0, 'Drainé, caillouteux, riche en humus, \\r\\npH neutre', '', '', '', '', '', 0, '', 65),
(48, 'chaleur et soleil', 'Froid', '', 0, 'Sol drainé et sec, calcaire, caillouteux, riche en humus\\r\\npH, neutre et alcalin', '', '', '', '', '', 0, '', 66),
(49, 'Très rustique, grande résistance au froid', '', '', 0, 'Humide, drainé, calcaire, riche en humus', '', '', '', '', '', 0, '', 67),
(50, 'Très rustique', '', '', -20, 'Drainé, riche en humus\\r\\npH neutre', '', '', '', '', '', 0, '', 68);

-- --------------------------------------------------------

--
-- Structure de la table `planches`
--

CREATE TABLE `planches` (
  `id_planche` int(11) NOT NULL,
  `largeur` int(11) NOT NULL,
  `longueur` int(11) NOT NULL,
  `sous_serre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `plantes`
--

CREATE TABLE `plantes` (
  `id_plante` int(20) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `origine_geographique` varchar(50) NOT NULL,
  `anciennete_culture` varchar(50) NOT NULL,
  `cycle` varchar(50) NOT NULL,
  `description` varchar(400) NOT NULL,
  `engrais_vert` tinyint(1) NOT NULL,
  `compagne` tinyint(1) NOT NULL,
  `ref_groupe` int(11) NOT NULL,
  `ref_famille` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `plantes`
--

INSERT INTO `plantes` (`id_plante`, `nom`, `origine_geographique`, `anciennete_culture`, `cycle`, `description`, `engrais_vert`, `compagne`, `ref_groupe`, `ref_famille`) VALUES
(26, 'Ail', 'Asie centrale', '2000', 'Vivace', 'Riche en vitamines et possédant de nombreuses vertus, l’ail est essentiel pour la santé. Facile à cultiver, il est peu exigeant en eau comme en fertilisant. Il se plante en automne ou au printemps pour une récolte estivale.', 0, 0, 1, 20),
(27, 'Artichaud', 'Bassin méditéranéen', '500 ans', 'Vivace', 'Facile à cultiver, l’artichaut est un savoureux légume qui peut être aussi une superbe plante ornementale au jardin, grâce à ses magnifiques fleurs violettes. Selon les variétés, on peut le consommer cru ou cuit.', 0, 0, 5, 2),
(28, 'Aubergine', 'Inde', '600 ans', 'Annuelle', 'L\'aubergine est le légume indispensable à cultiver dans les jardins. De culture facile, elle trouve sa place au potager, sur les terrasses et les balcons. Dans vos assiettes, elle apporte du soleil mais aussi beaucoup de saveur.', 0, 0, 3, 1),
(29, 'Poivron', '', '', 'Annuelle', 'Quel plaisir de pouvoir savourer son propre poivron fraîchement cueilli ! Facile à cultiver écologiquement au jardin, comme sur un balcon où il est en plus décoratif, il nécessite seulement d’avoir un emplacement bien ensoleillé.', 0, 0, 3, 1),
(30, 'Tomate', 'Amérique centrale', '5000 ans', 'Vivace - annuelle', 'Cette plante annuelle aux multiples formes s’est imposée dans tous les potagers des campagnes comme des villes. La tomate est aujourd’hui le légume le plus consommé au monde alors qu’il a longtemps été considéré comme toxique.', 0, 0, 3, 1),
(31, 'Betterave', 'Europe méridionale', '15 eme siècle', 'Bisannuelle', 'De culture facile, la betterave offre une production généreuse. Consommé cru ou cuit, ce légume à la saveur sucrée est riche en vitamines et en sels minéraux. Bien conservée, elle se déguste tout l’hiver.', 0, 0, 1, 9),
(32, 'Carotte', 'Bassin méditerranéen', '300 ans', 'Annuelle', 'La carotte est le légume indispensable au potager. Riche en vitamines et en sels minéraux, elle se consomme crue ou cuite et est très goûteuse. De plus, la carotte est facile à entretenir, il ne vous reste plus qu\'à la cultiver !', 0, 0, 1, 5),
(33, 'Céleri-rave', 'Europe méridionale', '', 'Bisannuelle', 'Faites le plein d’énergie en plantant du céleri-rave dans votre potager. Légume très parfumé, il est riche en vitamines et en sels minéraux. En cuisine, on peut le consommer cru ou cuit et ses feuilles aromatisent les potages.', 0, 0, 1, 5),
(37, 'Chou-brocoli', 'Bassin méditérranéen', '2500 ans', 'Annuelle-Bisannuelle', 'Moins exigeants et donc plus faciles à cultiver que les autres choux, les brocolis sont un concentré de bienfaits à eux tout seuls. Ils sont également les seuls choux que l’on peut consommer toute l’année.', 0, 0, 5, 4),
(38, 'Chou-fleur', '', '', 'Annuelle-Bisannuelle', 'Plébiscité pour sa saveur plutôt douce et sa belle pomme blanche, le chou-fleur est le chou préféré des Français. On trouve aujourd’hui, des choux-fleurs à la pomme vert jaune spiralée très décorative, à pomme orange ou encore violette', 0, 0, 5, 4),
(39, 'Chou pomme', '', '', 'Annuelle-Bisannuelle', 'Chou cabus, à tête lisse, ou chou de Milan, à tête frisée, ils comptent parmi les légumes les plus anciens. Ils se déclinent aujourd’hui en de nombreuses variétés et poussent partout. Profitez de leurs bienfaits en les installant au jardin.', 0, 1, 1, 4),
(40, 'Concombre', 'Asie', '200 ans', 'Annuelle', 'Le concombre, légume d’été par excellence, est très rafraîchissant. Il se déguste de différentes façons, cru et même cuit. De culture facile, il apprécie une exposition ensoleillée et un arrosage régulier.', 0, 0, 3, 3),
(41, 'Courgette', 'Amérique Centrale', '300 ans', 'Annuelle', 'De culture facile, la courgette est idéale pour les jardiniers débutants. Ronde ou allongée, la courgette se déguste crue en salade, cuite, sautée, voire farcie. Très productive, faites-lui une place au soleil dans votre jardin', 0, 0, 3, 3),
(42, 'Courge', 'Amérique du nord', '8000 ans', 'Annuelle', 'Cultivées depuis au moins 8 000 ans en Amérique du Nord et en Amérique centrale, les courges ont développé une variabilité de formes et de couleurs remarquable. Consommés crus ou cuits, les fruits des courges ont un goût très fin', 0, 0, 3, 3),
(43, 'Melon', 'Asie', '600 ans', 'Annuelle', 'Savoureux, fruité et parfumé, le melon est le légume-fruit indispensable dans nos jardins. Ses gros fruits se dégustent en entrée ou en dessert. On peut aussi l\'imprégner de pineau ou de porto. Cultivé en pleine terre, il demande peu d\'attention', 0, 0, 3, 3),
(44, 'Cornichon', '', '', 'Annuelle', 'Les cornichons sont un régal pour accompagner nos charcuteries toute l’année. Issus de la même plante que les concombres, ils sont faciles à cultiver, vous pouvez les planter au potager où ils pousseront très rapidement', 0, 0, 3, 3),
(45, 'Echalotte', 'Asie centrale', '1300 ans', 'Vivace annuelle', 'Intimement liée au terroir français, selon certains, indissociable de la gastronomie française, l’échalote se cultive facilement dans toute la France et sa qualité gustative en fait un condiment apprécié, indispensable au potager', 0, 0, 1, 20),
(46, 'Endive', 'Europe', '1830', 'Annuelle', 'L’endive ou chicorée witloof est une chicorée. Elle n’existe pas à l’état naturel mais est obtenue par forçage au jardin ou en cave. Sa culture est assez longue et exigeante mais donne une récolte souvent abondante.', 0, 0, 2, 2),
(47, 'Epinard', 'Moyen orient', '', 'Annuelle-bisannuelle', 'L’épinard est un délicieux légume aux grandes feuilles, épaisses et très tendres à la couleur vert foncé. Riche en vitamine A, en sels minéraux et en fer, on peut le consommer cru ou cuit. De plus, c’est un excellent engrais vert', 0, 0, 2, 9),
(48, 'Fève', 'Moyen-orient', 'Préhistoire', 'Annuelle', 'La fève est une excellente plante potagère facile à cultiver. Elle est riche en vitamines et en sels minéraux, mais aussi en protéines et en fibres. Ses graines se dégustent épluchées, crues à la croque-au-sel, au beurre ou cuites.', 0, 0, 4, 8),
(49, 'Fraise', 'Europe', 'Moyen-Age', 'Vivace', 'À croquer tout juste cueillie, en dessert, sorbet ou confiture, elle est plébiscitée par les enfants et les grands. Petite fraise des bois ou fraise cultivée, elle fait l’unanimité pour son parfum exquis. C’est aussi l’un des premiers fruits au jardin.', 0, 0, 3, 18),
(50, 'Haricot', 'Amérique du Sud', '', 'Annuelle', 'Légume vert par excellence, aux qualités tant diététiques que gustatives, le haricot se décline en gousses croquantes ou en grains fondants et il nourrit le sol du jardin en même temps que le jardinier.', 0, 0, 3, 8),
(51, 'Laitue', 'Europe', '1 er siècle', 'Annuelle-bisannuelle', 'Tendre ou craquante, rafraîchissante et délicate, frisée ou lisse, oblongue ou cloquée, à jupe détachée ou non, toujours tendre même si elle est parfois amère, depuis 27 siècles la laitue attire les gourmets et, d’après Théophraste, apaise les passions', 0, 0, 2, 2),
(52, 'Mâche', 'Europe du sud', '300 ans', 'Bisannuelle', 'Très rustique, la mâche est la salade d’hiver par excellence. Elle se consomme crue ou cuite comme les épinards. La mâche est riche en vitamines, en sels minéraux et en oligo-éléments. De plus, elle ne demande pas beaucoup d’entretien', 0, 0, 2, 19),
(53, 'Navet', 'Bassin méditerranéen ', 'Préhistoire', 'Annuelle-bisannuelle', 'Le navet est un légume très ancien qui offre des saveurs sucrées voire un peu piquantes selon les variétés. Facile à cultiver, sa récolte s’étend de mai à novembre et il se conserve bien durant l’hiver.', 0, 0, 1, 4),
(54, 'Oignon', 'Asie occidentale', '5000 ans', 'Annuelle-bisannuelle', 'À la fois légume et aromate, l’oignon est indispensable dans notre cuisine. Facile à cultiver, il existe sous de multiples formes et couleurs, et se déguste frais ou sec. On lui prête en outre de nombreux bienfaits', 0, 0, 1, 20),
(55, 'Poireau', 'Europe méridionale', '', 'Bisannuelle', 'Le poireau est le légume d’hiver incontournable de nos potagers. Rustique, il peut rester en terre et être récolté au fur et à mesure des besoins. De plus, il est facile à cultiver et demande peu d’entretien', 0, 0, 1, 20),
(56, 'Pois', 'Bassin méditerranéen', 'Moyen-age', 'Annuelle', 'Le petit pois se récolte du printemps à l’été. Selon les variétés, on peut le déguster de différentes façons. De culture facile, faites-lui une place au potager, car c’est un véritable délice', 0, 0, 4, 8),
(57, 'Pommes de terre', 'Amérique du Sud', '5000 ans', 'Annuelle', 'Très facile à cultiver et de récolte très généreuse, la pomme de terre est un des légumes les plus consommés au monde. Elle fait le bonheur des jardiniers amateurs mais aussi des jardiniers expérimentés. N\'hésitez donc pas à varier les variétés', 0, 0, 1, 1),
(58, 'Radis', 'Europe', '5000 ans', 'Annuelle', 'Idéal pour les jardiniers débutants, le radis, au goût exquis, s\'adapte à toutes les saisons. De culture facile, on peut le planter au potager mais également dans des jardinières, à placer sur votre terrasse ou sur votre balcon', 0, 0, 1, 4),
(59, 'Fenouil', 'Egypte', '5000 ans', 'Vivace', 'Cette jolie plante condimentaire et aromatique vit à l’état spontané en France, en Europe centrale et méridionale, en Asie Occidentale et en Afrique du Nord. Elle a sa place aussi bien au jardin d’ornement, qu’au potager et au jardin médicinal', 0, 0, 1, 5),
(60, 'Blette', 'Bassin méditerranéen', '5000 ans', 'Bisannuelle', 'Blette, bette ou poirée, tous ces noms désignent une seule et même plante, cultivée au potager pour ses côtes charnues et ses grandes feuilles cloquées, mais aussi dans les plantes-bandes de fleurs ou en pot', 0, 0, 2, 11),
(61, 'Potimarron', 'Amérique du Sud', '', 'Annuelle', 'Le potimarron, est un cousin du potiron, il n\'est pas à proprement parler une plante décorative, mais plutôt une plante dont le principal attrait est le légume, aboutissement de quelques semaines de culture', 0, 0, 3, 3),
(62, 'Chicorée ', 'Europe', '2000 avant J-C', 'Vivace-annuelle-bisannuelle', 'La chicorée, appréciée pour son croquant et son goût prononcé, apporte un petit goût sauvage dans les salades d’automne et d’hiver. Elle résiste bien au froid, les premiers gels améliorent même son goût', 0, 1, 2, 2),
(63, 'Panais', 'Europe', '', 'Bisannuelle', 'Enfin, depuis quelques années le panais sort de l’oubli ! Ce légume racine fut très utilisé jusqu’à l’apparition de la pomme de terre, puis laissé de côté. À nouveau, son goût très typé enchante les gourmands et inspire les grands chefs', 0, 0, 1, 5),
(64, 'Oeillet d\'Inde', 'Amérique centrale', '', 'Annuelle', 'L’œillet d’Inde est une plante très florifère et facile à cultiver. Sa floraison jaune, orange ou rouge embellit jardins, balcons, terrasses. Au potager, elle est aussi réputée pour éloigner les insectes comme les nématodes', 1, 1, 5, 2),
(65, 'Basilic', 'Inde', '', 'Annuelle', 'Le basilic est une plante aromatique facile à cultiver en extérieur ou en intérieur, en pot ou en pleine terre. Très apprécié pour sa fraîcheur et sa saveur, il relève les plats de l\'été. C\'est un réel plaisir de le cueillir selon ses besoins', 0, 1, 2, 6),
(66, 'Capucine', 'Amérique du Nord', '', 'Vivace-annuelle-bisannuelle', 'La capucine est une fleur comestible, très facile d\'entretien, qui fleurit tout l’été. Grimpante ou naine, elle trouve sa place partout au jardin et sur les balcons. Elle est aussi utile au potager car elle éloigne les pucerons des légumes', 0, 1, 5, 7),
(67, 'Persil', 'Régions méditerranéennes', '3000 ans', 'Annuelle-bisannuelle', 'Plat ou frisé, le persil est une savoureuse plante aromatique qui agrémente nos plats cuisinés et nos salades. Très facile à cultiver, on peut aussi l\'utiliser en accompagnement pour parfumer les crustacés et les grillades', 0, 1, 2, 5),
(68, 'Ciboulette', 'Orient', '3000 ans', 'Vivace', 'La ciboulette, superbe plante aromatique, se plaît dans le potager, jardin, terrasse et balcon. C\'est une herbe indispensable pour relever nos plats cuisinés. Très facile à cultiver, elle possède, en outre, des vertus apéritives et digestives', 0, 1, 2, 20);

-- --------------------------------------------------------

--
-- Structure de la table `production`
--

CREATE TABLE `production` (
  `id_production` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `quantite` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `prixht` int(11) NOT NULL,
  `taux_marge` int(11) NOT NULL,
  `ref_variete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `recoltes`
--

CREATE TABLE `recoltes` (
  `id_recolte` int(11) NOT NULL,
  `debut_recolte` int(3) NOT NULL,
  `fin_recolte` int(3) NOT NULL,
  `deroulement` varchar(10000) NOT NULL,
  `frequence_int` int(11) NOT NULL,
  `frequence_com` varchar(500) NOT NULL,
  `ref_semi` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `repiquages`
--

CREATE TABLE `repiquages` (
  `id_repiquage` int(11) NOT NULL,
  `debut_repi` int(3) NOT NULL,
  `fin_repi` int(3) NOT NULL,
  `repi_commentaire` varchar(1000) NOT NULL,
  `ref_semi` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `repiquages`
--

INSERT INTO `repiquages` (`id_repiquage`, `debut_repi`, `fin_repi`, `repi_commentaire`, `ref_semi`) VALUES
(2, 1, 1, 'Test', 5);

-- --------------------------------------------------------

--
-- Structure de la table `rotation_duree`
--

CREATE TABLE `rotation_duree` (
  `id_duree_rotation` int(11) NOT NULL,
  `duree_mini` int(11) NOT NULL,
  `commentaire_duree` varchar(500) NOT NULL,
  `ref_plante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rotation_duree`
--

INSERT INTO `rotation_duree` (`id_duree_rotation`, `duree_mini`, `commentaire_duree`, `ref_plante`) VALUES
(2, 2, 'La durée de 4 ans est rarement respectée faute de surface d\'abri suffisante', 30),
(3, 4, '', 31),
(4, 5, '', 33),
(5, 3, '3 à 4 ans', 37),
(6, 3, '3 à 4 ans', 38),
(7, 3, '3 a 4 ans', 39),
(8, 3, '', 40),
(9, 3, '', 41),
(10, 3, '', 42),
(11, 3, '', 43),
(12, 3, '', 44),
(13, 3, '3 à 4 ans', 45),
(14, 4, '4 à 5 ans', 46),
(15, 4, '4 à 5 ans', 47),
(16, 4, '4 à 5 ans', 48),
(17, 6, '6 à 8 ans', 49),
(18, 3, '3 à 6 ans', 50),
(19, 3, '3 à 4 ans', 51),
(20, 2, '', 52),
(21, 3, '3 à 4 ans', 53),
(22, 4, '', 54),
(23, 4, '', 55),
(24, 5, '', 56),
(25, 4, '', 57),
(26, 2, '', 58),
(27, 1, '', 59),
(28, 4, '4 à 5 ans', 60),
(29, 4, '4 à 5 ans', 61),
(30, 1, '', 62),
(31, 6, '', 63),
(32, 1, '', 64),
(33, 2, '2 à 3 ans', 65),
(34, 1, '', 66),
(35, 1, '', 67),
(36, 1, '', 68);

-- --------------------------------------------------------

--
-- Structure de la table `rotation_famille`
--

CREATE TABLE `rotation_famille` (
  `id_rotation_famille` int(11) NOT NULL,
  `ref_plante` int(11) NOT NULL,
  `ref_famille` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rotation_famille`
--

INSERT INTO `rotation_famille` (`id_rotation_famille`, `ref_plante`, `ref_famille`, `favorable`) VALUES
(187, 30, 3, 0),
(188, 30, 4, 0),
(189, 30, 1, 1),
(190, 26, 20, 1),
(191, 26, 8, 0),
(192, 54, 8, 0),
(193, 54, 15, 0),
(194, 54, 9, 0),
(195, 54, 16, 0),
(196, 55, 20, 1),
(197, 55, 8, 0),
(198, 32, 20, 0),
(199, 32, 15, 1),
(200, 32, 4, 1),
(201, 32, 5, 1),
(202, 33, 20, 0),
(203, 33, 15, 1),
(204, 63, 14, 0),
(205, 62, 8, 1),
(206, 51, 20, 0),
(207, 51, 4, 0),
(208, 51, 8, 0),
(209, 39, 15, 0),
(210, 39, 8, 0),
(211, 38, 20, 0),
(212, 38, 15, 0),
(213, 38, 8, 0),
(214, 38, 4, 1),
(215, 37, 20, 0),
(216, 37, 15, 0),
(217, 37, 8, 0),
(218, 37, 4, 1),
(219, 53, 4, 1),
(220, 53, 5, 1),
(221, 53, 20, 0),
(222, 53, 1, 0),
(223, 58, 15, 0),
(224, 58, 4, 1),
(225, 31, 4, 0),
(226, 31, 3, 0),
(227, 31, 15, 0),
(228, 31, 9, 1),
(229, 31, 5, 1),
(231, 47, 15, 0),
(232, 47, 9, 1),
(233, 40, 20, 0),
(234, 40, 15, 0),
(235, 40, 3, 1),
(236, 40, 1, 1),
(237, 41, 14, 0),
(238, 41, 15, 0),
(239, 41, 3, 1),
(240, 41, 1, 1),
(241, 43, 3, 1),
(242, 43, 15, 0),
(243, 61, 3, 1),
(244, 50, 8, 0),
(245, 50, 15, 0),
(246, 50, 1, 0),
(247, 50, 3, 0),
(248, 50, 4, 1),
(249, 56, 8, 1),
(250, 28, 1, 1),
(251, 28, 8, 0),
(252, 28, 15, 0),
(253, 28, 3, 1),
(254, 29, 1, 1),
(255, 29, 3, 1),
(256, 57, 1, 1),
(257, 57, 15, 0),
(258, 49, 15, 0),
(259, 49, 8, 1),
(260, 49, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rotation_plante`
--

CREATE TABLE `rotation_plante` (
  `id_rotation_plante` int(11) NOT NULL,
  `ref_plante` int(11) NOT NULL,
  `ref_plante_condition` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `rotation_plante`
--

INSERT INTO `rotation_plante` (`id_rotation_plante`, `ref_plante`, `ref_plante_condition`, `favorable`) VALUES
(9, 30, 32, 0),
(10, 26, 54, 1),
(11, 26, 55, 1),
(12, 26, 45, 1),
(13, 26, 57, 0),
(14, 54, 57, 1),
(15, 55, 57, 0),
(16, 55, 38, 0),
(17, 55, 53, 0),
(18, 55, 47, 0),
(19, 55, 56, 0),
(20, 55, 54, 1),
(21, 55, 26, 1),
(22, 55, 45, 1),
(23, 32, 57, 0),
(24, 32, 47, 0),
(25, 32, 51, 0),
(26, 32, 54, 0),
(27, 32, 55, 0),
(28, 32, 50, 1),
(29, 33, 59, 1),
(30, 33, 63, 1),
(31, 33, 32, 1),
(32, 33, 50, 1),
(33, 33, 51, 1),
(34, 33, 52, 1),
(35, 33, 62, 1),
(36, 33, 38, 0),
(37, 33, 37, 0),
(38, 33, 39, 0),
(39, 33, 57, 0),
(40, 59, 32, 1),
(41, 59, 33, 1),
(47, 63, 45, 0),
(48, 63, 55, 0),
(49, 63, 54, 0),
(50, 63, 26, 0),
(51, 63, 38, 0),
(52, 63, 57, 0),
(53, 62, 51, 1),
(54, 62, 52, 1),
(55, 62, 62, 1),
(56, 62, 41, 0),
(57, 51, 57, 0),
(58, 51, 55, 0),
(59, 51, 54, 0),
(60, 51, 26, 0),
(61, 39, 57, 0),
(62, 39, 56, 0),
(63, 39, 33, 1),
(64, 38, 41, 0),
(65, 38, 57, 0),
(66, 38, 56, 0),
(68, 38, 32, 1),
(69, 38, 33, 1),
(70, 38, 43, 1),
(71, 38, 53, 1),
(72, 38, 50, 1),
(73, 38, 30, 1),
(74, 37, 41, 0),
(75, 37, 57, 0),
(76, 37, 32, 1),
(77, 37, 33, 1),
(78, 37, 50, 1),
(79, 37, 43, 1),
(80, 37, 53, 1),
(81, 37, 30, 1),
(82, 53, 50, 1),
(83, 53, 41, 1),
(84, 53, 30, 1),
(85, 58, 47, 1),
(86, 58, 50, 1),
(87, 58, 31, 1),
(88, 31, 30, 0),
(89, 31, 47, 1),
(90, 31, 60, 1),
(91, 31, 57, 1),
(92, 40, 56, 0),
(93, 40, 38, 0),
(94, 40, 51, 0),
(95, 40, 54, 0),
(96, 40, 30, 1),
(97, 40, 43, 1),
(98, 41, 62, 0),
(99, 41, 51, 0),
(100, 41, 43, 1),
(101, 41, 30, 1),
(102, 43, 43, 1),
(103, 50, 56, 0),
(104, 50, 30, 0),
(105, 50, 29, 0),
(106, 50, 43, 0),
(107, 50, 41, 0),
(108, 50, 40, 0),
(109, 50, 57, 1),
(110, 50, 31, 1),
(111, 50, 46, 1),
(112, 50, 51, 1),
(113, 50, 47, 1),
(114, 28, 51, 0),
(115, 28, 58, 0),
(116, 49, 56, 1),
(117, 49, 50, 1);

-- --------------------------------------------------------

--
-- Structure de la table `semis`
--

CREATE TABLE `semis` (
  `id_semi` int(20) NOT NULL,
  `nom_semi` varchar(100) NOT NULL,
  `ref_type_semi` int(5) NOT NULL,
  `distance_entre_rang` int(10) NOT NULL,
  `distance_sur_rang` int(10) NOT NULL,
  `profondeur` int(5) NOT NULL,
  `temps_levee_jour` int(11) NOT NULL,
  `temperature_germi` int(11) NOT NULL,
  `taux_germi` int(20) NOT NULL,
  `rendement` int(20) DEFAULT NULL,
  `debut_semi` int(2) NOT NULL,
  `fin_semi` int(2) NOT NULL,
  `ref_variete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `semis`
--

INSERT INTO `semis` (`id_semi`, `nom_semi`, `ref_type_semi`, `distance_entre_rang`, `distance_sur_rang`, `profondeur`, `temps_levee_jour`, `temperature_germi`, `taux_germi`, `rendement`, `debut_semi`, `fin_semi`, `ref_variete`) VALUES
(5, 'Plein champ', 1, 1, 1, 1, 1, 1, 90, NULL, 1, 1, 7);

-- --------------------------------------------------------

--
-- Structure de la table `stockage`
--

CREATE TABLE `stockage` (
  `id_stockage` int(11) NOT NULL,
  `hygrometrie` varchar(50) NOT NULL,
  `aeration` varchar(50) NOT NULL,
  `temperature` int(10) NOT NULL,
  `duree_conservation` int(5) NOT NULL,
  `local` varchar(50) NOT NULL,
  `ref_variete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tunnels`
--

CREATE TABLE `tunnels` (
  `id_tunnel` int(11) NOT NULL,
  `type_tunnel` varchar(200) NOT NULL,
  `debut_tunnel` int(20) NOT NULL,
  `fin_tunnel` int(20) NOT NULL,
  `commentaire_tunnel` varchar(1000) NOT NULL,
  `ref_semi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tunnels`
--

INSERT INTO `tunnels` (`id_tunnel`, `type_tunnel`, `debut_tunnel`, `fin_tunnel`, `commentaire_tunnel`, `ref_semi`) VALUES
(4, 'Test', 1, 1, 'Test', 5);

-- --------------------------------------------------------

--
-- Structure de la table `type_semis`
--

CREATE TABLE `type_semis` (
  `id_type_semi` int(11) NOT NULL,
  `type_semi_description` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `type_semis`
--

INSERT INTO `type_semis` (`id_type_semi`, `type_semi_description`) VALUES
(1, 'Direct en place - Plein Champ'),
(2, 'Direct en place - Sous abri'),
(3, 'Pépinière (terre) - Plein Champ'),
(4, 'Pépinière (terre) - Sous abri'),
(5, 'Sur terreau, couche, terrine - Avec chauffage'),
(6, 'Sur terreau, couche, terrine - Sans chauffage'),
(7, 'Sur terreau, en motte, godet, alvéole, pot - Avec Chauffage'),
(8, 'Sur terreau, en motte, godet, alvéole, pot - Sans Chauffage');

-- --------------------------------------------------------

--
-- Structure de la table `varietes`
--

CREATE TABLE `varietes` (
  `id_variete` int(11) NOT NULL,
  `nom_variete` varchar(50) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `ref_plante` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `varietes`
--

INSERT INTO `varietes` (`id_variete`, `nom_variete`, `description`, `ref_plante`) VALUES
(6, 'Marmande', 'Croissance mi-déterminée.\\nPrécoce.\\nCycle de 65 jours.\\nPoids moyen : 180 g. Calibre de 77.\\nTrès populaire en France. Fruit rond à aplati côtelé, très bonne résistance aux maladies communes.\\nCroissance vigoureuse.\\nCouleur rouge. Chair douce et savoureuse.\\nNouaison et fructification même à basses températures.', 30),
(7, 'Saint Pierre', 'Croissance indéterminée.\\nMi-précoce.\\nGros fruit rond, de très belle qualité, régulier de calibre 57-67.\\nPoids moyen 110 g.\\nChair ferme et juteuse.\\nTrès bon goût. Couleur rouge vif.\\nGrosse production échelonnée.\\nTrès adaptée pour le marché de frais et pour la conserverie.', 30);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `associations`
--
ALTER TABLE `associations`
  ADD PRIMARY KEY (`id_asso`);

--
-- Index pour la table `exportations`
--
ALTER TABLE `exportations`
  ADD PRIMARY KEY (`id_rendement`),
  ADD KEY `ref_plante` (`ref_plante`);

--
-- Index pour la table `familles`
--
ALTER TABLE `familles`
  ADD PRIMARY KEY (`id_famille`);

--
-- Index pour la table `graines`
--
ALTER TABLE `graines`
  ADD PRIMARY KEY (`id_graine`),
  ADD KEY `id_plante` (`ref_variete`);

--
-- Index pour la table `groupes`
--
ALTER TABLE `groupes`
  ADD PRIMARY KEY (`id_groupe`);

--
-- Index pour la table `histoire_planches`
--
ALTER TABLE `histoire_planches`
  ADD PRIMARY KEY (`id_histoire`),
  ADD KEY `id_plante` (`id_variete`),
  ADD KEY `id_planche` (`id_planche`);

--
-- Index pour la table `pedoclimat`
--
ALTER TABLE `pedoclimat`
  ADD PRIMARY KEY (`id_pedoclimat`),
  ADD KEY `id_plante` (`ref_plante`);

--
-- Index pour la table `planches`
--
ALTER TABLE `planches`
  ADD PRIMARY KEY (`id_planche`);

--
-- Index pour la table `plantes`
--
ALTER TABLE `plantes`
  ADD PRIMARY KEY (`id_plante`);

--
-- Index pour la table `production`
--
ALTER TABLE `production`
  ADD PRIMARY KEY (`id_production`),
  ADD KEY `id_plante` (`ref_variete`);

--
-- Index pour la table `recoltes`
--
ALTER TABLE `recoltes`
  ADD PRIMARY KEY (`id_recolte`),
  ADD KEY `ref_semi` (`ref_semi`);

--
-- Index pour la table `repiquages`
--
ALTER TABLE `repiquages`
  ADD PRIMARY KEY (`id_repiquage`),
  ADD KEY `ref_semi` (`ref_semi`);

--
-- Index pour la table `rotation_duree`
--
ALTER TABLE `rotation_duree`
  ADD PRIMARY KEY (`id_duree_rotation`),
  ADD KEY `id_plante` (`ref_plante`),
  ADD KEY `id_plante_2` (`ref_plante`);

--
-- Index pour la table `rotation_famille`
--
ALTER TABLE `rotation_famille`
  ADD PRIMARY KEY (`id_rotation_famille`),
  ADD KEY `id_famille` (`ref_famille`),
  ADD KEY `id_plante` (`ref_plante`);

--
-- Index pour la table `rotation_plante`
--
ALTER TABLE `rotation_plante`
  ADD PRIMARY KEY (`id_rotation_plante`);

--
-- Index pour la table `semis`
--
ALTER TABLE `semis`
  ADD PRIMARY KEY (`id_semi`),
  ADD KEY `type_semis` (`ref_type_semi`),
  ADD KEY `id_variete` (`ref_variete`) USING BTREE;

--
-- Index pour la table `stockage`
--
ALTER TABLE `stockage`
  ADD PRIMARY KEY (`id_stockage`),
  ADD KEY `id_plante` (`ref_variete`);

--
-- Index pour la table `tunnels`
--
ALTER TABLE `tunnels`
  ADD PRIMARY KEY (`id_tunnel`),
  ADD KEY `id_plante` (`ref_semi`);

--
-- Index pour la table `type_semis`
--
ALTER TABLE `type_semis`
  ADD PRIMARY KEY (`id_type_semi`);

--
-- Index pour la table `varietes`
--
ALTER TABLE `varietes`
  ADD PRIMARY KEY (`id_variete`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `associations`
--
ALTER TABLE `associations`
  MODIFY `id_asso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT pour la table `exportations`
--
ALTER TABLE `exportations`
  MODIFY `id_rendement` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `familles`
--
ALTER TABLE `familles`
  MODIFY `id_famille` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT pour la table `graines`
--
ALTER TABLE `graines`
  MODIFY `id_graine` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `groupes`
--
ALTER TABLE `groupes`
  MODIFY `id_groupe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `histoire_planches`
--
ALTER TABLE `histoire_planches`
  MODIFY `id_histoire` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `pedoclimat`
--
ALTER TABLE `pedoclimat`
  MODIFY `id_pedoclimat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT pour la table `planches`
--
ALTER TABLE `planches`
  MODIFY `id_planche` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `plantes`
--
ALTER TABLE `plantes`
  MODIFY `id_plante` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT pour la table `production`
--
ALTER TABLE `production`
  MODIFY `id_production` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `recoltes`
--
ALTER TABLE `recoltes`
  MODIFY `id_recolte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `repiquages`
--
ALTER TABLE `repiquages`
  MODIFY `id_repiquage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `rotation_duree`
--
ALTER TABLE `rotation_duree`
  MODIFY `id_duree_rotation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT pour la table `rotation_famille`
--
ALTER TABLE `rotation_famille`
  MODIFY `id_rotation_famille` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=261;
--
-- AUTO_INCREMENT pour la table `rotation_plante`
--
ALTER TABLE `rotation_plante`
  MODIFY `id_rotation_plante` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
--
-- AUTO_INCREMENT pour la table `semis`
--
ALTER TABLE `semis`
  MODIFY `id_semi` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `stockage`
--
ALTER TABLE `stockage`
  MODIFY `id_stockage` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `tunnels`
--
ALTER TABLE `tunnels`
  MODIFY `id_tunnel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `type_semis`
--
ALTER TABLE `type_semis`
  MODIFY `id_type_semi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `varietes`
--
ALTER TABLE `varietes`
  MODIFY `id_variete` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `pedoclimat`
--
ALTER TABLE `pedoclimat`
  ADD CONSTRAINT `pedoclimat_ibfk_1` FOREIGN KEY (`ref_plante`) REFERENCES `plantes` (`id_plante`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

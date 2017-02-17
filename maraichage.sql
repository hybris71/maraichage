-- MySQL dump 10.15  Distrib 10.0.21-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: maraichage
-- ------------------------------------------------------
-- Server version	10.0.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `associations`
--

DROP TABLE IF EXISTS `associations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `associations` (
  `id_asso` int(11) NOT NULL AUTO_INCREMENT,
  `id_plante` int(11) NOT NULL,
  `id_plante_asso` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_asso`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `associations`
--

LOCK TABLES `associations` WRITE;
/*!40000 ALTER TABLE `associations` DISABLE KEYS */;
INSERT INTO `associations` VALUES (1,1,2,0),(3,1,4,0),(4,1,5,0),(5,1,6,0),(6,1,7,1),(7,1,8,0),(8,1,9,0),(9,1,10,0),(10,1,11,1),(11,1,12,1),(12,1,13,1);
/*!40000 ALTER TABLE `associations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `familles`
--

DROP TABLE IF EXISTS `familles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `familles` (
  `id_famille` int(11) NOT NULL AUTO_INCREMENT,
  `nom_famille` varchar(100) NOT NULL,
  PRIMARY KEY (`id_famille`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `familles`
--

LOCK TABLES `familles` WRITE;
/*!40000 ALTER TABLE `familles` DISABLE KEYS */;
INSERT INTO `familles` VALUES (1,'Solanacées'),(2,'Astéracées'),(3,'Curcubitacées'),(4,'Brassicacées'),(5,'Apiacées'),(6,'Lamiacées'),(7,'Tropaéolacées'),(8,'Fabacées'),(9,'Chénopodiacées');
/*!40000 ALTER TABLE `familles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `graines`
--

DROP TABLE IF EXISTS `graines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `graines` (
  `id_graine` int(11) NOT NULL AUTO_INCREMENT,
  `pmg` int(11) NOT NULL,
  `prix` int(11) NOT NULL,
  `taux_germi` int(11) NOT NULL,
  `duree_vie` int(11) NOT NULL,
  `id_variete` int(11) NOT NULL,
  PRIMARY KEY (`id_graine`),
  KEY `id_plante` (`id_variete`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graines`
--

LOCK TABLES `graines` WRITE;
/*!40000 ALTER TABLE `graines` DISABLE KEYS */;
INSERT INTO `graines` VALUES (1,4,3,80,0,1);
/*!40000 ALTER TABLE `graines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupes`
--

DROP TABLE IF EXISTS `groupes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groupes` (
  `id_groupe` int(11) NOT NULL AUTO_INCREMENT,
  `nom_groupe` varchar(100) NOT NULL,
  PRIMARY KEY (`id_groupe`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupes`
--

LOCK TABLES `groupes` WRITE;
/*!40000 ALTER TABLE `groupes` DISABLE KEYS */;
INSERT INTO `groupes` VALUES (1,'Racine'),(2,'Feuille'),(3,'Fruit'),(4,'Graine'),(5,'Fleur');
/*!40000 ALTER TABLE `groupes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `histoire_planches`
--

DROP TABLE IF EXISTS `histoire_planches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `histoire_planches` (
  `id_histoire` int(11) NOT NULL AUTO_INCREMENT,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_variete` int(11) NOT NULL,
  `id_planche` int(11) NOT NULL,
  PRIMARY KEY (`id_histoire`),
  KEY `id_plante` (`id_variete`),
  KEY `id_planche` (`id_planche`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histoire_planches`
--

LOCK TABLES `histoire_planches` WRITE;
/*!40000 ALTER TABLE `histoire_planches` DISABLE KEYS */;
/*!40000 ALTER TABLE `histoire_planches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedoclimat`
--

DROP TABLE IF EXISTS `pedoclimat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedoclimat` (
  `id_pedoclimat` int(11) NOT NULL AUTO_INCREMENT,
  `climat_favorable` varchar(100) NOT NULL,
  `climat_defavorable` varchar(100) NOT NULL,
  `commentaire_climat` varchar(100) NOT NULL,
  `sol_favorable` varchar(100) NOT NULL,
  `sol_defavorable` varchar(100) NOT NULL,
  `commentaire_sol` varchar(100) NOT NULL,
  `fertilisation_favorable` varchar(100) NOT NULL,
  `fertilisation_defavorable` varchar(100) NOT NULL,
  `commentaire_fertilisation` varchar(100) NOT NULL,
  `besoin_eau` varchar(100) NOT NULL,
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_pedoclimat`),
  KEY `id_plante` (`id_plante`),
  CONSTRAINT `pedoclimat_ibfk_1` FOREIGN KEY (`id_plante`) REFERENCES `plantes` (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedoclimat`
--

LOCK TABLES `pedoclimat` WRITE;
/*!40000 ALTER TABLE `pedoclimat` DISABLE KEYS */;
INSERT INTO `pedoclimat` VALUES (1,'20° à 30° le jour\r\n15° à 20° la nuit','Gelée à -1°, vent, excès d\'humidité','Sous abri dans le nord Plein champ ou sous abri  au sud','Limon profond, riche en humus, ameubli sur au moins 30 cm pH de 5,5 à 6,8\r\n','Sol argileux, froid, asphyxiant, sableux superficiel\r\n','Attention aux excès d’humidité','Compost en grande quantité, engrais organique et minéral en complément\r\n','Fumier frais, Excès d’azote ','Culture vorace','2 à 3 fois par semaine',1);
/*!40000 ALTER TABLE `pedoclimat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `planches`
--

DROP TABLE IF EXISTS `planches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planches` (
  `id_planche` int(11) NOT NULL AUTO_INCREMENT,
  `largeur` int(11) NOT NULL,
  `longueur` int(11) NOT NULL,
  `sous_serre` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_planche`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planches`
--

LOCK TABLES `planches` WRITE;
/*!40000 ALTER TABLE `planches` DISABLE KEYS */;
INSERT INTO `planches` VALUES (1,1,30,1);
/*!40000 ALTER TABLE `planches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantes`
--

DROP TABLE IF EXISTS `plantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plantes` (
  `id_plante` int(20) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `origine_geographique` varchar(50) NOT NULL,
  `anciennete_culture` varchar(50) NOT NULL,
  `cycle` varchar(50) NOT NULL,
  `description` varchar(400) NOT NULL,
  `engrais_vert` tinyint(1) NOT NULL,
  `compagne` tinyint(1) NOT NULL,
  `id_groupe` int(11) NOT NULL,
  `id_famille` int(11) NOT NULL,
  PRIMARY KEY (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantes`
--

LOCK TABLES `plantes` WRITE;
/*!40000 ALTER TABLE `plantes` DISABLE KEYS */;
INSERT INTO `plantes` VALUES (1,'Tomate','Amérique Centrale','5000 ans','Annuel','La tomate est une plante exigeante en chaleur, craignant le gel. Son fruit est charnu, de forme, couleur et calibre très variés.',0,0,3,1),(2,'Oeillet d\'Inde','Amérique Centrale','','Annuel','L’œillet d’Inde possède un port buissonnant et un feuillage vert foncé, très découpé. Ses fleurs nombreuses en capitules simples ou doubles, selon les variétés, apportent des nuances allant du jaune, orange jusqu’au marron. Cette plante annuelle fleurit tout l’été.\r\nSon odeur peu agréable est un véritable répulsif naturel au potager car elle éloigne un bon nombre d’insectes.',1,1,5,2),(4,'Carotte','Iran','1200','Biannuelle','La carotte est une plante herbacée bisannuelle qui peut atteindre jusqu\'à 30 centimètres de haut, à racine pivotante, le plus souvent orange, épaisse et allongée.',0,0,1,5),(5,'Basilic','Asie du Sud','','Vivace','Un plant mesure de 20 à 60 cm de haut, possède des feuilles ovales-lancéolées, atteignant 2 à 3 cm. Les feuilles sont vert pâle à vert foncé, parfois pourpre violet chez certaines variétés.',0,1,2,6),(6,'Capucine','Amérique du Sud, Pérou','1300','Annuelle ou Vivace','La capucine est une fleur comestible, très facile d\'entretien, qui fleurit tout l’été. Grimpante ou naine, elle trouve sa place partout au jardin et sur les balcons. Elle est aussi utile au potager car elle éloigne les pucerons des légumes.',0,1,5,7),(7,'Haricot','Amérique centrale, Amérique du Sud','9000','Annuel','Légume vert par excellence, aux qualités tant diététiques que gustatives, le haricot se décline en gousses croquantes ou en grains fondants et il nourrit le sol du jardin en même temps que le jardinier.',0,0,4,8),(8,'Chou-Fleur','','1400','Annuelle ou Bisannuelle','Plébiscité pour sa saveur plutôt douce et sa belle pomme blanche, le chou-fleur est le chou préféré des Français. On trouve aujourd’hui, des choux-fleurs à la pomme vert jaune spiralée très décorative, à pomme orange ou encore violette.',0,0,5,4),(9,'Pois','Bassin méditerranéen et Asie','2000','Annuelle','Le petit pois se récolte du printemps à l’été. Selon les variétés, on peut le déguster de différentes façons. De culture facile, faites-lui une place au potager, car c’est un véritable délice !',0,0,4,8),(10,'Pomme de terre','Amérique du Sud','5000',' Annuelle','Très facile à cultiver et de récolte très généreuse, la pomme de terre est un des légumes les plus consommés au monde. Elle fait le bonheur des jardiniers amateurs mais aussi des jardiniers expérimentés. N\'hésitez donc pas à varier les variétés !',0,0,1,1),(11,'Betterave','Europe méridionale','1500','Bisannuelle','De culture facile, la betterave offre une production généreuse. Consommé cru ou cuit, ce légume à la saveur sucrée est riche en vitamines et en sels minéraux. Bien conservée, elle se déguste tout l’hiver.',0,0,1,9),(12,'Concombre','Asie','1300','Annuelle','Le concombre, légume d’été par excellence, est très rafraîchissant. Il se déguste de différentes façons, cru et même cuit. De culture facile, il apprécie une exposition ensoleillée et un arrosage régulier.',0,0,3,3),(13,'Cornichon','Asie','1300','Annuelle','Les cornichons sont un régal pour accompagner nos charcuteries toute l’année. Issus de la même plante que les concombres, ils sont faciles à cultiver, vous pouvez les planter au potager où ils pousseront très rapidement.',0,0,3,3);
/*!40000 ALTER TABLE `plantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `production`
--

DROP TABLE IF EXISTS `production`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `production` (
  `id_production` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) NOT NULL,
  `quantite` int(11) NOT NULL,
  `annee` int(11) NOT NULL,
  `prixht` int(11) NOT NULL,
  `taux_marge` int(11) NOT NULL,
  `id_variete` int(11) NOT NULL,
  PRIMARY KEY (`id_production`),
  KEY `id_plante` (`id_variete`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `production`
--

LOCK TABLES `production` WRITE;
/*!40000 ALTER TABLE `production` DISABLE KEYS */;
/*!40000 ALTER TABLE `production` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recoltes`
--

DROP TABLE IF EXISTS `recoltes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recoltes` (
  `id_recolte` int(11) NOT NULL AUTO_INCREMENT,
  `debut_recolte` int(3) NOT NULL,
  `fin_recolte` int(3) NOT NULL,
  `deroulement` varchar(10000) NOT NULL,
  `frequence_int` int(11) NOT NULL,
  `frequence_com` varchar(500) NOT NULL,
  `ref_semi` int(20) NOT NULL,
  PRIMARY KEY (`id_recolte`),
  KEY `ref_semi` (`ref_semi`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recoltes`
--

LOCK TABLES `recoltes` WRITE;
/*!40000 ALTER TABLE `recoltes` DISABLE KEYS */;
INSERT INTO `recoltes` VALUES (2,7,10,'Récolte manuelle, fruit par fruit.',2,'Deux fois par semaine et quelques fois trois fois si le temps est chaud.',1);
/*!40000 ALTER TABLE `recoltes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repiquages`
--

DROP TABLE IF EXISTS `repiquages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repiquages` (
  `id_repiquage` int(11) NOT NULL AUTO_INCREMENT,
  `debut_repi` int(3) NOT NULL,
  `fin_repi` int(3) NOT NULL,
  `repi_commentaire` varchar(10000) NOT NULL,
  `ref_semi` int(20) NOT NULL,
  PRIMARY KEY (`id_repiquage`),
  KEY `ref_semi` (`ref_semi`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repiquages`
--

LOCK TABLES `repiquages` WRITE;
/*!40000 ALTER TABLE `repiquages` DISABLE KEYS */;
INSERT INTO `repiquages` VALUES (1,4,6,'Les plants doivent faire 15 centimètre de haut.',1);
/*!40000 ALTER TABLE `repiquages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rotation_duree`
--

DROP TABLE IF EXISTS `rotation_duree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rotation_duree` (
  `id_duree_rotation` int(11) NOT NULL AUTO_INCREMENT,
  `duree_mini` int(11) NOT NULL,
  `commentaire_duree` varchar(500) NOT NULL,
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_duree_rotation`),
  KEY `id_plante` (`id_plante`),
  KEY `id_plante_2` (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rotation_duree`
--

LOCK TABLES `rotation_duree` WRITE;
/*!40000 ALTER TABLE `rotation_duree` DISABLE KEYS */;
INSERT INTO `rotation_duree` VALUES (1,2,'La durée de 4 ans est rarement respectée faute de surface d\'abri suffisante.',1);
/*!40000 ALTER TABLE `rotation_duree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rotation_famille`
--

DROP TABLE IF EXISTS `rotation_famille`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rotation_famille` (
  `id_rotation_famille` int(11) NOT NULL AUTO_INCREMENT,
  `id_plante` int(11) NOT NULL,
  `id_famille` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_rotation_famille`),
  KEY `id_famille` (`id_famille`),
  KEY `id_plante` (`id_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rotation_famille`
--

LOCK TABLES `rotation_famille` WRITE;
/*!40000 ALTER TABLE `rotation_famille` DISABLE KEYS */;
INSERT INTO `rotation_famille` VALUES (1,1,1,1),(2,1,3,0),(3,1,4,0);
/*!40000 ALTER TABLE `rotation_famille` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rotation_plante`
--

DROP TABLE IF EXISTS `rotation_plante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rotation_plante` (
  `id_rotation_plante` int(11) NOT NULL AUTO_INCREMENT,
  `id_plante` int(11) NOT NULL,
  `id_plante_condition` int(11) NOT NULL,
  `favorable` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_rotation_plante`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rotation_plante`
--

LOCK TABLES `rotation_plante` WRITE;
/*!40000 ALTER TABLE `rotation_plante` DISABLE KEYS */;
INSERT INTO `rotation_plante` VALUES (1,1,4,0);
/*!40000 ALTER TABLE `rotation_plante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `semis`
--

DROP TABLE IF EXISTS `semis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `semis` (
  `id_semi` int(20) NOT NULL AUTO_INCREMENT,
  `type_semis` int(5) NOT NULL,
  `distance_entre_rang` int(10) NOT NULL,
  `distance_sur_rang` int(10) NOT NULL,
  `profondeur` int(5) NOT NULL,
  `temps_levee_jour` int(11) NOT NULL,
  `temperature_germi` int(11) NOT NULL,
  `debut_semi` int(2) NOT NULL,
  `fin_semi` int(2) NOT NULL,
  `id_variete` int(11) NOT NULL,
  PRIMARY KEY (`id_semi`),
  KEY `id_plante` (`id_variete`),
  KEY `type_semis` (`type_semis`),
  CONSTRAINT `semis_ibfk_1` FOREIGN KEY (`id_variete`) REFERENCES `plantes` (`id_plante`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `semis`
--

LOCK TABLES `semis` WRITE;
/*!40000 ALTER TABLE `semis` DISABLE KEYS */;
INSERT INTO `semis` VALUES (1,5,80,50,1,8,20,2,4,1);
/*!40000 ALTER TABLE `semis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockage`
--

DROP TABLE IF EXISTS `stockage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stockage` (
  `id_stockage` int(11) NOT NULL AUTO_INCREMENT,
  `hygrometrie` varchar(50) NOT NULL,
  `aeration` varchar(50) NOT NULL,
  `temperature` int(10) NOT NULL,
  `duree_conservation` int(5) NOT NULL,
  `local` varchar(50) NOT NULL,
  `id_variete` int(11) NOT NULL,
  PRIMARY KEY (`id_stockage`),
  KEY `id_plante` (`id_variete`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockage`
--

LOCK TABLES `stockage` WRITE;
/*!40000 ALTER TABLE `stockage` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tunnels`
--

DROP TABLE IF EXISTS `tunnels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tunnels` (
  `id_tunnel` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  `tunnel_debut` date NOT NULL,
  `tunnel_fin` date NOT NULL,
  `id_variete` int(11) NOT NULL,
  PRIMARY KEY (`id_tunnel`),
  KEY `id_plante` (`id_variete`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tunnels`
--

LOCK TABLES `tunnels` WRITE;
/*!40000 ALTER TABLE `tunnels` DISABLE KEYS */;
/*!40000 ALTER TABLE `tunnels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_semis`
--

DROP TABLE IF EXISTS `type_semis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_semis` (
  `id_type` int(11) NOT NULL AUTO_INCREMENT,
  `type_description` varchar(100) NOT NULL,
  PRIMARY KEY (`id_type`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_semis`
--

LOCK TABLES `type_semis` WRITE;
/*!40000 ALTER TABLE `type_semis` DISABLE KEYS */;
INSERT INTO `type_semis` VALUES (1,'Direct en place - Plein Champ'),(2,'Direct en place - Sous abri'),(3,'Pépinière (terre) - Plein Champ'),(4,'Pépinière (terre) - Sous abri'),(5,'Sur terreau, couche, terrine - Avec chauffage'),(6,'Sur terreau, couche, terrine - Sans chauffage'),(7,'Sur terreau, en motte, godet, alvéole, pot - Avec Chauffage'),(8,'Sur terreau, en motte, godet, alvéole, pot - Sans Chauffage');
/*!40000 ALTER TABLE `type_semis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `varietes`
--

DROP TABLE IF EXISTS `varietes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `varietes` (
  `id_variete` int(11) NOT NULL AUTO_INCREMENT,
  `nom_variete` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `id_plante` int(11) NOT NULL,
  PRIMARY KEY (`id_variete`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `varietes`
--

LOCK TABLES `varietes` WRITE;
/*!40000 ALTER TABLE `varietes` DISABLE KEYS */;
INSERT INTO `varietes` VALUES (1,'Marmande','La célèbre tomate Marmande est un variété assez précoce, vigoureuse et productive, fruits de 150 à 250 g, chair ferme, sucrée, parfumée, de bonne qualité. En salade, à farcir, en gratin, sauce.',1),(2,'Coeur de boeuf','La tomate cœur de bœuf est la star des tomates ! C\'est une variété ancienne que l\'on trouve aussi sous l\'appellation italienne  « cuor di bue ».',1);
/*!40000 ALTER TABLE `varietes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-31 13:16:45

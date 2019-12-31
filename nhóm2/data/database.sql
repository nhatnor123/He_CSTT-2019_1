-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: picturefuzzy
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patient` (
  `idpatient` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `birth` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `gender` enum('Male','Female') COLLATE utf8_unicode_ci NOT NULL,
  `bhyt` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`idpatient`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='cau truc bang du lieu benh nhan';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Phạm Văn Nguyên','11/04/1998','Male','01234','deptrai.jpg'),(2,'Nguyễn Văn A','12/05/1997','Male','01235','image02.jpg'),(3,'Nguyễn Văn C','06-08-1998','Male','YT023','deptrai.jpg'),(4,'nguyên','11/04/1998','Male','05346','ảnh thẻ 2.jpg'),(5,'Iron Man','11/04/1998','Male','01245','ảnh thẻ 3.jpg'),(6,'Iron Man','11/04/1998','Male','01245','ảnh thẻ 4.jpg'),(7,'Thor','26/8/1998','Male','05684','ảnh thẻ 5.jpg'),(8,'captain marvel','16/10/1972','Female','53142','ảnh thẻ 6.jpg'),(9,'Nguyễn Thị C','123/08/1972','Female','03645','ảnh thẻ 7.jpg'),(10,'Nguyễn Việt H','25/06/1998','Male','03546','ảnh thẻ.jpg'),(11,'nguyên','11/04/1998','Male','06588',NULL),(12,'nguyen pham van','11/04/1998','Male','03648',NULL),(13,'nguyên','11/04/1998','Male','06586',NULL),(14,'nguyên phạm','11/04/1998','Male','05384','tải xuống.jpg');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients_diagnoses_value`
--

DROP TABLE IF EXISTS `patients_diagnoses_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `patients_diagnoses_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fever` double NOT NULL,
  `malaria` double NOT NULL,
  `typhoid` double NOT NULL,
  `stomach` double NOT NULL,
  `chestProblem` double NOT NULL,
  `date` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `idpatient` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_patients_diagnoses_value_patient_idx` (`idpatient`),
  CONSTRAINT `fk_patients_diagnoses_value_patient` FOREIGN KEY (`idpatient`) REFERENCES `patient` (`idpatient`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients_diagnoses_value`
--

LOCK TABLES `patients_diagnoses_value` WRITE;
/*!40000 ALTER TABLE `patients_diagnoses_value` DISABLE KEYS */;
INSERT INTO `patients_diagnoses_value` VALUES (1,0.408,0.793,0.682,0.206,0.06,'18/04/2019',1),(2,0.325,-0.062,0.443,0.63,0.09,'19/4/2019',1),(3,0.23,0.67,0.63,0.37,0.29,'20/04/2019',2),(4,0.25,0.34,0.56,0.72,0.18,'20/04/2019',2),(5,0.25,0.34,0.56,0.72,0.18,'20/04/2019',2),(6,0.425,0.74,0.7434,0.29309999999999997,0.10999999999999999,'04/05/2019',1),(7,0.425,0.7925000000000001,0.2799,0.7476,0.10999999999999999,'04/05/2019',8),(8,0.425,0.7925000000000001,0.2799,0.7476,0.10999999999999999,'04/05/2019',8);
/*!40000 ALTER TABLE `patients_diagnoses_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `symptoms_diagnoses`
--

DROP TABLE IF EXISTS `symptoms_diagnoses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `symptoms_diagnoses` (
  `idsymptoms_diagnoses` int(11) NOT NULL,
  `Fever_x` double NOT NULL,
  `Fever_y` double NOT NULL,
  `Fever_z` double NOT NULL,
  `Malaria_x` double NOT NULL,
  `Malaria_y` double NOT NULL,
  `Malaria_z` double NOT NULL,
  `Typhoid_x` double NOT NULL,
  `Typhoid_y` double NOT NULL,
  `Typhoid_z` double NOT NULL,
  `Stomach_x` double DEFAULT NULL,
  `Stomach_y` double DEFAULT NULL,
  `Stomach_z` double DEFAULT NULL,
  `Chest_problem_x` double DEFAULT NULL,
  `Chest_problem_y` double DEFAULT NULL,
  `Chest_problem_z` double DEFAULT NULL,
  PRIMARY KEY (`idsymptoms_diagnoses`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='cau trucs bangr du lieu trieuchung-benh';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `symptoms_diagnoses`
--

LOCK TABLES `symptoms_diagnoses` WRITE;
/*!40000 ALTER TABLE `symptoms_diagnoses` DISABLE KEYS */;
INSERT INTO `symptoms_diagnoses` VALUES (1,0.4,0.4,0.05,0.8,0.1,0.1,0.3,0.3,0.3,0.15,0.05,0.6,0.05,0.15,0.7),(2,0.4,0.25,0.3,0.1,0.2,0.6,0.75,0.05,0.03,0.3,0.05,0.05,0.01,0.1,0.8),(3,0.1,0.25,0.6,0.01,0.03,0.9,0.1,0.2,0.7,0.8,0.1,0.01,0.1,0.15,0.75),(4,0.45,0.2,0.1,0.65,0.5,0.05,0.2,0.15,0.6,0.25,0.25,0.5,0.15,0.2,0.7),(5,0.05,0.25,0.6,0.03,0.07,0.8,0.01,0.01,0.85,0.1,0.1,0.7,0.9,0.02,0.05);
/*!40000 ALTER TABLE `symptoms_diagnoses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-31 11:07:30

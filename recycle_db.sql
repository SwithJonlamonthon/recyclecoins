-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2022 at 09:09 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recycle_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_db`
--

CREATE TABLE `customer_db` (
  `User_ID` int(11) NOT NULL COMMENT 'User_id for data',
  `User_NAME` varchar(30) COLLATE utf8_bin NOT NULL,
  `User_PASSWORD` varchar(30) COLLATE utf8_bin NOT NULL,
  `User_WALLET` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User_DATABASE';

--
-- Dumping data for table `customer_db`
--

INSERT INTO `customer_db` (`User_ID`, `User_NAME`, `User_PASSWORD`, `User_WALLET`) VALUES
(11172, 'swith123', '111', 0),
(11177, 'www', 'qqq', 0),
(11179, 'aum', '11', 0),
(11195, 'jon', '123456789', 0),
(11196, 'peter', 'perter123', 0);

-- --------------------------------------------------------

--
-- Table structure for table `report of sell`
--

CREATE TABLE `report of sell` (
  `id` int(11) NOT NULL,
  `User_id` int(11) NOT NULL,
  `material` varchar(10) COLLATE utf8mb4_bin NOT NULL,
  `weight` int(11) NOT NULL,
  `coin` float NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_db`
--
ALTER TABLE `customer_db`
  ADD PRIMARY KEY (`User_ID`),
  ADD UNIQUE KEY `User_NAME` (`User_NAME`),
  ADD UNIQUE KEY `User_PASSWORD` (`User_PASSWORD`) KEY_BLOCK_SIZE=250;

--
-- Indexes for table `report of sell`
--
ALTER TABLE `report of sell`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_id` (`User_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer_db`
--
ALTER TABLE `customer_db`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'User_id for data', AUTO_INCREMENT=11197;

--
-- AUTO_INCREMENT for table `report of sell`
--
ALTER TABLE `report of sell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

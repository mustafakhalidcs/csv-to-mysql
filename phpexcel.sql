-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 06, 2016 at 09:37 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpexcel`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_excel`
--

CREATE TABLE IF NOT EXISTS `tbl_excel` (
  `id` int(6) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_excel`
--

INSERT INTO `tbl_excel` (`id`, `name`, `email`) VALUES
(1, 'mustafa', 'mustafa@test.com'),
(2, 'ali', 'ali@test.com'),
(3, 'usman', 'usman@test.com'),
(4, 'shakir', 'shakir@test.com'),
(5, 'farrukh', 'farrukh@test.com'),
(6, 'imran', 'imran@test.com'),
(7, 'mateen', 'mateen@test.com'),
(8, 'umar', 'umar@test.com'),
(9, 'yawar', 'yawar@test.com'),
(10, 'haseeb', 'haseeb@test.com'),
(11, 'nauroz', 'nauroz@test.com'),
(12, 'abc', 'abc@test.com'),
(13, 'xyz', 'xyz@test.com'),
(14, 'tuv', 'tuv@test.com'),
(15, 'pqr', 'pqr@test.com'),
(16, 'mno', 'mno@test.com'),
(17, 'efg', 'efg@test.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_excel`
--
ALTER TABLE `tbl_excel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_excel`
--
ALTER TABLE `tbl_excel`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 05-09-2023 a las 20:36:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`) VALUES
(1, 'peliculas_ver'),
(2, 'peliculas_agregar');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'administrador'),
(2, 'usuario registrado');

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`id_rol`, `id_privilegio`, `created_at`) VALUES
(1, 1, '2023-09-05 18:35:13'),
(1, 2, '2023-09-05 18:35:13'),
(2, 1, '2023-09-05 18:35:22');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `nombre`, `created_at`) VALUES
(1, 'Eduardo Daniel Juárez Pineda', 'lalo', '123', '2023-09-04 18:30:39'),
(2, 'lalo2', '123', 'Eduardo Daniel Juárez Pineda', '2023-09-04 18:31:56'),
(9, 'ivan123', '$2a$12$3RsEvGk3gyA0qASEtO1NZuIuOFUrlvVHo6msi9IH.2XUYL4DheZxm', 'Iván Ricardo', '2023-09-04 18:54:50'),
(10, 'jesus', '$2a$12$Vc8zJ4mlOV1LOg0Ois2hU.wNmiwDF8QssnZqTOAlcPnnIQXjEo9oe', 'Jesús', '2023-09-04 18:56:29'),
(11, 'arturosr', '$2a$12$scJ5/U17mPzRUQNa9XmpY.u1NKJ8Mrn7EMnEg/0IwbskcTLeo1t1i', 'Arturo Sánchez Rodríguez', '2023-09-05 18:31:56');

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_usuario`, `id_rol`, `created_at`) VALUES
(9, 1, '2023-09-05 18:32:23'),
(10, 2, '2023-09-05 18:32:23'),
(11, 2, '2023-09-05 18:32:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

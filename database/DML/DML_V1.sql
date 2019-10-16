INSERT INTO `tbl_cargos` (`ID_CARGO`, `NOMBRE_CARGO`) VALUES
(1, 'DIRECTOR EJECUTIVO'),
(2, 'DIRECTOR DE OPERACIONES'),
(3, 'DIRECTOR COMERCIAL - CSO'),
(4, 'DIRECTOR DE MARKETING'),
(5, 'DIRECTOR DE RECURSOS HUMANOS'),
(6, 'CUSTOMER SUCCESS (CS)'),
(7, 'DIRECTOR FINANCIERO'),
(8, 'TECNICO DE MANTENIMIENTO'),
(9, 'PRACTICANTE INGENIERO DE SOFTWARE');

INSERT INTO `tbl_paises` (`ID_PAIS`, `PAIS`) VALUES
(52, 'MÉXICO '),
(501, 'BELICE'),
(502, 'GUATEMALA'),
(503, 'EL SALVADOR '),
(504, 'HONDURAS'),
(505, 'NICARAGUA'),
(506, 'COSTA RICA'),
(1345, 'GRAN CAIMÁN');

INSERT INTO `tbl_ciudades` (`ID_CIUDAD`, `ID_PAIS`, `NOMBRE_CIUDAD`) VALUES
(1, 504, 'TEGUCIGALPA'),
(2, 504, 'SAN PEDRO SULA'),
(3, 504, 'TRUJILLO'),
(4, 504, 'LA CEIBA'),
(5, 504, 'ROATAN '),
(6, 503, 'CHINAMECA'),
(7, 503, 'SAN SALVADOR'),
(8, 503, 'SAN LUIS TALPA'),
(9, 502, 'VILLA CANALES'),
(10, 502, 'JUTIAPA'),
(11, 502, 'CIUDAD DE GUATEMALA'),
(12, 501, 'BELICE'),
(13, 505, 'MANAGUA'),
(14, 505, 'PUERTO CABEZAS'),
(15, 1345, 'GEORGE TOWN'),
(16, 505, 'BLUE FIELD'),
(17, 505, 'TOLA'),
(20, 506, 'GUANACASTE'),
(21, 506, 'TARRAZU '),
(22, 506, 'LIBERIA '),
(23, 504, 'COMAYAGUA'),
(24, 52, 'MERIDA'),
(25, 506, 'ALAJUELA'),
(26, 502, 'FLORES'),
(27, 506, 'SAN JOSE '),
(28, 501, 'CAYO');

INSERT INTO `tbl_sitios` (`ID_SITIO`, `ID_CIUDAD`, `NOMBRE_SITIO`) VALUES
(1, 1, 'CERRO MONTE CRUDO'),
(2, 1, 'SEDE'),
(3, 1, 'EL HORNO'),
(4, 1, 'TONCONTIN'),
(5, 1, 'AGENCIA HONDUREÑA AERONÁUTICA'),
(6, 1, 'TNT AEROPUERTO'),
(7, 1, 'COFAH'),
(8, 1, 'CERRO DE HULA'),
(9, 1, 'PEDREGAL HF'),
(10, 2, 'LA MESA'),
(11, 2, 'LAS CRUCES'),
(12, 4, 'LCE AEROPUERTO'),
(13, 4, 'LA CEIBA'),
(14, 5, 'ROATAN'),
(15, 5, 'DIXON HILL'),
(16, 23, 'SOTO'),
(17, 3, 'CALENTURA'),
(18, 9, 'SANTA ELENA DE BARILLAS'),
(19, 10, 'CERRO SANTIAGO'),
(20, 11, 'AURORA'),
(21, 11, 'NIKTUN'),
(22, 26, 'TIKAL'),
(23, 6, 'PAYACAL'),
(24, 7, 'BOQUERON'),
(25, 8, 'COMALAPA'),
(26, 7, 'ILOPANGO'),
(27, 13, 'LAS NUBES'),
(28, 13, 'MANAGUA'),
(29, 14, 'PUERTO CABEZAS'),
(30, 16, 'BLUE FIELD'),
(31, 17, 'CERRO LA CUESTA'),
(32, 20, 'CERRO BRUJO'),
(33, 20, 'EL COCO'),
(34, 21, 'MATA DE CAÑA'),
(35, 22, 'LIBERIA '),
(36, 25, 'VOLCÁN POAS'),
(37, 27, 'CERRO BUENA VISTA'),
(38, 28, 'BALDY BEACON'),
(39, 12, 'BELICE'),
(40, 15, 'GRAN CAIMÁN '),
(41, 24, 'MERIDA ');

INSERT INTO `tbl_localidades` (`ID_LOCALIDAD`, `ID_SITIO`,`NOMBRE_LOCALIDAD`) VALUES
(1, 2, 'HF'),
(2, 2, 'TOP SKY'); 

INSERT INTO `tbl_unidades` (`ID_UNIDAD`,`ID_SITIO`, `NOMBRE_UNIDAD`) VALUES
(1,2, 'AUTOMATIZACIÓN '),
(2,2, 'COMUNICACIÓN Y RADIO AYUDA'),
(3,2, 'ENERGÍA Y EQUIPOS AUXILIARES '),
(4,2, 'VIGILANCIA Y RADAR'),
(5,2, 'MACC');

INSERT INTO `tbl_empleados` (`ID_EMPLEADO`, `ID_UNIDAD`, `ID_CARGO`, `NOMBRE`, `CORREO`, `USUARIO`, `CONTRASENA`, `ACCESO`) VALUES
(1, 1, 8, 'Louie Liam Leannon Moen', 'louieliam@gmail.com', 'luilieliam1', 'asd.123', 1),
(2, 1, 8, 'Darrin Hank Becker Welch', 'darrinhank@hotmail.com', 'darrinhank2', 'asd.123', 1),
(3, 5, 8, 'Brett Jaeden Rempel Hermiston', 'brettjaedenr@gmail.com', 'brettjaeden3', 'asd.123', 1),
(4, 5, 8, 'Christ Gilbert Kunde Hoppe', 'christgilbertk@hotmail.com', 'christgilbert4', 'asd.123', 1),
(5, 5, 8, 'Russ Moises Osinski Rippin', 'russmoises@hotmail.com', 'russmoises5', 'asd.123', 1);

INSERT INTO `tbl_sistemas` (`ID_SISTEMA`, `ID_UNIDAD`, `NOMBRE_SISTEMA`) VALUES
(1, 2, 'PLANTA PBX TELEFÓNICA '),
(2, 2, 'VSAT '),
(3, 2, 'VOR/DME'),
(4, 3, 'UPS APC SYNMETRA'),
(5, 3, 'UPS'),
(6, 2, 'TX HF'),
(7, 3, 'TRANSFORMADOR DE ENTRADA ENEE'),
(8, 3, 'TRANSFER'),
(9, 3, 'TANQUE DE COMBUSTIBLE'),
(10, 3, 'SISTEMA DE TIERRA Y PROTECCIÓN'),
(11, 3, 'SISTEMA CONTRA INCENDIOS ARIES'),
(12, 4, 'RADARES'),
(13, 1, 'AIRCON'),
(14, 1, 'AIRCON SIMULADOR');

INSERT INTO `tbl_formatos` (`ID_FORMATO`, `ID_SISTEMA`, `NOMBRE_FORMATO`) VALUES
(1, 13, 'DIARIO 1-1'),
(2, 13, 'DIARIO 1-2'),
(3, 13, 'DIARIO 1-3'),
(4, 13, 'DIARIO 1-4'),
(5, 13, 'DIARIO 1-5'),
(6, 13, 'DIARIO 1-6'),
(7, 13, 'SEMANAL 1'),
(8, 13, 'SEMANAL 3'),
(9, 13, 'SEMANAL 3-1'),
(10, 13, 'SEMANAL 3-2'),
(11, 13, 'MENSUAL 1-1'),
(12, 13, 'MENSUAL 1-2'),
(13, 13, 'MENSUAL 1-3'),
(14, 13, 'MENSUAL 1-4'),
(15, 13, 'MENSUAL 4'),
(16, 13, 'MENSUAL 5-1'),
(17, 13, 'MENSUAL 6'),
(18, 13, 'MENSUAL 7-1'),
(19, 13, 'MENSUAL 7-2'),
(20, 13, 'TRIMESTRAL 5-2'),
(21, 13, 'TRIMESTRAL 8');

INSERT INTO `tbl_subsistemas` (`ID_SUBSISTEMA`, `ID_SISTEMA`, `NOMBRE_SUBSISTEMA`) VALUES
(1, 13, 'SDD'),
(2, 13, 'PDP'),
(3, 13, 'SDP'),
(4, 13, 'RDCU'),
(5, 13, 'DLS'),
(6, 13, 'DBM');

INSERT INTO `tbl_equipos` (`ID_EQUIPO`, `ID_SUBSISTEMA`, `NOMBRE_EQUIPO`, `UBICACION_FISICA`) VALUES
(1, 1, 'SDD1', 'UCS1'),
(2, 1,'SDD2', 'UCS1');

INSERT INTO `tbl_componente_final` (`ID_COMPONENTE`, `ID_EQUIPO`, `DESCRIPCION`) VALUES
(1, 1, 'LAN 1'),
(2, 1, 'LAN 2'),
(3, 1, 'ESTADO');

INSERT INTO `tbl_booleanos` (`SUBTIPO_VALOR_BOOLEANO`, `VALOR_CADENA`) VALUES
('1 - 1', 'OK'),
('1 - 2', 'NOK'),
('2 - 1', 'ON'),
('2 - 2', 'OFF'),
('2 - 3', 'BLK'),
('3 - 1', 'BLANCO'),
('3 - 2', 'NEGRO');

INSERT INTO `tbl_listas` (`SUBTIPO_VALOR_LISTA`, `VALOR_CADENA`) VALUES
('1 - 1', 'VERDE OSCURO'),
('1 - 2 ', 'VERDE CLARO'),
('1 - 3', 'ROJO'),
('1 - 4', 'MORADO'),
('1 - 5', 'BLANCO'),
('1 - 6', 'AZUL'),
('1 - 7', 'AMARILLO'),
('1 - 8', 'NEGRO'),
('1 - 9', 'GRIS'),
('2 - 1', 'BAJO'),
('2 - 2', 'MEDIO'),
('2 - 3', 'ALTO');

INSERT INTO `tbl_enteros_flotantes` (`SUBTIPO`, `VALOR_MINIMO`, `VALOR_MAXIMO`) VALUES
(1, 12, 15),
(2, 120, 150),
(3, 200, 250),
(4, 250, 300),
(5, 300, 350),
(6, 350, 400),
(7, 400, 450),
(8, 450, 500);

INSERT INTO `tbl_master` (`ID_DATO_INSERTADO`, `ID_SITIO`, `ID_EMPLEADO`, `ID_FORMATO`, `ID_EQUIPO`, `ID_COMPONENTE_FINAL`, `FECHA_AUTOMATICA`, `SUBTIPO_VALOR_BOOLEANO`, `SUBTIPO_VALOR_LISTA`) VALUES
(1, 5, 1, 1, 1, 2, '2019-09-26 14:48:07', '1 - 1', NULL),
(2, 20, 2, 2, 2, 2, '2019-09-26 14:48:07', '1 - 2', NULL),
(5, 8, 2, 5, 1, 1, '2019-09-26 14:48:54', '2 - 1', NULL),
(6, 17, 4, 4, 2, 2, '2019-09-26 14:48:54', '2 - 2', NULL),
(7, 39, 3, 3, 2, 3, '2019-09-26 14:50:33', NULL, '1 - 1'),
(8, 17, 3, 8, 2, 2, '2019-09-26 14:50:33', NULL, '1 - 3'),
(9, 30, 1, 18, 2, 2, '2019-09-26 14:51:00', NULL, '1 - 8'),
(10, 31, 3, 8, 1, 1, '2019-09-26 14:51:00', NULL, '1 - 5');

INSERT INTO `tbl_master_datos_numericos` (`ID_DATO_INSERTADO`, `ID_SITIO`, `ID_EMPLEADO`, `ID_FORMATO`, `ID_EQUIPO`, `ID_COMPONENTE`, `FECHA_AUTOMATICA`, `DATO_OBTENIDO`, `SUBTIPO`) VALUES
(1, 38, 2, 11, 2, 1, '2019-09-26 15:00:27', 12, 1),
(2, 1, 2, 8, 2, 1, '2019-09-26 15:00:27', 45, 4);

























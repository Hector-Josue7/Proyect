

select *
from libros
where titulo='El aleph' and
  autor='Borges' and
  editorial='Planeta';

Luego eliminamos con "limit" la cantidad sobrante
(tenemos 3 y queremos solo 1):

delete from libros
  where titulo='El aleph' and
  autor='Borges' and
  editorial='Planeta'
limit 2;




SELECT A.ID_UNIDAD, B.ID_PAIS, A.ID_CIUDAD, A.ID_SITIO, A.NOMBRE_UNIDAD
FROM tbl_unidades A
  INNER JOIN tbl_ciudades B ON (A.ID_CIUDAD  = B.ID_CIUDAD)
GROUP BY A.ID_CIUDAD, B.ID_CIUDAD

SELECT A.ID_UNIDAD, C.PAIS, B.NOMBRE_CIUDAD, D.NOMBRE_SITIO, A.NOMBRE_UNIDAD

FROM tbl_unidades A
  INNER JOIN tbl_ciudades B ON (A.ID_CIUDAD  = B.ID_CIUDAD)
  INNER JOIN tbl_paises C ON (B.ID_CIUDAD = C.ID_PAIS)
  INNER JOIN tbl_sitios D ON (C.ID_PAIS= D.ID_PAIS)

//------------------------------------------------------

select *
from tbl_listas
where SUBTIPO_VALOR_LISTA like '2%'


SELECT * FROM tbl_equipos WHERE ID_FORMATO = 9

SELECT
  A.NOMBRE_FORMATO, B.ID_SUBSISTEMA, B.NOMBRE_EQUIPO, B.UBICACION_FISICA
FROM tbl_formatos A
  LEFT JOIN tbl_equipos B
  ON A.ID_FORMATO = b.ID_FORMATO





    SELECT * FROM TBL_EQUIPOS   
  WHERE UBICACION_FISICA  LIKE "%DIFUSORES LAN 1%" 
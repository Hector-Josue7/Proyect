-- ejemplo de consulta para obtener valores nulos
select *
from VEHICULOS
where ULTI_ITV is null

-- ejemplo de  consulta para obtener valores no nulos
select *
from VEHICULOS
where ULTI_ITV is not null
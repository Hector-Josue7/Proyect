use bd_rutinas;
db.createCollection('cargos');
db.createCollection('paises');
db.createCollection('ciudades');
db.createCollection('sitios');



db.paises.insertMany(
    [{_id: ObjectId("5da8c4564b861f16ece54b12"),codigo_pais:52,nombre_pais: 'MÉXICO'},
     {_id: ObjectId("5da8c4564b861f16ece54b13"),codigo_pais:501,nombre_pais: 'BELICE'},
     {_id: ObjectId("5da8c4564b861f16ece54b14"),codigo_pais:502,nombre_pais: 'GUATEMALA'},
     {_id: ObjectId("5da8c4564b861f16ece54b15"),codigo_pais:503,nombre_pais: 'EL SALVADOR'},
     {_id: ObjectId("5da8c4564b861f16ece54b16"),codigo_pais:504,nombre_pais: 'HONDURAS'},
     {_id: ObjectId("5da8c4564b861f16ece54b17"),codigo_pais:505,nombre_pais: 'NICARAGUA'},
     {_id: ObjectId("5da8c4564b861f16ece54b18"),codigo_pais:506,nombre_pais: 'COSTA RICA'},
     {_id: ObjectId("5da8c4564b861f16ece54b19"),codigo_pais:1345,nombre_pais: 'GRAN CAIMAN'}
    ]);

db.ciudades.insertMany([ 
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'TEGUCIGALPA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"), nombre_pais: 'HONDURAS'},nombre_ciudad: 'SAN PEDRO SULA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'TRUJILLO'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'LA CEIBA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'ROATAN'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'COMAYAGUA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},nombre_ciudad: 'CIUDAD DESCONOCIDA HONDURAS'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'},nombre_ciudad: 'SAN SALVADOR'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'},nombre_ciudad: 'SAN LUIS TALPA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'},nombre_ciudad: 'CHINAMECA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'EL SALVADOR'},nombre_ciudad: 'CIUDAD DE GUATEMALA',},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'},nombre_ciudad: 'VILLA CANALES'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'},nombre_ciudad: 'JUTIAPA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'},nombre_ciudad: 'FLORES'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b13"),nombre_pais: 'BELICE'},nombre_ciudad: 'BELICE'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b13"),nombre_pais: 'BELICE'},nombre_ciudad: 'CAYO'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'},nombre_ciudad: 'MANAGUA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'}, nombre_ciudad: 'PUERTO CABEZAS'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'},nombre_ciudad: 'BLUE FIELD'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'},nombre_ciudad: 'TOLA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'},nombre_ciudad: 'CHINANDEGA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},nombre_ciudad: 'GUANACASTE'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},nombre_ciudad: 'TARRAZU'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},nombre_ciudad: 'LIBERIA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},nombre_ciudad: 'ALAJUELA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},nombre_ciudad: 'SAN JOSE'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b19"),nombre_pais: 'GRAN CAIMAN'},nombre_ciudad: 'GEORGE TOWN'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b12"),nombre_pais: 'MÉXICO'},nombre_ciudad: 'MERIDA'},
     {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b12"),nombre_pais: 'MÉXICO'},nombre_ciudad: 'CIUDAD DESCONOCIDA MEXICO'}
    ]);


db.sitios.insertMany([
{
      codigo_ciudad: {  _id: ObjectId("5daa36da4b861f16ece54b46"), nombre_ciudad: 'TEGUCIGALPA'},
      nombre_sitio: 'SEDE',
      triliteral: 'CEN',
      localidades: [
         {nombre_localidad: 'CERRO MONTE CRUDO',triliteral: 'CMC'},
         {nombre_localidad: 'SEDE_CYN',triliteral: 'C Y N'},
         {nombre_localidad: 'EL HORNO',triliteral: 'EHR'},
         {nombre_localidad: 'DIXON HILL',triliteral: 'DIX'},       
         {nombre_localidad: 'TONCONTIN',triliteral: 'NNN'},
         {nombre_localidad: 'TNT TORRE',triliteral: 'TNT TORRE'},
         {nombre_localidad: 'AGENCIA HONDUREÑA AERONÁUTICA',triliteral: 'AHA'}, 
         {nombre_localidad: 'SAUCE VOR/DME',triliteral: 'SAUCE VOR/DME'},
         {nombre_localidad: 'ROA AEROPUERTO',triliteral: 'ROA AEROPUERTO'},
         {nombre_localidad: 'ROA TORRE',triliteral: 'ROA TORRE'}, 
         {nombre_localidad: 'ROA VOR/DME',triliteral: 'ROA VOR/DME'},
         {nombre_localidad: 'TNT AEROPUERTO',triliteral: 'TNT AEROPUERTO'},      
         {nombre_localidad: 'COFAH',triliteral: 'COFAH'}, 
         {nombre_localidad: 'SOTO',triliteral: 'SOTO'},
         {nombre_localidad: 'CERRO DE HULA',triliteral: 'CDH'},
         {nombre_localidad: 'PEDREGAL HF',triliteral: 'PED'},
         {nombre_localidad: 'CERRO LAS CASITAS',triliteral: 'LCA'}],
      unidades:[
         {nombre_unidad: 'AUTOMATIZACION'},
         {nombre_unidad: 'COMUNICACION Y RADIO AYUDA'},
         {nombre_unidad: 'ENERGIA Y EQUIPOS AUXILIARES'},
         {nombre_unidad: 'VIGILANCIA Y RADAR'},
         {nombre_unidad: 'MACC'}
      ]
         
    },
    { 
      codigo_ciudad: { _id: ObjectId("5daa36da4b861f16ece54b47"), nombre_ciudad: 'SAN PEDRO SULA'},
      nombre_sitio: 'LA MESA',
      triliteral: 'LLL',
      localidades: [{nombre_localidad: 'LAS CRUCES',triliteral: 'LCR'},
                           {nombre_localidad: 'CALENTURA',triliteral: 'CAL'},
                           {nombre_localidad: 'LA CEIBA', triliteral: 'CCC'},
                           {nombre_localidad: 'LCE AEROPUERTO',triliteral: 'LCE AEROPUERTO'},
                           {nombre_localidad: 'LCE TORRE',triliteral: 'LCE TORRE'},
                           {nombre_localidad: 'LMS LOCALIZADORES PISTA',triliteral: 'LMS LOCALIZADORES PISTA'},
                           {nombre_localidad: 'LMS TORRE',triliteral: 'LMS TORRE'},
                           {nombre_localidad: 'LMS CENTRO DE CONTROL',triliteral: 'LMS CENTRO DE CONTROL'},
                           {nombre_localidad: 'LMS AEROPUERTO',triliteral: 'LMS AEROPUERTO'},
                           {nombre_localidad: 'LMS VOR/DME PISTA',triliteral: 'LMS VOR/DME PISTA'},
                           {nombre_localidad: 'LMS GLIDE/SLOPE PISTA',triliteral: 'LMS GLIDE/SLOPE PISTA'},
                           {nombre_localidad: 'LMS VOR/DME PISTA',triliteral: 'LMS VOR/DME PISTA'},
                           {nombre_localidad: 'LCE NBD/DME',triliteral: 'LCE NBD/DME'}],
             unidades: []    
    },
   {
  
      codigo_ciudad: {_id:  ObjectId("5daa36da4b861f16ece54b4a"), nombre_ciudad: 'ROATAN'},
      nombre_sitio: 'ROATAN',
      triliteral: 'RRR',
      localidades:[],
      unidades: []
    },
    {
    codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b4d"), nombre_ciudad:'SAN SALVADOR'},
    nombre_sitio: 'ILOPANGO',
    triliteral: 'ILO',
    localidades: [
               {nombre_localidad: 'PACAYAL',triliteral: 'PCY'},
               {nombre_localidad: 'BOQUERON',triliteral: 'BOQ'} ],
               unidades: []
   },
   {
      codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b4e"), nombre_ciudad: 'SAN LUIS TALPA'},
      nombre_sitio: 'COMALAPA',
      triliteral: 'SAL',
      localidades:[],
      unidades: []
   },
   {
     codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b5b"), nombre_ciudad: 'GUANACASTE'},
     nombre_sitio: 'EL COCO',
     triliteral: 'OCO',
     localidades: [
            {nombre_localidad: 'CERRO BRUJO', triliteral: 'BRU'},
            {nombre_localidad: 'MATA DE CAÑA', triliteral: 'MAT'},
            {ombre_localidad: 'LIBERIA', triliteral: 'LIB'}],
      unidades: []
   },
   {
      codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b50"), nombre_ciudad: 'CIUDAD DE GUATEMALA'},
      nombre_sitio: 'AURORA',
      triliteral: 'AUR',
      localidades:[
            {nombre_localidad: 'SANTA ELENA DE BARILLA',triliteral: 'SEL'},
            {nombre_localidad: 'CERRO SANTIAGO',triliteral: 'CSA'},
            {nombre_localidad: 'NIKTUN',triliteral: 'NIK'}],
            unidades: []
    },
    {
    codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b53"), nombre_ciudad: 'FLORES'},
    nombre_sitio: 'TIKAL',
    triliteral: 'TKL',
    localidades: [],
    unidades: []
    },
    {
   codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b54"), nombre_ciudad: 'BELICE'},
   nombre_sitio: 'BELICE',
   triliteral: 'BZE',
   localidades: [
             {nombre_localidad: 'BALDY BEACON', triliteral: 'BYB'}],
   unidades: []
   },
   {
    codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b56"), nombre_ciudad: 'MANAGUA'},
    nombre_sitio: 'MANAGUA',
    triliteral: 'MNG',
    localidades: [
               {nombre_localidad: 'LAS NUBES', triliteral: 'LNB'},
               {nombre_localidad: 'PUERTO CABEZAS', triliteral: 'PZA'},
               {nombre_localidad: 'BLUE FIELD', triliteral: 'BLU'},
               {nombre_localidad: 'CORN ISLAND', triliteral: 'CRN'},
               {nombre_localidad: 'CERRO LA CUESTA', triliteral: 'CLC'}],
    unidades: []
     },
     {
      codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b5f"), nombre_ciudad: 'SAN JOSE'},
      nombre_sitio: 'CERRO BUENA VISTA',
      triliteral: 'CBV',
      localidades: [],
      unidades: []
      },
      {
       codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b61"), nombre_ciudad: 'MERIDA'},
       nombre_sitio: 'MERIDA',
       triliteral: 'MID',
       localidades: [],
       unidades: []
      },
       {
         codigo_ciudad: {_id: ObjectId("5daa36da4b861f16ece54b61"), nombre_ciudad: 'MERIDA'},
         nombre_sitio: 'VOLCÁN POAS',
         triliteral: 'POA',
         localidades: [],
         unidades: []
       }
   
]);

db.empleados.insertMany([
   {
  codigo_unidad: {}
   },
   {

   }
])



db.cargos.insertMany([
   {nombre_cargo: 'DIRECTOR EJECUTIVO'},
   {nombre_cargo: 'DIRECTOR DE OPERACIONES'},
   {nombre_cargo: 'DIRECTOR COMERCIAL - CSO'},
   {nombre_cargo: 'DIRECTOR DE MARKETING'},
   {nombre_cargo: 'DIRECTOR DE RECURSOS HUMANOS'},
   {nombre_cargo: 'CUSTOMER SUCCESS (CS)'},
   {nombre_cargo: 'DIRECTOR FINANCIERO'},
   {nombre_cargo: 'TECNICO DE MANTENIMIENTO'},
   {nombre_cargo: 'PRACTICANTE INGENIERO DE SOFTWARE'}
 ]);
 
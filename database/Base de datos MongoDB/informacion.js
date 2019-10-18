use bd_rutinas;
db.createCollection('paises');
db.createCollection('ciudades');



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


db.ciudades.insertMany([ {
       codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},
       nombre_ciudad: 'TEGUCIGALPA',
       sitios: [{
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
               unidades: [] 
            }
         ]
      },
      {
          codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"), nombre_pais: 'HONDURAS'},
          nombre_ciudad: 'SAN PEDRO SULA', 
          sitios: [
             {
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
             }
      ]
      },
       {codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},
          nombre_ciudad: 'TRUJILLO',
          sitios:[],
          unidades: []
         },
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},
          nombre_ciudad: 'LA CEIBA',
         sitios:[],
         unidades: []
      },
       {
       
       codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'},
       nombre_ciudad: 'ROATAN',

sitios:[
   {nombre_sitio: 'ROATAN',
    triliteral: 'RRR',
    localidades:[],
    unidades: []
   }

],


 
        
      },
       {nombre_ciudad: 'COMAYAGUA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'}},
       {nombre_ciudad: 'CIUDAD DESCONOCIDA HONDURAS',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b16"),nombre_pais: 'HONDURAS'}},
       {   
          codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'},
          nombre_ciudad: 'SAN SALVADOR',
          sitios:[
            { nombre_sitio: 'ILOPANGO',
            triliteral: 'ILO',
            localidades: [
                  {nombre_localidad: 'PACAYAL',triliteral: 'PCY'},
                  {nombre_localidad: 'BOQUERON',triliteral: 'BOQ'} ],
                  unidades: []
               }
              

                  ]
      

      },
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'},
          nombre_ciudad: 'SAN LUIS TALPA',
         sitios:[
            {
               nombre_sitio: 'COMALAPA',
               triliteral: 'SAL',
               localidades:[],
               unidades: []
            }
     
      ]

     
      },
       {nombre_ciudad: 'CHINAMECA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b15"),nombre_pais: 'EL SALVADOR'}},
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'EL SALVADOR'},
          nombre_ciudad: 'CIUDAD DE GUATEMALA',
            sitios:[     
               
               {
                  nombre_sitio: 'AURORA',
                  triliteral: 'AUR',
                      localidades:[
                            {nombre_localidad: 'SANTA ELENA DE BARILLA',triliteral: 'SEL'},
                            {nombre_localidad: 'CERRO SANTIAGO',triliteral: 'CSA'},
                           {nombre_localidad: 'NIKTUN',triliteral: 'NIK'}],
                           unidades: []
               }
       
                     
                     ]

      },
       {nombre_ciudad: 'VILLA CANALES',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'}},
       {nombre_ciudad: 'JUTIAPA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'}},
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b14"),nombre_pais: 'GUATEMALA'},
          nombre_ciudad: 'FLORES',
      sitios:[

         {
            nombre_sitio: 'TIKAL',
            triliteral: 'TKL',
            localidades: [],
            unidades: []
         }
    
      ]
 
      
      },
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b13"),nombre_pais: 'BELICE'},
          nombre_ciudad: 'BELICE',
         sitios:[   
            {
               nombre_sitio: 'BELICE',
               triliteral: 'BZE',
               localidades: [
                         {nombre_localidad: 'BALDY BEACON', triliteral: 'BYB'}  ],
                         unidades: []
            }
        ]
  
      },
       {nombre_ciudad: 'CAYO',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b13"),nombre_pais: 'BELICE'}},
       { codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'},
          nombre_ciudad: 'MANAGUA',
      sitios:[

{
   nombre_sitio: 'MANAGUA',
   triliteral: 'MNG',
   localidades: [
            {nombre_localidad: 'LAS NUBES', triliteral: 'LNB'},
            {nombre_localidad: 'PUERTO CABEZAS', triliteral: 'PZA'},
            {nombre_localidad: 'BLUE FIELD', triliteral: 'BLU'},
            {nombre_localidad: 'CORN ISLAND', triliteral: 'CRN'},
            {nombre_localidad: 'CERRO LA CUESTA', triliteral: 'CLC'}],
            unidades: []
}
     
               
               ]


      },
       {nombre_ciudad: 'PUERTO CABEZAS',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'}},
       {nombre_ciudad: 'BLUE FIELD',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'}},
       {nombre_ciudad: 'TOLA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'}},
       {nombre_ciudad: 'CHINANDEGA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b17"),nombre_pais: 'NICARAGUA'}},
       {
           codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},
          nombre_ciudad: 'GUANACASTE',
          sitios:[
             {
               nombre_sitio: 'EL COCO',
               triliteral: 'OCO',
               localidades: [
                         {nombre_localidad: 'CERRO BRUJO', triliteral: 'BRU'},
                         {nombre_localidad: 'MATA DE CAÑA', triliteral: 'MAT'},
                         {ombre_localidad: 'LIBERIA', triliteral: 'LIB'}],
                         unidades: []
             }
          
      
          ]
     
      },
       {nombre_ciudad: 'TARRAZU',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'}},
       {nombre_ciudad: 'LIBERIA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'}},
       {nombre_ciudad: 'ALAJUELA',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'}},
       {
         codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b18"),nombre_pais: 'COSTA RICA'},
          nombre_ciudad: 'SAN JOSE',
          sitios:[
{
   nombre_sitio: 'CERRO BUENA VISTA',
            triliteral: 'CBV',
            localidades: [],
            unidades: []
}
         
          ]
      

 
      },
       {nombre_ciudad: 'GEORGE TOWN',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b19"),nombre_pais: 'GRAN CAIMAN'}},
       {  codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b12"),nombre_pais: 'MÉXICO'},
          nombre_ciudad: 'MERIDA',
      sitios:[
         {
            nombre_sitio: 'MERIDA',
            triliteral: 'MID',
            localidades: [],
            unidades: []
         },
       {
         nombre_sitio: 'VOLCÁN POAS',
         triliteral: 'POA',
         localidades: [],
         unidades: []
       }
      ]
      
     
      },
       {nombre_ciudad: 'CIUDAD DESCONOCIDA MEXICO',codigo_pais: {_id: ObjectId("5da8c4564b861f16ece54b12"),nombre_pais: 'MÉXICO'}},
    ]);


    
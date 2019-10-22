use bd_rutinas;

db.createCollection('paises');
db.createCollection('unidades');
db.createCollection('sistemas');

db.paises.insertMany(
    [{
            _id: ObjectId("5da8c4564b861f16ece54b12"),
            codigo_pais: 52,
            nombre_pais: 'MÉXICO',
            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b26966"),
                    nombre_ciudad: 'MERIDA',
                    sitios: [{
                            _id: ObjectId("5daf3446c508f0c449b26967"),
                            nombre_sitio: 'MERIDA',
                            triliteral: 'MID',
                            localidades: []
                        },
                        {
                            _id: ObjectId("5daf3446c508f0c449b26968"),
                            nombre_sitio: 'VOLCÁN POAS',
                            triliteral: 'POA',
                            localidades: []
                        }
                    ]
                }

            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b13"),
            codigo_pais: 501,
            nombre_pais: 'BELICE',
            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b26969"),
                    nombre_ciudad: 'BELICE',
                    sitios: [{
                        _id: ObjectId("5daf3446c508f0c449b2696a"),
                        nombre_sitio: 'BELICE',
                        triliteral: 'BZE',
                        localidades: [{
                            nombre_localidad: 'BALDY BEACON',
                            triliteral: 'BYB'
                        }]
                    }]
                },
                {
                    nombre_ciudad: 'CAYO'
                }
            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b14"),
            codigo_pais: 502,
            nombre_pais: 'GUATEMALA',
            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b2696b"),
                    nombre_ciudad: 'CIUDAD DE GUATEMALA',
                    sitios: [{

                        _id: ObjectId("5daf3446c508f0c449b2696c"),
                        nombre_sitio: 'AURORA',
                        triliteral: 'AUR',
                        localidades: [{
                                nombre_localidad: 'SANTA ELENA DE BARILLA',
                                triliteral: 'SEL'
                            },
                            {
                                nombre_localidad: 'CERRO SANTIAGO',
                                triliteral: 'CSA'
                            },
                            {
                                nombre_localidad: 'NIKTUN',
                                triliteral: 'NIK'
                            }
                        ]
                    }, ]
                },
                {
                    _id: ObjectId("5daf5fc3c508f0c449b2699f"),
                    nombre_ciudad: 'FLORES',
                    sitios: [{
                        _id: ObjectId("5daf5fc3c508f0c449b269a0"),
                        nombre_sitio: 'TIKAL',
                        triliteral: 'TKL',
                        localidades: []
                    }]
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b2696d"),
                    nombre_ciudad: 'VILLA CANALES'
                },
                {
                    _id: ObjectId("5cbf4f6961da22954ca0de9f"),
                    nombre_ciudad: 'JUTIAPA'
                }

            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b15"),
            codigo_pais: 503,
            nombre_pais: 'EL SALVADOR',

            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b2696e"),
                    nombre_ciudad: 'SAN SALVADOR',
                    sitios: [{
                        _id: ObjectId("5daf3446c508f0c449b2696f"),
                        nombre_sitio: 'ILOPANGO',
                        triliteral: 'ILO',
                        localidades: [{
                                nombre_localidad: 'PACAYAL',
                                triliteral: 'PCY'
                            },
                            {
                                nombre_localidad: 'BOQUERON',
                                triliteral: 'BOQ'
                            }
                        ]
                    }]
                },
                {
                    _id: ObjectId("5daf5fc3c508f0c449b269a1"),
                    nombre_ciudad: 'SAN LUIS TALPA',
                    sitios: [{
                        _id: ObjectId("5daf5fc3c508f0c449b269a2"),
                        nombre_sitio: 'COMALAPA',
                        triliteral: 'SAL',
                        localidades: []
                    }]
                },
                {
                    _id: ObjectId("5daf5fc3c508f0c449b269a3"),
                    nombre_ciudad: 'CHINAMECA'
                },
            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b16"),
            codigo_pais: 504,
            nombre_pais: 'HONDURAS',
            ciudades: [{
                    _id: ObjectId(),
                    nombre_ciudad: 'TEGUCIGALPA',
                    sitios: [{
                        _id: ObjectId("5daf292ac508f0c449b268f9"),
                        nombre_sitio: 'SEDE',
                        triliteral: 'CEN',
                        localidades: [{
                                nombre_localidad: 'CERRO MONTE CRUDO',
                                triliteral: 'CMC'
                            },
                            {
                                nombre_localidad: 'SEDE_CYN',
                                triliteral: 'C Y N'
                            },
                            {
                                nombre_localidad: 'EL HORNO',
                                triliteral: 'EHR'
                            },
                            {
                                nombre_localidad: 'DIXON HILL',
                                triliteral: 'DIX'
                            },
                            {
                                nombre_localidad: 'TONCONTIN',
                                triliteral: 'NNN'
                            },
                            {
                                nombre_localidad: 'TNT TORRE',
                                triliteral: 'TNT TORRE'
                            },
                            {
                                nombre_localidad: 'AGENCIA HONDUREÑA AERONÁUTICA',
                                triliteral: 'AHA'
                            },
                            {
                                nombre_localidad: 'SAUCE VOR/DME',
                                triliteral: 'SAUCE VOR/DME'
                            },
                            {
                                nombre_localidad: 'ROA AEROPUERTO',
                                triliteral: 'ROA AEROPUERTO'
                            },
                            {
                                nombre_localidad: 'ROA TORRE',
                                triliteral: 'ROA TORRE'
                            },
                            {
                                nombre_localidad: 'ROA VOR/DME',
                                triliteral: 'ROA VOR/DME'
                            },
                            {
                                nombre_localidad: 'TNT AEROPUERTO',
                                triliteral: 'TNT AEROPUERTO'
                            },
                            {
                                nombre_localidad: 'COFAH',
                                triliteral: 'COFAH'
                            },
                            {
                                nombre_localidad: 'SOTO',
                                triliteral: 'SOTO'
                            },
                            {
                                nombre_localidad: 'CERRO DE HULA',
                                triliteral: 'CDH'
                            },
                            {
                                nombre_localidad: 'PEDREGAL HF',
                                triliteral: 'PED'
                            },
                            {
                                nombre_localidad: 'CERRO LAS CASITAS',
                                triliteral: 'LCA'
                            }
                        ]

                    }]

                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26976"),
                    nombre_ciudad: 'SAN PEDRO SULA',
                    sitios: [{
                        _id: ObjectId("5daf292ac508f0c449b268fb"),
                        nombre_sitio: 'LA MESA',
                        triliteral: 'LLL',
                        localidades: [{
                                nombre_localidad: 'LAS CRUCES',
                                triliteral: 'LCR'
                            },
                            {
                                nombre_localidad: 'CALENTURA',
                                triliteral: 'CAL'
                            },
                            {
                                nombre_localidad: 'LA CEIBA',
                                triliteral: 'CCC'
                            },
                            {
                                nombre_localidad: 'LCE AEROPUERTO',
                                triliteral: 'LCE AEROPUERTO'
                            },
                            {
                                nombre_localidad: 'LCE TORRE',
                                triliteral: 'LCE TORRE'
                            },
                            {
                                nombre_localidad: 'LMS LOCALIZADORES PISTA',
                                triliteral: 'LMS LOCALIZADORES PISTA'
                            },
                            {
                                nombre_localidad: 'LMS TORRE',
                                triliteral: 'LMS TORRE'
                            },
                            {
                                nombre_localidad: 'LMS CENTRO DE CONTROL',
                                triliteral: 'LMS CENTRO DE CONTROL'
                            },
                            {
                                nombre_localidad: 'LMS AEROPUERTO',
                                triliteral: 'LMS AEROPUERTO'
                            },
                            {
                                nombre_localidad: 'LMS VOR/DME PISTA',
                                triliteral: 'LMS VOR/DME PISTA'
                            },
                            {
                                nombre_localidad: 'LMS GLIDE/SLOPE PISTA',
                                triliteral: 'LMS GLIDE/SLOPE PISTA'
                            },
                            {
                                nombre_localidad: 'LMS VOR/DME PISTA',
                                triliteral: 'LMS VOR/DME PISTA'
                            },
                            {
                                nombre_localidad: 'LCE NBD/DME',
                                triliteral: 'LCE NBD/DME'
                            }
                        ]
                    }]
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26977"),
                    nombre_ciudad: 'TRUJILLO'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26978"),
                    nombre_ciudad: 'LA CEIBA'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26979"),
                    nombre_ciudad: 'ROATAN',
                    sitios: [{
                        _id: ObjectId("5daf3446c508f0c449b2697a"),
                        nombre_sitio: 'ROATAN',
                        triliteral: 'RRR',
                        localidades: []

                    }]
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b2697b"),
                    nombre_ciudad: 'COMAYAGUA'
                }
            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b17"),
            codigo_pais: 505,
            nombre_pais: 'NICARAGUA',
            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b2697c"),
                    nombre_ciudad: 'MANAGUA',
                    sitios: [{

                        _id: ObjectId("5daf3446c508f0c449b2697d"),
                        nombre_sitio: 'MANAGUA',
                        triliteral: 'MNG',
                        localidades: [{
                                nombre_localidad: 'LAS NUBES',
                                triliteral: 'LNB'
                            },
                            {
                                nombre_localidad: 'PUERTO CABEZAS',
                                triliteral: 'PZA'
                            },
                            {
                                nombre_localidad: 'BLUE FIELD',
                                triliteral: 'BLU'
                            },
                            {
                                nombre_localidad: 'CORN ISLAND',
                                triliteral: 'CRN'
                            },
                            {
                                nombre_localidad: 'CERRO LA CUESTA',
                                triliteral: 'CLC'
                            }
                        ]
                    }]
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b2697e"),
                    nombre_ciudad: 'PUERTO CABEZAS'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b2697f"),
                    nombre_ciudad: 'BLUE FIELD'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26980"),
                    nombre_ciudad: 'TOLA'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26981"),
                    nombre_ciudad: 'CHINANDEGA'
                }
            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b18"),
            codigo_pais: 506,
            nombre_pais: 'COSTA RICA',
            ciudades: [{
                    _id: ObjectId("5daf3446c508f0c449b26982"),
                    nombre_ciudad: 'SAN JOSE',
                    sitios: [{

                        _id: ObjectId("5daf3446c508f0c449b26983"),
                        nombre_sitio: 'CERRO BUENA VISTA',
                        triliteral: 'CBV',
                        localidades: []
                    }]

                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26984"),
                    nombre_ciudad: 'GUANACASTE',
                    sitios: [{

                        _id: ObjectId("5daf3446c508f0c449b26985"),
                        nombre_sitio: 'EL COCO',
                        triliteral: 'OCO',
                        localidades: [{
                                nombre_localidad: 'CERRO BRUJO',
                                triliteral: 'BRU'
                            },
                            {
                                nombre_localidad: 'MATA DE CAÑA',
                                triliteral: 'MAT'
                            },
                            {
                                ombre_localidad: 'LIBERIA',
                                triliteral: 'LIB'
                            }
                        ]
                    }]
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26986"),
                    nombre_ciudad: 'TARRAZU'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26987"),
                    nombre_ciudad: 'LIBERIA'
                },
                {
                    _id: ObjectId("5daf3446c508f0c449b26988"),
                    nombre_ciudad: 'ALAJUELA'
                }
            ]
        },
        {
            _id: ObjectId("5da8c4564b861f16ece54b19"),
            codigo_pais: 1345,
            nombre_pais: 'GRAN CAIMAN',
            ciudades: [{
                _id: ObjectId("5daf3446c508f0c449b26989"),
                nombre_ciudad: 'GEORGE TOWN'
            }]
        }
    ])



db.unidades.insertMany([{
   _id: ObjectId("5daf8843c508f0c449b269ab"),
        codigo_sitio: {
            _id: ObjectId("5daf292ac508f0c449b268f9"),
            nombre_sitio: 'SEDE'
        },
        nombre_unidad: 'AUTOMATIZACION',
        empleados: [{
                _id: ObjectId("5daf3446c508f0c449b2698a"),
                nombre_empleado: 'Louie Liam Leannon Moen',
                correo: 'louieliam@gmail.com',
                cargo: 'TECNICO DE MANTENIMIENTO',
                usuario: 'luilieliam1',
                contraseña: 'asd.123',
                acceso: true

            },
            {
                _id: ObjectId("5daf3446c508f0c449b2698b"),
                nombre_empleado: 'Darrin Hank Becker Welch',
                correo: 'darrinhank@hotmail.com',
                cargo: 'TECNICO DE MANTENIMIENTO',
                usuario: 'darrinhank2',
                contraseña: 'asd.123',
                acceso: true
            }

        ]
    },
    {
       _id: ObjectId("5daf8843c508f0c449b269ac"),
        codigo_sitio: {
            _id: ObjectId("5daf292ac508f0c449b268f9"),
            nombre_sitio: 'SEDE'
        },
        nombre_unidad: 'ENERGÍA Y EQUIPOS AUXILIARES'
    },
    {
        _id: ObjectId("5daf8843c508f0c449b269ad"),
        codigo_sitio: {
            _id: ObjectId("5daf292ac508f0c449b268f9"),
            nombre_sitio: 'SEDE'
        },
        nombre_unidad: 'MACC',
        empleados: [{
                _id: ObjectId("5daf3446c508f0c449b2698c"),
                nombre_empleado: 'Brett Jaeden Rempel Hermiston',
                correo: 'brettjaedenr@gmail.com',
                cargo: 'TECNICO DE MANTENIMIENTO',
                usuario: 'brettjaeden3',
                contraseña: 'asd.123',
                acceso: false
            },
            {
                _id: ObjectId("5daf3446c508f0c449b2698d"),
                nombre_empleado: 'Christ Gilbert Kunde Hoppe',
                correo: 'christgilbertk@hotmail.com',
                cargo: 'TECNICO DE MANTENIMIENTO',
                usuario: 'christgilbert4',
                contraseña: 'asd.123',
                acceso: false
            },
            {
                _id: ObjectId("5daf3446c508f0c449b2698e"),
                nombre_empleado: 'Russ Moises Osinski Rippin',
                correo: 'russmoises@hotmail.com',
                cargo: 'TECNICO DE MANTENIMIENTO',
                usuario: 'russmoises5',
                contraseña: 'asd.123',
                acceso: true
            }
        ]
    },
    {    _id: ObjectId("5daf8843c508f0c449b269ae"),
        codigo_sitio: {
            _id: ObjectId("5daf292ac508f0c449b268fb"),
            nombre_sitio: 'LA MESA'
        },
        nombre_unidad: 'COMUNICACIÓN Y RADIO AYUDA'
    },
    {   _id: ObjectId("5daf8843c508f0c449b269af"),
        codigo_sitio: {
            _id: ObjectId("5daf292ac508f0c449b268fb"),
            nombre_sitio: 'LA MESA'
        },
        nombre_unidad: 'VIGILANCIA Y RADAR'
    }
])

db.sistemas.insertMany([{
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a6"),
            nombre_unidad: 'ENERGÍA Y EQUIPOS AUXILIARES'
        },
        nombre_sistema: 'PLANTA PBX TELEFÓNICA'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a6"),
            nombre_unidad: 'ENERGÍA Y EQUIPOS AUXILIARES'
        },
        nombre_sistema: 'VSAT'

    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a6"),
            nombre_unidad: 'ENERGÍA Y EQUIPOS AUXILIARES'
        },
        nombre_sistema: 'VOR/DME'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'UPS APC SYNMETRA'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'UPS'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a6"),
            nombre_unidad: 'ENERGÍA Y EQUIPOS AUXILIARES'
        },
        nombre_sistema: 'TX HF'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'TRANSFORMADOR DE ENTRADA ENEE'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'TRANSFER'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'TANQUE DE COMBUSTIBLE'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'SISTEMA DE TIERRA Y PROTECCIÓN'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a7"),
            nombre_unidad: 'MACC'
        },
        nombre_sistema: 'SISTEMA CONTRA INCENDIOS ARIES'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a8"),
            nombre_unidad: 'COMUNICACIÓN Y RADIO AYUDA'
        },
        nombre_sistema: 'RADARES'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a5"),
            nombre_unidad: 'AUTOMATIZACION'
        },
        nombre_sistema: 'AIRCON'
    },
    {
        codigo_unidad: {
            _id: ObjectId("5daf5fd6c508f0c449b269a5"),
            nombre_unidad: 'AUTOMATIZACION'
        },
        nombre_sistema: 'AIRCON SIMULADOR'
    }
])
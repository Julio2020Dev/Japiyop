export class FilterOptions {
    category: string;
    indus: string;
    position: string;
    city: string;
    CIUDAD : any[]=[
      { id: 0, name:'Amazonas'},
      { id: 1, name:'Ancash'},
      { id: 2, name:'Apurimac'},
      { id: 3, name:'Arequipa'},
      { id: 4, name:'Ayacucho'},
      { id: 5, name:'Cajamarca'},
      { id: 6, name:'Callao'},
      { id: 7, name:'Cusco'},
      { id: 8, name:'Huancavelica'},
      { id: 9, name:'Huanuco'},
      { id: 10, name:'Ica'},
      { id: 11, name:'Junín'},
      { id: 12, name:'La Libertad'},
      { id: 13, name:'Lambayeque'},
      { id: 14, name:'Lima'},
      { id: 15, name:'Loreto'},
      { id: 16, name:'Madre de Dios'},
      { id: 17, name:'Moquegua'},
      { id: 18, name:'Pasco'},
      { id: 19, name:'Piura'},
      { id: 20, name:'Puno'},
      { id: 21, name:'San Martín'},
      { id: 22, name:'Tacna'},
      { id: 23, name:'Tumbes'},
      { id: 24, name:'Ucayali'}       
    ];
    DISTRITO: any[]=[
      {id:0, name:"Ancón"},
      {id:1, name: 'Ate Vitarte'}, 
      {id:2, name: 'Barranco'}, 
      {id:3, name: 'Breña'}, 
      {id:4, name: 'Carabayllo'}, 
      {id:5, name: 'Chaclacayo'}, 
      {id:6, name: 'Chorrillos'},
      {id:7, name: 'Cieneguilla'}, 
      {id:8, name: 'Comas'}, 
      {id:9, name: 'El Agustino'}, 
      {id:10, name: 'Independencia'}, 
      {id:11, name: 'Jesús María'},
      {id:12, name: 'La Molina'}, 
      {id:13, name: 'La Victoria'}, 
      {id:14, name: 'Cercado de Lima'}, 
      {id:15, name: 'Los Olivos'},
      {id:16, name: 'Lurigancho'},
      {id:17, name: 'Lurín'}, 
      {id:18, name: 'Magdalena del Mar'}, 
      {id:19, name: 'Miraflores'}, 
      {id:20, name: 'Pachacamac'}, 
      {id:21, name: 'Pucusana'},
      {id:22, name: 'Pueblo Libre'},
      {id:23, name: 'Puente Piedra'}, 
      {id:24, name: 'Punta Hermosa'}, 
      {id:25, name: 'Punta Negra'}, 
      {id:26, name: 'Rímac'},
      {id:27, name: 'San Bartolo'}, 
      {id:28, name: 'San Borja'}, 
      {id:29, name: 'San Isidro'}, 
      {id:30, name: 'San Juan de Lurigancho'}, 
      {id:31, name: 'San Juan de Miraflores'},
      {id:32, name: 'San Luis'}, 
      {id:33, name: 'San Martín de Porres'}, 
      {id:34, name: 'San Miguel'}, 
      {id:35, name: 'Santa Anita'}, 
      {id:36, name: 'Santa María del Mar'},
      {id:37, name: 'Santa Rosa'}, 
      {id:38, name: 'Santiago de Surco'}, 
      {id:39, name: 'Surquillo'}, 
      {id:40, name: 'Villa El Salvador'}, 
      {id:41, name: 'Villa María del Triunfo'},
      {id:42, name: 'Otro'},
    ];
    //--[4.1.1. Filtros jobhunters]
    CATEGORIAS: any[]=[
      {id:0, name:'Signature'},
      {id:1, name:'Platinum'},
      {id:2, name:'Gold'},
      {id:3, name:'Blue'},
    ];
    //--[4.1.1. Filtros jobhunters]
    INDUSTRIAS_ESPECIALIZADAS: any[]=[
      {id:0, name:'Banca'},
      {id:1, name:'Consumo Masivo'},
      {id:2, name:'Ingeniería y Manufactura'},
      {id:3, name:'Minería'},
      {id:4, name:'Retail'},
      {id:5, name:'Seguros'},
      {id:6, name:'Tech & TI'},
      {id:7, name:'Telecomunicaciones'},
      {id:8, name:'*Todas las anteriores'}      
    ];

    //--[4.1.1. Filtros jobhunters]
    CARGO: any[]=[
      {id:0, name:'Analista / Asistente / Trainee'},
      {id:1, name:'Mando medio (Coord / Jefe / Sub Gerente) '},
      {id:2, name:'Alto mando'},
      {id:3, name:'*Todas las anteriores'},
    ];

    //--[4.1.3.3 Perfil Usuario]
    GRADO_DE_INSTRUCCION: any[]=[
      {id:0, name:'Secundaria'},
      {id:1, name:'Técnico'},
      {id:2, name:'Universitario'},
      {id:3, name:'Master'},
      {id:4, name:'Doctorado'},
    ];
    //--[4.1.3.3 Perfil Usuario]
    TIPO_DE_CARGO_EN_EMPLEO_1:any[]=[
      {id:0, name:'Asistente'},
      {id:1, name:'Técnico / operativo'},
      {id:2, name:'Ejecutivo / representante'},
      {id:3, name:'Supervisor / coordinador'},
      {id:4, name:'Practicante profesional'},
      {id:5, name:'Jefatura / Sub gerencia'},
      {id:6, name:'Analista'},
      {id:7, name:'Gerencia'},
      {id:8, name:'Dirección'},
    ];

    //--[4.1.3.3 Perfil Usuario]
    INDUSTRIA_DEL_EMPLEO: any[]=[
      {id:0, name:'Banca'},
      {id:1, name:'Consumo Masivo'},
      {id:2, name:'Ingeniería y Manufactura'},
      {id:3, name:'Minería'},
      {id:4, name:'Retail'},
      {id:5, name:'Seguros'},
      {id:6, name:'Tech & TI'},
      {id:7, name:'Telecomunicaciones'},
      {id:8, name:'*Todas las anteriores'},
    ];

    //--[4.1.3.3 Perfil Usuario]
    NÚMERO_DE_EMPLEADOS_DEL_CENTRO: any[]=[
      {id:0, name:'1-20 personas'},
      {id:1, name:'21-50 personas'},
      {id:2, name:'51-100 personas'},
      {id:3, name:'101-500 personas'},
      {id:4, name:'501-1000 personas'},
      {id:5, name:'1001-5000 personas'},
      {id:6, name:'Más de 5000 personas'} 
    ];
    //--[4.1.3.3 Perfil Usuario]
    EXPERTISE: any[]=[
      {id:0, name:'Big Data / Data Analytics'},
      {id:1, name:'Finanzas y Contabilidad'},
      {id:2, name:'Gestión de proyectos'},
      {id:3, name:'Marketing'},
      {id:4, name:'Operaciones y procesos'},
      {id:5, name:'Recursos Humanos'},
      {id:6, name:'Supply Chain & Procurement'},
      {id:7, name:'Ventas Técnicas'},
      {id:8, name:'Ventas'},
      {id:9, name:'*Todas las anteriores'},
    ];

    //--[4.1.3.3 Perfil Usuario]
    SITUACIÓN_LABORAL_ACTUAL: any[]=[
      {id:0, name:'Empleado'},
      {id:1, name:'Sin empleo'},
    ];

    //--[7.1.4. Perfil XP]
    SITUACIÓN_LABORAL_ACTUAL_PERFILE: any[]=[
      {id:0, name:'Empleado'},
      {id:1, name:'Desempleado'},
      {id:2, name:'Independiente / Freelance'},
      {id:3, name:'Plan de retirarse'},
    ];
    //--[7.1.4. Perfil XP]
    TIPO_DE_CARGO_EN_EMPLEO_PERFILE: any[]=[
      {id:0, name:'Analista'},
      {id:0, name:'Técnico'},
      {id:0, name:'Analista Senior'},
      {id:0, name:'Ejecutivo'},
      {id:0, name:'Coordinador'},
      {id:0, name:'Jefe/Sub Gerente'},
      {id:0, name:'Gerente'},
      {id:0, name:'Alta Gerencia (VP, Director, Mesa Directiva)'},
      {id:0, name:'*Todas las anteriores'},
    ];

    //--[7.1.5. Perfil Estudios]
    INSTITUCIÓN: any[]=[
      {id:0, name:'Academia Diplomática del Perú'},
      {id:1, name:'Centro de Altos Estudios Nacionales'},
      {id:2, name:'Conservatorio Regional de Música del Norte Público Carlos Valderrama'},
      {id:3, name:'ESAN Graduate School of Business'},
      {id:4, name:'Escuela de Oficiales de la Policía Nacional del Perú'},
      {id:5, name:'Escuela de Postgrado Gerens'},
      {id:6, name:'Escuela Militar de Chorrillos'},
      {id:7, name:'Escuela Nacional de Administración Pública'},
      {id:8, name:'Escuela Nacional de Marina Mercante Almirante Miguel Grau'},
      {id:9, name:'Escuela Nacional Superior Autónoma de Bellas Artes del Perú'},
      {id:10, name:'Escuela Nacional Superior de Ballet'},
      {id:11, name:'Escuela Nacional Superior de Folklore José María Arguedas'},
      {id:12, name:'Escuela Superior de Guerra Naval'},
      {id:13, name:'Facultad de Teología Pontificia y Civil de Lima'},
      {id:14, name:'Instituto Pedagógico Nacional Monterrico'},
      {id:15, name:'Instituto Superior Tecnológico'},
      {id:16, name:'Instituto Superior Tecnológico CIBERTEC'},
      {id:17, name:'Pontificia Universidad Católica del Perú'},
      {id:18, name:'Servicio Nacional de Adiestramiento en Trabajo Industrial'},
      {id:19, name:'TECSUP'},
      {id:20, name:'Universidad Andina del Cusco'},
      {id:21, name:'Universidad Andina Nestor Cáceres Velasquez'},
      {id:22, name:'Universidad Antonio Ruíz de Montoya'},
      {id:23, name:'Universidad Autónoma del Perú'},
      {id:24, name:'Universidad Católica de Santa María'},
      {id:25, name:'Universidad Católica de Trujillo Benedicto XVI'},
      {id:26, name:'Universidad Católica San Pablo Arequipa'},
      {id:27, name:'Universidad Católica Santo Toribio de Mogrovejo'},
      {id:28, name:'Universidad Católica Sedes Sapientiae'},
      {id:29, name:'Universidad Cesar Vallejo'},
      {id:30, name:'Universidad Científica del Sur'},
      {id:31, name:'Universidad Continental'},
      {id:32, name:'Universidad de Ciencias y Artes de América Latina'},
      {id:33, name:'Universidad de Ciencias y Humanidades'},
      {id:34, name:'Universidad de Huánuco'},
      {id:35, name:'Universidad de Ingeniería y Tecnología UTEC'},
      {id:36, name:'Universidad de Lima'},
      {id:37, name:'Universidad de Piura'},
      {id:38, name:'Universidad de San Martín de Porres'},
      {id:39, name:'Universidad del Pacífico'},
      {id:40, name:'Universidad ESAN'},
      {id:41, name:'Universidad Femenina del Sagrado Corazón'},
      {id:42, name:'Universidad Jaime Bausate y Meza'},
      {id:43, name:'Universidad La Salle'},
      {id:44, name:'Universidad Le Cordon Bleu'},
      {id:45, name:'Universidad Marcelino Champagnat'},
      {id:46, name:'Universidad María Auxiliadora'},
      {id:47, name:'Universidad Nacional Agraria de la Selva Tingo María'},
      {id:48, name:'Universidad Nacional Agraria La Molina'},
      {id:49, name:'Universidad Nacional Amazónica de Madre de Dios'},
      {id:50, name:'Universidad Nacional Autónoma de Chota'},
      {id:51, name:'Universidad Nacional Autónoma de Huanta'},
      {id:52, name:'Universidad Nacional Daniel Alcides Carrion'},
      {id:53, name:'Universidad Nacional de Cajamarca'},
      {id:54, name:'Universidad Nacional de Educación'},
      {id:55, name:'Universidad Nacional de Huancavelica'},
      {id:56, name:'Universidad Nacional de Ingeniería Lima'},
      {id:57, name:'Universidad Nacional de Jaén'},
      {id:58, name:'Universidad Nacional de Juliaca'},
      {id:59, name:'Universidad Nacional de la Amazonía Peruana'},
      {id:60, name:'Universidad Nacional de Moquegua'},
      {id:61, name:'Universidad Nacional de Música'},
      {id:62, name:'Universidad Nacional de Piura'},
      {id:63, name:'Universidad Nacional de San Agustín de Arequipa'},
      {id:64, name:'Universidad Nacional de San Antonio Abad del Cusco'},
      {id:65, name:'Universidad Nacional de San Cristóbal de Huamanga'},
      {id:67, name:'Universidad Nacional de San Martín Tarapoto'},
      {id:68, name:'Universidad Nacional de Trujillo'},
      {id:69, name:'Universidad Nacional de Tumbes'},
      {id:70, name:'Universidad Nacional de Ucayali'},
      {id:71, name:'Universidad Nacional del Altiplano'},
      {id:72, name:'Universidad Nacional del Callao'},
      {id:73, name:'Universidad Nacional del Centro del Perú'},
      {id:74, name:'Universidad Nacional del Santa Chimbote'},
      {id:75, name:'Universidad Nacional Federico Villarreal'},
      {id:76, name:'Universidad Nacional Hermilio Valdizán'},
      {id:77, name:'Universidad Nacional Intercultural de la Amazonía'},
      {id:78, name:'Universidad Nacional Jorge Basadre Grohmann'},
      {id:79, name:'Universidad Nacional José Faustino Sanchez Carrión'},
      {id:80, name:'Universidad Nacional José María Arguedas'},
      {id:81, name:'Universidad Nacional Mayor de San Marcos'},
      {id:82, name:'Universidad Nacional Micaela Bastidas de Apurímac'},
      {id:83, name:'Universidad Nacional Pedro Ruíz Gallo'},
      {id:84, name:'Universidad Nacional Santiago Antúnez de Mayolo'},
      {id:85, name:'Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas'},
      {id:86, name:'Universidad Norbert Wiener'},
      {id:87, name:'Universidad para el Desarrollo Andino'},
      {id:88, name:'Universidad Particular Tecnológica de los Andes'},
      {id:89, name:'Universidad Peruana Cayetano Heredia'},
      {id:90, name:'Universidad Peruana de Ciencias Aplicadas'},
      {id:91, name:'Universidad Peruana Los Andes'},
      {id:92, name:'Universidad Peruana Unión'},
      {id:93, name:'Universidad Privada Antenor Orrego'},
      {id:94, name:'Universidad Privada de Huancayo Franklin Roosevelt'},
      {id:95, name:'Universidad Privada de Tacna'},
      {id:96, name:'Universidad Privada del Norte'},
      {id:97, name:'Universidad Privada San Juan Bautista'},
      {id:98, name:'Universidad Ricardo Palma'},
      {id:99, name:'Universidad San Ignacio de Loyola'},
      {id:100, name:'Universidad Señor de Sipán'},
      {id:101, name:'Universidad Tecnológica del Perú'},
      {id:102, name:'ZEGEL IPAE'},
      {id:103, name:'Otros'}
    ];
    //--[7.1.5. Perfil Estudios]
    GRADO_DE_INSTRUCCIÓN_PERFIL: any[]=[
      {id:0, name:'Secundaria'},
      {id:1, name:'Técnico'},
      {id:2, name:'Universitario'},
      {id:3, name:'Master'},
      {id:4, name:'Doctorado'},
    ];
    //--[7.1.5. Perfil Estudios]
    IDIOMAS: any[]=[
      {id:0, name:'Inglés'},
      {id:1, name:'Portugués'},
      {id:2, name:'Chino mandarín'},
      {id:3, name:'Alemán'},
      {id:4, name:'Italiano'},
      {id:5, name:'Japonés'},
      {id:6, name:'Quechua'},
      {id:7, name:'Otro'},
    ];
    //--[14.2. Filtro jobhunter]
    TIPO_DE_CARGO: any[]=[
      {id:0, name:'Analista'},
      {id:1, name:'Técnico'},
      {id:2, name:'Analista Senior'},
      {id:3, name:'Ejecutivo'},
      {id:4, name:'Coordinador'},
      {id:5, name:'Jefe/Sub Gerente'},
      {id:6, name:'Gerente'},
      {id:7, name:'Alta Gerencia (VP, Director, Mesa Directiva)'},
      {id:8, name:'*Todas las anteriores'},
    ];
    //--[14.2. Filtro jobhunter]
    DISPONIBILIDAD: any[]=[
      {id:0, name:'Disponibilidad inmediata'},
      {id:1, name:'A partir de'}
    ];
    //--[14.2. Filtro jobhunter]
    INDUSTRIA: any[]=[
      {id:0, name:'Banca'},
      {id:1, name:'Consumo Masivo'},
      {id:2, name:'Ingeniería y Manufactura'},
      {id:3, name:'Minería'},
      {id:4, name:'Retail'},
      {id:5, name:'Seguros'},
      {id:6, name:'Tech & TI'},
      {id:7, name:'Telecomunicaciones'},
      {id:8, name:'*Todas las anteriores'}
    ]
  }

  
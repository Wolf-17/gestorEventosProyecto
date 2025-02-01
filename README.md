El proyecto Gestor de Eventos, es una aplicacion web la cual fue diseñada para para facilitar la organizacion y seguemientos de eventos de manera facil y sencilla. De la mano del gestor de evenots, los usuarios pueden crear, editar, eliminar y visualizar los eventos  de manera eficiente y organizada, la aplicacion esta dirigida a todo tipo de personas y organizaciones.
Las tecnologias que se utilizaron a la hora de diseñarlas fueron nodejs, express para el backend y reactjs para el frontend, asì mismo para el almacenamiento de los datos se utilizo MongoBD, la cual ayudaria a almacenar los datos realizados en el gestor de eventos
Dentro de las principales caracteristicas se encuentran la creacion y gestion de eventos, visualizaciones, modificacion de eventos de manera eficaz y su usabilidad, teniendo en cuenta que dentro de la aplicacion se encuentran con una interfaz  intuitiva y facil de manejar, esta aplicacion se diseño pensando en toda clase de publico, desde los principiantes hasta los avanzados ya que sus campos mismos direccionan al usuario a lo que se debe realizar.
Ademas cuenta con un sistema de autenticacion que solo los usarios registrados puedan visualizar y modificar los eventos.
tecnologias utilizadas en el backend:  nodej con  expressjs, cors, mongoDB con mongoose, jwt,bcrytpjs, nodemon.
tecnologias utilizadas en fronted: reactjs, reac router dom, boostrap, el tailwind css, axios.
configuracion de intalacion: backend; cd backend, para la intalacion de dependencias emepzamos con npm init -y, npm install express mongoose bcryptjs jsonwebtoken dotenv cors, seguido se instalan otras depedencias, nodemon.
configuracion instalacion del frontend: verificar que estamos en la ubicacion del gestor-eventos,seguido de la verificacion realizamos la intalacion del fronted cpn el siguinte codigo npm create vite@latest frontend, una vez creadda la carpeta se debe incializar el fronted del proyecto; luego dentro de la carpeta fronted ingresamos el npm install, para la verificaccion del vite se inicializa la termnal con el npm run dev para seguidamente levantar el servidor de la pagina web, se hizo unproceso de intalacion del axios y el tailwind.
Método	   Endpoint	                                   Descripción
GET  	   /api/eventos	                            Obtener todos los eventos
GET	     /api/eventos/:id	                        Obtener un evento por ID
POST     /api/eventos	                            Crear un nuevo evento
PUT	     /api/eventos/:id	                        Modificar un evento existente
DELETE	 /api/eventos/:id	                        Eliminar un evento
GET	     /api/eventos/:ubicacionEvento	                Filtrar eventos por ubicación
POST     /api/usuario/registrar                   Registrar usuario
POST     /api/usuario/login                       inicia sesion el usuario
por ultimo se realizo el proceso de cragar le proyecto al github por medio de los siguinetes codigos:
git init
git add.
git commit -()
git brunch -M main
git remote add origin https://github.com/Wolf-17/gestorEventosProyecto.git
git push -u origin main

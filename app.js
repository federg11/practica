const express = require('express');
const app = express();


/*Define carpeta de archivos estaticos */
app.use(express.static('public'));



/*Parsea los datos recibidos por POST*/
app.use(express.urlencoded);
app.use(express.json());

/*Rutas de la aplicacion */
//app.use('/', mainRoutes);
//app.use('/shop', shopRoutes);
//app.use('/admin', adminRoutes);

app.listen('3000', () => console.log('🚀 Servidor corriendo en el puerto 3000'));
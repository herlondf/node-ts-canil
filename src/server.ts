import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

import mainRoutes from './routes/index';

const server = express();

//Configuracao das variaveis de ambiente
dotenv.config();

//Configuracao do motor de renderizacao
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req, res)=>{
  res.status(404).render('pages/404');
});


//Def. da porta
server.listen(process.env.PORT);
import { server } from './server/Server';

const startServer = () => {
  server.listen(process.env.PORT || 3333, () => {
    console.log(`App SRVRETAGUARDA rodando na porta ${process.env.PORT || 3333}`);
  });
};

startServer();
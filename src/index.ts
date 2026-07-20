import { app } from './app';
import { env } from './config/env';
import cors from 'cors';

app.use(cors({
  origin: 'https://sinutre-frontend-phi.vercel.app'
}));

app.listen(env.port, () => {
  console.log(`SiNutre back rodando em http://localhost:${env.port}`);
});

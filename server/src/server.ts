import express from 'express';
import cors from 'cors';
import routes from './routes'
import path from 'path';
import { errors } from 'celebrate';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: Parâmetros que vêm na própria rota que identificam um recurso
// Query Param: Parâmetros que vêm na própria rota geralmente opcionais para filtros, paginação etc
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Thiago'
// knex('users').where('name', 'Thiago').select('*')

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.use(errors());

app.listen(3333);
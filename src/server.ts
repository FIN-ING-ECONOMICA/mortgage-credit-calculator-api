import express from 'express';
import router from './routes/realestate';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createUser, signIn } from './handlers/user';
import { createPayment } from './handlers/payment';

const app = express();

// allows everyone to access the api
app.use(cors())
// whenever a request is made to the server, it will be logged to the console
app.use(morgan('dev'))
// whenever a request is made to the server, it will be parsed to JSON
app.use(express.json())
// it will format the querystring to an object
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200)
    res.json({message: 'Hello World!'});
});

// the protect middleware will allow only authenticated users to access the api
app.use('/api', protect, router)
app.post('/signup', createUser)
app.post('/signin', signIn)
app.post('/payment', createPayment)

export default app
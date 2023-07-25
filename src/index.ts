import express from 'express';
import http from 'http';
import cors from 'cors';
import comrepssion from 'compression';
import mongoose from 'mongoose';
import router from './router';

const app = express();
app.use(comrepssion());
app.use(express.json());

const server = http.createServer(app);


server.listen(8080, () => {
    console.log('Server running http://localhost:8080')
});

const MONGO_URL = 'mongodb+srv://sumit:sumit@cluster0.pjha7jx.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error:Error) => {
    console.log(error);
});

app.use('/', router());
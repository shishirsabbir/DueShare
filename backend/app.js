// imports
import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import testRouter from './routers/testRouter.js';
import userRouter from './routers/userRouter.js';

// express app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use((req, res, next) => {
    req.requestTime = new Date();

    next();
});
app.use(express.json());

// mounting routers
app.use('/test', testRouter);
app.use('/auth', userRouter);

// route exception
app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: `can't find ${req.originalUrl} on this server!`,
    });
});

// default error handler
app.use((err, req, res, next) => {
    console.error(chalk.redBright(err));

    res.status(500).json({
        status: 'error',
        message: 'error! please check console log',
    });
});

// exports
export default app;

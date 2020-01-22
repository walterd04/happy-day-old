import express from 'express';
import 'reflect-metadata';
import App from './app';
import DIContainer from './di-container';

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = new App([], PORT);

export default app;

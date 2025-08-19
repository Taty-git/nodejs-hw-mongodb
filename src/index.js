import { startServer } from './server.js';
import { initMongoDBConnection } from './db/initMongoDB.js';

const bootstrap = async () => {
    await initMongoDBConnection();
    startServer();
};

bootstrap();


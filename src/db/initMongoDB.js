import mongoose, { version } from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar';
import { ENV_VARS } from '../constants/envVars';

const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
};


export const initMongoDBConnection = async () => {
    try {
        const user = getEnvVar(ENV_VARS.MONGO_DB_USER);
        const password = getEnvVar(ENV_VARS.MONGO_DB_PASSWORD);
        const host = getEnvVar(ENV_VARS.MONGO_DB_HOST);
        const db = getEnvVar(ENV_VARS.MONGO_DB_DATABASE);

        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
        );
        console.log('Mongo connection successfully established!');
    } catch (e) {
        console.error('Error', e);
        throw e;
    }
};
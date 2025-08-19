import mongoose, { version } from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar';


export const initMongoDBConnection = async () => {
    try {
        const user = getEnvVar(MONGO_DB_USER);
        const password = getEnvVar(MONGO_DB_PASSWORD);
        const host = getEnvVar(MONGO_DB_HOST);
        const db = getEnvVar(MONGO_DB_DATABASE);

        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`,
        );
        console.log('Mongo connection successfully established!');
    } catch (e) {
        console.error('Error', e);
        throw e;
    }
};
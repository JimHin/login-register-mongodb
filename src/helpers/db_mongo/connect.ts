import mongoose from 'mongoose';
import config from 'config';

async function connect() {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("connexion à mongo établi");
}

export default connect;
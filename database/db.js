// mongodb+srv://knupadhyay784:<password>@merndatabase.02svfwa.mongodb.net/

import { connect } from 'mongoose'
import 'dotenv/config';

const connectToMongo = async () => {
    try {
        await connect(`mongodb+srv://gaurav:8269301490@cluster0.tddya.mongodb.net/`);
        console.log("*** Database coonected Successfully ***");
    } catch (error) {
        console.log(error)
    }
}

 
export default connectToMongo;
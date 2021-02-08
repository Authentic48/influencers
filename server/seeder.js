import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors'

import users from './data/user.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'


dotenv.config();

connectDB();

const importDataToDb = async() =>{
    try {
        await User.deleteMany();
        const createdUser = await User.insertMany(users)
    
        console.log(`Data imported To db`.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error is coming from Importing the data to the db ${error.message}`. red.inverse);
        process.exit(1)
    }
}

const destroyDataFromDb = async() =>{
    try {
        await User.deleteMany();

        console.log('Data destroy from db'.blue.inverse)
        process.exit()
    } catch (error) {
        console.log(`Error is coming from Destroing the data to the db ${error.message}`. red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){
    destroyDataFromDb();
}else{
    importDataToDb();
}
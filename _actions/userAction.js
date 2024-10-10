'use server';

import UserModel from '../models/userModel';
import connectDB from '../config/database';

export async function getUsers() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await UserModel.find()));
    console.log(data); 

    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}

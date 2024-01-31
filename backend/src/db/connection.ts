import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    throw new Error(error);
  }
}

async function disconnectToDatabase() {
  try {
    await disconnect();
  } catch (error) {
    throw new Error(error);
  }
}

export { connectToDatabase, disconnectToDatabase };

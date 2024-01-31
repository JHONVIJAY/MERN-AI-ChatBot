import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//connections and listenersUnable to connect: connect ENETUNREACH 15.207.46.116:27017

const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("Server in running in port 5000"));
  })
  .catch((err) => console.log(err));

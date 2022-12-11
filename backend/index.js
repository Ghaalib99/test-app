import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
import seedRoutes from "./routes/seedRoute.js";
import subSectorRoutes from "./routes/subSectorRoute.js";
import sectorRoutes from "./routes/sectorRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err.message));

app.use("/api/users", userRoutes);

app.use("/api/seed", seedRoutes);
app.use("/api/subsector", subSectorRoutes);
app.use("/api/sectors", sectorRoutes);



app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log(`serve at http:localhost:${port}`);
});

import express from "express";
import expressAsyncHandler from "express-async-handler";
import Subsector from "../models/subSectorModel.js";

const subSectorRoutes = express.Router();

subSectorRoutes.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const sector = await Subsector.find().populate('sectorId');
    res.send({
      status: true,
      message: "Properties fetched sucessfully",
      data: sector,
    });
  })
);

export default subSectorRoutes
import express from "express";
import expressAsyncHandler from "express-async-handler";
import Sector from "../models/sectorModel.js"

const sectorRoutes = express.Router();

sectorRoutes.get(
    '/',

    expressAsyncHandler(async (req, res) => {
      const sector = await Sector.aggregate([
        {
            $lookup: {
              from: "Subsector",
              localField: "sectorId",
              foreignField: "_id",
              as: "subSectors",
            },
          },
        
      ]);
      res.send({sector});
    })
  );

  export default sectorRoutes
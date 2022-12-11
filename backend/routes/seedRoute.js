import express from "express"
import Sector from "../models/sectorModel.js";
import { sectors } from "../mock/data.js";
import { subSectors } from "../mock/data.js";
import Subsector from "../models/subSectorModel.js";

const seedRoutes = express.Router();



seedRoutes.get('/sectors', async(req, res) => {

    await Sector.remove({})
    const allSectors = await Sector.insertMany(sectors)

    res.send({allSectors})
})

seedRoutes.get('/subsector', async(req, res) => {

    await Subsector.remove({})
    const createdSubsectors = await Subsector.insertMany(subSectors)

    res.send({createdSubsectors})
})

export default seedRoutes

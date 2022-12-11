
import mongoose from "mongoose"

const subSectorSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        sectorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sector',
            required: true,
        },
    },
    {
        timestamps: true
    }
)

const Subsector = mongoose.model('Subsector', subSectorSchema)
export default Subsector
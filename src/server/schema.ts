import mongoose, {Schema} from "mongoose"

const MovieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// create a "Movie" model from the "MovieSchema" schema
const Movie = mongoose.model('Movie',MovieSchema)
export default Movie
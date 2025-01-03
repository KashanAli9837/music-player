import { Schema, model, models } from "mongoose";

const songSchema = new Schema(
  {
    name: String,
    url: String,
  },
  {
    timestamps: true,
  }
);

const Song = models.Song || model("Song", songSchema);

export default Song;

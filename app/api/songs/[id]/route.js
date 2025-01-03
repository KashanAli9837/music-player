import dbConnect from "@/libs/connect";
import Song from "@/models/music";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const _id = (await params).id;
    const newSong = await req.json();
    await dbConnect();
    await Song.findByIdAndUpdate(_id, newSong);
    return NextResponse.json(newSong, { status: 200 });
  } catch (error) {
    console.error("Error updating song:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(_, { params }) {
  try {
    const _id = (await params).id;
    await dbConnect();
    const song = await Song.findOne({ _id });
    return NextResponse.json(song, { status: 200 });
  } catch (error) {
    console.error("Error getting song:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

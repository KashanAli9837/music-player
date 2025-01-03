import dbConnect from "@/libs/connect";
import Song from "@/models/music";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the incoming request body
    const song = await req.json();

    // Validate input data
    if (!song.name || !song.url) {
      return NextResponse.json(
        { message: "Song name and url are required." },
        { status: 400 }
      );
    }

    // Create a new song entry in the database
    const newSong = await Song.create(song);

    // Return success response
    return NextResponse.json(
      { message: "Song Added", song: newSong },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding song:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Connect to the databas
    await dbConnect();

    // Get songs from the database
    const songs = await Song.find();

    // Return success response
    return NextResponse.json({ songs }, { status: 200 });
  } catch (error) {
    console.error("Error getting songs:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await dbConnect();
    await Song.findByIdAndDelete(id);

    // Return success response
    return NextResponse.json({ message: "Song Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error getting songs:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

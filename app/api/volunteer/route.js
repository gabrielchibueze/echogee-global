// app/api/register/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("cogwccdatabase");

    const body = await request.json();
    const {
      name,
      email,
      phone,
      volunteerType,
      drivingLicence,
      drivingProhibition,
      drivingProhibitionInfo,
      description,
    } = body;

    // Insert form data into MongoDB
    const result = await db.collection("volunteers").insertOne({
      name,
      email,
      phone,
      volunteerType,
      drivingLicence,
      drivingProhibition,
      drivingProhibitionInfo,
      description,
      createdAt: new Date(),
    });
    console.log("This is the result" + result);
    return NextResponse.json({
      message: "Registration to volunteer was successful",
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error registering for volunteer", error: error.message },
      { status: 500 }
    );
  }
}

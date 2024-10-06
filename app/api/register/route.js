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
      disabilityRequest,
      disabilityInfo,
      prayerRequest,
      prayer,
      pickupRequest,
      pickupInfo,
      healingServiceRequest,
    } = body;

    // Insert form data into MongoDB
    const result = await db.collection("registrations").insertOne({
      name,
      email,
      phone,
      disabilityRequest,
      disabilityInfo,
      prayerRequest,
      prayer,
      pickupRequest,
      pickupInfo,
      healingServiceRequest,
      createdAt: new Date(),
    });
    console.log("This is the result" + result);
    return NextResponse.json({
      message: "Registration successful",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error registering", error: error.message },
      { status: 500 }
    );
  }
}

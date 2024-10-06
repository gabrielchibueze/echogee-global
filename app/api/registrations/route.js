import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cogwccdatabase"); // Select the correct database
    const registrations = await db
      .collection("registrations")
      .find({})
      .toArray();

    return new Response(JSON.stringify({ registrations }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to load registrations" }),
      { status: 500 }
    );
  }
}

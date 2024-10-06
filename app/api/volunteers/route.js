import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("cogwccdatabase"); // Select the correct database
    const volunteers = await db.collection("volunteers").find({}).toArray();

    return new Response(JSON.stringify({ volunteers }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to load volunteers list" }),
      { status: 500 }
    );
  }
}

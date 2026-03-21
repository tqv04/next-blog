import { NextResponse } from "next/server";
import posts from "@/data/post.json";

export async function GET() {
  return NextResponse.json(posts);
}

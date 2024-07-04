import connectionToDb from "@/lib/database";
import Project from "@/models/projectSchema";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectionToDb();
  const result = await Project.findOne({ _id: id });
  return NextResponse.json({ result }, { status: 300 });
}

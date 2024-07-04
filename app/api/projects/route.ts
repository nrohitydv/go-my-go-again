import connectionToDb from "@/lib/database";
import Project from "@/models/projectSchema";
import { NextResponse } from "next/server";
import { SchemaProject } from "@/components/ProjectAdder";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body: SchemaProject = await request.json();
    const {
      projectName,
      company,
      companyLogo,
      description,
      team,
      startingDate,
      endingDate,
    } = body;

    await connectionToDb();

    await Project.create({
      projectName,
      company,
      companyLogo,
      description,
      team,
      startingDate,
      endingDate,
    });

    return NextResponse.json({ message: "Project created" }, { status: 201 });
  } catch (error: any) {
    console.error("Error connecting to db:", error);
    return NextResponse.json(
      {
        message: "An error occurred while creating the project",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectionToDb();
  const projects = await Project.find();
  return NextResponse.json({ projects });
}

// //delete
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await connectionToDb();
  await Project.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Project deleted." },
    {
      status: 200,
    }
  );
}

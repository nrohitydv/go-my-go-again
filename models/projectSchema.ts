import mongoose, { Schema } from "mongoose";
import { SchemaProject } from "@/components/ProjectAdder";
const projectSchema = new Schema<SchemaProject>({
  projectName: String,
  company: String,
  description: String,
  companyLogo: String,
  startingDate: String,
  endingDate: String,
  team: String,
});
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;

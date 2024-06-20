"use client";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { FormEvent, useState, ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// const taskSchema = z.object({
//   title: z.string().min(1, "Title is required"),
//   description: z.string().min(1, "Description requires"),
//   assignedTo: z.string().min(1, "Name of person Required"),
//   dueDate: z.string().min(1, "Due date Required"),
// });

interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
}

const TasksPage = () => {
  const [newTask, setNewTask] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const [tasksList, setTasksList] = useState<Task[]>([]);

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    setTasksList((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), ...newTask },
    ]);
    setNewTask({ title: "", description: "", assignedTo: "", dueDate: "" });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [id]: value }));
  };

  const handleDeleteTasks = (id: string) => {
    setTasksList((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="flex justify-center items-center p-6 w-[600px] h-full border rounded-md ml-[200px]">
      <div className="space-y-6 max-w-2xl w-full">
        <h1 className="font-bold text-2xl mb-4">Tasks List</h1>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 border py-2 px-4 rounded-md">
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-4 p-6 rounded-lg">
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <Label htmlFor="title" className="block mb-1 text-gray-700">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  required
                  className="w-full border rounded-md p-2"
                  value={newTask.title}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="block mb-1 text-gray-700"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  className="w-full border rounded-md p-2"
                  value={newTask.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="dueDate" className="block mb-1 text-gray-700">
                  Due Date
                </Label>
                <Input
                  type="date"
                  id="dueDate"
                  className="w-full border rounded-md p-2"
                  value={newTask.dueDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="assignedTo"
                  className="block mb-1 text-gray-700"
                >
                  Assigned to
                </Label>
                <Input
                  type="text"
                  id="assignedTo"
                  className="w-full border rounded-md p-2"
                  value={newTask.assignedTo}
                  onChange={handleInputChange}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-md"
              >
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        <ul className="space-y-4">
          {tasksList.map((task) => (
            <li key={task.id} className="border p-4 rounded-md shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    Title: {task.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Description: {task.description}
                  </p>
                  <p className="text-sm text-red-500 mt-1">
                    Due Date: {task.dueDate}
                  </p>
                  <p className="text-sm text-slate-600  mt-1">
                    Assigned To: {task.assignedTo}
                  </p>
                </div>
                <Button
                  className="bg-white text-slate-600 hover:bg-red-400"
                  onClick={() => handleDeleteTasks(task.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;

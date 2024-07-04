"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { DialogOpener } from "@/lib/store/dialog-slice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
const taskSchema = z.object({
  project: z.string({
    required_error: "Select any project!!!",
  }),
  title: z.string().min(1, "Title is required!!!"),
  description: z.string().min(10, "Description required!!!"),
  assignedTo: z.string().min(1, "Name of person Required!!!"),
  dueDate: z.string().min(1, "Due date Required!!!"),
});

interface Task {
  id: string;
  project: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
}

const TasksPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const dialogTrigger = useAppSelector((state) => state.dialog.dialogOpen);
  const [tasksList, setTasksList] = useState<Task[]>(() => {
    const localTask = localStorage.getItem("TASKS");
    if (localTask === null) return [];
    return JSON.parse(localTask);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasksList));
  }, [tasksList]);

  const handleAddTask = (data: z.infer<typeof taskSchema>) => {
    const newTask = {
      id: crypto.randomUUID(),
      ...data,
    };
    const updatedTaskList = [...tasksList, newTask];
    setTasksList(updatedTaskList);
    reset();
    toast({
      description: <p>Form submitted successfully!!!</p>,
    });
    dispatch(DialogOpener());
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
        {tasksList.length === 0 && (
          <p className="text-slate-500">No tasks found</p>
        )}
        <ul className="space-y-4">
          {tasksList.map((task) => (
            <li key={task.id} className="border p-4 rounded-md shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {task.project}
                  </p>
                  <p className="font-semibold text-lg text-gray-800">
                    Task: {task.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {task.description}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Due Date: {task.dueDate}
                  </p>
                  <p className="text-sm text-blue-500 mt-1">
                    <span className="text-slate-400 text-sm/md">
                      Assigned To:
                    </span>
                    {task.assignedTo}
                  </p>
                </div>
                <Button
                  className="bg-white text-slate-600 hover:bg-white"
                  onClick={() => handleDeleteTasks(task.id)}
                >
                  <X />
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <Dialog
          open={dialogTrigger}
          onOpenChange={() => dispatch(DialogOpener())}
        >
          <DialogTrigger className="ml-[500px]">
            <Button className="bg-blue-500 text-white hover:bg-blue-600 border py-2 px-2 rounded-xl">
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-4 p-6 rounded-lg">
            <form onSubmit={handleSubmit(handleAddTask)} className="space-y-4">
              <div className="mt-[20px]">
                <Label htmlFor="project" className="block mb-1 text-gray-700">
                  Project
                </Label>
                <Controller
                  name="project"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a project" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Project 1">Project 1</SelectItem>
                        <SelectItem value="Project 2">Project 2</SelectItem>
                        <SelectItem value="Project 3">Project 3</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.project && (
                  <p className="text-red-600">{errors.project.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="title" className="block mb-1 text-gray-700">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  className="w-full border rounded-md p-2"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-red-600">{errors.title.message}</p>
                )}
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
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-red-600">{errors.description.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="dueDate" className="block mb-1 text-gray-700">
                  Due Date
                </Label>
                <Input
                  type="date"
                  id="dueDate"
                  className="w-full border rounded-md p-2"
                  {...register("dueDate")}
                />
                {errors.dueDate && (
                  <p className="text-red-600">{errors.dueDate.message}</p>
                )}
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
                  {...register("assignedTo")}
                />
                {errors.assignedTo && (
                  <p className="text-red-600">{errors.assignedTo.message}</p>
                )}
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
      </div>
    </div>
  );
};

export default TasksPage;

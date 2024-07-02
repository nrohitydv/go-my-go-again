// "use client";
// import { Task } from "@/app/tasks/page";
// import { createContext, useState, ReactNode, useEffect } from "react";

// interface TaskContextType {
//   tasksList: Task[];
//   setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
// }

// export const TaskContextApi = createContext<TaskContextType | null>(null);

// const TaskContext = ({ children }: { children: ReactNode }) => {
//   const [tasksList, setTasksList] = useState<Task[]>(() => {
//     const localTask = localStorage.getItem("TASKS");
//     if (localTask === null) return [];
//     return JSON.parse(localTask);
//   });

//   useEffect(() => {
//     localStorage.setItem("TASKS", JSON.stringify(tasksList));
//   }, [tasksList]);
//   return (
//     <TaskContextApi.Provider value={{ tasksList, setTasksList }}>
//       {children}
//     </TaskContextApi.Provider>
//   );
// };

// export default TaskContext;

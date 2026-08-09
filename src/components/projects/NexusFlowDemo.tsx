"use client";

import React, { useState } from "react";
import { Plus, CheckSquare, Layers, Clock, CheckCircle2, User, Filter, ArrowRight } from "lucide-react";

interface Task {
  id: string;
  title: string;
  category: "Frontend" | "Backend" | "Security" | "AI";
  priority: "High" | "Medium" | "Low";
  assignee: string;
  status: "Backlog" | "In Progress" | "Review" | "Done";
}

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "Implement OAuth2 & Role-Based Permissions API",
    category: "Security",
    priority: "High",
    assignee: "Naga R.",
    status: "In Progress",
  },
  {
    id: "task-2",
    title: "Optimize Kanban Card Virtualization Render Speed",
    category: "Frontend",
    priority: "Medium",
    assignee: "Alex K.",
    status: "Review",
  },
  {
    id: "task-3",
    title: "Setup PostgreSQL Indexing for Activity Timelines",
    category: "Backend",
    priority: "High",
    assignee: "Naga R.",
    status: "Done",
  },
  {
    id: "task-4",
    title: "Build LLM Context Window Cache Layer",
    category: "AI",
    priority: "High",
    assignee: "Naga R.",
    status: "Backlog",
  },
];

export const NexusFlowDemo: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState<Task["category"]>("Frontend");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const columns: Task["status"][] = ["Backlog", "In Progress", "Review", "Done"];

  const handleMoveTask = (taskId: string, nextStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: nextStatus } : t))
    );
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      category: newTaskCategory,
      priority: "High",
      assignee: "Naga R.",
      status: "Backlog",
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const completedCount = tasks.filter((t) => t.status === "Done").length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100) || 0;

  const filteredTasks = tasks.filter((t) => {
    if (activeFilter === "All") return true;
    return t.category === activeFilter;
  });

  return (
    <div className="w-full bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header */}
      <div className="bg-[#18181b] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              NexusFlow Sprint Workspace
              <span className="px-2 py-0.5 text-[10px] font-mono bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded">
                SaaS DEMO
              </span>
            </h3>
          </div>
        </div>

        {/* Progress Metric */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[10px] font-mono text-slate-400">SPRINT PROGRESS</div>
            <div className="text-xs font-mono font-bold text-sky-400">{progressPercent}% COMPLETED</div>
          </div>
          <div className="w-20 bg-[#09090b] rounded-full h-2 overflow-hidden border border-white/10">
            <div
              className="bg-sky-400 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Bar & Quick Add Task Form */}
      <div className="p-4 bg-[#0c0c0e] border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          {["All", "Frontend", "Backend", "Security", "AI"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-2.5 py-1 font-mono rounded-md transition-colors ${
                activeFilter === cat
                  ? "bg-sky-500/20 border border-sky-500/40 text-sky-300"
                  : "bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Inline Add Task Form */}
        <form onSubmit={handleAddTask} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Add new sprint task..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="bg-[#18181b] border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-400 w-48 sm:w-60"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-mono text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            Add
          </button>
        </form>
      </div>

      {/* Kanban Board Columns */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#121215] overflow-x-auto">
        {columns.map((col) => {
          const colTasks = filteredTasks.filter((t) => t.status === col);
          return (
            <div key={col} className="bg-[#0c0c0e] border border-white/5 rounded-xl p-3 flex flex-col justify-between min-h-[320px]">
              <div>
                {/* Column Header */}
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-xs font-mono">
                  <span className="text-slate-200 font-semibold uppercase">{col}</span>
                  <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-slate-400 text-[10px]">
                    {colTasks.length}
                  </span>
                </div>

                {/* Column Cards */}
                <div className="space-y-2.5">
                  {colTasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-3 bg-[#18181b] border border-white/10 hover:border-indigo-500/30 rounded-lg space-y-2 transition-all group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                          {task.category}
                        </span>
                        <span
                          className={
                            task.priority === "High" ? "text-rose-400" : "text-amber-400"
                          }
                        >
                          {task.priority} Priority
                        </span>
                      </div>

                      <p className="text-xs text-slate-200 font-medium leading-snug">
                        {task.title}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 text-indigo-400" />
                          {task.assignee}
                        </span>

                        {/* Status Toggle Buttons */}
                        <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100">
                          {col !== "Done" && (
                            <button
                              onClick={() => {
                                const nextIndex = columns.indexOf(col) + 1;
                                handleMoveTask(task.id, columns[nextIndex]);
                              }}
                              className="px-1.5 py-0.5 rounded bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 transition-colors flex items-center gap-0.5"
                              title="Advance task status"
                            >
                              Next <ArrowRight className="w-2.5 h-2.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {colTasks.length === 0 && (
                    <div className="p-4 text-center text-xs font-mono text-slate-500 border border-dashed border-white/5 rounded-lg">
                      No tasks in {col}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 text-[10px] font-mono text-slate-500 text-center">
                Click "Next" to advance pipeline status
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

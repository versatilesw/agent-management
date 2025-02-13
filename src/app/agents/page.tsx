"use client";
import React, { useContext, useState } from "react";
import { AgentContext } from "@/contexts/AgentContext";
import AgentList from "@/components/AgentList";
import Link from "next/link";

const AgentsPage: React.FC = () => {
  const { agents, deleteAgent } = useContext(AgentContext);

  const handleDeleteAgent = (id: string) => {
    deleteAgent(id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">List of Agents:</h1>

      <div className="flex justify-end items-center mb-4 gap">
        <Link href="/agents/add">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add
          </button>
        </Link>
      </div>
      <AgentList agents={agents} onDelete={handleDeleteAgent} />
    </div>
  );
};

export default AgentsPage;

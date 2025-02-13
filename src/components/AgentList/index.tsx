import { Agent } from "@/types/agent";
import dayjs from "dayjs";
import React, { useState } from "react";
import Link from "next/link";

interface AgentListProps {
  agents: Agent[];
  onDelete: (id: string) => void;
}

const AgentList: React.FC<AgentListProps> = ({ agents, onDelete }) => {
  const handleDeleteClick = (id: string) => {
    onDelete(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border-b border-gray-300 px-4 py-2">Name</th>
            <th className="border-b border-gray-300 px-4 py-2">Email</th>
            <th className="border-b border-gray-300 px-4 py-2">Status</th>
            <th className="border-b border-gray-300 px-4 py-2">Last Seen</th>
            <th className="border-b border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {agents.length
          ? agents.map((agent) => (
            <tr key={agent.id} className="hover:bg-gray-50">
              <td className="border-b border-gray-300 px-4 py-2">
                {agent.name}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {agent.email}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {agent.status}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                {dayjs(agent.lastSeen).format("MM/DD/YYYY hh:mm A")}
              </td>
              <td className="border-b border-gray-300 px-4 py-2">
                <div className="flex flex-row gap-2 justify-end">
                  <Link href={`/agents/${agent.id}`}>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      Edit
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
                    onClick={() => handleDeleteClick(agent.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          ))
          : 
            <tr>
              <td>
                <p className="px-4 py-4">No Agents</p>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default AgentList;


import React, { useMemo } from 'react';
import { Agent } from '../types';
import ProgressBar from './ProgressBar';
import { StatusOnlineIcon } from './icons';

const generateAgents = (): Agent[] => [
    { id: 1, name: 'Ali Hassan', avatarUrl: `https://picsum.photos/seed/agent1/48`, currentTask: 'Verifying Baghdad Central ballots', progress: Math.floor(Math.random() * 20) + 75, isOnline: true },
    { id: 2, name: 'Fatima Al-Jubouri', avatarUrl: `https://picsum.photos/seed/agent2/48`, currentTask: 'Cross-referencing Basra results', progress: Math.floor(Math.random() * 20) + 80, isOnline: true },
    { id: 3, name: 'Yusuf Ahmed', avatarUrl: `https://picsum.photos/seed/agent3/48`, currentTask: 'Auditing Nineveh data entry', progress: Math.floor(Math.random() * 20) + 60, isOnline: true },
    { id: 4, name: 'Layla Khoury', avatarUrl: `https://picsum.photos/seed/agent4/48`, currentTask: 'Monitoring Erbil media channels', progress: Math.floor(Math.random() * 20) + 90, isOnline: true },
    { id: 5, name: 'Omar Bakir', avatarUrl: `https://picsum.photos/seed/agent5/48`, currentTask: 'Analyzing Anbar turnout', progress: Math.floor(Math.random() * 20) + 55, isOnline: true },
    { id: 6, name: 'Zahra Said', avatarUrl: `https://picsum.photos/seed/agent6/48`, currentTask: 'Finalizing Sulaymaniyah reports', progress: Math.floor(Math.random() * 10) + 90, isOnline: true },
];

const AgentStatus: React.FC = () => {
    const agents = useMemo(() => generateAgents(), []);

    return (
        <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Agent Status Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                {agents.map(agent => (
                    <div key={agent.id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-3">
                            <img src={agent.avatarUrl} alt={agent.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-semibold">{agent.name}</p>
                                <div className="flex items-center text-xs text-green-400">
                                    <StatusOnlineIcon className="w-2 h-2 mr-1" />
                                    <span>Online</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2 h-10">{agent.currentTask}</p>
                        <div className="flex items-center justify-between text-xs">
                             <ProgressBar percentage={agent.progress} />
                             <span className="ml-3 font-mono">{agent.progress}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgentStatus;

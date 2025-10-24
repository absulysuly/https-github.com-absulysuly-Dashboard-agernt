
import React, { useState, useEffect } from 'react';
import { Activity } from '../types';

const initialActivities: Activity[] = [
    { id: 1, agentName: 'System', action: 'Dashboard initialized.', timestamp: new Date().toLocaleTimeString(), type: 'info' },
    { id: 2, agentName: 'Ali Hassan', action: 'Batch #541 from Baghdad processed.', timestamp: new Date(Date.now() - 15000).toLocaleTimeString(), type: 'success' },
    { id: 3, agentName: 'Fatima Al-Jubouri', action: 'Flagged discrepancy in Basra vote count.', timestamp: new Date(Date.now() - 32000).toLocaleTimeString(), type: 'warning' },
];

const possibleActions = [
    { action: (name: string) => `Batch #${Math.floor(Math.random()*900)+100} from ${name.split(' ')[1]}'s region processed.`, type: 'success' as const },
    { action: (name: string) => `Verified media report for ${name.split(' ')[1]}.`, type: 'info' as const },
    { action: (name: string) => `System alert: High traffic from ${name.split(' ')[1]}'s sector.`, type: 'warning' as const },
];

const agentNames = ['Ali Hassan', 'Fatima Al-Jubouri', 'Yusuf Ahmed', 'Layla Khoury', 'Omar Bakir', 'Zahra Said'];

const LiveActivityFeed: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>(initialActivities);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomAgent = agentNames[Math.floor(Math.random() * agentNames.length)];
            const randomAction = possibleActions[Math.floor(Math.random() * possibleActions.length)];
            
            const newActivity: Activity = {
                id: Date.now(),
                agentName: randomAgent,
                action: randomAction.action(randomAgent),
                timestamp: new Date().toLocaleTimeString(),
                type: randomAction.type,
            };

            setActivities(prev => [newActivity, ...prev].slice(0, 15));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getTypeColor = (type: Activity['type']) => {
        switch (type) {
            case 'success': return 'border-l-iraqi-green';
            case 'warning': return 'border-l-yellow-500';
            case 'info': return 'border-l-blue-500';
            default: return 'border-l-gray-500';
        }
    };

    return (
        <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Live Activity Feed</h2>
            <div className="flex-grow overflow-y-auto space-y-3 pr-2">
                {activities.map(activity => (
                    <div key={activity.id} className={`p-3 bg-gray-800/50 rounded-md border-l-4 ${getTypeColor(activity.type)}`}>
                        <div className="flex justify-between items-center text-sm">
                            <p><span className="font-semibold">{activity.agentName}:</span> {activity.action}</p>
                            <p className="text-gray-400 font-mono whitespace-nowrap pl-4">{activity.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveActivityFeed;

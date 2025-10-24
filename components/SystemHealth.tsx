
import React, { useMemo } from 'react';
import { DatabaseIcon, ServerIcon, AlertIcon, CheckIcon } from './icons';

interface HealthStatus {
    name: string;
    status: 'Healthy' | 'Degraded' | 'Offline';
    uptime?: string;
    errorRate?: string;
    icon: React.ReactNode;
}

const generateHealthData = (): HealthStatus[] => [
    { name: 'Database Connection', status: Math.random() > 0.05 ? 'Healthy' : 'Degraded', icon: <DatabaseIcon className="w-6 h-6"/> },
    { name: 'Gemini API', status: Math.random() > 0.02 ? 'Healthy' : 'Degraded', icon: <ServerIcon className="w-6 h-6" /> },
    { name: 'Server Uptime', status: 'Healthy', uptime: '99.98%', icon: <ServerIcon className="w-6 h-6" /> },
    { name: 'Error Rate', status: 'Healthy', errorRate: `${(Math.random() * 0.1).toFixed(2)}%`, icon: <AlertIcon className="w-6 h-6" /> },
];


const SystemHealth: React.FC = () => {
    const healthData = useMemo(() => generateHealthData(), []);

    const getStatusIndicator = (status: HealthStatus['status']) => {
        switch (status) {
            case 'Healthy':
                return <span className="flex items-center text-green-400"><CheckIcon className="w-5 h-5 mr-1" /> {status}</span>;
            case 'Degraded':
                return <span className="flex items-center text-yellow-400"><AlertIcon className="w-5 h-5 mr-1" /> {status}</span>;
            case 'Offline':
                return <span className="flex items-center text-red-500"><AlertIcon className="w-5 h-5 mr-1" /> {status}</span>;
        }
    };
    
    return (
        <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full">
            <h2 className="text-xl font-semibold mb-4">System Health</h2>
            <div className="space-y-4">
                {healthData.map(item => (
                    <div key={item.name} className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="text-iraqi-green">{item.icon}</div>
                            <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="text-right">
                           {getStatusIndicator(item.status)}
                           {item.uptime && <p className="text-xs text-gray-400">Uptime: {item.uptime}</p>}
                           {item.errorRate && <p className="text-xs text-gray-400">Rate: {item.errorRate}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SystemHealth;


import React, { useMemo } from 'react';
import { GovernorateData, TimelineData } from '../types';
import ProgressBar from './ProgressBar';

const generateGovData = (): GovernorateData[] => [
    { name: 'Baghdad', completed: Math.floor(Math.random() * 20) + 80 },
    { name: 'Basra', completed: Math.floor(Math.random() * 20) + 75 },
    { name: 'Nineveh', completed: Math.floor(Math.random() * 20) + 60 },
    { name: 'Erbil', completed: Math.floor(Math.random() * 20) + 85 },
    { name: 'Anbar', completed: Math.floor(Math.random() * 20) + 50 },
    { name: 'Sulaymaniyah', completed: Math.floor(Math.random() * 20) + 90 },
];

const generateTimelineData = (): TimelineData[] => {
    const data = [];
    for (let i = 1; i <= 7; i++) {
        const target = i * 14;
        const actual = Math.max(0, target - (Math.random() * 10 - 3) + i);
        data.push({ day: `Day ${i}`, target, actual: Math.min(100, actual) });
    }
    return data;
}

const ProgressVisualization: React.FC = () => {
    const govData = useMemo(() => generateGovData(), []);
    const timelineData = useMemo(() => generateTimelineData(), []);

    const overallProgress = useMemo(() => {
        const total = govData.reduce((sum, item) => sum + item.completed, 0);
        return Math.round(total / govData.length);
    }, [govData]);

    const Recharts = (window as any).Recharts;

    if (!Recharts) {
        return (
            <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold mb-4">Progress Visualization</h2>
                <p className="text-gray-400">Loading charts...</p>
            </div>
        );
    }

    const { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;

    return (
        <div className="bg-dark-card p-6 rounded-xl border border-gray-800 h-full flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Progress Visualization</h2>
            
            <div className="mb-6">
                <div className="flex justify-between items-center mb-1 text-sm">
                    <span>Overall Candidate Processing</span>
                    <span className="font-bold">{overallProgress}%</span>
                </div>
                <ProgressBar percentage={overallProgress} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <div className="h-[250px] md:h-auto">
                    <h3 className="text-lg font-medium mb-2 text-center">Governorate Completion</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={govData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" stroke="#9ca3af" width={80} tickLine={false} axisLine={false} />
                            <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333' }} />
                            <Bar dataKey="completed" fill="#006400" background={{ fill: '#374151' }} radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-[250px] md:h-auto">
                    <h3 className="text-lg font-medium mb-2 text-center">Timeline vs Target</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={timelineData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="day" stroke="#9ca3af" />
                            <YAxis stroke="#9ca3af" />
                            <Tooltip contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333' }} />
                            <Legend />
                            <Line type="monotone" dataKey="target" stroke="#CE1126" strokeWidth={2} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="actual" stroke="#006400" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ProgressVisualization;

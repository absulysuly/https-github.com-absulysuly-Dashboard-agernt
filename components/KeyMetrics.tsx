
import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import CircularProgressBar from './CircularProgressBar';
import { CheckIcon } from './icons';

const TOTAL_CANDIDATES = 7769;

const KeyMetrics: React.FC = () => {
    const [processedCandidates, setProcessedCandidates] = useState(5128);
    
    useEffect(() => {
        // Simulate real-time updates
        const interval = setInterval(() => {
            setProcessedCandidates(prev => {
                const newValue = prev + Math.floor(Math.random() * 20);
                return newValue > TOTAL_CANDIDATES ? TOTAL_CANDIDATES : newValue;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    const progress = Math.round((processedCandidates / TOTAL_CANDIDATES) * 100);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <MetricCard
                  title="Candidates Processed"
                  value={`${processedCandidates.toLocaleString()} / ${TOTAL_CANDIDATES.toLocaleString()}`}
                  glowColor="white"
              />
            </div>
            <MetricCard title="Progress" value="" glowColor="green">
                <div className="flex justify-center items-center h-full">
                    <CircularProgressBar percentage={progress} size={120} strokeWidth={12} />
                </div>
            </MetricCard>
            <MetricCard title="Active Agents" value="6 / 6" glowColor="green" />
            <MetricCard title="Database Health" value="" glowColor="green">
                <div className="flex items-center text-green-400 space-x-2 mt-4">
                    <CheckIcon className="w-10 h-10" />
                    <span className="text-2xl font-semibold">Healthy</span>
                </div>
            </MetricCard>
        </div>
    );
};

export default KeyMetrics;

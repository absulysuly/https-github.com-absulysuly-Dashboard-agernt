
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KeyMetrics from './components/KeyMetrics';
import ProgressVisualization from './components/ProgressVisualization';
import AgentStatus from './components/AgentStatus';
import LiveActivityFeed from './components/LiveActivityFeed';
import SystemHealth from './components/SystemHealth';

const App: React.FC = () => {
    // State to trigger a global refresh for components
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRefreshTrigger(prev => prev + 1);
        }, 30000); // Auto-refresh every 30 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-dark-bg text-white p-4 sm:p-6 lg:p-8">
            <div className="max-w-screen-2xl mx-auto">
                <Header />

                <main className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-4">
                        <KeyMetrics key={refreshTrigger} />
                    </div>
                    
                    <div className="lg:col-span-2 min-h-[300px]">
                        <ProgressVisualization key={refreshTrigger} />
                    </div>

                    <div className="lg:col-span-2 min-h-[300px]">
                        <AgentStatus key={refreshTrigger} />
                    </div>

                    <div className="lg:col-span-2 min-h-[300px]">
                        <LiveActivityFeed />
                    </div>
                    
                    <div className="lg:col-span-2 min-h-[300px]">
                        <SystemHealth key={refreshTrigger} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;

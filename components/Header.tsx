
import React, { useState, useEffect } from 'react';
import { ClockIcon, StatusOnlineIcon } from './icons';

const Header: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 pb-4 border-b-2 border-iraqi-green/30">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-center sm:text-left">
                🇮🇶 IRAQI ELECTION COMMAND CENTER
            </h1>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-lg">
                    <ClockIcon className="w-6 h-6 text-gray-400" />
                    <span className="font-mono">{formattedTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <StatusOnlineIcon className="w-3 h-3 text-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-green-400">System Operational</span>
                </div>
            </div>
        </header>
    );
};

export default Header;

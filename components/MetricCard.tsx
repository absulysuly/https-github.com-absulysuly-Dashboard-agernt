
import React from 'react';

interface MetricCardProps {
    title: string;
    value: string;
    children?: React.ReactNode;
    glowColor?: 'green' | 'red' | 'white';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, children, glowColor = 'green' }) => {
    const glowClass = {
        green: 'hover:shadow-glow-green border-iraqi-green/50',
        red: 'hover:shadow-glow-red border-iraqi-red/50',
        white: 'hover:shadow-glow-white border-gray-500/50',
    }[glowColor];

    return (
        <div className={`bg-dark-card p-6 rounded-xl border ${glowClass} transition-all duration-300 flex flex-col justify-between h-full`}>
            <div>
                <h3 className="text-gray-400 text-lg font-medium">{title}</h3>
                <p className="text-4xl lg:text-5xl font-bold mt-2">{value}</p>
            </div>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default MetricCard;

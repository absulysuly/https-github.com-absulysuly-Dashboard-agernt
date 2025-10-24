
import React from 'react';

interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage, size = 100, strokeWidth = 10 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    const colorClass = percentage > 75 ? 'text-iraqi-green' : percentage > 40 ? 'text-yellow-500' : 'text-iraqi-red';

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90" width={size} height={size}>
                <circle
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className={`${colorClass} transition-all duration-500 ease-in-out`}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <span className="absolute text-xl font-bold">{`${percentage}%`}</span>
        </div>
    );
};

export default CircularProgressBar;

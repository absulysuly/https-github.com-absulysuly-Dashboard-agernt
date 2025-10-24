
import React from 'react';

interface ProgressBarProps {
    percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    const colorClass = percentage > 75 ? 'bg-iraqi-green' : percentage > 40 ? 'bg-yellow-500' : 'bg-iraqi-red';

    return (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
                className={`${colorClass} h-2.5 rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;

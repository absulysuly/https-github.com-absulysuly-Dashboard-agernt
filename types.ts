
export interface Agent {
    id: number;
    name: string;
    avatarUrl: string;
    currentTask: string;
    progress: number;
    isOnline: boolean;
}

export interface Activity {
    id: number;
    agentName: string;
    action: string;
    timestamp: string;
    type: 'info' | 'warning' | 'success';
}

export interface GovernorateData {
    name: string;
    completed: number;
}

export interface TimelineData {
    day: string;
    target: number;
    actual: number;
}

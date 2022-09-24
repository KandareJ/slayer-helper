import { SLAYER_DATA } from "./SlayerData";

export const filterTasks = (tasks, combat, slayer, quests, unlocks, blockList) => {
    const combatLevel = Number.isInteger(combat) ? combat : 3;
    const slayerLevel = Number.isInteger(slayer) ? slayer : 1;
    
    return tasks.filter((task) => {
        const isBlocked = blockList.includes(task.name);
        const combatIsHighEnough = combatLevel >= task.combatLevel;
        const slayerIsHighEnough = slayerLevel >= task.slayerLevel;
        const questRequirementsMet = task.questRequirements.filter((requiredQuest) => {
            return !quests.includes(requiredQuest);
        }).length === 0;
        const unlocksRequirementsMet = task.slayerUnlocks.filter((requiredUnlock) => {
            return !unlocks.includes(requiredUnlock);
        }).length === 0;

        return !isBlocked && combatIsHighEnough && slayerIsHighEnough
            && questRequirementsMet && unlocksRequirementsMet;
    });
};

export const sumWeights = (tasks) => {
    return tasks.map((task) => {
        return task.weight;
    }).reduce((total, next) => {
        return total + next;
    }, 0);
};

export const getStats = (slayerInfo) => {
    const { 
        master,
        combatLevel,
        slayerLevel,
        quests,
        unlocks,
        blockList,
        desiredTasks
    } = slayerInfo;

    const pointsPerTask = (master) ? SLAYER_DATA[master].points : 0;
    let stats = {};
    const tasks = (master) ? 
    filterTasks(SLAYER_DATA[master].tasks, combatLevel, slayerLevel, quests, unlocks, blockList)
    : [];

    stats.totalTasksWeight = sumWeights(tasks);
    stats.totalTasksWeight = (stats.totalTasksWeight) ? stats.totalTasksWeight : 1;
    stats.skipTasksWeight = sumWeights(getSkipTasks(tasks, desiredTasks));
    stats.favoriteTasksWeight = sumWeights(getFavoriteTasks(tasks, desiredTasks));
    stats.averagePointsPerTask = calculateAveragePointsPerTask(pointsPerTask, stats.favoriteTasksWeight, stats.skipTasksWeight, stats.totalTasksWeight);
    stats.averagePointsPerTenthTask = calculateAveragePointsPerTask(pointsPerTask * 5, stats.favoriteTasksWeight, stats.skipTasksWeight, stats.totalTasksWeight);

    return stats;
};

const getSkipTasks = (tasks, desiredTasks) => {
    return tasks.filter((task) => {
        return !desiredTasks.includes(task.name);
    });
};

const getFavoriteTasks = (tasks, desiredTasks) => {
    return tasks.filter((task) => {
        return desiredTasks.includes(task.name);
    });
};

const calculateAveragePointsPerTask = (pointsPerCompletedTask, favoriteTasksWeight, skipTasksWeight, totalTasksWeight) => {
    return (favoriteTasksWeight / totalTasksWeight * pointsPerCompletedTask) - (skipTasksWeight / totalTasksWeight * 30);
}
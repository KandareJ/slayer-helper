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
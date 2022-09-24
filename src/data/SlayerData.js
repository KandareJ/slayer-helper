import { Nieve } from './Nieve';
import { Duradel } from './Duradel';
import { Konar } from './Konar';

export const SLAYER_DATA = {
  Nieve,
  Duradel,
  Konar
};

export const getUnlocks = (master) => {
  if (master === '') return [];
  
  const unlocksWithDupes = SLAYER_DATA[master].tasks.map((task) => {
      return task.slayerUnlocks;
  }).reduce((allUnlocks, next) => {
      return [...allUnlocks, ...next];
  });

  const unlocks = [...new Set(unlocksWithDupes)];
  
  unlocks.sort();

  return unlocks;
};

export const getQuests = (master) => {
  if (master === '') return [];

  const questsWithDupes = SLAYER_DATA[master].tasks.map((task) => {
      return task.questRequirements;
  }).reduce((allQuests, next) => {
      return [...allQuests, ...next];
  });

  const quests = [...new Set(questsWithDupes)];
  
  quests.sort();

  return quests;
};

export const getTasks = (master) => {
  if (master === '') return [];

  const tasks = SLAYER_DATA[master].tasks.map((task) => {
      return task.name;
  });

  return tasks;
};
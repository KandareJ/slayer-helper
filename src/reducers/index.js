import { configureStore } from '@reduxjs/toolkit'
import BlockListReducer from './BlockListReducer';
import CombatLeverReducer from './CombatLeverReducer';
import DesiredTasksReducer from './DesiredTasksReducer';
import SlayerLevelReducer from './SlayerLevelReducer';
import SlayerMasterReducer from './SlayerMasterReducer';
import SecondarySlayerMasterReducer from './SecondarySlayerMasterReducer';
import SlayerUnlocksReducer from './SlayerUnlocksReducer';
import QuestsReducer from './QuestsReducer';

export default configureStore({
  reducer: {
    slayerMaster: SlayerMasterReducer,
    secondarySlayerMaster: SecondarySlayerMasterReducer,
    combatLevel: CombatLeverReducer,
    slayerLevel: SlayerLevelReducer,
    blockList: BlockListReducer,
    desiredTasks: DesiredTasksReducer,
    slayerUnlocks: SlayerUnlocksReducer,
    quests: QuestsReducer,
  },
});
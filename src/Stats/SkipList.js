import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

import { filterTasks } from '../data/HelperFunctions';
import { SLAYER_DATA } from "../data/SlayerData";
import { listsStyle, listContentSyle } from "../Form/styles";

const SkipList = () => {
    const master = useSelector((state) => state.slayerMaster.value);
    const combatLevel = useSelector((state) => state.combatLevel.value);
    const slayerLevel = useSelector((state) => state.slayerLevel.value);
    const quests = useSelector((state) => state.quests.value);
    const unlocks = useSelector((state) => state.slayerUnlocks.value);
    const blockList = useSelector((state) => state.blockList.value);
    const desiredTasks = useSelector((state) => state.desiredTasks.value);
    
    const tasks = (master) ? 
        filterTasks(SLAYER_DATA[master].tasks, combatLevel, slayerLevel, quests, unlocks, blockList)
        : [];

    const skipTasks = tasks.filter((task) => {
        return !desiredTasks.includes(task.name);
    });

    return (
        <div style={listsStyle}>
            <List>
                <ListItemText>Skip List</ListItemText>
                <Divider />
                <div style={listContentSyle}>
                    {skipTasks.map((task) => {
                        return (
                            <Grid container spacing={2} key={task.name}>
                                <Grid xs={12}>
                                    <ListItemText>{task.name}</ListItemText>
                                </Grid>
                            </Grid>
                        );
                    })}
                </div>
            </List>
        </div>
    );
};

export default SkipList;
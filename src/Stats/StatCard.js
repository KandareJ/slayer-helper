import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

import { SLAYER_DATA } from '../data/SlayerData';
import { filterTasks, sumWeights } from '../data/HelperFunctions';
import { listsStyle, listContentSyle } from "../Form/styles";

const StatCard = () => {
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

    const favoriteTasks = tasks.filter((task) => {
        return desiredTasks.includes(task.name);
    });

    const skipsWeight = sumWeights(skipTasks);
    const favoriteWeight = sumWeights(favoriteTasks);
    let totalWeight = sumWeights(tasks);
    totalWeight = (totalWeight) ? totalWeight : 1;
    const pointsPerTask = (master) ? SLAYER_DATA[master].points : 0;

    const calculatePtsPerTask = (perTask) => {
        return (favoriteWeight / totalWeight * perTask) - (skipsWeight / totalWeight * 30)
    }

    return (
        <div style={listsStyle}>
            <List>
                <ListItemText>Stats</ListItemText>
                <Divider />
                
                <div style={listContentSyle}>
                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Good tasks</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{(favoriteWeight / totalWeight * 100).toFixed(2)}%</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Skip tasks</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{(skipsWeight / totalWeight * 100).toFixed(2)}%</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Pts per task</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{calculatePtsPerTask(pointsPerTask).toFixed(2)}</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Pts per ten</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{(calculatePtsPerTask(pointsPerTask) * 9 + calculatePtsPerTask(pointsPerTask * 5)).toFixed(2)}</ListItemText>
                        </Grid>
                    </Grid>
                </div>
            </List>
        </div>
    );
};

export default StatCard;
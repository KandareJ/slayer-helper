import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';
import Grid from '@mui/material/Unstable_Grid2';


import { filterTasks, sumWeights } from './data/HelperFunctions';
import { SLAYER_DATA } from "./data/SlayerData";
import { addBlockList } from "./reducers/BlockListReducer";
import { addDesiredTask, removeDesiredTask } from "./reducers/DesiredTasksReducer";

const MAX_BLOCKABLE_TASK_COUNT = 7;

const TaskList = () => {
    const dispatch = useDispatch();
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

    const totalWeight = sumWeights(tasks);

    const blockClicked = (task) => {
        return () => {
            dispatch(addBlockList(task.name));
        }
    };

    const getBlockButton = (task) => {
        if (blockList.length < MAX_BLOCKABLE_TASK_COUNT && !desiredTasks.includes(task.name)) {
            return (
                <Button variant="outlined" color="error" onClick={blockClicked(task)}>Block</Button>
            );
        }
        else {
            return (
                <Button variant="outlined" color="error" disabled>Block</Button>
            );
        }
    };

    const favoriteAdded = (task) => {
        return () => {
            dispatch(addDesiredTask(task.name));
        }
    }

    const favoriteRemoved = (task) => {
        return () => {
            dispatch(removeDesiredTask(task.name));
        }
    }

    const getFavoriteButton = (task) => {
        if (desiredTasks.includes(task.name)) {
            return (
                <div onClick={favoriteRemoved(task)}>
                    <ListItemIcon>
                        <Star />
                    </ListItemIcon>
                </div>
            );
        } else {
            return (
                <div onClick={favoriteAdded(task)}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                </div>
            );
        }
    }

    return (
        <div style={{height: 350, overflowY: 'auto', padding: 20}}>
            <List>
                <Grid container spacing={2}>
                    <Grid xs={1}>
                        <ListItemText primary="" />
                    </Grid>
                    <Grid xs={4}>
                        <ListItemText primary="Monster" />
                    </Grid>
                    <Grid xs={2}>
                        <ListItemText primary="Weight" />
                    </Grid>
                    <Grid xs={2}>
                        <ListItemText primary="% Chance" />
                    </Grid>
                    <Grid xs={3}>
                        <ListItemText primary=" " />
                    </Grid>
                </Grid>
                <Divider />
                {tasks.map((task) => {
                    return (
                        <Grid container spacing={2} key={task.name}>
                            <Grid xs={1}>
                                {getFavoriteButton(task)}
                            </Grid>
                            <Grid xs={4}>
                                <ListItemText primary={task.name} />
                            </Grid>
                            <Grid xs={2}>
                                <ListItemText primary={task.weight} />
                            </Grid>
                            <Grid xs={2}>
                                <ListItemText primary={(task.weight / totalWeight * 100).toFixed(2)} />
                            </Grid>
                            <Grid xs={3}>
                                {getBlockButton(task)}
                            </Grid>
                        </Grid>
                    )
                })}
            </List>
        </div>
    );
};

export default TaskList;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { setMaster, clearMaster } from '../reducers/SecondarySlayerMasterReducer';
import { getStats } from '../data/HelperFunctions';
import { listsStyle, listContentSyle } from "../Form/styles";

const StatCard = () => {
    const dispatch = useDispatch();
    const master = useSelector((state) => state.slayerMaster.value);
    const secondaryMaster = useSelector((state) => state.secondarySlayerMaster.value);
    const combatLevel = useSelector((state) => state.combatLevel.value);
    const slayerLevel = useSelector((state) => state.slayerLevel.value);
    const quests = useSelector((state) => state.quests.value);
    const unlocks = useSelector((state) => state.slayerUnlocks.value);
    const blockList = useSelector((state) => state.blockList.value);
    const desiredTasks = useSelector((state) => state.desiredTasks.value);
    
    const {
        totalTasksWeight,
        favoriteTasksWeight,
        averagePointsPerTask,
        averagePointsPerTenthTask
    } = getStats({master, combatLevel, slayerLevel, quests, unlocks, blockList, desiredTasks});

    const getTenthTask = () => {
        if (secondaryMaster) {
            const secondaryStats = getStats({
                master: secondaryMaster,
                combatLevel,
                slayerLevel,
                quests,
                unlocks,
                blockList,
                desiredTasks,
            });
            return averagePointsPerTask * 9 + secondaryStats.averagePointsPerTenthTask;
        }
        else {
            return averagePointsPerTask * 9 + averagePointsPerTenthTask;
        }
    };

    const secondaryOnChanged = () => {
        return (e) => {
            if (secondaryMaster !== 'Konar') {
                dispatch(setMaster('Konar'));
            }
            else {
                dispatch(clearMaster());
            }
        };
    };

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
                            <ListItemText>{(favoriteTasksWeight / totalTasksWeight * 100).toFixed(2)}%</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Pts per task</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{averagePointsPerTask.toFixed(2)}</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={8}>
                            <ListItemText>Pts per ten</ListItemText>
                        </Grid>
                        <Grid xs={4}>
                            <ListItemText>{getTenthTask().toFixed(2)}</ListItemText>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={secondaryMaster === 'Konar'} onChange={secondaryOnChanged()} />} label="Use Konar for 10th task" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </div>
            </List>
        </div>
    );
};

export default StatCard;
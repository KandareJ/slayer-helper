import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2';
import Delete from '@mui/icons-material/Delete';

import { removeDesiredTask } from "../reducers/DesiredTasksReducer";
import { Divider } from "@mui/material";
import { listsStyle, listContentSyle } from "./styles";

const DesiredTasks = () => {
    const dispatch = useDispatch();
    const desiredTasks = useSelector((state) => state.desiredTasks.value);

    const deleteOnClick = (task) => {
        return () => {
            dispatch(removeDesiredTask(task));
        };
    };

    return (
        <div style={listsStyle}>
            <List>
                <ListItemText>Favorite List</ListItemText>
                <Divider />
                <div style={listContentSyle}>
                    {desiredTasks.map((task) => {
                        return (
                            <Grid container spacing={2} key={task}>
                                <Grid xs={11}>
                                    <ListItemText>{task}</ListItemText>
                                </Grid>
                                <Grid xs={1}>
                                    <div onClick={deleteOnClick(task)}>
                                        <ListItemIcon>
                                            <Delete />
                                        </ListItemIcon>
                                    </div>
                                </Grid>
                            </Grid>
                        );
                    })}
                </div>
            </List>
        </div>
    );
}

export default DesiredTasks;
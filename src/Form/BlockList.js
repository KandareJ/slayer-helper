import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2';
import Delete from '@mui/icons-material/Delete';

import { removeBlockList } from "../reducers/BlockListReducer";
import { Divider } from "@mui/material";
import { listsStyle, listContentSyle } from "./styles";

const BlockList = () => {
    const dispatch = useDispatch();
    const blockList = useSelector((state) => state.blockList.value);

    const deleteOnClick = (task) => {
        return () => {
            dispatch(removeBlockList(task));
        };
    };

    return (
        <div style={listsStyle}>
            <List>
                <ListItemText>Block List</ListItemText>
                <Divider />
                <div style={listContentSyle}>
                    {blockList.map((task) => {
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

export default BlockList;
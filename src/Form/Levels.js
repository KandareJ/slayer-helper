import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';

import { setCombatLevel } from '../reducers/CombatLeverReducer';
import { setSlayerLevel } from '../reducers/SlayerLevelReducer';
import { styles } from './styles';

const Levels = () => {
    const dispatch = useDispatch();
    const combatLevel = useSelector((state) => state.combatLevel.value);
    const slayerLevel = useSelector((state) => state.slayerLevel.value);
    
    const combatOnChange = (e) => {
        if (e.target.value === '') dispatch(setCombatLevel(''));

        const number = parseInt(e.target.value);
        if (isNaN(number) || number > 126 || number < 1) return;
    
        dispatch(setCombatLevel(number));
    };

    const slayerOnChange = (e) => {
        if (e.target.value === '') dispatch(setSlayerLevel(''));

        const number = parseInt(e.target.value);
        if (isNaN(number) || number > 99 || number < 1) return;
    
        dispatch(setSlayerLevel(number));
    };

    return (
        <div style={styles}>
            <div style={{padding: 5}}>
                <TextField label="Combat Level" value={combatLevel} onChange={combatOnChange} />
            </div>
            <div style={{padding: 5}}>
                <TextField label="Slayer Level" value={slayerLevel} onChange={slayerOnChange} />
            </div>
        </div>
    );
};

export default Levels;
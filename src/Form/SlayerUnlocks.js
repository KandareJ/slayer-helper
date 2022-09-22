import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getUnlocks } from "../data/SlayerData";
import { addSlayerUnlock, removeSlayerUnlock } from "../reducers/SlayerUnlocksReducer";
import { styles } from './styles';

const SlayerUnlocks = () => {
    const dispatch = useDispatch();
    const master = useSelector((state) => state.slayerMaster.value);
    const unlocks = useSelector((state) => state.slayerUnlocks.value);
    const relevantUnlocks = getUnlocks(master);

    const onChangeWrapper = (unlock) => {
        return () => {
            if (unlocks.includes(unlock)) dispatch(removeSlayerUnlock(unlock));
            else dispatch(addSlayerUnlock(unlock));
        }
    };

    return (
        <div style={styles}>
            <FormGroup>
                {relevantUnlocks.map((unlock) => {
                    return (
                        <FormControlLabel key={unlock} control={<Checkbox checked={unlocks.includes(unlock)} onChange={onChangeWrapper(unlock)}/>} label={unlock} />
                    );
                })}
            </FormGroup>
        </div>
    );
};

export default SlayerUnlocks;
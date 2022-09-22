import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { SLAYER_DATA } from "../data/SlayerData";
import { setMaster } from "../reducers/SlayerMasterReducer";
import { styles } from './styles';

const SlayerMaster = () => {
    const selectedMaster = useSelector((state) => state.slayerMaster.value);
    const slayerMasters = Object.keys(SLAYER_DATA);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setMaster(event.target.value));
    };

    return (
        <div style={styles}>
            <FormControl>
                    <RadioGroup value={selectedMaster} onChange={handleChange}>
                        {slayerMasters.map((slayerMaster) => {
                            return (
                                <FormControlLabel key={slayerMaster} value={slayerMaster} control={<Radio />} label={slayerMaster} />
                            );
                        })}
                    </RadioGroup>
            </FormControl>
        </div>
    );
}

export default SlayerMaster;
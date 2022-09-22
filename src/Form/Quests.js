import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getQuests } from "../data/SlayerData";
import { addQuest, removeQuest } from '../reducers/QuestsReducer';
import { styles } from './styles';

const Quests = () => {
    const dispatch = useDispatch();
    const quests = useSelector((state) => state.quests.value);
    const master = useSelector((state) => state.slayerMaster.value);
    const relevantQuests = getQuests(master);

    const onChangeWrapper = (quest) => {
        return () => {
            if (quests.includes(quest)) dispatch(removeQuest(quest));
            else dispatch(addQuest(quest));
        }
    };

    return (
        <div style={styles}>
            <FormGroup>
                {relevantQuests.map((quest) => {
                    return (
                        <FormControlLabel key={quest} control={<Checkbox checked={quests.includes(quest)} onChange={onChangeWrapper(quest)} />} label={quest} />
                    );
                })}
            </FormGroup>
        </div>
    );
};

export default Quests;
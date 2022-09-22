import React from "react";
import Grid from '@mui/material/Unstable_Grid2';

import SlayerMaster from "./SlayerMaster";
import Levels from "./Levels";
import Quests from "./Quests";
import SlayerUnlocks from "./SlayerUnlocks";

const Form = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <Levels />
                </Grid>
                <Grid xs={3}>
                    <div>Slayer master</div>
                    <SlayerMaster />
                </Grid>
                <Grid xs={3}>
                    <div>Quests</div>
                    <Quests />
                </Grid>
                <Grid xs={3}>
                    <div>Slayer Unlocks</div>
                    <SlayerUnlocks />
                </Grid>
            </Grid>
        </div>
    );
};

export default Form;
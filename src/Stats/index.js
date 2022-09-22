import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

import BlockList from '../Form/BlockList';
import DesiredTasks from '../Form/DesiredTasks';
import SkipList from './SkipList';
import StatCard from './StatCard';

const Stats = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={3}>
                    <BlockList />
                </Grid>
                <Grid  xs={3}>
                    <DesiredTasks />
                </Grid>
                <Grid  xs={3}>
                    <SkipList />
                </Grid>
                <Grid  xs={3}>
                    <StatCard />
                </Grid>
            </Grid>
        </div>
    )
};

export default Stats;
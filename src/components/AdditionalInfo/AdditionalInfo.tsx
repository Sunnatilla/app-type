import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tab from './Tab';
import { paddingSmXl, paddingDownSm } from "../helper/DefaultPadding";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: paddingSmXl
        }
    })
)

const AdditionalInfo = () => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root}>
            
        </Grid>);
}
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm
            },
            title: {
                marginTop: 50,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#141414',
                marginBottom: 24
            },
            img: {
                width: 232,
                height: 242
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            ...rootSmXl,
            title: {
                marginTop: 200,
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'
            },
            description: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#141414',
                marginBottom: 48
            },
            img: {
                width: 464,
                height: 484,
                marginRight: 50
            }
        }
    })
)

const MobileBanking = () => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root}>
            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>Мобильное приложение Starbanking</Typography>
                <Typography className={classes.description}>Переводите платежи в рассрочку, следите за графиком платежей, оплачивайте услуги, 
                    вносите платежи с карт других банков РК</Typography>
                <Grid container spacing={3}>
                    <Grid item>
                        <img src="app_store.svg" alt="app_store" />
                    </Grid>
                    <Grid item>
                        <img src="google_play.svg" alt="google_play" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img className={classes.img} src="star_mobile_banking.png" alt="star_mobile_banking" />
            </Grid>
        </Grid>
    )
}

export default MobileBanking;
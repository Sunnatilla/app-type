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
            googlePlayAppStore: {
                width: 120,
                height: 40
            },
            img: {
                width: 165,
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
                width: 330,
                height: 484,
                marginRight: 50
            }
        }
    })
)

const MobileBanking = () => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root} spacing={4}>
            <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                <Typography className={classes.title}>Мобильное приложение Starbanking</Typography>
                <Typography className={classes.description}>Переводите платежи в рассрочку, следите за графиком платежей, оплачивайте услуги, 
                    вносите платежи с карт других банков РК</Typography>
                <Grid container spacing={3}>
                    <Grid item>
                        <img className={classes.googlePlayAppStore} src="app_store.svg" alt="app_store" />
                    </Grid> 
                    <Grid item>
                        <img className={classes.googlePlayAppStore} src="google_play.svg" alt="google_play" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                <Grid container justify="center">
                    <img className={classes.img} src="star_mobile_banking.gif" alt="star_mobile_banking" />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MobileBanking;
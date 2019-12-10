import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, paddingSmXl } from './helper/DefaultPadding';
import { PhoneAndroid, Call } from '@material-ui/icons';
 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm,
                backgroundColor: '#FAFAFA'
            },
            helpYou: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'   
            },
            paper: {
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                padding: 10
            },
            ourSpec: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B'
            },
            freeCall: {                
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#141414'
            },
            phone: {
                fonStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            root: {
                padding: paddingSmXl,
                backgroundColor: '#FAFAFA'
            },
            helpYou: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'        
            },
            paper: {
                backgroundColor: '#FFFFFF',
                borderRadius: 8,
                padding: 20
            },
            ourSpec: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B'
            },
            freeCall: {                
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28,
                color: '#141414'
            },
            phone: {
                fonStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28
            }
        }
    })
)

const HelpYou = () => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root} spacing={8}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Typography className={classes.helpYou}>Вам помочь?</Typography>
                <Typography className={classes.ourSpec}>Наши специалисты помогут решить ваш вопрос</Typography>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Box className={classes.paper} height={1}>
                    <Typography>
                        <Call /><span className={classes.freeCall}>505</span>
                    </Typography>
                    <Typography className={classes.ourSpec}>
                        Бесплатно с мобильного
                    </Typography>
                </Box>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Box className={classes.paper} height={1}>
                    <PhoneAndroid /><span className={classes.phone}>8 (727) 244 30 30</span>
                </Box>
            </Grid>
        </Grid>
    )

}

export default HelpYou;
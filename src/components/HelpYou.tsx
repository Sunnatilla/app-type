import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { PhoneAndroid, Call, FormatAlignCenter } from '@material-ui/icons';
import ReactGA from 'react-ga';
 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm,
                backgroundColor: '#FAFAFA',
                
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
            mainRoot: {
                backgroundColor: '#FAFAFA',
                
            },
            ...rootSmXl,
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

    const onClickCall505 = () => {
        ReactGA.event({
            category: 'BccCard',
            action: 'call_505'
        })
    }

    return(
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root} spacing={4}>
                {/* <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Typography className={classes.helpYou}>Вам помочь?</Typography>
                    <Typography className={classes.ourSpec}>Наши специалисты помогут решить ваш вопрос</Typography>
                </Grid> */}
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Box onClick={() => onClickCall505()} className={classes.paper} height={1}>
                        <Typography className={classes.freeCall}>
                            <Call className={classes.freeCall}/> 505
                        </Typography>
                        <Typography className={classes.ourSpec}>
                            Бесплатно с мобильного
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Box className={classes.paper} height={1}>
                        <Typography className={classes.phone}>
                            <PhoneAndroid className={classes.phone}/> 8 (727) 244 30 30
                        </Typography>                        
                    </Box>
                </Grid>
            </Grid>
        </Grid>        
    )

}

export default HelpYou;
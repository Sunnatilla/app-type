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
            mainTitle: {                  
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'
            },
            mainDescription: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#8B98A7'
            },
            paper: {
                padding: '12px 8px 12px 8px',
                background: '#FFFFFF',
                border: '1px solid #FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '2px'
            },
            icon: {
                width: '40px',
                height: '40px',
                marginRight: '16px'
            },
            title: {            
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '10px',
                color: '#141414'
            },
            description: {            
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '9px',
                color: '#5B5B5B'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            ...rootSmXl,
            mainTitle: {                  
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '40px',
                color: '#141414'
            },
            mainDescription: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '16px',
                color: '#8B98A7'
            },
            paper: {
                padding: '48px 32px 48px 32px',
                background: '#FFFFFF',
                border: '1px solid #FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '8px'
            },
            icon: {
                width: '80px',
                height: '80px',
                marginRight: '32px'
            },
            title: {            
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#141414'
            },
            description: {            
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '18px',
                color: '#5B5B5B'
            }
        }        
    })
)

const BestCard = (props: any) => {

    const classes = useStyles({});

    return(
        <Grid container className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainTitle}>Лучшая карта</Typography>
                <Typography className={classes.mainDescription}>во всех смыслах этого слова</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container>
                            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="about_installment_credit.svg" className={classes.icon} alt="installment" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Рассрочка и кредитка в одном пластике</Typography>
                                <Typography className={classes.description}>Банк дает вам сумму до 3 млн. тенге, Вы решаете как платить: разом или рассрочкой</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container>
                            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="about_free.svg" className={classes.icon} alt="free" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Бесплатно</Typography>
                                <Typography className={classes.description}>Выпуск и обслуживание по карте</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container>
                            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="about_cashback.svg" className={classes.icon} alt="cashback" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Кешбэк до 30%</Typography>
                                <Typography className={classes.description}>Каждый месяц вы выбираете 2 любимые категории с повышенным кешбэком до 30%</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container>
                            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="about_fast_decision.svg" className={classes.icon} alt="decision" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Быстрое решение по заявке</Typography>
                                <Typography className={classes.description}>Сперва заявка онлайн, позже звонок от менеджера Банка, в итоге, #картакарта ваша</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BestCard;
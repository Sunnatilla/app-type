import React from 'react';
import { Grid, Button, RootRef, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme, responsiveFontSizes } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { purple } from '@material-ui/core/colors';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm,
                
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
            mainRoot: {
                // background: 'url(header-main.svg) no-repeat center center fixed',
                // backgroundSize: 'cover',
                maxHeight: 800
            },

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
                border: '1px solid #FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '8px',
                background: 'LightGrey',
                width:'450px',
                height: '200px'
            },
            icon: {
                width: '80px',
                height: '80px',
                marginRight: '32px',
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
                fontSize: '15px',
                color: '#5B5B5B'
            },
            smallFontSize: {
                fontSize: '10px'
            },
            leftSide: {
                marginLeft: '-15px'
            },
            buttonOrderCard: {
                // fontStyle: 'normal',
                // fontWeight: 500,

                fontSize: '14px',
                height: '30px',
                width: '75px',
                textTransform: 'none',
                marginTop: '15px',
                backgroundColor: 'white',
                borderRadius: '4px',
                color: 'purple',
                marginBottom: '22px'
            },
            purple: {
                color: 'purple',
                textDecoration: 'none'
            }
        }
    })
)


const BestCard = (props: any) => {

    const classes = useStyles({});

    const eventGAPartners = () => {
        ReactGA.event({
            category: '#CardCard',
            action: 'partners_best_card'
        });
    }

    return (
        <Grid container className={classes.mainRoot}>
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
                                <Typography className={classes.title}>Рассрочка и кредитка в одной карте</Typography>
                                <Typography className={classes.description}>Банк дает вам сумму до 3 000 000 тенге, Вы решаете как оплачивать покупки: одним платежом или в рассрочку</Typography>
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
                                <Typography className={classes.description}>
                                    <ul list-style-type='circle' className={classes.leftSide}>
                                        <li >1% с любой личной покупки картой
                                        <div className={classes.smallFontSize}>
                                                (2% при вкладке Рахмет/Рахмет+ от 1 000 000 т)
                                        </div>
                                        </li>
                                        <li>до 10% в любимых категориях</li>
                                        <li>до 30% у наших партнеров</li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Grid className={classes.paper} container>
                            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                <img src="about_fast_decision.svg" className={classes.icon} alt="decision" />
                            </Grid>
                            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                <Typography className={classes.title}>Проценты? Не, не слышали</Typography>
                                <Typography className={classes.description}>
                                    <ul list-style-type='circle' className={classes.leftSide}>
                                        <li>Тратьте и возвращайте деньги, выданные Банком, без процентов до 55 дней</li>
                                        <li>Покупайте у наших
                                            <a href='#s' onClick={() => eventGAPartners()} className={classes.purple}> партнеров </a>
                                            в рассрочку без переплат </li>
                                    </ul>
                                </Typography>
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
                                <Typography className={classes.description}>
                                    <ul list-style-type='circle' className={classes.leftSide}>
                                        <li>Выпуск и обслуживание карты</li>
                                        <li>СМС уведомления</li>
                                        <li>Снятие личных средств до 3 000 000 т в мес. в любом банкомате РК</li>
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default BestCard;
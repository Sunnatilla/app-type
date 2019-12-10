import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { EmojiObjects, ArrowDropDown, ArrowDropUp, Error } from '@material-ui/icons';
 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm,
                background: '#FAFAFA'
            },            
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'
            },
            subTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#141414'
            },
            subTitleDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B'
            },
            tabButtonActive: {
                width: '160px',
                height: '30px',
                backgroundColor: '#FFCF87',
                borderRadius: '2px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                textTransform: 'none',
                '&:hover, &:active': {
                    backgroundColor: '#FFCF87',
                    opacity: 0.8,
                  }                
            },
            tabButton: {
                width: '120px',
                height: '30px',
                backgroundColor: '#E8E8E8',
                borderRadius: '2px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '10px',
                textTransform: 'none'
            }, 
            noteBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '4px 16px 4px 16px',
                lineHeight: '21px',
                marginTop: 10
            },
            noteIcons: {
                fontSize: 12,
                color: '#B9B9B9',
                verticalAlign: 'middle',
                marginRight: 5
            },
            note: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B',
                verticalAlign: 'middle'
            },
            noteBold: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 10,
                color: 'black',
                verticalAlign: 'middle'
            },
            noteDetailBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '20px 47px 50px 47px',
                marginTop: 5
            },
            noteDetail: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#5B5B5B',
                marginTop: 5
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                background: '#FAFAFA'
            },
            ...rootSmXl,                
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'
            },    
            subTitle: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 28,
                color: '#141414'
            },
            subTitleDesc: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 18,
                color: '#5B5B5B'
            },
            tabButtonActive: {
                width: '215px',
                height: '36px',
                backgroundColor: '#FFCF87',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                textTransform: 'none',
                '&:hover, &:active': {
                    backgroundColor: '#FFCF87',
                    opacity: 0.8,
                  }                
            },
            tabButton: {
                width: '181px',
                height: '36px',
                backgroundColor: '#E8E8E8',
                borderRadius: '4px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                textTransform: 'none'
            }, 
            noteBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '4px 16px 4px 16px',
                lineHeight: '42px',
                marginTop: 10
            },
            noteIcons: {
                fontSize: 20,
                color: '#B9B9B9',
                verticalAlign: 'middle',
                marginRight: 10
            },
            note: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#5B5B5B',
                verticalAlign: 'middle'
            },
            noteBold: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 16,
                color: 'black',
                verticalAlign: 'middle'
            },
            noteDetailBlock: {
                background: 'white',
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
                borderRadius: 4,
                padding: '20px 47px 100px 47px',
                marginTop: 10
            },
            noteDetail: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#5B5B5B',
                marginTop: 10
            }
        }
    })
)

const GoodAnyTimeWhere = () => {

    const classes = useStyles({});

    return(
        <Grid className={classes.mainRoot}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.title}>Хороша всегда и везде</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button className={classes.tabButtonActive}>по любимым категориям</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.tabButton}>по всем категориям</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.subTitle}>Умная рассрочка до 12 месяцев</Typography>
                    <Typography className={classes.subTitleDesc}>Управление в StarBanking 24/7</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Grid container>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid container className={classes.noteBlock}>
                                <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
                                    <EmojiObjects className={classes.noteIcons}/>
                                    <span className={classes.noteBold}>Подсказка:</span>
                                    <span className={classes.note}>  Активируйте режим рассрочки в StarBanking и оплачивайте покупки по частям</span>
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={3} xs={3} className={classes.note} alignItems="center" justify="flex-end">
                                    <span className={classes.note}>Скрыть</span>
                                    <ArrowDropDown className={classes.noteIcons}/>
                                    <ArrowDropUp className={classes.noteIcons}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.noteDetailBlock}>
                            <Typography className={classes.noteBold}>Режим рассрочки</Typography>
                            <Typography className={classes.noteDetail}>1. Выберите #картукарту из списка ваших доступных счетов.</Typography>
                            <Typography className={classes.noteDetail}>2. Нажмите на кнопку “Рассрочка”. В обычном состоянии режим рассрочки выключен, что и показывает статус “Off”.</Typography>
                            <Typography className={classes.noteDetail}>3. Включите режим рассрочки, сдвинув ползунок направо.</Typography>
                            <Typography className={classes.noteDetail}>4. С включенным режимом рассрочки все ваши покупки по #картекарте будут делиться на равные части без комиссий в сети партнеров.</Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.noteBlock}>
                            <Error className={classes.noteIcons} />
                            <span className={classes.note}>Вне сети партнеров Банка под 1% на 3 месяца</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>        
    )
}

export default GoodAnyTimeWhere;
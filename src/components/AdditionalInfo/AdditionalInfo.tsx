import React from 'react';
import { Grid, Typography, Table, TableBody, TableRow, TableCell, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tab from './Tab';
import { rootSmXl, paddingDownSm } from "../helper/DefaultStyle";
import ReactGA from 'react-ga';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const useStylesTarifs = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            th: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: '#898989'
            },
            td: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 10,
                color: 'green'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            th: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#898989'
            },
            td: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: 'black'
            },
            noteIcons: {
                fontSize: 20,
                color: '#B9B9B9',
                verticalAlign: 'middle',
                marginRight: 10
            },
            noteShow: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#5B5B5B',
                verticalAlign: 'middle',
                textAlign: 'right'
            },
            smallA: {
                fontSize: 10
            }
        }
    })
)

const Conditions = () => {

    const classes = useStylesTarifs({});

    const rows = [
                    {code: 'Кредитный лимит', value: 'до 3 000 000 тенге'},
                    {code: 'Льготный период', value: 'до 55 дней'},
                    {code: 'Процентная ставка', value: <div ><div>0% в льготный период 
                    <div className={classes.smallA}>22,99% - для участников зарплатного проекта (ГЭСВ до 26%)</div>
                    <div className={classes.smallA}>24,99% - для других клиентов (ГЭСВ до 29%)</div>
                    </div>
                        </div>},               
                    {code: 'Процентная ставка', value: '0%'},
                    {code: 'Комиссия за снятие наличных', value: '25%'},
                    {code: 'Кешбэк', value: 'до 30%'},
    ];

    return(
        <Box width={0.7}>
            <Table>
                <TableBody>
                    {rows.map((m, i) => 
                        <TableRow key={i}>
                            <TableCell className={classes.th}>{m.code}</TableCell>
                            <TableCell className={classes.td}>{m.value}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
    )
}

const Tarifs = () => {

    const classes = useStylesTarifs({});

    const rows = [
                    {code: 'Выпуск и обслуживание карты', value: 'бесплатно'},
                    {code: 'Перевыпуск карты', value: 'Бесплатно'},
                    {code: 'СМС-уведомления', value: 'Бесплатно'},
                    {code: 'Пополнения', value: 'бесплатно'},
                    {code: 'Покупки без рассрочки', value: 'бесплатно'},
                    {code: 'Покупки в рассрочку', value: <div>бесплатно - у партнеров банка 
                        <div>1% в мес. - вне сети партнеров Банка</div>
                    </div>},
                    {code: 'Снятие наличных', value: 'бесплатно - личные средства до 3 000 000 т в мес. в любом банкомате РК'},
    ];
    return(
        <Box width={0.7}>
            <Table>
                <TableBody>
                    {rows.map((m, i) => 
                        <TableRow key={i}>
                            <TableCell className={classes.th}>{m.code}</TableCell>
                            <TableCell className={classes.td}>{m.value}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
    )
}

    const Questions = () => {

        const classes = useStylesTarifs({});
    
        const rows = [
                        {code: 'Что такое #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Я получу приветсвенный бонус?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как заработать с #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Что такое кешбэк?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как выбирать любимые категории с повышенным кешбэком?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Могу ли я расплачиваться картой за границей?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как пополнять карту?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Что если я получу карту с нулевым кредитным лимитом, что мне с ней делать, и дадут ли мне лимит в будущем?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Зачем мне нужен кредитный лимит по #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как я узнаю, что мне установили кредитный лимит?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как будут тратиться деньги, если у меня есть и личные деньги, и кредитный лимит на карте?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Что такое рассрочка по #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Как включить режим рассрочки по #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Какие сроки рассрочки предусмотрены  по #картакарта?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Есть ли комиисия за рассрочку?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Я могу покапуть в рассрочку за счет личных денег?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Я могу погашать задолженность по карте досрочно?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
                        {code: 'Я нерезидент, я могу получить кредитный лимит по карте?', value: <div className={classes.noteShow}> <ArrowDropDown className={classes.noteIcons} /></div>},
        ];
        return(
            <Box width={0.7}>
                <Table>
                    <TableBody>
                        {rows.map((m, i) => 
                            <TableRow key={i}>
                                <TableCell className={classes.th}>{m.code}</TableCell>
                                <TableCell className={classes.td}>{m.value}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Box>
        )
    }

        const Documents = () => {

            const classes = useStylesTarifs({});
        
            const rows = [
                            {code: '', value: ''},
                            {code: '', value: ''},
            ];

    return(
        <Box width={0.7}>
            <Table>
                <TableBody>
                    {rows.map((m, i) => 
                        <TableRow key={i}>
                            <TableCell className={classes.th}>{m.code}</TableCell>
                            <TableCell className={classes.td}>{m.value}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                padding: paddingDownSm
            },
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 20,
                color: '#141414'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            ...rootSmXl,
            title: {
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 40,
                color: '#141414'
            }
        }
    })
)

const AdditionalInfo = () => {

    const classes = useStyles({});

    const swipeTab = (index: number) => {
        ReactGA.event({
            category: 'BccCard',
            action: index === 0 ? 'Additional_Rates' : 'Additionally_FAQ'
        });
    }

    return( 
        <Grid container className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.title}>Дополнительно</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Tab onHandleChanged={(i: number)=>swipeTab(i)} menuTitle={["Условия", "Тарифы", "Часто задаваемые вопросы", "Документы"]} pans={[<Conditions />, <Tarifs />, <Questions />, <Documents />]} />
            </Grid>
        </Grid>);
}

export default AdditionalInfo;
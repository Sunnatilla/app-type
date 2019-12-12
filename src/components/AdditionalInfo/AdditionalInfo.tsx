import React from 'react';
import { Grid, Typography, Table, TableBody, TableRow, TableCell, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tab from './Tab';
import { rootSmXl, paddingDownSm } from "../helper/DefaultStyle";
import ReactGA from 'react-ga';

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
                color: 'black'
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
            }
        }
    })
)

const Tarifs = () => {

    const classes = useStylesTarifs({});

    const rows = [
                    {code: 'Кредитный лимит', value: 'до 3 млн тенге'},
                    {code: 'Выпуск', value: 'Бесплатно'},
                    {code: 'Годовое обслуживание', value: 'Бесплатно'},
                    {code: 'Беспроцентный период', value: '55 дней'},
                    {code: 'Процентная ставка', value: '25%'},
                    {code: 'Комиссия за снятие наличных', value: '25%'},
                    {code: 'Процентная ставка', value: '4%'},
                    {code: 'Комиссия за перевод в другие Банки', value: '4%'}
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
                <Tab onHandleChanged={(i: number)=>swipeTab(i)} menuTitle={["Тарифы", "Часто задаваемые вопросы"]} pans={[<Tarifs />, <Tarifs />]} />
            </Grid>
        </Grid>);
}

export default AdditionalInfo;
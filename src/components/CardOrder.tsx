import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MaskedInput from 'react-text-mask';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            root: {
                marginTop: '8px',
                padding: '36px 20px 36px 20px',
                alignItems: 'center'
            },
            icon: {
                width: '18px',
                height: '19px',
            },
            paper: {
                padding: '12px 8px 12px 8px',
                background: '#FFFFFF',
                border: '1px solid #FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '2px'
            },
            box: {
                textAlign: 'center',
                fontWeight: 'fontWeightBold',
                fontSize: '20px',
                lineHeight: '40px'
            },
            submit: {
                background: '#FFCF87',
                borderRadius: '8px',
                fontSize: '20px',
                lineHeight: '28px',
                fontWeight: '500',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                height: '62px',
                '&:hover, &:active': {
                    backgroundColor: '#3F0259',
                    borderColor: '#3F0259',
                    boxShadow: 'none',
                    color: '#FFFFFF'
                }
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            root: {
                marginTop: '34px',
                padding: '72px 52px 72px 52px',
                alignItems: 'center'
            },
            paper: {
                padding: '48px 32px 48px 32px',
                background: '#FFFFFF',
                border: '1px solid #FAFAFA',
                boxSizing: 'border-box',
                borderRadius: '8px'
            },
            icon: {
                width: '18px',
                height: '19px',
            },
            box: {
                textAlign: 'center',
                fontWeight: 'fontWeightBold',
                fontSize: '40px',
                lineHeight: '40px'
            },
            submit: {
                background: '#FFCF87',
                borderRadius: '8px',
                fontSize: '20px',
                lineHeight: '28px',
                fontWeight: '500',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                textTransform: 'none',
                height: '62px',
                '&:hover, &:active': {
                    backgroundColor: '#3F0259',
                    borderColor: '#3F0259',
                    opacity: 0.8,
                    boxShadow: 'none',
                    color: '#FFFFFF'
                }
            }
        }
    })
)

interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
  }
  
  function TextMaskCustom(props: TextMaskCustomProps) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['+', /[1-9]/, ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

const CardOrder = () => {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('7');

    const handleNameChange = (e: any) => {
        const { value } = e.target
        setName(value)
    }

    const handlePhoneChange = (e: any) => {
        const { value } = e.target
        setPhone(value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (name && phone) {
        }
    }
    const classes = useStyles({});

    return (
        <Grid container className={classes.root} spacing={4} direction="column" justify="center">
            <Paper className={classes.paper}>
                <Typography>
                    <Box className={classes.box}>Закажите #картукарту</Box>
                    <Box className={classes.box}>прямо сейчас</Box>
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Фамилия, имя и отчество"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        autoComplete="name"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        label="Номер телефона"
                        id="phone"
                        InputProps={{
                            inputComponent: TextMaskCustom as any,
                          }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Я согласен(а) с условиями"
                    />
                    <Grid container style={{marginTop: '15px'}}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                                    <img src="card_order_security.svg" className={classes.icon} alt="order_security" />
                                </Grid>
                                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                                    <Typography>
                                        Мы гарантируем безопасность
                                        и сохранность ваших данных
                            </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Подать заявку
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
}


export default CardOrder;
import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "../helper/DefaultStyle";
import CreditCard from "./CreditCard";
import Installment from "./Installment";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        background: "#FAFAFA"
      },
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      tabButtonActive: {
        width: 160,
        height: 30,
        backgroundColor: "#FFCF87",
        borderRadius: 4,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButtonsBlock: {
        marginTop: 12
      },
      tabButton: {
        width: 140,
        height: 30,
        backgroundColor: "#E8E8E8",
        borderRadius: 4,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        textTransform: "none"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "#FAFAFA"
      },
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      tabButtonsBlock: {
        marginTop: 20
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#FFCF87",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      }
    }
  })
);

interface InstallmentModel {
  img: string;
  name: string;
  price: number;
  installment: number;
  beginMonth: number;
}

enum Type {
  Installment,
  CreditCard
}

const GoodAnyTimeWhere = (props: any) => {
  const classes = useStyles({});

  const [type, setType] = React.useState<Type>(Type.Installment);

  const eventGASmartFreeLoan = () => {
    ReactGA.event({
      category: "#CardCard",
      action: "button_to_smart_installments"
    });
    setType(Type.Installment);
  };

  const eventGACreditCard = () => {
    ReactGA.event({
      category: "#CardCard",
      action: "button_credit_card"
    });
    setType(Type.CreditCard);
  };

  return (
    <Grid className={classes.mainRoot}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.title}>
            Хороша всегда и везде
          </Typography>
        </Grid>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.tabButtonsBlock}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Button
                onClick={() => eventGASmartFreeLoan()}
                className={classes.tabButtonActive}
              >
                Умная рассрочка
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={() => eventGACreditCard()}
                className={classes.tabButton}
              >
                Кредитная карта
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {type ? <CreditCard /> : <Installment />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GoodAnyTimeWhere;

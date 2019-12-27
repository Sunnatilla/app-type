import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: 0
      },
      title: {
        marginTop: 50,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#141414",
        marginBottom: 24
      },
      googlePlayAppStore: {
        width: 120,
        height: 40
      },
      img: {
        width: 365,
        height: 242
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "#FAFAFA"
      },
      ...rootSmXl,
      title: {
        marginTop: 130,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414",
        marginLeft: 100
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#141414",
        marginBottom: 48,
        marginLeft: 100
      },
      googlePlayAS: {
        marginLeft: 85
      },
      img: {
        width: 330,
        height: 484,
        marginRight: -350
      },
      imgEqual: {
        marginRight: -350,
        width: 340
      }
    }
  })
);

const MobileBanking = () => {
  const classes = useStyles({});

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard",
      action: "AppStore_download"
    });
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard",
      action: "GooglePlay_download"
    });
  };

  return (
    <Grid container className={classes.mainRoot} spacing={4}>
      {/* <Grid container className={classes.root} spacing={4}> */}
      <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
        <Typography className={classes.title}>
          Мобильное приложение Starbanking
        </Typography>
        <Typography className={classes.description}>
          Оплачивайте услуги, управляйте рассрочкой и кешбэком,
          <div>пополняйте карту онлайн с карт других банков</div>
        </Typography>
        <Grid container spacing={4} className={classes.googlePlayAS}>
          <Grid item>
            <img
              onClick={() => onClickAppStore()}
              className={classes.googlePlayAppStore}
              src="app_store.svg"
              alt="app_store"
            />
          </Grid>
          <Grid item>
            <img
              onClick={() => onClickGooglePlay()}
              className={classes.googlePlayAppStore}
              src="google_play.svg"
              alt="google_play"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={5} lg={5} md={6} sm={6} xs={6}>
        <Grid container className={classes.imgEqual}>
          <img
            className={classes.img}
            src="star_mobile_bankingNew.png"
            alt="star_mobile_banking"
          />
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default MobileBanking;

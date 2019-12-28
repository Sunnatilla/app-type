import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "../helper/DefaultStyle";
import { EmojiObjects } from "@material-ui/icons";
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
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        color: "#141414"
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B"
      },
      tabButtonsBlock: {
        marginTop: 12
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
      tabButton: {
        width: 140,
        height: 30,
        backgroundColor: "#E8E8E8",
        borderRadius: 4,
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        textTransform: "none"
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "4px 8px 4px 8px",
        marginTop: 10
      },
      noteIcons: {
        fontSize: 11,
        color: "#B9B9B9",
        marginRight: 5
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        marginBottom: 10
      },
      tableBlock: {
        padding: 0,
        marginTop: 16,
        overflowX: "auto"
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
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414"
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B"
      },
      tabButtonsBlock: {
        marginTop: 20
      },
      tabButtonActive: {
        width: "181px",
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
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "10px 16px 10px 16px",
        lineHeight: "42px",
        marginTop: 10
      },
      noteIcons: {
        fontSize: 20,
        color: "#B9B9B9",
        verticalAlign: "middle",
        marginRight: 10
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
        marginBottom: 10
      },
      tableBlock: {
        padding: 0,
        paddingBottom: 20,
        marginTop: 32,
        overflowX: "auto",
        "&::-webkit-scrollbar": {
          height: 8
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#A6A6A6"
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#E4E4E4"
        }
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

const CreditCard = (props: any) => {
  const classes = useStyles({});

  const eventGAStarBanking = () => {
    ReactGA.event({
      category: "#CardCard",
      action: "button_starbanking"
    });
  };

  return (
    <Grid container>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.tabButtonsBlock}
      >
        <Typography className={classes.subTitle}>
          Как правильно пользоваться кредитным лимитом и не платить проценты
        </Typography>
        <Typography className={classes.subTitleDesc}>
          Управление в
          <a
            href="#s"
            onClick={() => eventGAStarBanking()}
            className={classes.purple}
          >
            {" "}
            StarBanking{" "}
          </a>
          24/7
        </Typography>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.tableBlock}
      >
        <Grid container>
          <img src="credit_card.svg" alt="credit_card" />
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.noteBlock}
          >
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container direction="row">
                <Grid item sm={false} xs={false}>
                  <Grid container alignItems="flex-start">
                    <EmojiObjects className={classes.noteIcons} />
                  </Grid>
                </Grid>
                <Grid item sm={true} xs={true}>
                  <Grid container alignItems="flex-start">
                    <Typography className={classes.note}>
                      <b>1.</b>&nbsp; 1 сентября вы совершаете покупку на сумму
                      5 000 тенге за счет кредитного лимита
                    </Typography>
                    <Typography className={classes.note}>
                      <b>2.</b>&nbsp; Погасив 5 000 тенге до 25 октября, вы не
                      платите никаких процентов за пользование кредитным лимитом
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;

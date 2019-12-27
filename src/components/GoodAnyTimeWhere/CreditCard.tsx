import React from "react";
import {
  Grid,
  Button,
  RootRef,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "../helper/DefaultStyle";
import {
  EmojiObjects,
  ArrowDropDown,
  ArrowDropUp,
  Error
} from "@material-ui/icons";
import NumberFormat from "react-number-format";
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
        color: "#5B5B5B"
      },
      noteShow: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        textAlign: "center",
        margin: "10px auto 10px auto"
      },
      noteBold: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 10,
        color: "black"
      },
      noteDetailBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "10px 20px 0px 20px",
        marginTop: 10
      },
      noteDetail: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B",
        marginTop: 10
      },
      tableBlock: {
        padding: 0,
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: "4px",
        marginTop: 16
      },
      tableBlockLeft: {
        padding: 16,
        textAlign: "center",
        borderBottom: "1px solid E8E8E8"
      },
      tableBlockLeftTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        color: "#141414"
      },
      tableBlockLeftDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B"
      },
      tableBlockLeftCommision: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 36,
        color: "#FFCF87"
      },
      tableBlockLeftCommisionText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      tableMoth: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 10,
        color: "#898989"
      },
      tableTotalPrice: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 10,
        color: "black"
      },
      tableTd: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      tableProductName: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B"
      },
      tableProductPrice: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#B9B9B9"
      },
      tableCell: {
        minWidth: 95,
        textAlign: "center"
      },
      table: {
        overflowX: "auto"
      },
      img: {
        width: 165,
        height: 242,
        marginTop: 25
      },
      tabButtonFirstPurchaise: {
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
        padding: "4px 16px 4px 16px",
        lineHeight: "42px",
        marginTop: 10,
        "&:hover": {
          backgroundColor: "#E8E8E8",
          cursor: "pointer"
        }
      },
      noteBlock2: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "4px 16px 4px 16px",
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
        color: "#5B5B5B"
      },
      noteShow: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B",
        verticalAlign: "middle",
        textAlign: "right"
      },
      noteBold: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        color: "black"
      },
      noteDetailBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "20px 47px 0px 47px",
        marginTop: 10
      },
      noteDetail: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#5B5B5B",
        marginTop: 10
      },
      tableBlock: {
        padding: 0,
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: "8px",
        marginTop: 32
      },
      tableBlockLeft: {
        padding: 32,
        borderRight: "1px solid #E8E8E8"
      },
      tableBlockLeftTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 22,
        color: "#141414"
      },
      tableBlockLeftDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#5B5B5B"
      },
      tableBlockLeftCommision: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 72,
        color: "#FFCF87"
      },
      tableBlockLeftCommisionText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      tableMoth: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 12,
        color: "#898989"
      },
      tableTotalPrice: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        color: "black"
      },
      tableTd: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black"
      },
      tableProductName: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B"
      },
      tableProductPrice: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#B9B9B9"
      },
      tableCell: {
        minWidth: 110,
        textAlign: "center"
      },
      table: {
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
      },
      img: {
        width: 375,
        height: 300,
        marginTop: 20
      },
      purple: {
        color: "purple",
        textDecoration: "none"
      },
      purple1: {
        color: "purple",
        fontWeight: "bold"
        // marginBottom: 20
      },
      tabButtonFirstPurchaise: {
        width: "304px",
        height: "48px",
        border: "1px solid #3F0259",
        color: "#3F0259",
        background: "white",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        marginTop: "15px",
        marginBottom: "22px"
      },
      downText: {
        height: "104px"
      },
      imgSize: {
        width: 1054
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

  const [isShowNote, setShowNote] = React.useState(false);

  const toggleNote = (val: boolean) => {
    setShowNote(val);
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
          <img
            className={classes.imgSize}
            src="credit_card.svg"
            alt="credit_card"
          />
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.noteBlock2}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.downText}
          >
            <Grid item>
              <EmojiObjects className={classes.noteIcons} />
              <span className={classes.purple1}>
                <ol>
                  <li>
                    <span className={classes.note}>
                      1 сентября вы совершаете покупку на сумму 5 000 тенге за
                      счет кредитного лимита
                    </span>
                  </li>
                  <li>
                    <span className={classes.note}>
                      Погасив 5 000 тенге до 25 октября, вы не платите никаких
                      процентов за пользование кредитным лимитом
                    </span>
                  </li>
                </ol>
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;

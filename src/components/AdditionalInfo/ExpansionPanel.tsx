import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    }
  })
);

const ControlledExpansionPanels = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const arrays = [
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    }
  ];

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {arrays.map((m, i) => (
        <ExpansionPanel
          expanded={expanded === `${i}`}
          onChange={handleChange(`${i}`)}
          key={i}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.secondaryHeading}>
              {m.question}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{m.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default ControlledExpansionPanels;

import React from "react";
import {
  Header,
  BestCard,
  CardOrder,
  CalculatorCashback,
  HowToGetCard,
  HelpYou,
  MobileBanking,
  AdditionalInfo,
  GoodAnyTimeWhere,
  Footer
} from "./components";

import { YMInitializer } from "react-yandex-metrika";

function App() {
  return (
    <div>
      <YMInitializer accounts={[56638654]} />
      <Header />
      <BestCard />
      <GoodAnyTimeWhere />
      <CalculatorCashback />
      <HowToGetCard />
      <CardOrder />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
    </div>
  );
}

export default App;

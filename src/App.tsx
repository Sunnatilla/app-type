import React from 'react';
import { 
        Header, BestCard, CardOrder, 
        CalculatorCashback, HowToGetCard, HelpYou, 
        MobileBanking, AdditionalInfo, GoodAnyTimeWhere,
        Footer } from './components';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-154495729-1');

function App() {


  return (
    <div>
      <Header />      
      <BestCard />
      <GoodAnyTimeWhere />
      <CalculatorCashback />
      <HowToGetCard />
      <CardOrder />
      <HelpYou />
      <MobileBanking />
      <AdditionalInfo />
      <Footer />
    </div>
  );
}

export default App;

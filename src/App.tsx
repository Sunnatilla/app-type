import React from 'react';
import { 
        Header, BestCard, CardOrder, 
        CalculatorCashback, HowToGetCard, HelpYou, 
        MobileBanking, AdditionalInfo, GoodAnyTimeWhere } from './components';

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
    </div>
  );
}

export default App;

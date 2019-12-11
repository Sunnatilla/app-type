import React from 'react';
import { 
        Header, BestCard, CardOrder, 
        CalculatorCashback, HowToGetCard, HelpYou, 
        MobileBanking, AdditionalInfo, GoodAnyTimeWhere,
        Footer } from './components';

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

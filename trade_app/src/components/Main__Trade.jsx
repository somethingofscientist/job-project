import React from 'react';
import './Main__Trade.css';
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdPersonSearch } from 'react-icons/md'
import { Heading } from './Heading';

export const Main__Trade = () => {
   return (
      <>
         <div className="main__trade__container">
         {/* <Heading /> */}
            {/* risk bar */}
            <div className="mainRiskbar">
               <div className="riskbar">Appears Safe</div>
               <div className="riskbar">Medium Risk</div>
               <div className="riskbar">Probably /Rug Scam</div>
            </div>

            {/* lines && sorting */}
            <div className="trade">
               <div className="line-main-box">
                  Currently Showing : Only newly listed pairs that appears to be safe
               </div>
               <div className="sort-main-box">
                  Sort by: Initial Liquidity ▼
               </div>
            </div>

            {/* main trade containers ----> coins and stocks */}
            {/* Ist */}
            <div className="coin-container">
               <div className="pic-section-trade">
                  <div className="image-coin-name">
                     <img src="https://en.numista.com/catalogue/photos/australie/2785-original.jpg" alt="" />
                  </div>
                  <div className="socialhandles">
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                  </div>
                  <div className="time-period">
                     <span className="time-period-listed">TIME LISTED</span>
                     <span className="time-period-real-time">1.5 Hours</span>
                  </div>
               </div>

               {/* writing section */}
               <div className="coin-section-trade">
                  <div className="coin-name">
                     <span className='coin-name-trade'>$BTYRANT</span>
                     <span className='coin-per-trade'>235% +</span>
                     <span className='coin-time-trade'>24 hrs ▾</span>
                  </div>
                  <div className="coin-lines">
                     Fable Of the baby dragon tyrant
                  </div>
                  <div className="coin-name">
                     <span className='coin-price-trade'>$0.0002529</span>
                     <span className='coin-price-eth-trade'>1%/0.3ETH +</span>
                     <span className='coin-price-bag-trade'> <RiMoneyDollarCircleLine /> 2% </span>
                  </div>

                  <div className="trade-bar">
                     <div className="bar">LIQUIDITY: $40.2K</div>
                     <div className="bar">MARKET CAP: $215.3K</div>
                     <div className="bar">24H VOLUME: $62.8 K</div>
                     <div className="bar">TOTALLY SUPPLY: 200M</div>
                  </div>

                  <div className="coin-button-name-flex">
                     <span className='coin-price-eth-trade-contract'>
                        Contract: bhctwr27yrhjb2n3ri138ey23yruhj2b3rnbh
                     </span>
                     <span className='coin-price-eth-trade-contract'>
                        Pair: jdkgeb23oij32h8y889v7df787f2u3jkrhio28j34
                     </span>
                  </div>

                  <div className="points">
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Fake Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Multiple owners
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Novelity
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Creality Tokens (5%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Trade modifier
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Fresh wallet(20%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Airdrop (0%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           -
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                  </div>

                  <div className="coin-button-name">
                     <div className="trade-button">TRADE</div>
                     <div className="chart-button">CHART</div>
                     <div className="poor-button">Poor structure but low risk of a scam.</div>
                  </div>
               </div>

               {/* badge section */}
               <div className="coin-badge-section">
                  <div className="badge1">
                     83
                     <div className="bage2">
                        / 100
                     </div>
                  </div>

                  <div className="icon-mens-search ">
                     <MdPersonSearch />
                  </div>
               </div>
            </div>

            {/* main trade containers ----> coins and stocks */}
            {/* Second */}
            <div className="coin-container">
               <div className="pic-section-trade">
                  <div className="image-coin-name">
                     <img src="https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446" alt="" />
                  </div>
                  <div className="socialhandles">
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                  </div>
                  <div className="time-period">
                     <span className="time-period-listed">TIME LISTED</span>
                     <span className="time-period-real-time">2.5 Hours</span>
                  </div>
               </div>

               {/* writing section */}
               <div className="coin-section-trade">
                  <div className="coin-name">
                     <span className='coin-name-trade'>$SHIBINO</span>
                     <span className='coin-per-trade'>104% +</span>
                     <span className='coin-time-trade'>24 hrs ▾</span>
                  </div>
                  <div className="coin-lines">
                     Shibarium Casino
                  </div>
                  <div className="coin-name">
                     <span className='coin-price-trade'>$0.05827</span>
                     <span className='coin-price-eth-trade'>1%/0.3ETH +</span>
                     <span className='coin-price-bag-trade'> <RiMoneyDollarCircleLine /> 2% </span>
                  </div>

                  <div className="trade-bar">
                     <div className="bar">LIQUIDITY: $40.2K</div>
                     <div className="bar">MARKET CAP: $215.3K</div>
                     <div className="bar">24H VOLUME: $62.8 K</div>
                     <div className="bar">TOTALLY SUPPLY: 200M</div>
                  </div>

                  <div className="coin-button-name-flex">
                     <span className='coin-price-eth-trade-contract'>
                        Contract: bhctwr27yrhjb2n3ri138ey23yruhj2b3rnbh
                     </span>
                     <span className='coin-price-eth-trade-contract'>
                        Pair: jdkgeb23oij32h8y889v7df787f2u3jkrhio28j34
                     </span>
                  </div>

                  <div className="points">
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Fake Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Multiple owners
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Novelity
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Creality Tokens (5%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Trade modifier
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Fresh wallet(20%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Airdrop (0%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           -
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                  </div>

                  <div className="coin-button-name">
                     <div className="trade-button">TRADE</div>
                     <div className="chart-button">CHART</div>
                     <div className="poor-button">Poor structure but low risk of a scam.</div>
                  </div>
               </div>

               {/* badge section */}
               <div className="coin-badge-section">
                  <div className="badge1">
                     83
                     <div className="bage2">
                        / 100
                     </div>
                  </div>

                  <div className="icon-mens-search ">
                     <MdPersonSearch />
                  </div>
               </div>
            </div>

            {/* main trade containers ----> coins and stocks */}
            {/* Third */}
            <div className="coin-container">
               <div className="pic-section-trade">
                  <div className="image-coin-name">
                     <img src="https://static.coinpaprika.com/coin/cns-centric-swap/logo.png?rev=10605239" alt="" />
                  </div>
                  <div className="socialhandles">
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-solid fa-tablet-screen"></i> </a>
                     <a href="/"> <i class="fa-brands fa-telegram"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                     <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                  </div>
                  <div className="time-period">
                     <span className="time-period-listed">TIME LISTED</span>
                     <span className="time-period-real-time">1.5 Hours</span>
                  </div>
               </div>

               {/* writing section */}
               <div className="coin-section-trade">
                  <div className="coin-name">
                     <span className='coin-name-trade'>$CENTRIC</span>
                     <span className='coin-per-trade'>456% +</span>
                     <span className='coin-time-trade'>24 hrs ▾</span>
                  </div>
                  <div className="coin-lines">
                     Centric AI Tools
                  </div>
                  <div className="coin-name">
                     <span className='coin-price-trade'>$0.56</span>
                     <span className='coin-price-eth-trade'>1%/0.3ETH +</span>
                     <span className='coin-price-bag-trade'> <RiMoneyDollarCircleLine /> 2% </span>
                  </div>

                  <div className="trade-bar">
                     <div className="bar">LIQUIDITY: $40.2K</div>
                     <div className="bar">MARKET CAP: $215.3K</div>
                     <div className="bar">24H VOLUME: $62.8 K</div>
                     <div className="bar">TOTALLY SUPPLY: 200M</div>
                  </div>

                  <div className="coin-button-name-flex">
                     <span className='coin-price-eth-trade-contract'>
                        Contract: bhctwr27yrhjb2n3ri138ey23yruhj2b3rnbh
                     </span>
                     <span className='coin-price-eth-trade-contract'>
                        Pair: jdkgeb23oij32h8y889v7df787f2u3jkrhio28j34
                     </span>
                  </div>

                  <div className="points">
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Fake Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Multiple owners
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Novelity
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Creality Tokens (5%)
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Trade modifier
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Fresh wallet(20%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Airdrop (0%)
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           -
                        </div>
                     </div>
                     <div className="section-point">
                        <div className="point">
                           <span className='green-light'>●</span>
                           Renounced
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Buy tax 3%
                        </div>
                        <div className="point">
                           <span className='green-light'>●</span>
                           Sell tax 3%
                        </div>
                        <div className="point">
                           <span className='orange-light'>●</span>
                           Maximum Tax (25%)
                        </div>
                     </div>
                  </div>

                  <div className="coin-button-name">
                     <div className="trade-button">TRADE</div>
                     <div className="chart-button">CHART</div>
                     <div className="poor-button">Poor structure but low risk of a scam.</div>
                  </div>
               </div>

               {/* badge section */}
               <div className="coin-badge-section">
                  <div className="badge1">
                     83
                     <div className="bage2">
                        / 100
                     </div>
                  </div>

                  <div className="icon-mens-search ">
                     <MdPersonSearch />
                  </div>
               </div>
            </div>
         </div>
         
      </>
   )
}

import React from 'react';
import { FaBars, FaDatabase, FaAt, FaMoneyBill, FaCaretUp, FaCaretDown } from "react-icons/fa";

import { makeStyles, lighten, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

import './card.scss';

const PortfolioProgress = withStyles({
  root: {
      height: 10,
      backgroundColor: lighten('rgb(0,0,0)', 0.8),
      borderRadius: 30
  },
  bar: {
      borderRadius: 20,
      backgroundColor: '#07c407',
  },
})(LinearProgress);

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("rgb(0,0,0)", 0.8),
    borderRadius: 0,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#07c407",
  },
})(LinearProgress);

const BorderLinearProgressLeft = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("rgb(0,0,0)", 0.8),
    borderRadius: 0,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "rgb(255,0,0)",
  },
})(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    },
  },
  button: {
    width: '50%'
  },
  margin: {
    margin: theme.spacing(1),
},
}));

const Card = ({ 
  scrip, 
  price, 
  quantity, 
  avg_cost, 
  invested_amount, 
  market_value, 
  percent_portfolio_value,
  unrealized_PL,
  return_value
}) =>  {
  const classes = useStyles();

  return (
   
      <div className='card-content'>
        <div className='card-content-name-section'>
          <div className='card-content-name-section-price'>
          <div className='stock-icon'>
              <FaBars />  
             </div> 
            <div className='stock-price'>
            <div className='name-and-price'> 
              <div className='name'>
                {scrip}
              </div>
              <div className='price'>
                $<span style={{color: '#00b7ff'}}>{price}</span>
              </div>
            </div>
            </div>  
            <div className='stock-name'>
            <span className='stock-name-1'>iShares</span>
            <span className='stock-name-2'>by BlackDoc</span>
            <span className='stock-name-3'>S & P 500 Index</span>
            <span className='stock-name-4'>US Equity</span>
          </div>
          </div>
          
        </div>
        <div className='card-content-quantity'>
          <div className='quantity'>
            <div className='quantity-icon'>
              <FaDatabase />
            </div>
            <div className='quantity-title'>
              Quantity
            </div>
            <div className='quantity-value'>
              {quantity}
            </div>
          </div>
          <div className='quantity'>
            <div className='quantity-icon'>
              <FaAt />
            </div>
            <div className='quantity-title'>
              Avg. Cost
            </div>
            <div className='quantity-value'>
              {avg_cost}
            </div>
          </div>
          <div className='quantity'>
            <div className='quantity-icon'>
              <FaMoneyBill />
            </div>
            <div className='quantity-title'>
              Invested Amit
            </div>
            <div className='quantity-value'>
              ${invested_amount}
            </div>
          </div>
        </div>
        <div className='card-content-market-value'>
          <div className='market-value'>
            <div className='market-value-title'>
              Market Value
            </div>
            <div className='market-value-val'>
              ${market_value}
            </div>
          </div>
          <div className='portfolio-value'>
            <div className='portfolio-value-title'>
              % of portfolio value
            </div>
            <div className='portfolio-value-val'>
              {percent_portfolio_value}%
            </div>
          </div>
          <div className={classes.progress}>
            <PortfolioProgress
              className={classes.margin}
              variant="determinate"
              color="secondary"
              value={percent_portfolio_value}
            />
          </div>
        </div>
        <div className='card-content-unrealized'>
          <div className='unrealized'>
            <div className='unrealized-title'>
              Unrealized P/L
            </div>
            <div className='unrealized-value'>
              ${unrealized_PL}
            </div>
          </div>
          <div className='return'>
            <div className='return-title'>
              % Return
            </div>
            <div className='return-value'>
              {return_value > 0 ? <span style={{color: '#07c407'}}><FaCaretUp /></span> : <span style={{color: 'red'}}><FaCaretDown /></span>}
              {return_value}%
            </div>
          </div>
          <div className='progress'>
          <BorderLinearProgressLeft
            variant="determinate"
            color="secondary"
            value={
              -((unrealized_PL * 100) / invested_amount).toFixed(2)
            }
          />  
          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={((unrealized_PL * 100) / invested_amount).toFixed(
              2
            )}
          />
        </div>
        </div>
        <div className='card-content-button'>
          <div className={classes.root}>
            <Button className={classes.button} variant="outlined" color="secondary" style={{borderColor:"green",color:"green"}}>
              BUY
            </Button>
            <Button className={classes.button} variant="outlined" color="secondary" style={{borderColor:"red"}}>
              SELL
            </Button>
          </div>
        </div>
      </div>
  )
}

export default Card;

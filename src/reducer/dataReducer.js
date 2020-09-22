import { INITIAL_DATA } from './inittialData';
import { GET_DATA, CHART_DATA, SELECTED_SCRIP, UPDATE_ITEM } from '../actions/type';

const initialState = {
  collection: INITIAL_DATA,
  chartData: {},
  selectedScrip: '',
  selectedItem: {}
}

export default function(state=initialState,action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        collection: action.payload
      }
    case CHART_DATA:
      let newChartData = {
        mfPercent: 0,
        etfPercent: 0,
      };
    
      action.payload.map((d) => (d.type === 'MF' ? newChartData.mfPercent += d.percent_portfolio_value :  newChartData.etfPercent += d.percent_portfolio_value));
      return {
        ...state,
        chartData: newChartData,
      };
    case SELECTED_SCRIP:
      const selectedItem = state.collection.filter(c => c.scrip === action.payload)
        .reduce((obj, item) => {
          obj = item;
          return obj;
        }, {});   
      return {
        ...state,
        selectedScrip: action.payload,
        selectedItem: selectedItem
      }  
    case UPDATE_ITEM: 
    const selectedIndex = state.collection.findIndex((obj => obj.scrip === action.payload.scrip));
    state.collection[selectedIndex].price = action.payload.price;
    state.collection[selectedIndex].quantity = action.payload.quantity;
    state.collection[selectedIndex].invested_amount = action.payload.invested_amount;
      return {
        ...state,
        collection: state.collection
      } 
    default:
      return state;
  }
}
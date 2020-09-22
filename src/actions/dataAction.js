import { GET_DATA, CHART_DATA, SELECTED_SCRIP, UPDATE_ITEM } from './type';

export const getData = (data) => dispatch => {
  dispatch({
    type: GET_DATA,
    payload: data
  })
}

export const getChartData = (data) => dispatch => {
  dispatch({
    type: CHART_DATA,
    payload: data
  })
}

export const setSelectedScrip = (scrip) => dispatch => {
  dispatch({
    type: SELECTED_SCRIP,
    payload: scrip
  })
}

export const updateItem = (data) => dispatch => {
  dispatch({
    type: UPDATE_ITEM,
    payload: data
  })
}
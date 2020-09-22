import React from 'react';
import { connect } from 'react-redux';
import { getData, getChartData, setSelectedScrip, updateItem } from '../actions/dataAction';
import './homepage.scss';
import Chart from '../component/chart/chart';
import CardPreview from '../component/cardPreview/carPreview';
import Header from '../component/header/header';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getData(this.props.data.collection);
    this.props.getChartData(this.props.data.collection);
  }

  handleChangeScrip = (e) => {
    this.props.setSelectedScrip(e.target.value);
  }

  updateCollection = (data) => {
    this.props.updateItem(data)
  }

  render() {
    return (
      <>
      <Header 
        collection={this.props.data.collection} 
        currentScrip={this.props.data.selectedScrip} 
        handleChangeScrip={this.handleChangeScrip} 
        selectedItem={this.props.data.selectedItem}
        updateCollection={this.updateCollection}
      />
      <div className='home-page'>
        <CardPreview collection={this.props.data.collection} />
        <Chart chartData={this.props.data.chartData} />
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data
})

export default connect(mapStateToProps, { getChartData, getData, setSelectedScrip, updateItem })(HomePage);

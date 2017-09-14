import React, { Component } from 'react';
import _ from 'lodash';
import * as actions from '../actions';
import { connect } from 'react-redux';

class TreeTile extends Component{

  toggleImage() {
    if (!this.props.imageStatus){
      this.props.showImage(this.props.name);
    }
    else {
      this.props.hideImage(this.props.name);
    }
  }
  render(){
    return(
      <div className="col-xs-6">
        <div className="tree-tile">
          <div className="tree-name">
            {this.props.name}
          </div>
          <div className="tree-species">
            {this.props.species_name}
          </div>
          { this.props.imageStatus ? <img className="tree-image" src={this.props.image}/> : null }
          <button className="image-button" onClick={this.toggleImage.bind(this)}>
            <span className="button-text">
              { this.props.imageStatus ? "Hide Image" : "Show Image" }
            </span>
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return { imageStatus: state.trees[ownProps.name].shown };
}

export default connect(mapStateToProps, actions)(TreeTile);

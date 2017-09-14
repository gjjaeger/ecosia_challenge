import React, { Component } from 'react';
import _ from 'lodash';
import * as actions from '../actions';
import TreeTile from './tree_tile';
import { connect } from 'react-redux';

class TreeList extends Component{
  componentWillMount(){
    this.props.fetchTrees();
  }

  displayTrees(){
    return _.map(this.props.trees, (tree) => {
      return(
        //render each tree in child component TreeTile
        <TreeTile
          key={tree.name}
          name={tree.name}
          species_name={tree.species_name}
          image={tree.image}
        />
      );

    })
  }

  render(){
    //render errorMessage should error occur
    if (this.props.errorMessage){
      return <div id="errorMessage">{this.props.errorMessage}</div>;
    }
    //if no error but not props yet
    if(!this.props.trees){
      return <div>Loading...</div>;
    }
    //after props have loaded
    return(
      <div className="tree-list">
        {this.displayTrees()}
      </div>
    )
  }
}

function mapStateToProps(state){
  //extract useful attributes from state
  return { trees: state.trees, errorMessage: state.trees.error };
}

export default connect(mapStateToProps, actions)(TreeList);

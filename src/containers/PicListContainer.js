import React, { Component } from 'react';
import PicList from '../components/PicList';
import PicSearchPaginate from '../components/PicSearchPaginate';

const API_KEY = "563492ad6f9170000100000101d30fe3cde6484f8767eda7a28ba586"

class PicListContainer extends Component {

  state = {
    pics: []
  }

  render() {
    return(
      <div>

        <PicSearchPaginate fetchPICs={this.fetchPICs} fetchCurated={this.fetchCurated}/>

        <PicList pics={this.state.pics} />
        
      </div>
    )
  }

  fetchPICs = (query, index) => { 
      fetch(`https://api.pexels.com/v1/search?query=${query}&page=${index}&per_page=10`, {
      headers: {
        Authorization: API_KEY
      }})
      .then(response => response.json())
      // .then(result => console.log(result.photos))
      .then(result => {
        
        this.setState({ 
          pics: result.photos.map( pic => ({ 
            url: pic.src.original, 
            photographer: pic.photographer, 
            photographer_url: pic.photographer_url}) )
        });
        
      })
      .catch(err => console.log(err))
      
    // )
    console.log("query:", query, "page:", index)
  }

  fetchCurated = (index = 1) => { 
      fetch(`https://api.pexels.com/v1/curated?&page=${index}&per_page=10`, {
      headers: {
        Authorization: API_KEY
      }})
      .then(response => response.json())
      .then(result => {
        this.setState({ 
          pics: result.photos.map( pic => ({ 
            url: pic.src.original, 
            photographer: pic.photographer, 
            photographer_url: pic.photographer_url}) )
        });
      })
      .catch(err => console.log(err))
      console.log("curatedquery", "page:", index)
    
  }

  componentDidMount() {
    // good lifecycle method to set up fetch() bc it is an async function
    // load the curated images by default
    this.fetchCurated()
  }
}


export default PicListContainer
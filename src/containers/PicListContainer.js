import React, { Component } from 'react';
import PicList from '../components/PicList';
import PicSearchPaginate from '../components/PicSearchPaginate';

// personal api key from .env file securely without sharing to github
const API_KEY = process.env.REACT_APP_API_KEY

class PicListContainer extends Component {

    state = {
        pics: []
    }

    fetchSearched = (query, index) => { 
          const BASE_URL = `https://api.pexels.com/v1/search?query=${query}&page=${index}&per_page=10`

          fetch(BASE_URL, {
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
      const BASE_URL = `https://api.pexels.com/v1/curated?&page=${index}&per_page=10`
      fetch(BASE_URL, {
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
    }

    componentDidMount() {
        this.fetchCurated()
    }

    render() {
        return ( 
        <div>
            <PicSearchPaginate 
                fetchSearched = { this.fetchSearched }
                fetchCurated = { this.fetchCurated }/> 

            <PicList pics = { this.state.pics }/>  
        </div>
        )
    }

}


export default PicListContainer
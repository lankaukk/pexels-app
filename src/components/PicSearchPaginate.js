import React, { Component } from 'react'

class PicSearchPaginate extends Component {

    state = {
        query: "",
        pageIndex: 1
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.query === "" || false) {
            this.props.fetchCurated(this.state.pageIndex)
        } else {
            this.props.fetchSearched(this.state.query, this.state.pageIndex)
            
        }
    }

    incrementPage = () => {
        if (this.state.pageIndex < 8) {
            document.getElementById('leftarrow').style.display = 'block';
            let newIndex = this.state.pageIndex + 1
            this.setState({
                pageIndex: newIndex
            }) }
        else if (this.state.pageIndex == 8) {
            document.getElementById('rightarrow').style.display = 'none';
            console.log("no more pages");
        }
    }

    decrementPage = () => {
        if (this.state.pageIndex > 1) {
            document.getElementById('rightarrow').style.display = 'block';
            let newIndex = this.state.pageIndex - 1
            this.setState({
                pageIndex: newIndex
            }) }
        else if (this.state.pageIndex == 1 || 2) {
            document.getElementById('leftarrow').style.display = 'none';
            console.log("no previous pages");
            
        }
    }

  render() {
    return (
      <div>
        <h1>Pexels Browser</h1>

        <form onSubmit={this.handleSubmit}>
            <input placeholder="Search..." type="text" value={this.state.query} className="search bar" onChange={event => this.setState({
                query: event.target.value, pageIndex: 1
            })}
            />
        </form>

        <br></br>

        <center><form className="pageNumber" onSubmit={this.handleSubmit}>

                <button onClick={this.decrementPage}> 
                    <p className="arrow left" id="leftarrow"></p>
                </button>

                    <p className="pageIndex">{ this.state.pageIndex }</p>

                <button onClick={this.incrementPage}>
                    <p className="arrow right" id="rightarrow"></p>
                </button>

        </form></center>

        <br></br>
      </div>
    )
  }

}

export default PicSearchPaginate
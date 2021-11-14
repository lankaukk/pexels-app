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
            this.props.fetchPICs(this.state.query, this.state.pageIndex)
            
        }
    }

    incrementPage = () => {
        if (this.state.pageIndex < 8) {
            let newIndex = this.state.pageIndex + 1
            this.setState({
                pageIndex: newIndex
            })
            //console.log(this.state.index)
        }
    }

    decrementPage = () => {
        if (this.state.pageIndex > 1) {
            let newIndex = this.state.pageIndex - 1
            this.setState({
                pageIndex: newIndex
            })
        }
    }

    renderResults(){
        if(this.state.query === "" || false)
           return <center><p>Displaying Pexel's Curated Photo Selecton</p></center>;
        return <center><p>Showing results for: {this.state.query}</p></center>;
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
        {/* {this.renderResults()} */}

        <br></br>

        <center><form 
                    className="pageNumber"
                    onSubmit={this.handleSubmit}>
                <button onClick={this.decrementPage}> 
                    <p className="arrow left"></p>
                </button>

                    <p className="pageIndex">{ this.state.pageIndex }</p>

                <button onClick={this.incrementPage}>
                    <p className="arrow right"></p>
                </button>
        </form></center>

        <br></br>
      </div>
    )
  }

}

export default PicSearchPaginate
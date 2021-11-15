import React from 'react'

const PicList = (props) => {
  // console.log(props);
  if (props.pics.length > 0) {
    return (
      <div className="picCard">

          {props.pics.map(pic =>     
              
              <a key={pic.url} target="_blank" rel="noreferrer" href={pic.photographer_url}>
            
              <br></br>

                <img key={pic.url} src={pic.url} alt="pexel"></img>
                
                <div className="overlay">
                  {pic.photographer}
                </div>

              <br></br>

            </a>
          )}

      </div>
    )
  } else {
    return (
      <p>No results for this query.</p>
    )
  }
}

export default PicList
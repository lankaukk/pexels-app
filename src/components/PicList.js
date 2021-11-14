import React from 'react'

const PicList = (props) => {
  // console.log(props);
  return (
    <div className="picCard">

      {props.pics.map(pic =>     
          
          <a key={pic.url} target="_blank" href={pic.photographer_url}>
        
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
}

export default PicList
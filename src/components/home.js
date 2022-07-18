import React from 'react'
import Homeimg from 'C:/Ranjith/ggsh/src/images/ggsh.png'
import Vision from 'C:/Ranjith/ggsh/src/images/vision.png'
import Mission from 'C:/Ranjith/ggsh/src/images/mission.png'
import Culture from 'C:/Ranjith/ggsh/src/images/culture.png'

class Home extends React.Component{
render(){
return(
    <div>
        <img style={{width:'100%',height:'500px'}} src={Homeimg} alt="ggsh"></img>
        <div className='squareContainer'>
            <div className='square1'><img src={Vision} alt='globe'></img><div><h2>Our Vision</h2>
            <p>To globally contribute businesses grow exponentially and to uphold the trust entrusted on Consultants</p>
            </div></div>
            <div className='square1'><img src={Mission} alt='globe'></img><div><h2>Our Mission</h2>
            <p>We are here to optimally utilize the technology in continuously striving to improve the quality of delivery…</p>
            </div></div>
            <div className='square1'><img src={Culture} alt='globe'></img><div><h2>Our Culture</h2>
            <p>We at GGSH emphases on civilizing the culture of our organization as an adaptive personality.</p>
            </div></div>
        </div>
    </div>
)
}
}

export default Home;
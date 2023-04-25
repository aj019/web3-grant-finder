import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../images/logo.png'
import './App.css'
import {fetchGrants,searchGrants} from './utils/grants'
import GrantCard from './components/GrantCard'
function App() {
  const [count, setCount] = useState(0)
  const [searched,setSearched] = useState(false)
  const [searchIng,setSearching] = useState(false)
  const [inputText,setInputText] = useState("")
  const [grants,setGrants] = useState([])


  const onChangeText = (event) => {
    setInputText(event.target.value)
  }

  const onSearch = () => {    
    setGrants(searchGrants(inputText))
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    })
    setSearched(true)
  }

  const showAllGrantsClicked = () => {
    setGrants(fetchGrants)
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    })
    setSearched(true)
  }

  return (
    <>
      <div className="page-wrapper">


        {/* <div className="preloader"></div> */}


        <header className="main-header header-style-one">




          <div className="header-upper">
            <div className="auto-container">
              <div className="clearfix">

                <div className="pull-left logo-box">
                  <div className="logo">
                    <img src={logo} alt="" title="Bootcamp" /></div>
                </div>

                
              </div>
            </div>
          </div>





        </header>



        <section className="page-title">
          <div className="auto-container">
            <h1>Find GRANTS for your project</h1>
            <div className="text" style={{color: "#fff"}}>Describe what you are building and we will use Chat GPT API to show you grants that perfectly matches your project <br /> </div>
            <div className="text" style={{color: "#fff"}}>If you are having trouble finding grants . Try using keywords like NFT, DeFi, Layer 1 etc<br /> </div>

            <div class="inner-container">
				
				<div class="sec-title centered">
					
				</div>
				
				
				<div class="contact-form">
				
					
					{/* <form method="post" action="sendemail.php" id="contact-form" novalidate="novalidate"> */}
						<div class="row clearfix">
							
							<div class="col-lg-12 col-md-12 col-sm-12 form-group">
								<textarea class="" name="message" value={inputText} onChange={onChangeText} placeholder="I am building a ...."></textarea>
							</div>
							
							<div class="col-lg-12 col-md-12 col-sm-12 form-group text-centered">
								<button class="theme-btn btn-style-three" onClick={onSearch}>
                  <span class="txt">Search Grants <i class="fa fa-search"></i></span>
                </button>
                <button class="theme-btn btn-style-three" onClick={showAllGrantsClicked}>
                  <span class="txt">View All Grants</span>
                </button>
							</div>              
							
						</div>
					{/* </form> */}
						
				</div>
				
			</div>

          </div>
        </section>



        <section className="topics-section">
          <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{ backgroundImage: `url("images/icons/icon-1.png")` }}></div>
          <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{ backgroundImage: `url("images/icons/icon-2.png")` }}></div>
          {searched && <div className="auto-container">
            <div className="sec-title centered">
              <h2>{`We found ${grants.length} grants matching your project`}</h2>
              <div className="text">Protocols and projects launch grant programs to reward teams and individuals to build in their ecosystem. We have compiled the largest real-time directory list of all grants</div>
            </div>
            <div className="row clearfix">

              {grants.map((grant, i) => <GrantCard grant={grant} />)}

            </div>
          </div>}
        </section>


      </div>
    </>
  )
}

export default App

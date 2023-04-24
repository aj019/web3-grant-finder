import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page-wrapper">


        {/* <div className="preloader"></div> */}


        <header className="main-header header-style-one">




          <div className="header-upper">
            <div className="auto-container">
              <div className="clearfix">

                <div className="pull-left logo-box">
                  <div className="logo"><a href="index.html">
                    <img src="https://via.placeholder.com/230x60" alt="" title="Bootcamp" /></a></div>
                </div>

                
              </div>
            </div>
          </div>





        </header>



        <section className="page-title">
          <div className="auto-container">
            <h1>What are you building ?</h1>


            <div className="search-boxed">
              <div className="search-box">
                <form method="post" action="contact.html">
                  <div className="form-group">
                    <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required />
                      <button type="submit"><span className="icon fa fa-search"></span></button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>



        <section className="topics-section">
          <div className="patern-layer-one paroller" data-paroller-factor="0.40" data-paroller-factor-lg="0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: `url("images/icons/icon-1.png")`}}></div>
          <div className="patern-layer-two paroller" data-paroller-factor="0.40" data-paroller-factor-lg="-0.20" data-paroller-type="foreground" data-paroller-direction="vertical" style={{backgroundImage: `url("images/icons/icon-2.png")`}}></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Popular Courses</h2>
              <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, <br /> they’re two waters own morning gathered.</div>
            </div>
            <div className="row clearfix">


              <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5><a href="course-detail.html">Development Course</a></h5>
                      </div>
                      <div className="pull-right">
                        <div className="price">$140</div>
                      </div>
                    </div>
                    <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="students">125 Student</div>
                      </div>
                      <div className="pull-right">
                        <a href="course-detail.html" className="enroll">Enroll Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5><a href="course-detail.html">Language Course</a></h5>
                      </div>
                      <div className="pull-right">
                        <div className="price">$140</div>
                      </div>
                    </div>
                    <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="students">125 Student</div>
                      </div>
                      <div className="pull-right">
                        <a href="course-detail.html" className="enroll">Enroll Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="course-detail.html"><img src="https://via.placeholder.com/370x253" alt="" /></a>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5><a href="course-detail.html">Business Course</a></h5>
                      </div>
                      <div className="pull-right">
                        <div className="price">$140</div>
                      </div>
                    </div>
                    <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="students">125 Student</div>
                      </div>
                      <div className="pull-right">
                        <a href="course-detail.html" className="enroll">Enroll Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
  </section>


      </div>
    </>
  )
}

export default App

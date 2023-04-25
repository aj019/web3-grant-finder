import React from 'react'

function Tag({tag}) {
  return <div className='tag1' style={{ backgroundColor: "#00ab15", color: "#fff", padding: "5px",margin: "1px"}}>{tag}</div>
}

export default function GrantCard({grant}) {
  console.log('grant: ', grant);
  if(!grant) return null
  return (
    <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <img src={grant.image} alt="" />
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left col-md-12">
                        <h5 style={{color: "#000"}}>{grant.title}</h5>
                      </div>                      
                    </div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="price">{grant.amount}</div>
                      </div>
                    </div>
                    <div className="clearfix">
                    <div className="tags pull-left col-md-12" style={{display: "flex",flexWrap: "wrap",padding: "0"}}>
                      {grant.tags.map((tag) => <Tag tag={tag} />)}
                    </div>
                    </div>
                    {/* <div className="text">Replenish him third creature and meat blessed void a fruit gathered you’re, they’re two waters.</div> */}
                    <div className="clearfix">
                      <div className="pull-left">
                        <div className="students">By {grant.project}</div>
                      </div>
                      <div className="pull-right">
                        <a href={grant.link} target="_blank" className="enroll">Apply</a>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

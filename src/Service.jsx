import React from "react";
import c1 from "../src/image/c1.jpg"
import c2 from "../src/image/c2.jpg"
import c3 from "../src/image/c3.jpg"
import c4 from "../src/image/c4.jpg"

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My <span className="brand-name">Web</span> services.</h1>
      </div>
      <div className=".container-fluid mb-5" >
        <div className="row gy-5">
          <div className="col-10 mx-auto">
            <div className="row2 card-box">

              <div className="col-md-2 col-10 mx-auto">
                <div class="card" >
                  <img class="card-img-top" src={c1} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Web Dev</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>  


              <div className="col-md-2 col-10 mx-auto">
                <div class="card" >
                  <img class="card-img-top" src={c2} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">App Dev</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>   
            
            
              <div className="col-md-2 col-10 mx-auto">
                <div class="card" >
                  <img class="card-img-top" src={c3} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Software Dev</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>   

              <div className="col-md-2 col-10 mx-auto">
                <div class="card" >
                  <img class="card-img-top" src={c4} alt="Card image cap" />
                  <div class="card-body">
                    <h5 class="card-title">Android Dev</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>   
            
              

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
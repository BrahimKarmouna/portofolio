import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                My Recently Projects
              </button>
              {/* 
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button> 
              */}
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/1.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4></h4>
                        <a href="https://www.youtube.com/watch?v=VDWy0Zrl6_o">
                    <h4>Full Anime Streaming Website built with Laravel framework</h4>
                  </a>
                  <a href="https://www.youtube.com/watch?v=VDWy0Zrl6_o"> <div className="icon">
                    
                    <i className="fa fa-search" />    
                  </div>  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/lux.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
              <a href="https://youtu.be/m2oCC7VPQqk"> <h4>  Luxury E-commerce Website "pending" created by html/css/js </h4> </a>
                 <a href="https://youtu.be/m2oCC7VPQqk">   <div className="icon">
                    <i className="fa fa-search" />
                  </div> </a>
                </div> 
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/tkdw.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  
                     <a href=" https://www.youtube.com/watch?v=CDecK3FONTU">
                    <h4>Full Taekwondo scoring system for combat</h4>
                  </a>
                 
                    <a href=" https://www.youtube.com/watch?v=CDecK3FONTU"> <div className="icon">
                 
                    <i className="fa fa-search" />
                       
                  </div> </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="graphics-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/sartie.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  
                  <a href=" https://www.youtube.com/watch?v=tEPNXmmP2g8">
                   <h4>Landing page for E-website Html/Css/Bootstrap</h4>
                  </a>
                 <a href=" https://www.youtube.com/watch?v=tEPNXmmP2g8">  <div className="icon">
                       <i className="fa fa-search" />   
                  </div> </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/wood.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://brahimkarmouna.github.io/woodfire/#">
                    <h4>Wood products e-comerce Store Landing Page</h4>
                  </a>
                 <a href="https://brahimkarmouna.github.io/woodfire/#"> <div className="icon">
                    
                      <i className="fa fa-search" />
                  
                  </div>  </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/gym.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://brahimkarmouna.github.io/gym-website/">
                    <h4>Landing page for Gym Using Html/Css/bootstrap/js</h4>
                  </a>
                 <a href="https://brahimkarmouna.github.io/gym-website/">  <div className="icon">
                   
                      <i className="fa fa-search" />
                   
                  </div> </a>
                </div>
              </div>
            </div>
            {/* Portfolio Item End */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

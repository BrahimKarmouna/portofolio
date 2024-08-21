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
                  <a href="https://anime-4life.com/"> <div className="icon">
                    
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
                  <img src="https://i.ibb.co/Qc3YgyJ/simonveviewv.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
              <a href="http://34.118.39.100:3000/us"> <h4>   e-commerce Website for Simon Leviev's book 'Tinder Swindler/NETFLIX STAR ' front end Next js /Type scribt /backend nextj s  </h4> </a>
                 <a href="http://34.118.39.100:3000/us">   <div className="icon">
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
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="https://i.ibb.co/hF5QfP5/abdooptic.png" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <a href="https://abdo-optic.vercel.app/">
                    <h4>Landing page for an opticien Using Next js/tailwind </h4>
                  </a>
                 <a href="https://abdo-optic.vercel.app/">  <div className="icon">
                   
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

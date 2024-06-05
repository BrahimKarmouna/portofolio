import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I'm Karmouna Brahim a <span> passionate and dedicated developer </span>
                  </h2>
                  <p>
                a specializing in delivering high-quality software solutions as a freelancer. With over five completed projects, I've honed my skills in various programming languages and frameworks, positioning myself as an adept and versatile programmer ready to tackle any challenge.
                  
                  </p>
                  <br/>
                  <p>
              <h2><span>Why Work With Me?</span> </h2>   
Choosing to work with me means partnering with someone who is not only knowledgeable but also passionate about coding and development. I bring creativity, precision, and a commitment to delivering results that exceed expectations. My freelance experience has equipped me with the flexibility and resourcefulness to handle diverse projects, ensuring client satisfaction every step of the way.

Let's build something amazing together!
                  </p>
                </div>
              </div>
         
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to 2024
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2022 I started to learn Programming. At the Specialized Institute of Applied Technology
                           and i learned many programming languages and freamworks
                            
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                      
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 to 2022
                          </h6>
                          <h4 className="timeline-title">
                           high school studying years
                          </h4>
                          <p className="timeline-text">
                          I successfully completed my high school education, graduating in 2022. Over the course of three years, I developed a strong foundation in various academic subjects and extracurricular activities, which have prepared me well for future academic and professional endeavors.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                      
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 04/2024 to 05/2024
                          </h6>
                          <h4 className="timeline-title">internship  </h4>
                          <p className="timeline-text">
                            during my studying i passe an internship in the bigest taekwondo gym in my city and i builded for them full yaekwondo scoring system for the players coombat
                          </p>
                        </div>
                        
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Web Design</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Coding. I have learn
                            Html, Css, Sass, JavaScript, Bootstrap. Now I am a
                            Professional Web Designer..
                          </p>
                        </div> */}
                        
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to Present
                          </h6>
                          <h4 className="timeline-title">Wordpress</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Wordpress. I can
                            install, Customize, &amp; fix bug on wordpress.{" "}
                          </p>
                        </div> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

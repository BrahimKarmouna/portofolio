import type { NextPage } from "next";
import { SiTailwindcss, SiGithub, SiAdobexd, SiFigma, SiPhp, SiJira, SiCanva, SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaLaravel, FaReact, FaNodeJs } from "react-icons/fa";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Competencies</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: HTML5 */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaHtml5 size="2em" />
                </div>
                <h4>HTML5</h4>
                <p>Expertise in creating robust and semantic HTML5 structures for modern web applications.</p>
              </div>
            </div>
            {/* Service Item 1 End */}
            {/* Service Item 2: CSS3 */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaCss3Alt size="2em" />
                </div>
                <h4>CSS3</h4>
                <p>Proficient in crafting responsive and visually appealing designs using CSS3.</p>
              </div>
            </div>
            {/* Service Item 2 End */}
            {/* Service Item 3: JavaScript */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaJs size="2em" />
                </div>
                <h4>JavaScript</h4>
                <p>Skilled in writing clean and efficient JavaScript code to enhance user interactivity.</p>
              </div>
            </div>
            {/* Service Item 3 End */}
            {/* Service Item 4: Bootstrap */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaBootstrap size="2em" />
                </div>
                <h4>Bootstrap</h4>
                <p>Experience in using Bootstrap to create responsive and mobile-first web pages.</p>
              </div>
            </div>
            {/* Service Item 4 End */}
            {/* Service Item 5: Laravel */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaLaravel size="2em" />
                </div>
                <h4>Laravel</h4>
                <p>Proficient in developing scalable and secure web applications using Laravel framework.</p>
              </div>
            </div>
            {/* Service Item 5 End */}
            {/* Service Item 6: React */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaReact size="2em" />
                </div>
                <h4>React</h4>
                <p>Experience in building dynamic and interactive user interfaces with React.</p>
              </div>
            </div>
            {/* Service Item 6 End */}
            {/* Service Item 7: Node.js */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <FaNodeJs size="2em" />
                </div>
                <h4>Node.js</h4>
                <p>Expertise in developing server-side applications and APIs using Node.js.</p>
              </div>
            </div>
            {/* Service Item 7 End */}
            {/* Service Item 8: Tailwind CSS */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiTailwindcss size="2em" />
                </div>
                <h4>Tailwind CSS</h4>
                <p>Proficient in using Tailwind CSS for rapid UI development.</p>
              </div>
            </div>
            {/* Service Item 8 End */}
            {/* Service Item 9: Adobe XD */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiAdobexd size="2em" />
                </div>
                <h4>Adobe XD</h4>
                <p>Experience in designing user interfaces and prototypes with Adobe XD.</p>
              </div>
            </div>
            {/* Service Item 9 End */}
            {/* Service Item 10: GitHub */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiGithub size="2em" />
                </div>
                <h4>GitHub</h4>
                <p>Proficient in version control and collaborative development using GitHub.</p>
              </div>
            </div>
            {/* Service Item 10 End */}
            {/* Service Item 11: Figma */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiFigma size="2em" />
                </div>
                <h4>Figma</h4>
                <p>Experience in collaborative interface design using Figma.</p>
              </div>
            </div>
            {/* Service Item 11 End */}
            {/* Service Item 12: PHP */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiPhp size="2em" />
                </div>
                <h4>PHP</h4>
                <p>Proficient in developing dynamic and data-driven websites using PHP.</p>
              </div>
            </div>
            {/* Service Item 12 End */}
            {/* Service Item 13: Jira */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiJira size="2em" />
                </div>
                <h4>Jira</h4>
                <p>Experience in project management and issue tracking using Jira.</p>
              </div>
            </div>
            {/* Service Item 13 End */}
            {/* Service Item 14: Canva */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiCanva size="2em" />
                </div>
                <h4>Canva</h4>
                <p>Skilled in creating visually appealing graphics and presentations using Canva.</p>
              </div>
            </div>
            {/* Service Item 14 End */}
            {/* Service Item 15: SQL */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon icon-blue">
                  <SiMysql size="2em" />
                </div>
                <h4>SQL</h4>
                <p>Proficient in writing complex SQL queries and managing databases.</p>
              </div>
            </div>
            {/* Service Item 15 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;

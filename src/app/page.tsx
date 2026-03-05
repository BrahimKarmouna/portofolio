
import Image from "next/image";
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "../components/Typewriter";

export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/meperf.png"
              alt="Lord Castillo Profile"
              className="shadow-dark"
              width={300}
              height={300}
              priority
            />
            <h1>Lord Castillo</h1>
            <p>I'm a <Typewriter texts={["Full Stack Web Developer", "UI/UX Designer", "Software Engineer"]} /></p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://github.com/BrahimKarmouna" target="_blank" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

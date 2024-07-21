'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div>
      <section id="home" className="hero min-h-screen z-0 px-4 lg:px-24 xl:px-44">
        <div className="hero max-w-4xl w-full">
          <div className="hero-content flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center md:justify-end md:items-center mb-4 md:mb-0">
              <img src="/rebecca.jpg" alt="Rebecca" className="rounded-full" />
            </div>
            <div className="md:w-1/2 md:ml-8">
              <h2 className="text-4xl font-bold text-accent">Hi, I'm Rebecca Chan</h2>
              <p className="text-gray-700 text-l mt-4">I am a skilled project manager specializing in software development and business operations. With a passion for optimizing processes and delivering impactful results, I excel in leading teams, managing complex projects, and driving innovation.</p>
              <div className="mt-6">
                <a href="https://www.linkedin.com/rebeccachan13" className="text-blue-600">
                  <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 mr-2" />
                </a>
                <a href="https://www.github.com/rebeccachan13" className="text-gray-800">
                  <FontAwesomeIcon icon={faGithub} className="h-8 w-8 mr-2" />
                </a>
                <a href="/resume_RebeccaChan.pdf" className="text-gray-800">
                  <FontAwesomeIcon icon={faDownload} className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import ProjectsCarousel from './projectsCarousel';

export default function Resume() {
  return (
    <section id="resume" className="container mx-auto p-4 min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full space-y-8 mx-auto">
        
        {/* Strengths and Expertise */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Strengths and Expertise</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-800">
            <ul className="list-disc list-inside space-y-2">
              <li>Project Management</li>
              <li>Problem-Solving</li>
              <li>Team Leadership</li>
              <li>Attention to Detail</li>
              <li>Teamwork</li>
              <li>Communication</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Organization Skills</li>
              <li>Decision-making</li>
              <li>Client Relationship Management</li>
              <li>Waterfall Methodologies</li>
              <li>Agile & Scrum</li>
              <li>Change & Risk Management</li>
            </ul>
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-800">
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js</li>
              <li>Python</li>
              <li>Oracle SQL & PLSQL</li>
              <li>React Native</li>
              <li>C#</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Azure AI</li>
              <li>HTML, CSS & JavaScript</li>
              <li>Java</li>
              <li>Git & GitHub</li>
              <li>ClickUp, Ms Visio, Ms Office</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4 flex items-start">
            <Image src="/sait.png" alt="SAIT Logo" width={48} height={48} className="mr-4" />
            <div>
              <h3 className="text-lg font-bold">Southern Alberta Institute of Technology (SAIT)</h3>
              <p>Diploma in Software Development</p>
              <p>Jan 2023 – Present</p>
              <p>Current GPA: 3.93 / 4.00 (Expected Graduation: Aug 2024)</p>
            </div>
          </div>
          <div className="flex items-start">
            <Image src="/wmu.png" alt="WMU Logo" width={48} height={48} className="mr-4" />
            <div>
              <h3 className="text-lg font-bold">Western Michigan University (WMU)</h3>
              <p>Bachelor of Business Administration - Major in Computer Information Systems</p>
              <p>CGPA: 3.38 / 4.00</p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-8">
            <h3 className="text-lg font-bold">Project Manager</h3>
            <p className="text-gray-700">Ninox Games, Hong Kong & Canada</p>
            <p className="text-gray-700">Aug 2020 – Sep 2023</p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-800">
              <li>Successfully managed and coordinated multiple board game production projects, overseeing project timelines, budgets, and resources.</li>
              <li>Collaborated with a global network of game designers and publishers to understand and address their specific requirements, cultivating strong relationships.</li>
              <li>Led cross-functional teams, fostering effective communication and teamwork among designers, production staff, and quality control experts.</li>
              <li>Prepared detailed project quotations for clients, demonstrating accuracy in cost estimation and project timelines.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold">Project Manager</h3>
            <p className="text-gray-700">Icicle Group, Hong Kong</p>
            <p className="text-gray-700">Jul 2017 – Jun 2020</p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-800">
              <li>Efficiently managed a diverse range of projects within tight deadlines, including design and creative, print and packaging, digital website, and gift and premiums, ensuring they were completed on time and within budget.</li>
              <li>Proactively identified opportunities for account growth and recommended improvements to enhance client satisfaction.</li>
              <li>Collaborated with cross-functional teams and vendors to identify and resolve issues, consistently delivering value-added services to clients.</li>
              <li>Utilized advanced project management tools to enhance efficiency and client satisfaction.</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold">Artwork Coordinator</h3>
            <p className="text-gray-700">MGB METRO GROUP Buying HK Ltd, Hong Kong</p>
            <p className="text-gray-700">Jul 2016 – Feb 2017</p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2 text-gray-800">
              <li>Successfully facilitated communication between design agencies, photographers, translation companies, and vendors to coordinate artwork production, ensuring that all projects met customers' specific requirements.</li>
              <li>Managed the quality of all packaging artwork projects, maintaining a keen eye for detail.</li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="flex items-start">
            <Image src="/pmp.png" alt="PMP Logo" width={48} height={48} className="mr-4" />
            <div>
              <h3 className="text-lg font-bold">PMP Certification – in Progress</h3>
              <p className="text-gray-700">(Exam scheduled in coming months)</p>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <ProjectsCarousel />
      </div>
    </section>
  );
}
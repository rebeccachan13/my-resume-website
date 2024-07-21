
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'ParkEase - Desktop & Mobile App',
    description: 'As my capstone project, my team and I developed ParkEase, an innovative desktop and mobile application designed to enhance the parking experience for both public and private parking.',
    imageUrl: '/project1.png',
    projectUrl: 'https://github.com/rebeccachan13/ParkEase',
    skills: ['C#', '.NET MAUI', 'Python', 'MongoDB', 'Google Maps API']
  },
  {
    title: 'CinemaPicks - Web App',
    description: 'This is my individual project. I developed an interactive web application designed to enhance the movie-discovery experience. It allows users to search for movies by title and add favorites to a personalized list.',
    imageUrl: '/project2.png',
    projectUrl: 'https://cinema-picks.vercel.app',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'API', 'Vercel']
  },
  {
    title: 'Farmer\'s Market - UX & UI Design',
    description: 'This project aimed to improve the user experience of a farmer\'s market website. I led a team of 7 to design a low & high-fidelity prototype using Figma.',
    imageUrl: '/project3.png',
    projectUrl: 'https://www.figma.com/proto/vzjVl5FMErzb8yuALYvybb/High-Fidelity-Prototype?t=ufsUMNz8t8bX1jdP-1',
    skills: ['Project Management', 'UI Design', 'Figma', 'UX Design','Team Leadership']
  }
];

export default function ProjectsCarousel() {
  return (
    <div className="carousel space-x-4 rounded-box">
      {projects.map((project, index) => (
        <div key={index} className="carousel-item max-w-xs">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
            <Image src={project.imageUrl} alt={project.title} width={200} height={200} />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <ul className="list-disc list-inside ml-4 mb-2 text-gray-800">
                {project.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              <Link href={project.projectUrl} className="text-blue-600 hover:underline">
                Visit Project
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

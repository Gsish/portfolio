
import Navbar from './components/Navbar.jsx';
import Name from './components/name.jsx';
import Assic from './components/Assic.jsx';
import Info from './components/info.jsx';
import Expertise from './components/Exp.jsx';

export default function HomePage() {
  return (
    <>
      
      <Navbar />

      {/* Content Container */}
      <div className="min-h-screen bg-black text-green-300 px-4 sm:px-6 md:px-8 pt-24 flex flex-col items-center pt-20 ">
        <div className="w-full max-w-5xl space-y-20">

          {/* Name */}
          <Name />

          {/* Typing Effect */}
          <Assic fullText="Software Engineer" />

          {/* Info Section */}
          <div className="text-center">
            <Info text="I am Niranjan, a skilled programmer with expertise in Python and C++, along with a growing knowledge of JavaScript. I have experience in machine learning and AI, particularly in recommendation systems. My work spans AI for healthcare, speech recognition, and decentralized AI collaboration. In web and software development, I have built projects using Django and Streamlit. I also have a strong foundation in data science, cybersecurity, and research tools like the arXiv API. Passionate about innovation, I actively participate in hackathons and explore AI-driven solutions for real-world problems." />
          </div>

          {/* Expertise Section */}
          <div className="text-center">
            <Expertise />
          </div>

          {/* Contact */}
          <div id="contact" className="font-mono text-center">
            <h2 className="text-2xl mb-2">Contact</h2>
            <p>sonawaneniranjan28@gmail.com</p>
          </div>

        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function TechSkill() {
  const icn = [
    {
      name: "Artificial Intelligence & Machine Learning",
      img: "/Assets/Image/programmer.png",
      path: "/courses/ai_machine",
      desc: "Dive into the world of Artificial Intelligence and Machine Learning, exploring algorithms, neural networks."
    },
    {
      name: "Web Development",
      img: "/Assets/Image/web-dev.png",
      path: "/courses/webdesign",
      desc: "Learn the fundamentals of Web Development, from HTML, CSS, and JavaScript to advanced frameworks like React and Angular."
    },
    {
      name: "Cyber Security",
      img: "/Assets/Image/app-development.png",
      path: "/courses/cyber-sec",
      desc: "Master the essentials of Cyber Security, including ethical hacking, penetration testing, and digital forensics."
    },
    {
      name: "Digital Media",
      img: "/Assets/Image/analysis.png",
      path: "/courses/uiuxdesign",
      desc: "Explore the creative and technical aspects of Digital Media, covering topics like graphic design, video production, and UI/UX design."
    }
  ];

  return (
    <div>
      <section className="py-20 text-black bg-[#cdd6ec]">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold">Courses We Offer</h2>
            <p className="mx-auto mt-4 text-lg font-bold text-[#302929]">
              We are committed to giving students access to amazing, quality and
              cutting-edge tech skills that will help secure their place in the
              future, regardless of their career paths.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {icn.map((item, index) => (
              <Link to={item.path} key={index}>
                <div
                  className="flex flex-col items-center justify-center p-6 mx-4 mb-8 text-center transition rounded-lg shadow-xl bg-[#6171A9] hover:border-white hover:shadow-[#212C58]"
                  style={{ maxWidth: "300px" }} // Optional: Set max-width for better responsiveness
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 mb-4"
                  />
                  <h3 className="mb-2 text-xl font-bold">{item.name}</h3>
                  <p className="text-slate-200">
                    {item.desc ? item.desc : "Learn More"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechSkill;

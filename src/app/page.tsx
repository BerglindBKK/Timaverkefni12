import Image from "next/image"; // Used to import Next.js Image component for optimized images


const firstName = "Shrek";

//object: contactinfo
const contactInfo = {
  email: "shrek@swampmail.com",
  phone: "+123 456 7890",
  location: "Shrek's Swamp, Far Far Away",
};

//list: skills stored in an array
const skills = [
  "Swamp Maintenance",
  "Ogre Roaring",
  "Onion Layer Analysis",
  "Donkey Management",
  "Dragon Communication",
];

//array of objects: work experience
const workExperience = [
  {
    title: "Swamp Owner",
    company: "Far Far Away",
    years: "2001 - Present",
    description: "Responsible for maintaining the swamp and keeping unwelcome guests away.",
  },
  {
    title: "Hero of Far Far Away",
    company: "Far Far Away",
    years: "2004 - Present",
    description: "Saved Princess Fiona, defeated Lord Farquaad, and rescued the kingdom from multiple threats.",
  },
];

// object: education
const education = {
  degree: "Advanced Swampology",
  institution: "Ogre Academy, Far Far Away",
};

const Home = () => {
  return (
    <div className="bg-blue-100 py-4 px-30">
      <div className="bg-white py-2 rounded-xl">
        <main>
          {/* Image */}
          <header className="bg-green-500 rounded-t-xl flex flex-col items-center text-white p-4 gap-4 text-1xl font-bold m-4">
            <Image
              className="profile-picture rounded-full border-white border-4"
              src="/shrek.jpg"
              alt="Shrek in his swamp"
              width={150}
              height={150}
              priority
            />
          </header>
          {/* Display ontact infor */}
          <section>
            <h2 className="bg-orange-500 text-white font-bold p-2 text-xl m-4 rounded-md">Contact Information</h2>
            <p className="px-2 m-4">
              <b>Email:</b> {contactInfo.email} <br />
              <b>Phone:</b> {contactInfo.phone} <br />
              <b>Location:</b> {contactInfo.location}
            </p>
          </section>
          {/* Display skills */}
          <section>
            <h2 className="bg-orange-500 text-white font-bold p-2 text-xl m-4 rounded-md">Skills</h2>
            <ul className="list-disc mx-6 px-4">
              {/* map takes skills and, gives them indeces and works its way through to list them up*/}
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            {/* Display work experience / jobs */}
            <h2 className="bg-orange-500 text-white font-bold p-2 text-xl m-4 rounded-md">Work Experience</h2>
            {/* map creates groups, objects "jobs" from work experience and idexes them. Then works its way through */}
            {workExperience.map((job, index) => (
              <div key={index} className="px-2 mx-4">
                <h3 className="font-bold">{job.title}</h3>
                <p>{job.company} | {job.years}</p>
                <p>{job.description}</p>
              </div>
            ))}
          </section>
          <section>
            {/* Display education */}
            <h2 className="bg-orange-500 text-white font-bold p-2 text-xl m-4 rounded-md">Education</h2>
            <p className="px-2 m-4">
              <b>Degree:</b> {education.degree} <br />
              <b>Institution:</b> {education.institution} <br />
            </p>
          </section>
          {/* FOoter */}
          <footer className="bg-amber-300 italic flex flex-col items-center p-4 m-4 rounded-b-xl">
            <p>"Ogres are like onions. Onions have layers. Ogres have layers." - Shrek</p>
          </footer>
        </main>
      </div>
    </div >
  )
}

export default Home;
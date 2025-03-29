import Image from "next/image";

const firstName = "Shrek";

const contactInfo = {
  email: "shrek@swampmail.com",
  phone: "+123 456 7890",
  location: "Shrek's Swamp, Far Far Away",
};

const skills = [
  "Swamp Maintenance",
  "Ogre Roaring",
  "Onion Layer Analysis",
  "Donkey Management",
  "Dragon Communication",
];

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

const education = {
  degree: "Advanced Swampology",
  institution: "Ogre Academy, Far Far Away",
};

const Home = () => {
  return (
    <div className="bg-blue-100 py-4 px-30">
      <div className="bg-white py-2 rounded-xl">
        <main>
          <header className="bg-green-500 rounded-t-xl flex flex-col items-center text-white p-4 gap-4 text-1xl font-bold m-4">
            <Image
              className="profile-picture rounded-full border-white border-4"
              src="/shrek.jpg"
              alt="Shrek in his swamp"
              width={150}
              height={150}

            />
          </header>
        </main>
        sdkfjgfsdkjg
      </div>
      kjghsdlfkjghd
    </div >
  )
}

export default Home;
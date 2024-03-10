import Image from "next/image";
import Footer from "./Footer";

const Team = () => {
  const teams = [
    {
      name: "John Smith",
      title: "CEO",
      image: "/images/team1.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Elina Williams",
      title: "Senior Developer",
      image: "/images/team2.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Kame Doe",
      title: "CTO",
      image: "/images/team3.jpeg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="options-tab-style">
      <h2 className="text-4xl font-bold">Team</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col gap-y-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-[#E8F4FD] flex flex-col md:flex-row justify-center rounded-lg md:px-7 px-3 py-4 gap-5"
          >
            <div className="flex flex-col justify-center items-center gap-y-1">
              <div className="px-20 md:px-0">
                <Image
                  className="rounded-lg aspect-square"
                  src={team.image}
                  alt={team.name}
                  width={400}
                  height={400}
                />
              </div>
              <h3 className="text-black text-center font-medium text-sm lg:text-lg">
                {team.name}
              </h3>
              <p className="text-xs text-center lg:text-sm">{team.title}</p>{" "}
            </div>
            <p className="lg:mt-8">{team.desc}</p>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default Team;

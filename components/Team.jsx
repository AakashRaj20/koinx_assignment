import Image from "next/image";

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
      title: "Senior Dev",
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
    <div className="bg-white rounded-lg p-10 flex flex-col gap-y-6 text-[#3E424A]">
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
            className="bg-[#E8F4FD] flex justify-center rounded-lg px-7 py-4 gap-x-5"
          >
            <div className="flex flex-col justify-center items-center gap-y-1">
              <Image
                className="rounded-lg aspect-square"
                src={team.image}
                alt={team.name}
                width={350}
                height={350}
              />
              <h3 className="text-black font-medium text-lg">{team.name}</h3>
              <p className="text-sm">{team.title}</p>{" "}
            </div>
            <p className="mt-8">{team.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

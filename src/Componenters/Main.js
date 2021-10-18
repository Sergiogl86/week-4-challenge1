import "../App.css";
import Gentelman from "./Gentelman";

function Main() {
  const gentelmans = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      id: 2,
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];
  return (
    <main class="main">
      <ul class="gentlemen">
        {gentelmans.map((gentelman) => (
          <Gentelman gentelman={gentelman} key={gentelman.id} />
        ))}
      </ul>
    </main>
  );
}

export default Main;

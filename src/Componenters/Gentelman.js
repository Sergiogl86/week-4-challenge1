import "../App.css";

function Gentelman({ gentelman }) {
  return (
    <li class="gentleman">
      <div class="gentleman__avatar-container">
        <img
          class="gentleman__avatar"
          src={"img/" + gentelman.picture}
          alt={"The " + gentelman.name + " pointing at you"}
        />
        <span class="gentleman__initial">{gentelman.name[0]}</span>
      </div>
      <div class="gentleman__data-container">
        <h2 class="gentleman__name">{gentelman.name}</h2>
        <ul class="gentleman__data-list">
          <li class="gentleman__data">
            <span class="gentleman__data-label">Profession:</span>
            {gentelman.profession}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Status:</span>{" "}
            {gentelman.status}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Twitter:</span>{" "}
            {gentelman.twitter}
          </li>
        </ul>
      </div>
      <i class="icon gentleman__icon fas fa-check"></i>
      <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
}

export default Gentelman;

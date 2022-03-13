export default function Suggestions() {
  const suggestedUsers = [
    {
      link: "#",
      userPicture: "media/destinos_e_sonhos.jpg",
      userName: "destinosesonhos",
      isFollower: "Segue você",
    },
    {
      link: "#",
      userPicture: "media/respondeai2.svg",
      userName: "respondeai",
      isFollower: "Segue você",
    },
    {
      link: "#",
      userPicture: "media/meowed.svg",
      userName: "meowed",
      isFollower: "Novo no Instagram",
    },
    {
      link: "#",
      userPicture: "media/barked.svg",
      userName: "barked",
      isFollower: "Segue você",
    },
    {
      link: "#",
      userPicture: "media/9gag.svg",
      userName: "9gag",
      isFollower: "Segue você",
    },
  ];

  return (
    <div>
      <div class="linha-principal">
        <p>
          <strong>Sugestões para você</strong>
        </p>
        <a href="#" class="ver-tudo">
          <strong>Ver tudo</strong>
        </a>
      </div>
      <div class="suggestions">
        {suggestedUsers.map((user) => (
          <SuggestedUser
            link={user.link}
            userPicture={user.userPicture}
            userName={user.userName}
            isFollower={user.isFollower}
          />
        ))}
      </div>
    </div>
  );
}

function SuggestedUser(props) {
  const { link, userPicture, userName, isFollower } = props;
  return (
    <a href={link}>
      <p></p>
      <div class="suggestion">
        <div>
          <img class="suggestion-pic" src={userPicture} />
          <div>
            <p>
              <strong>{userName}</strong>
            </p>
            <p>{isFollower}</p>
          </div>
        </div>
        <p>
          <strong>Seguir</strong>
        </p>
      </div>
    </a>
  );
}

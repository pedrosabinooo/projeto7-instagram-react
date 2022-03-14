export default function Sidebar() {
  const userInfo = {
    profilePic: "assets/img/catanacomics.svg",
    userName: "catanacomics",
    name: "Catana",
  };
  const sugestoes = [
    {
      profilePic: "assets/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      isFollower: "Segue você",
    },
    {
      profilePic: "assets/img/chibirdart.svg",
      nome: "chibirdart",
      isFollower: "Segue você",
    },
    {
      profilePic: "assets/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      isFollower: "Novo no Instagram",
    },
    {
      profilePic: "assets/img/adorable_animals.svg",
      nome: "adorable_animals",
      isFollower: "Segue você",
    },
    {
      profilePic: "assets/img/smallcutecats.svg",
      nome: "smallcutecats",
      isFollower: "Segue você",
    },
  ];

  return (
    <div className="sidebar">
      <div className="usuario">
        <img src={userInfo.profilePic} />
        <div className="texto">
          <strong>{userInfo.userName}</strong>
          {userInfo.name}
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((sugestao) => (
          <div className="sugestao">
            <div className="usuario">
              <img src={sugestao.profilePic} />
              <div className="texto">
                <div className="nome">{sugestao.nome}</div>
                <div className="razao">{sugestao.isFollower}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
        ))}
      </div>
      
      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

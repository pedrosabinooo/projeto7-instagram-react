export default function Navbar() {
  const icones = [
    { name: "paper-plane-outline" },
    { name: "compass-outline" },
    { name: "heart-outline" },
    { name: "person-outline" },
  ];
  const iconesMobile = [{ name: "paper-plane-outline" }];

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="separador"></div>
          <img src="assets/img/logo.png" />
        </div>

        <div className="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div className="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          {icones.map((icone) => (
            <ion-icon name={icone.name}></ion-icon>
          ))}
        </div>

        <div className="icones-mobile">
          {iconesMobile.map((icone) => (
            <ion-icon name={icone.name}></ion-icon>
          ))}
        </div>
      </div>
    </div>
  );
}

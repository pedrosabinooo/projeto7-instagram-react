export default function Navbar() {
  const icones = [
    { name: "paper-plane-outline" },
    { name: "compass-outline" },
    { name: "heart-outline" },
    { name: "person-outline" },
  ];
  const iconesMobile = [{ name: "paper-plane-outline" }];

  return (
    <div class="navbar">
      <div class="container">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="assets/img/logo.png" />
        </div>

        <div class="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>

        <div class="instagram-mobile">
          <img src="assets/img/logo.png" />
        </div>

        <div class="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div class="icones">
          {icones.map((icone) => (
            <ion-icon name={icone.name}></ion-icon>
          ))}
        </div>

        <div class="icones-mobile">
          {iconesMobile.map((icone) => (
            <ion-icon name={icone.name}></ion-icon>
          ))}
        </div>
      </div>
    </div>
  );
}

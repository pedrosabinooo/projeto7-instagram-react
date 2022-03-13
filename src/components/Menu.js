export default function Menu() {
  return (
    <header>
      <div class="top">
        <div class="logo">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div class="separador not-mobile"></div>
          <a href="#">
            <img
              class="not-mobile"
              src="media/instagram-logo.svg"
              alt="Instagram Logo"
            />
          </a>
        </div>
        <div class="search-bar not-mobile">Pesquisar</div>
        <img
          class="mobile"
          src="media/instagram-logo.svg"
          alt="Instagram Logo"
        />
        <div class="menu">
          <a href="#">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="compass-outline" class="not-mobile"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="heart-outline" class="not-mobile"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="person-outline" class="not-mobile"></ion-icon>
          </a>
        </div>
        <div class="mobile mobile-menu">
          <a href="#">
            <ion-icon name="home"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="search"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="add-circle-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="heart-outline"></ion-icon>
          </a>
          <a href="#">
            <ion-icon name="person-outline"></ion-icon>
          </a>
        </div>
      </div>
    </header>
  );
}

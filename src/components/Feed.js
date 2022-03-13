export default function Feed() {
    return (
      <div class="feed">
        <div class="stories">
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/9gag.svg" />
              <p>9gag</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/respondeai2.svg" />
              <p>respondeai</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/meowed.svg" />
              <p>meowed</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/urban_streetart.jpg" />
              <p>urban_str...</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/driven-logo.jpeg" />
              <p>driven</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/barked.svg" />
              <p>barked</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/perrengue_chique.jpg" />
              <p>perreng...</p>
            </div>
          </a>
          <a href="#">
            <div class="single-story">
              <img class="story-border" src="media/stories_background.svg" />
              <img class="profile-pic" src="media/destinos_e_sonhos.jpg" />
              <p>destino...</p>
            </div>
          </a>
          <a href="#">
            <div class="seta not-mobile">
              <img src="media/arrow.svg" alt="Scroll" />
            </div>
          </a>
        </div>
        <div class="post">
          <div class="post-top">
            <a href="#">
              <div class="user-info">
                <img src="media/barked.svg" alt="Barked" />
                <p>
                  <strong>barked</strong>
                </p>
              </div>
            </a>
            <a href="#">
              <ion-icon class="ion" name="ellipsis-horizontal"></ion-icon>
            </a>
          </div>
          <div class="post-middle">
            <a href="#">
              <img src="media/boxer.jpg" alt="" />
            </a>
          </div>
          <div class="post-bottom">
            <div class="icons">
              <div class="left-icons">
                <a href="#">
                  <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
              </div>
              <a href="#">
                <ion-icon name="bookmark-outline"></ion-icon>
              </a>
            </div>
            <div class="likes">
              <a href="#">
                <img src="media/respondeai2.svg" alt="RespondeAi" />
              </a>
              <p>
                Curtido por{" "}
                <a href="#">
                  <strong>respondeai</strong>
                </a>{" "}
                e{" "}
                <a href="#">
                  <strong>outras 101.523 pessoas</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="post-top">
            <a href="#">
              <div class="user-info">
                <img src="media/um-cartao-logo.png" alt="Um cartão" />
                <p>
                  <strong>umcartao</strong>
                </p>
              </div>
            </a>
            <a href="#">
              <ion-icon class="ion" name="ellipsis-horizontal"></ion-icon>
            </a>
          </div>
          <div class="post-middle">
            <img src="media/um-cartao-post.png" alt="media" />
          </div>
          <div class="post-bottom">
            <div class="icons">
              <div class="left-icons">
                <a href="#">
                  <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </a>
                <a href="#">
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
              </div>
              <a href="#">
                <ion-icon name="bookmark-outline"></ion-icon>
              </a>
            </div>
            <div class="likes">
              <a href="#">
                <img src="media/meowed.svg" alt="meowed" />
              </a>
              <p>
                Curtido por{" "}
                <a href="#">
                  <strong>meowed</strong>
                </a>{" "}
                e{" "}
                <a href="#">
                  <strong>outras 99.153 pessoas</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

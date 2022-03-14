export default function Posts() {
  const posts = [
    {
      fotoPerfil: "assets/img/meowed.svg",
      nome: "meowed",
      conteudo: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      curtidoPorImagem: "assets/img/respondeai.svg",
    },
    {
      fotoPerfil: "assets/img/barked.svg",
      nome: "barked",
      conteudo: "assets/img/dog.svg",
      curtidoPor: "adorable_animals",
      curtidoPorImagem: "assets/img/adorable_animals.svg",
    },
  ];  
  return (
        <div class="posts">
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/meowed.svg" />
              meowed
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/gato-telefone.svg" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src="assets/img/barked.svg" />
              barked
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src="assets/img/dog.svg" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/adorable_animals.svg" />
              <div class="texto">
                Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  function Post() {
      return (
        <div class="post">
          {posts.map((props) => topo(props))}
          {posts.map((props) => conteudo(props))}
    
          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>
    
            {posts.map((props) => curtidas(props))}
          </div>
        </div>
      );
    }
}

  function topo(props) {
    return (
        <div class="topo">
          <div class="usuario">
            <img src={props.fotoPerfil} />
            {props.nome}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
    )
}

function conteudo(props) {
    return (
        <div class="conteudo">
          <img src={props.conteudo} />
        </div>
    )
}

function curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.curtidoPorImagem} />
            <div class="texto">
              Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
        </div>
    )
    }
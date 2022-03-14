import Post from "./components/Post";

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
      {posts.map(props => <Post fotoPerfil={props.fotoPerfil} nome={props.nome} conteudo={props.conteudo} curtidoPor={props.curtidoPor} curtidoPorImagem={props.curtidoPorImagem}/>)}
    </div>
  );
}

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
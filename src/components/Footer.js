export default function Footer() {
  const links = [
    { link: "#", linkName: "Sobre", separator: " • " },
    { link: "#", linkName: "Ajuda", separator: " • " },
    { link: "#", linkName: "Imprensa", separator: " • " },
    { link: "#", linkName: "API", separator: " • " },
    { link: "#", linkName: "Carreiras", separator: " • " },
    { link: "#", linkName: "Privacidade", separator: " • " },
    { link: "#", linkName: "Termos", separator: " • " },
    { link: "#", linkName: "Localizações", separator: " • " },
    { link: "#", linkName: "Contas mais relevantes", separator: " • " },
    { link: "#", linkName: "Hashtags", separator: " • " },
    { link: "#", linkName: "Idioma", separator: "" },
  ];

  return (
    <footer>
      <div class="links">
        {links.map((item) => (
          <Links
            link={item.link}
            linkName={item.linkName}
            separator={item.separator}
          />
        ))}
      </div>
      <div class="inst">© 2022 INSTAGRAM FROM META</div>
    </footer>
  );
}

function Links(props) {
  const { link, linkName, separator } = props;
  return (
    <p>
      <a href={link}>{linkName}</a>
      {separator}
    </p>
  );
}

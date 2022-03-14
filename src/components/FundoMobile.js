export default function FundoMobile() {
  const icones = [
    { name: "home" },
    { name: "search-outline" },
    { name: "add-circle-outline" },
    { name: "heart-outline" },
    { name: "person-outline" },
  ];

  return (
    <div className="fundo-mobile">
      {icones.map((icone) => (
        <ion-icon name={icone.name}></ion-icon>
      ))}
    </div>
  );
}

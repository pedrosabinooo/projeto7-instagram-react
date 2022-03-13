export default function Account() {
  const userData = {
    imgSource: "media/fundo vermelho.jfif",
    userName: "pedrosabinooo",
    userFullName: "Pedro Sabino",
  };
  return (
    <div class="account">
      <img class="profile-pic" src={userData.imgSource} />
      <div>
        <p>
          <strong>{userData.userName}</strong>
        </p>
        <p>{userData.userFullName}</p>
      </div>
    </div>
  );
}

import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

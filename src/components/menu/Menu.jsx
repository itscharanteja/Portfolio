import List from "./list/List";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <List
        set={() => {
          setMenuOpen(false);
        }}
        menuOpen={menuOpen}
      />
    </div>
  );
}
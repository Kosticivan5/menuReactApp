import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import MenuItems from "./MenuItems";
import Buttons from "./Buttons";

const App = () => {
  const [data, setData] = useState(menu);

  const handleCategories = (category) => {
    if (category === "all") {
      setData(menu);
      return;
    }
    const menuCategory = menu.filter((item) => item.category === category);
    setData(menuCategory);
  };

  return (
    <section className="menu">
      <Title />;
      <Buttons data={menu} handleCategories={handleCategories} />
      <MenuItems data={data} />
    </section>
  );
};
export default App;

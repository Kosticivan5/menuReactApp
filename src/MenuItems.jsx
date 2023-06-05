const MenuItems = ({ data }) => {
  return (
    <div className="section-center">
      {data.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img className="img" src={img} alt={title} />

            <div className="item-info">
              <header>
                <h5>{title}</h5>
                <span className="item-price"> ${price}</span>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default MenuItems;

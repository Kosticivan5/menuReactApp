const Buttons = ({ data, handleCategories }) => {
  const categories = new Set(
    data.map((item) => {
      return item.category;
    })
  );
  const uniqueCategories = ["all", ...categories];
  return (
    <div className="btn-container">
      {uniqueCategories.map((category, index) => {
        return (
          <button
            key={index}
            className="btn"
            type="button"
            onClick={() => handleCategories(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;

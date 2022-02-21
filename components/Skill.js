import Style from "../styles/Home.module.css";

const Skill = (props) => {
  const { skil } = props;

  const getRandomColor = () => {
    let letters = "012345".split("");
    let color = "#";
    color += letters[Math.round(Math.random() * 5)];
    letters = "0123456789ABCDEF".split("");
    for (let i = 0; i < 5; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  };

  return (
    <div
      className={[
        "mx-4",
        "mb-6",
        "p-8",
        "ease-in-out duration-300",
        "hover:scale-110",
        Style?.bgDusk,
      ].join(" ")}
    >
      <h6 className="text-xl mb-9">{skil?.name}</h6>
      <div className="flex flex-wrap">
        {skil?.languages.map((val, key) => (
          <div
            key={key}
            style={{ backgroundColor: getRandomColor() }}
            className="shadow-lg mr-4 rounded ease-in-out duration-300
        hover:scale-110 px-4 py-2 my-4"
          >
            <p className="text-dawn font-bold">{val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

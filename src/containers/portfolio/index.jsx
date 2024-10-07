import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "MyShop",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Free ads",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Postit",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "TWP",
    image: ImageFour,

    link: "",
  },
  {
    id: 3,
    name: "YOWL",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "ToDo List",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "My Showtime",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "DASHBOARD",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "My Rotten Tomatoes",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "Trelltech",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "Time management",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

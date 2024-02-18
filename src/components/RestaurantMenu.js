import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./Restaurantcategory";

const RestaurantMenu = () => {
  const [resMenuList, setresMenuList] = useState(null);
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        id +
        "&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A630%2C%22primaryRestaurantId%22%3A23663%2C%22cloudinaryId%22%3A%2203501c33ecb3a3105124441e541e6fe4%22%2C%22brandId%22%3A630%2C%22dishFamilyId%22%3A%22846649%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION"
    );

    const menuData = await data.json();
    setresMenuList(menuData?.data);
  };

  if (!resMenuList) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resMenuList.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenuList.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(itemCards);

  // const categories =
  //   resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (cat) => {
  //       cat.card?.card?.["@type"] ===
  //         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  //     }
  //   );

  const categories =
    resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div className="menu ">
      <div className="head flex flex-col justify-center items-center">
        <h1 className="font-extrabold my-10 text-4xl">{name}</h1>
        <p className="font-semibold text-xl">
          {costForTwoMessage} - {cuisines.join(",")}
        </p>
      </div>

      {categories.map((item, index) => (
        <RestaurantCategory
          key={item.card.card.title}
          data={item.card.card}
          showItems={index === showIndex && true}
          setShowIndex={() => {
            setShowIndex(index);
          }}
        />
      ))}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - {"Rs. "}
            {res.card.info.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;

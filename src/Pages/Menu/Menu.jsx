import { Helmet } from "react-helmet-async";
import Cover from "../Sheared/Cover/Cover";
import coverImage from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuList from "../../Component/MenuList/MenuList";
import useHook from "../../useHook/useHook";
import MenuCard from "../../Component/MenuList/MenuCard";


const Menu = () => {

  const [menu]=useHook([]);
  const offer= menu.filter(items => items.category ==="offered")
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  
  console.log(Math.floor(dessert.length / 2));

  return (
    <div className="md:container mx-auto">
      <Helmet>
        <title>Brisro Boss || Menu</title>
      </Helmet>
      <Cover
        image={coverImage}
        title="OUR MENU"
        content="WOULD YOU LIKE TO TRY A DIsHI?"
      ></Cover>
      <SectionTitle
        subTitle="----Don't miss----"
        mainTitle="TODAY'S OFFER"
      ></SectionTitle>
      <section className="grid grid-cols-2  gap-12 py-12 ">
        {offer.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </section>
      <Cover
        image={coverImage}
        title="OUR MENU"
        content="WOULD YOU LIKE TO TRY A DISHI .?"
      ></Cover> 
      <SectionTitle
        subTitle="----Don't miss----"
        mainTitle="TODAY'S OFFER"
      ></SectionTitle>

      <section className=" grid grid-cols-2  gap-12 py-12 ">
        {dessert.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </section>
      <Cover
        image={coverImage}
        title="OUR MENU"
        content="WOULD YOU LIKE TO TRY A DIsHI?"
      ></Cover>
      <SectionTitle
        subTitle="----Don't miss----"
        mainTitle="TODAY'S OFFER"
      ></SectionTitle>
      <section className="grid grid-cols-2  gap-12 py-12 ">
        {pizza.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </section>
      <Cover
        image={coverImage}
        title="OUR MENU"
        content="WOULD YOU LIKE TO TRY A DIsHI?"
      ></Cover>
    </div>
  );
};

export default Menu;

import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import useHook from "../../useHook/useHook";





const MenuList = () => {

  const [menu]=useHook();
  const popularItem= menu.filter(items => items.category==="popular")  
    return (
      <div className="">
        <section className="grid grid-rows-3 grid-flow-col gap-12 py-12 ">
          {popularItem.map((item) => (
            <MenuCard item={item} key={item._id}></MenuCard>
          ))}
        </section>
        <button className="btn btn-outline flex flex-col  mb-6 border-0 border-b-4 mx-auto  ">
          View Full Menu
        </button>
      </div>
    );
};

export default MenuList;
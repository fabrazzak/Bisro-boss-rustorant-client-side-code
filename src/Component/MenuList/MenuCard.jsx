
const MenuCard = ({item}) => {

    const {image,name,price,recipe}=item;
    return (
          <div className="menu-item flex">
                <img src={image} alt=""  className="w-32 " style={{
    borderRadius: '0px 234px 115px 233px',
  }}/>
                <div className="menu-item-info ms-4">
                    <h1 className="text-xl font-bold text-black px-4 pb-4 uppercase">{name}---------------</h1>
                    <p className="text-lg px-4 w-11/12">{recipe}</p>
                </div>
                <h1 className="text-yellow-500 font-bold text-xl"> $<span>{price}</span> </h1>
            </div>
    );
};

export default MenuCard;
import MenuList from "../../../Component/MenuList/MenuList";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Boss from "./Boss";
import { Helmet } from 'react-helmet-async';

const Home = () => {


    
    return (
        <div className="md:container mx-auto">

            <Helmet>
                <title>Bristo Boss || Home</title>
            </Helmet>


            <Banner></Banner> 
            <Category></Category>
            <Boss></Boss>
            <SectionTitle subTitle={"---Check it out--" } mainTitle={"Form Our Menu"}></SectionTitle>
            <MenuList></MenuList>
        </div>
    )
};

export default Home;
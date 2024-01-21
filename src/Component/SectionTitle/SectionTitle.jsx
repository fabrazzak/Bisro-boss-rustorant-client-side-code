
const SectionTitle = ({subTitle, mainTitle}) => {
    return (
        <div className=" md:w-3/12 mx-auto text-center py-6">

            <p className="text-orange-600 mb-3">{subTitle}</p>
            <h3 className="text-black text-3xl  border-y-4 py-6 font-semibold">{mainTitle}</h3>



            
        </div>
    );
};

export default SectionTitle;
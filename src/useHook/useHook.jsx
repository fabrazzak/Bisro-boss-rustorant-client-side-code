import { useEffect, useState } from "react";

const useHook = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {

        fetch("menu.json")
        .then((res) => res.json())
        .then(data => setMenu(data));
      
    }, []);
    return [menu]
};

export default useHook;
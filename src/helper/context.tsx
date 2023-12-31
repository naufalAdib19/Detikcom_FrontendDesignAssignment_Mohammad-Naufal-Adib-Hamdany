import React, { createContext, useState } from "react";

type contextType = {
    isNavbarActive: boolean,
    setIsNavbarActive: React.Dispatch<React.SetStateAction<boolean>>,
    galeriIndex: number,
    setGaleriIndex: React.Dispatch<React.SetStateAction<number>>,
    articleType: number,
    setArticleType: React.Dispatch<React.SetStateAction<number>>
}

export const Context = createContext<contextType>({
    isNavbarActive: false,
    setIsNavbarActive: () => {},
    galeriIndex: 0,
    setGaleriIndex: () => {},
    articleType: 0,
    setArticleType: () => {}
});

const Provider = ({children}: {children: React.ReactNode}) => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const [galeriIndex, setGaleriIndex] = useState(0);
    const [articleType, setArticleType] = useState(0);
    
    return(
        <Context.Provider value={{isNavbarActive, setIsNavbarActive, galeriIndex, setGaleriIndex, articleType, setArticleType}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;
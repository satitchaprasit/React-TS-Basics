import { type ReactNode } from "react";

interface HeaderProps {
    image: {
        src: string;
        alt: string;
    };

    children: ReactNode;
} // end interface


export default function Header({image,children}: HeaderProps){
    return (<article>
        <div>
            <img src={image.src} alt={image.alt} />
            <i>{children}</i>
        </div>
        
    </article>
   );
}

import { FC, type ReactNode } from "react";

// You can also use interface instead of type (depend on your personal preference), 
// Unless you work on some library you plan to distribute to other developers,
// In that case you might prefer an interface becasue it's a bit more extensible


/*
type MyCourseGoalProps = {
    title:string; 
    children:ReactNode;
}
*/

/*
// you can also use with children like this
type MyCourseGoalProps = PropsWithChildren<{ title: string; }>;
*/


interface MyCourseGoalProps {
    id: number;
    title:string; 
    children:ReactNode;
    onDelete:  (id: number) => void;
}

// FC stands for Functional Component
const CourseGoal: FC<MyCourseGoalProps> = ( {id, title, children, onDelete}) => {
    return (<article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
   );
}

export default CourseGoal;

// export default function CourseGoal( {title, children}: MyCourseGoalProps ){
//     return (<article>
//         <div>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </div>
//         <button>Delete</button>
//     </article>
//    );
// }
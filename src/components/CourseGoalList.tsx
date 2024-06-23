import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";

type MyCourseGoalListProps = {
    goals: CGoal[];
};

export default function CourseGoalList( {goals}: MyCourseGoalListProps){
    return (
        <ul>
            {goals.map( (goal) => (
                <li key={goal.id}>
                <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
                </CourseGoal>
                </li>
        ))}
      </ul>
    )
}
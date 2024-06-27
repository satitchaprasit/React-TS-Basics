import { FormEvent, useRef } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) =>  void;
};

export default function NewGoal({onAddGoal}: NewGoalProps){
    const goal = useRef<HTMLInputElement>(null); // useRef, when called, give you a ref object (need to add "null" as an argument)
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        
        onAddGoal(enteredGoal, enteredSummary);

        //new FormData(event.currentTarget); 
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal: </label>
                <input type="text" id="goal" ref={goal}  />
            </p>
            <p>
                <label htmlFor="summary">Short summary: </label>
                <input type="summary" id="summary" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}
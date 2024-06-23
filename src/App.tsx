import './App.css'

import Header from './components/Header';
import goalsImg from './assets/goals.png'
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;

};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  
  function handleAddGoal(){
      setGoals( prevGoals => {
        const newGoal: CourseGoal = {
          id: Math.random(),
          title: 'Learn React + TS',
          description: 'Learn React + TS'
        };
        return [...prevGoals, newGoal];
      });
  } // end function
  
  return <main>
    <Header image={{src: goalsImg, alt: 'A list og goals'}}>
      <h1>Your Course Goals</h1>
    </Header>
    <button onClick={handleAddGoal}>Add Goal</button>

    <CourseGoalList goals={goals} />

    
    
  </main>;
}

export default App

import './App.css';
import CourseForm from './component/courseForm';
import CourseList from './component/courseList';

function App() {
  return (
    <div className="App">
      <h1>zustand</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;

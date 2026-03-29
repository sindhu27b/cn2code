import { Routes, Route } from 'react-router-dom';
import HomeView from './components/HomeView';
import CourseDetailView from './components/CourseDetailView';
import { courses } from './data/courses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView courses={courses} />} />
      <Route path="/:courseId" element={<CourseDetailView />} />
      <Route path="/:courseId/:topicId" element={<CourseDetailView />} />
    </Routes>
  );
}

export default App;

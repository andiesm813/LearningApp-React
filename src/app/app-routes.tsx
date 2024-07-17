import { redirect } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Courses from './courses/courses';
import Tasks from './tasks/tasks';
import Progress from './progress/progress';
import Profile from './profile/profile';
export const routes = [
  { index: true, loader: () => redirect('dashboard') },
  { path: 'dashboard', element: <Dashboard />, text: 'Dashboard' },
  { path: 'courses', element: <Courses />, text: 'Courses' },
  { path: 'tasks', element: <Tasks />, text: 'Tasks' },
  { path: 'progress', element: <Progress />, text: 'Progress' },
  { path: 'profile', element: <Profile />, text: 'Profile' }
];

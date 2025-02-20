import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TaskBoard from '../pages/TaskBoard';

const MainLayout = () => {
  return (
    <div className="bgColor">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <TaskBoard></TaskBoard>
    </div>
  );
};

export default MainLayout;

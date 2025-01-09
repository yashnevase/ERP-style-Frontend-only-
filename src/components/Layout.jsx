import {useState} from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom';

const layout = () => {
  const [open, setOpen] = useState(true); // Sidebar state
  return (
    <div>
      <div className='flex'>
        <Sidebar  open={open} setOpen={setOpen} />
        <main className={'w-full  '}>
          <Header />
          <div className='p-4'>
            <Outlet />
          </div>        
        </main>
      </div>
    </div>
  );
};

export default layout;
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import styles from './MainLayout.module.css';

export default function MainLayout(){
  const [open,setOpen]=useState(false);
  return <div className={styles.shell}>
    <Sidebar open={open} close={()=>setOpen(false)} />
    <main className={styles.main}>
      <button className={styles.mobileBtn} onClick={()=>setOpen(true)}>☰</button>
      <Outlet />
    </main>
  </div>
}

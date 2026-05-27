import { Bell, CalendarDays } from 'lucide-react';
import styles from './Header.module.css';
export default function Header(){return <div className={styles.header}><div className={styles.date}><CalendarDays size={18}/>01/05/2024 - 31/05/2024⌄</div><button className={styles.bell}><Bell size={19}/></button></div>}

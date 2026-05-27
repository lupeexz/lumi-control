import styles from './LoadingSkeleton.module.css';
export default function LoadingSkeleton(){return <div className={styles.wrap}>{Array.from({length:8}).map((_,i)=><div key={i} className={styles.skeleton}/>)}</div>}

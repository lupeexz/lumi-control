import styles from './Charts.module.css';
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export default function Goals({goals}){return <div className={`panel ${styles.goals}`}><h3>Metas de Economia</h3>{goals.map(g=><div className={styles.goal} key={g.label}><div><strong>{g.label}</strong><span>{g.percent}%</span></div><div className={styles.track}><i style={{width:`${g.percent}%`}} /></div><p>{money(g.value)} / {money(g.target)}</p></div>)}</div>}

import { DollarSign, Leaf, TrendingUp, Zap } from 'lucide-react';
import styles from './StatCard.module.css';
const icons={Zap,DollarSign,TrendingUp,Leaf};
export default function StatCard({stat}){const Icon=icons[stat.icon]||Zap;return <article className={`${styles.card} ${styles[stat.tone]}`}><div className={styles.icon}><Icon size={26}/></div><div><p>{stat.title}</p><h2>{stat.value}</h2><strong>{stat.change}</strong><span>vs mês anterior</span></div></article>}

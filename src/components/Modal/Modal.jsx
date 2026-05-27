import { X } from 'lucide-react';
import styles from './Modal.module.css';
export default function Modal({title,children,onClose}){return <div className={styles.backdrop} onMouseDown={onClose}><section className={styles.modal} onMouseDown={e=>e.stopPropagation()}><header><h3>{title}</h3><button onClick={onClose}><X size={18}/></button></header>{children}</section></div>}

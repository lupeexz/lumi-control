import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import LoadingSkeleton from '../../components/Loading/LoadingSkeleton.jsx';
import StatCard from '../../components/StatCard/StatCard.jsx';
import EnergyLineChart from '../../components/Charts/EnergyLineChart.jsx';
import CompanyDonut from '../../components/Charts/CompanyDonut.jsx';
import Goals from '../../components/Charts/Goals.jsx';
import TopCompaniesTable from '../../components/Tables/TopCompaniesTable.jsx';
import { mockApi } from '../../services/mockApi.js';
import styles from './Dashboard.module.css';
export default function Dashboard(){const [data,setData]=useState(null);useEffect(()=>{mockApi.getDashboard().then(setData)},[]);return <div className="page"><div className="pageHeader"><div><h1>Dashboard Geral</h1><p>Visão geral do consumo de energia</p></div><Header/></div>{!data?<LoadingSkeleton/>:<><section className={styles.stats}>{data.stats.map(s=><StatCard key={s.title} stat={s}/>)}</section><section className={styles.charts}><EnergyLineChart data={data.energySeries}/><CompanyDonut data={data.consumptionShare}/></section><section className={styles.bottom}><TopCompaniesTable companies={data.topCompanies}/><Goals goals={data.goals}/></section></>}</div>}

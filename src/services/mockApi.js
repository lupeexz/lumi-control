import { admin, companies, consumptionShare, energySeries, suggestions } from '../data/mockData.js';

const delay = (data, ms = 450) => new Promise((resolve) => setTimeout(() => resolve(structuredClone(data)), ms));

export const mockApi = {
  getAdmin: () => delay(admin),
  getCompanies: () => delay(companies),
  getDashboard: () => delay({
    stats: [
      { title: 'Consumo Total (kWh)', value: '52.680', change: '+12.5%', tone: 'green', icon: 'Zap' },
      { title: 'Custo Total (R$)', value: 'R$ 26.340,00', change: '+8.2%', tone: 'blue', icon: 'DollarSign' },
      { title: 'Economia Gerada', value: 'R$ 4.230,00', change: '+15.3%', tone: 'yellow', icon: 'TrendingUp' },
      { title: 'CO₂ Evitado', value: '18.7 ton', change: '+10.1%', tone: 'purple', icon: 'Leaf' },
    ],
    energySeries,
    consumptionShare,
    topCompanies: companies.slice(0, 5),
    goals: [
      { label: 'Meta mensal', value: 4230, target: 5600, percent: 75 },
      { label: 'Meta anual', value: 18450, target: 41000, percent: 45 },
    ],
  }),
  getSuggestions: () => delay(suggestions),
};

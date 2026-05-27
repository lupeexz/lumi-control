export const admin = { name: 'Administrador', email: 'admin@lumicontrol.com' };

export const companies = [
  { id: 1, name: 'Lumi Control Ind.', sector: 'Industrial', logo: '⚡', averageConsumption: 17120, cost: 8560, economy: 15.2, color: '#2f80ed' },
  { id: 2, name: 'SolarTech', sector: 'Tecnologia', logo: '☀️', averageConsumption: 14800, cost: 7400, economy: 12.8, color: '#facc15' },
  { id: 3, name: 'GreenPower Ltda', sector: 'Comercial', logo: '🍃', averageConsumption: 10420, cost: 5210, economy: 9.7, color: '#22c55e' },
  { id: 4, name: 'Eletrix Solutions', sector: 'Serviços', logo: '❄️', averageConsumption: 6540, cost: 3270, economy: 8.3, color: '#f97316' },
  { id: 5, name: 'EcoBuilding', sector: 'Predial', logo: '🏢', averageConsumption: 3800, cost: 1900, economy: 6.1, color: '#84cc16' },
  { id: 6, name: 'BioEnergy Hub', sector: 'Industrial', logo: '🌱', averageConsumption: 3320, cost: 1660, economy: 5.9, color: '#14b8a6' },
  { id: 7, name: 'Smart Office', sector: 'Corporativo', logo: '🏙️', averageConsumption: 2980, cost: 1490, economy: 4.4, color: '#8b5cf6' },
];

export const energySeries = Array.from({ length: 31 }, (_, i) => {
  const base = [1900, 2700, 2100, 1800, 2500, 3300, 3500, 2850, 2550, 3000, 4050, 3300, 2250, 2850, 2950, 2500, 2100, 2900, 4200, 4300, 4550, 3750, 2750, 2500, 3350, 4050, 3650, 3100, 2750, 2500, 2400];
  return { day: `${String(i + 1).padStart(2, '0')}/05`, kwh: base[i] };
});

export const suggestions = [
  { id: 1, title: 'Substituir iluminação por LED', category: 'Iluminação', impact: 'Alto Impacto', description: 'A substituição das lâmpadas atuais por LED pode reduzir o consumo de iluminação em até 60%.', saving: 1240, reduction: 18, icon: 'Lightbulb' },
  { id: 2, title: 'Reduzir consumo fora do horário comercial', category: 'Operacional', impact: 'Médio Impacto', description: 'Programar o desligamento automático de equipamentos fora do expediente.', saving: 860, reduction: 12, icon: 'Clock' },
  { id: 3, title: 'Ajustar temperatura do ar-condicionado', category: 'Climatização', impact: 'Alto Impacto', description: 'Manter a temperatura entre 23°C e 25°C pode gerar economia de energia.', saving: 970, reduction: 14, icon: 'Snowflake' },
  { id: 4, title: 'Monitorar picos de demanda', category: 'Análise', impact: 'Médio Impacto', description: 'Acompanhar horários de pico ajuda a redistribuir cargas e reduzir custos.', saving: 710, reduction: 9, icon: 'Activity' },
];

export const consumptionShare = [
  { name: 'Lumi Control Ind.', value: 32.5, color: '#2f80ed' },
  { name: 'SolarTech', value: 28.1, color: '#facc15' },
  { name: 'GreenPower Ltda', value: 19.8, color: '#22c55e' },
  { name: 'Eletrix Solutions', value: 12.4, color: '#f97316' },
  { name: 'Outras', value: 7.2, color: '#d1d5db' },
];

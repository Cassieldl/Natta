export const CATTLE = [
  { id: '01', name: 'Boneca', liters: 28, lactation: '3° lactação · 6 anos', delta: '+5%', status: 'ok' },
  { id: '07', name: 'Fada',   liters: 24, lactation: '2° lactação · 4 anos', delta: '+2%', status: 'ok' },
  { id: '12', name: 'Mimosa', liters: 14, lactation: '1° lactação · 3 anos', delta: '-18%', status: 'alert', note: 'mancando' },
  { id: '19', name: 'Estrela',liters: 10, lactation: '4° lactação · 7 anos', delta: '-22%', status: 'warn', note: 'queda 22%' },
  { id: '23', name: 'Princesa',liters:22, lactation: '2° lactação · 5 anos', delta: '—',   status: 'ok' },
  { id: '31', name: 'Maravilha',liters:18,lactation:'1° lactação · 3 anos', delta: '+8%', status: 'ok' },
]

export const PRODUCTION_HISTORY = [
  { day: 'Sáb 19', liters: 230, ref: 212 },
  { day: 'Sex 18', liters: 204, ref: 212 },
  { day: 'Qui 17', liters: 212, ref: 212 },
  { day: 'Qua 16', liters: 225, ref: 212 },
  { day: 'Ter 15', liters: 209, ref: 212 },
  { day: 'Seg 14', liters: 215, ref: 212 },
  { day: 'Dom 13', liters: 198, ref: 212 },
]

export const CHART_DATA = [
  { day: 'Seg', liters: 198 },
  { day: 'Ter', liters: 215 },
  { day: 'Qua', liters: 209 },
  { day: 'Qui', liters: 225 },
  { day: 'Sex', liters: 212 },
  { day: 'Sáb', liters: 204 },
  { day: 'Dom', liters: 230 },
]

export const PROFIT_CHART = [
  { month: 'Nov', value: 2100 },
  { month: 'Dez', value: 2440 },
  { month: 'Jan', value: 1980 },
  { month: 'Fev', value: 3200 },
  { month: 'Mar', value: 2640 },
  { month: 'Abr', value: 4280 },
]

export const TIMELINE = [
  { date: 'Hoje 06h14', type: 'g', title: 'Produção registrada: 230L', desc: 'Via WhatsApp. +8% vs média. Acima da meta de 220L.', tag: 'Produção' },
  { date: 'Ontem 14h', type: 'a', title: 'Mimosa apresentou manqueira', desc: 'Alerta criado. Veterinário agendado para quinta, 14h.', tag: 'Saúde' },
  { date: '17/04 09h', type: 'g', title: 'Compra de ração realizada', desc: 'R$4.200 · 2t · Estoque suficiente para 18 dias.', tag: 'Custo' },
  { date: '15/04 16h', type: 'g', title: 'Produção recorde: 238L', desc: 'Melhor dia dos últimos 3 meses. Nova dieta surtiu efeito.', tag: 'Produção' },
  { date: '12/04 11h', type: 'r', title: 'Estrela com queda de produção', desc: 'Queda de 22% em 5 dias detectada automaticamente.', tag: 'Alerta' },
  { date: '10/04',     type: 'g', title: 'Qualidade do leite aprovada', desc: 'CCS baixa · Sem penalidade · Cooperativa confirmou.', tag: 'Qualidade' },
]

export const ALERTS = [
  { type: 'r', icon: '🐄', title: 'Mimosa (vaca 12) — mancando há 2 dias', desc: 'Produção caiu 18%. Risco de mastite ou lesão. Veterinário agendado para quinta, 14h.', action: 'Ver agenda do veterinário', time: 'há 2 dias' },
  { type: 'r', icon: '📉', title: 'Estrela (vaca 19) — queda de produção', desc: 'Produção caiu 22% em 5 dias. Possível estresse térmico ou início de mastite.', action: 'Registrar observação', time: 'há 5 dias' },
  { type: 'a', icon: '🌾', title: 'Estoque de ração próximo do fim', desc: 'Com o consumo atual, o estoque dura mais 8 dias. Faça o pedido esta semana.', action: 'Anotar pedido feito', time: 'hoje' },
  { type: 'a', icon: '💸', title: 'Custo do mês 4% acima do esperado', desc: 'O aumento da ração impactou a margem. Revisar contrato pode economizar R$300/mês.', action: 'Ver detalhes de custo', time: 'há 3 dias' },
  { type: 'g', icon: '⭐', title: 'Produção recorde esta semana', desc: 'A fazenda produziu 238L na quinta — o melhor dia dos últimos 3 meses.', action: 'Ver o que mudou', time: 'há 3 dias' },
]

export const EXPENSES = [
  { icon: '🌾', bg: '#f3fbf5', name: 'Ração e volumoso', desc: 'Compra quinzenal — 14/04', value: 'R$ 4.200', pct: 100, pctLabel: '55%' },
  { icon: '💊', bg: '#fef8e7', name: 'Veterinário e remédios', desc: 'Visita + medicação Mimosa — 17/04', value: 'R$ 1.800', pct: 43, pctLabel: '24%' },
  { icon: '👷', bg: '#f7f6f2', name: 'Mão de obra', desc: 'Salário mensal — ajudante', value: 'R$ 1.578', pct: 38, pctLabel: '21%' },
]

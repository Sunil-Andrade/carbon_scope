export const categories = [
  { name: 'Reforestation', icon: 'tree', unit: 'trees planted', color: '#53785a' },
  { name: 'Clean energy', icon: 'sun', unit: 'kWh saved', color: '#d7b565' },
  { name: 'Waste reduction', icon: 'recycle', unit: 'kg diverted', color: '#9bb79e' },
  { name: 'Water conservation', icon: 'water', unit: 'litres saved', color: '#87a6b5' },
]

export const demoActions = [
  { id: 'CS-1028', title: 'A greener neighbourhood', category: 'Reforestation', quantity: 120, location: 'Bengaluru, Karnataka', date: '2026-09-12', status: 'Approved', impact: 2.64, credits: 2.64, description: 'Community planting drive with native tree species. Survival monitoring is included in our follow-up plan.', sample: true },
  { id: 'CS-1027', title: 'Powering a brighter tomorrow', category: 'Clean energy', quantity: 840, location: 'Pune, Maharashtra', date: '2026-09-10', status: 'Pending', impact: 0, credits: 0, description: 'Rooftop solar generation recorded during our monthly energy review.', sample: true },
  { id: 'CS-1026', title: 'Less waste. More possibility.', category: 'Waste reduction', quantity: 350, location: 'Bengaluru, Karnataka', date: '2026-09-08', status: 'Approved', impact: 0.72, credits: 0.72, description: 'Office recycling collection delivered to a local recycling partner.', sample: true },
  { id: 'CS-1025', title: 'Every drop counts', category: 'Water conservation', quantity: 4800, location: 'Chennai, Tamil Nadu', date: '2026-09-05', status: 'Pending', impact: 0, credits: 0, description: 'Rainwater collection at the community centre.', sample: true },
  { id: 'CS-1024', title: 'Restore our urban forest', category: 'Reforestation', quantity: 240, location: 'Mysuru, Karnataka', date: '2026-08-25', status: 'Approved', impact: 5.28, credits: 5.28, description: 'Native species restoration across the neighbourhood green belt.', sample: true },
  { id: 'CS-1023', title: 'A cleaner lakeside', category: 'Waste reduction', quantity: 180, location: 'Bengaluru, Karnataka', date: '2026-08-18', status: 'Rejected', impact: 0, credits: 0, description: 'Weekend clean-up drive. Sample review: please include a dated weight receipt and a clear photograph of collected material.', sample: true },
  { id: 'CS-1022', title: 'Roots for the next generation', category: 'Reforestation', quantity: 180, location: 'Mysuru, Karnataka', date: '2026-07-20', status: 'Approved', impact: 3.96, credits: 3.96, description: 'Sample native-tree planting project with a community maintenance plan.', sample: true },
  { id: 'CS-1021', title: 'Circular habits at work', category: 'Waste reduction', quantity: 800, location: 'Pune, Maharashtra', date: '2026-06-15', status: 'Approved', impact: 1.6, credits: 1.6, description: 'Illustrative office materials collection and recycling record.', sample: true },
  { id: 'CS-1020', title: 'Clean power, shared progress', category: 'Clean energy', quantity: 3600, location: 'Chennai, Tamil Nadu', date: '2026-05-10', status: 'Approved', impact: 2.52, credits: 2.52, description: 'Sample renewable electricity contribution. Impact values are illustrative, not a certified conversion methodology.', sample: true },
  { id: 'CS-1019', title: 'Our first hundred trees', category: 'Reforestation', quantity: 100, location: 'Bengaluru, Karnataka', date: '2026-04-12', status: 'Approved', impact: 2.2, credits: 2.2, description: 'Demonstration community planting record from the beginning of the season.', sample: true },
]

export function readSaved(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback } catch { return fallback }
}
export const dateLabel = date => new Date(`${date}T12:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
export const number = value => Number(value).toLocaleString('en-IN', { maximumFractionDigits: 2 })

export function exportActions(actions) {
  const fields = ['id', 'title', 'category', 'quantity', 'location', 'date', 'status', 'impact', 'credits']
  const quote = value => `"${String(value ?? '').replace(/^[=+@\-\t\r]/, "'$&").replaceAll('"', '""')}"`
  const csv = [fields.join(','), ...actions.map(a => fields.map(f => quote(a[f])).join(','))].join('\r\n')
  const url = URL.createObjectURL(new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' }))
  const link = document.createElement('a'); link.href = url; link.download = 'carbonscope-actions.csv'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}

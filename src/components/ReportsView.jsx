import React, { useState } from 'react';
import { Download, BarChart3, Printer } from 'lucide-react';

const ReportsView = ({ transactions, inventory, employees }) => {
  const [period, setPeriod] = useState('today');
  const [reportType, setReportType] = useState('sales');

  const generateReport = () => {
    let reportData = '';
    const date = new Date().toLocaleDateString('fr-FR');

    if (reportType === 'sales') {
      const totalSales = transactions.reduce((sum, t) => sum + t.total, 0);
      const totalTransactions = transactions.length;
      const averageTicket = totalSales / totalTransactions;

      reportData = `
RAPPORT DE VENTES
Date: ${date}
Période: ${period === 'today' ? 'Aujourd\'hui' : period}

--------------------------------
RÉSUMÉ
--------------------------------
Total des ventes: ${totalSales.toFixed(2)}€
Nombre de transactions: ${totalTransactions}
Ticket moyen: ${averageTicket.toFixed(2)}€

--------------------------------
DÉTAIL DES TRANSACTIONS
--------------------------------
${transactions.map(t => 
  `#${t.id} - ${t.date} - ${t.employee} - ${t.total.toFixed(2)}€ (${t.payment})`
).join('\n')}

--------------------------------
Par mode de paiement:
Carte: ${transactions.filter(t => t.payment === 'Carte').reduce((sum, t) => sum + t.total, 0).toFixed(2)}€
Espèces: ${transactions.filter(t => t.payment === 'Espèces').reduce((sum, t) => sum + t.total, 0).toFixed(2)}€
      `;
    } else if (reportType === 'stock') {
      const lowStock = inventory.filter(item => item.stock < item.minStock);
      const totalValue = inventory.reduce((sum, item) => sum + (item.stock * item.price), 0);

      reportData = `
RAPPORT DE STOCK
Date: ${date}

--------------------------------
RÉSUMÉ
--------------------------------
Nombre d'articles: ${inventory.length}
Valeur totale du stock: ${totalValue.toFixed(2)}€
Alertes stock bas: ${lowStock.length}

--------------------------------
STOCK PAR ARTICLE
--------------------------------
${inventory.map(item => 
  `${item.name} - ${item.stock} ${item.unit} (Min: ${item.minStock}) - ${item.category}`
).join('\n')}

${lowStock.length > 0 ? `
--------------------------------
ALERTES STOCK BAS
--------------------------------
${lowStock.map(item => 
  `⚠️ ${item.name} - ${item.stock} ${item.unit} (Min: ${item.minStock})`
).join('\n')}
` : ''}
      `;
    } else if (reportType === 'employees') {
      const totalSales = employees.reduce((sum, e) => sum + e.sales, 0);

      reportData = `
RAPPORT EMPLOYÉS
Date: ${date}

--------------------------------
RÉSUMÉ
--------------------------------
Nombre d'employés: ${employees.length}
Total des ventes: ${totalSales.toFixed(2)}€

--------------------------------
PERFORMANCE PAR EMPLOYÉ
--------------------------------
${employees.map(emp => 
  `${emp.name} (${emp.role})
   Shift: ${emp.shift}
   Ventes: ${emp.sales.toFixed(2)}€
   Statut: ${emp.status === 'active' ? 'En service' : 'Hors service'}
   Salaire: ${emp.salary || 'N/A'}€
`
).join('\n')}
      `;
    }

    // Télécharger le rapport
    const blob = new Blob([reportData], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `rapport_${reportType}_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  };

  const printReport = () => {
    window.print();
  };

  const totalSales = transactions.reduce((sum, t) => sum + t.total, 0);
  const totalTransactions = transactions.length;
  const lowStockCount = inventory.filter(item => item.stock < item.minStock).length;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Rapports et statistiques</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 no-print">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Période</h3>
          <select 
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Aujourd'hui</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="year">Cette année</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Type de rapport</h3>
          <select 
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="sales">Ventes</option>
            <option value="stock">Stocks</option>
            <option value="employees">Employés</option>
            <option value="products">Produits</option>
          </select>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Actions</h3>
          <div className="space-y-2">
            <button 
              onClick={generateReport}
              className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Download size={20} />
              Télécharger
            </button>
            <button 
              onClick={printReport}
              className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center gap-2 transition-colors"
            >
              <Printer size={20} />
              Imprimer
            </button>
          </div>
        </div>
      </div>

      {/* Rapport à imprimer */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">RestauPOS</h1>
          <h2 className="text-xl text-slate-600">
            Rapport {reportType === 'sales' ? 'des Ventes' : reportType === 'stock' ? 'des Stocks' : reportType === 'employees' ? 'des Employés' : 'des Produits'}
          </h2>
          <p className="text-sm text-slate-500 mt-2">Date: {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        {reportType === 'sales' && (
          <div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-sm text-slate-600 mb-1">Total des ventes</div>
                <div className="text-2xl font-bold text-blue-800">{totalSales.toFixed(2)}€</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-sm text-slate-600 mb-1">Transactions</div>
                <div className="text-2xl font-bold text-green-800">{totalTransactions}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="text-sm text-slate-600 mb-1">Ticket moyen</div>
                <div className="text-2xl font-bold text-purple-800">{(totalSales / totalTransactions).toFixed(2)}€</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Détail des transactions</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">ID</th>
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Employé</th>
                  <th className="text-left py-2">Paiement</th>
                  <th className="text-right py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(t => (
                  <tr key={t.id} className="border-b">
                    <td className="py-2">#{t.id}</td>
                    <td className="py-2">{t.date}</td>
                    <td className="py-2">{t.employee}</td>
                    <td className="py-2">{t.payment}</td>
                    <td className="text-right py-2 font-medium">{t.total.toFixed(2)}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {reportType === 'stock' && (
          <div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-sm text-slate-600 mb-1">Articles en stock</div>
                <div className="text-2xl font-bold text-blue-800">{inventory.length}</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="text-sm text-slate-600 mb-1">Alertes stock</div>
                <div className="text-2xl font-bold text-orange-800">{lowStockCount}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-sm text-slate-600 mb-1">Valeur totale</div>
                <div className="text-2xl font-bold text-green-800">
                  {inventory.reduce((sum, item) => sum + (item.stock * item.price), 0).toFixed(2)}€
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Inventaire</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Article</th>
                  <th className="text-left py-2">Catégorie</th>
                  <th className="text-left py-2">Stock</th>
                  <th className="text-left py-2">Min</th>
                  <th className="text-left py-2">Statut</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.category}</td>
                    <td className="py-2">{item.stock} {item.unit}</td>
                    <td className="py-2">{item.minStock} {item.unit}</td>
                    <td className="py-2">
                      {item.stock < item.minStock ? 
                        <span className="text-orange-600 font-medium">⚠️ Stock bas</span> : 
                        <span className="text-green-600 font-medium">✓ OK</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {reportType === 'employees' && (
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-sm text-slate-600 mb-1">Nombre d'employés</div>
                <div className="text-2xl font-bold text-blue-800">{employees.length}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-sm text-slate-600 mb-1">Total des ventes</div>
                <div className="text-2xl font-bold text-green-800">
                  {employees.reduce((sum, e) => sum + e.sales, 0).toFixed(2)}€
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">Performance des employés</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Nom</th>
                  <th className="text-left py-2">Poste</th>
                  <th className="text-left py-2">Shift</th>
                  <th className="text-right py-2">Ventes</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(emp => (
                  <tr key={emp.id} className="border-b">
                    <td className="py-2">{emp.name}</td>
                    <td className="py-2">{emp.role}</td>
                    <td className="py-2">{emp.shift}</td>
                    <td className="text-right py-2 font-medium">{emp.sales.toFixed(2)}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsView;

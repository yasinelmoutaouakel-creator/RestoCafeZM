import React from 'react';
import { Download } from 'lucide-react';

const TransactionsView = ({ transactions }) => {
  
  const exportToCSV = () => {
    const headers = ['ID', 'Date/Heure', 'Employé', 'Articles', 'Paiement', 'Total'];
    const csvContent = [
      headers.join(','),
      ...transactions.map(t => 
        `${t.id},"${t.date}","${t.employee}",${t.items},"${t.payment}",${t.total}`
      )
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Historique des transactions</h2>
        <button 
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Exporter CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Date/Heure</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Employé</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Articles</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Paiement</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {transactions.map(transaction => (
              <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">#{transaction.id}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{transaction.date}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{transaction.employee}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{transaction.items}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.payment === 'Carte' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {transaction.payment}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-bold text-right text-green-600">
                  {transaction.total.toFixed(2)}€
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsView;

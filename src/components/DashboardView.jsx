import React from 'react';
import { DollarSign, ShoppingCart, TrendingUp, AlertTriangle, Calendar, CheckCircle } from 'lucide-react';

const DashboardView = ({ todaySales, todayTransactions, averageTicket, lowStockItems, transactions, employees }) => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-800">Tableau de bord</h2>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar size={16} />
          <span>Aujourd'hui: {new Date().toLocaleDateString('fr-FR')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium opacity-90">Ventes du jour</div>
            <DollarSign className="opacity-80" size={24} />
          </div>
          <div className="text-3xl font-bold">{todaySales.toFixed(2)}€</div>
          <div className="text-xs mt-2 opacity-75">+12% vs hier</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium opacity-90">Transactions</div>
            <ShoppingCart className="opacity-80" size={24} />
          </div>
          <div className="text-3xl font-bold">{todayTransactions}</div>
          <div className="text-xs mt-2 opacity-75">+8 depuis ce matin</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium opacity-90">Ticket moyen</div>
            <TrendingUp className="opacity-80" size={24} />
          </div>
          <div className="text-3xl font-bold">{averageTicket.toFixed(2)}€</div>
          <div className="text-xs mt-2 opacity-75">+5% vs hier</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium opacity-90">Alertes stock</div>
            <AlertTriangle className="opacity-80" size={24} />
          </div>
          <div className="text-3xl font-bold">{lowStockItems.length}</div>
          <div className="text-xs mt-2 opacity-75">Articles à commander</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Dernières transactions</h3>
          <div className="space-y-3">
            {transactions.slice(0, 5).map(transaction => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium text-sm text-slate-800">Transaction #{transaction.id}</div>
                  <div className="text-xs text-slate-500">{transaction.date} - {transaction.employee}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{transaction.total.toFixed(2)}€</div>
                  <div className="text-xs text-slate-500">{transaction.items} articles</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-800">Alertes stock</h3>
          <div className="space-y-3">
            {lowStockItems.length > 0 ? (
              lowStockItems.map(item => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-sm text-slate-800">{item.name}</div>
                    <div className="text-xs text-slate-500">{item.category}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-600">{item.stock} {item.unit}</div>
                    <div className="text-xs text-slate-500">Min: {item.minStock}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-slate-400">
                <CheckCircle size={48} className="mx-auto mb-2 opacity-50" />
                <p>Tous les stocks sont OK</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 text-slate-800">Performances aujourd'hui</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {employees.map(emp => (
            <div key={emp.id} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {emp.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{emp.name}</div>
                  <div className="text-xs text-slate-500">{emp.role}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200">
                <div className="text-lg font-bold text-green-600">{emp.sales.toFixed(2)}€</div>
                <div className="text-xs text-slate-500">Ventes du jour</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

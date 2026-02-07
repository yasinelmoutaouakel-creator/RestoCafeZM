import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  DollarSign,
  BarChart3,
  Menu as MenuIcon,
  X,
  LogOut,
  Truck
} from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, sidebarOpen, setSidebarOpen, currentUser }) => {
  const navigationItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
    { id: 'pos', icon: ShoppingCart, label: 'Caisse' },
    { id: 'transactions', icon: DollarSign, label: 'Transactions' },
    { id: 'inventory', icon: Package, label: 'Stocks' },
    { id: 'employees', icon: Users, label: 'Employés' },
    { id: 'suppliers', icon: Truck, label: 'Fournisseurs' },
    { id: 'reports', icon: BarChart3, label: 'Rapports' },
  ];

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-slate-700">
        {sidebarOpen && <h1 className="text-xl font-bold">RestauPOS</h1>}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-700 rounded">
          {sidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      
      <nav className="flex-1 p-4">
        {navigationItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
              currentView === item.id 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-slate-700 text-slate-300'
            }`}
          >
            <item.icon size={20} />
            {sidebarOpen && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <div className={`flex items-center gap-3 mb-3 ${!sidebarOpen && 'justify-center'}`}>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
            {currentUser.name.charAt(0)}
          </div>
          {sidebarOpen && (
            <div>
              <div className="font-semibold text-sm">{currentUser.name}</div>
              <div className="text-xs text-slate-400">{currentUser.role}</div>
            </div>
          )}
        </div>
        {sidebarOpen && (
          <button className="w-full flex items-center gap-2 p-2 hover:bg-slate-700 rounded text-sm text-slate-300">
            <LogOut size={16} />
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

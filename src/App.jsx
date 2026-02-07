import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import POSView from './components/POSView';
import TransactionsView from './components/TransactionsView';
import InventoryView from './components/InventoryView';
import EmployeesView from './components/EmployeesView';
import ReportsView from './components/ReportsView';
import SuppliersView from './components/SuppliersView';
import { initialTransactions, initialInventory, initialEmployees, menuItems, initialSuppliers } from './data/initialData';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [currentUser] = useState({ name: 'Marie Dubois', role: 'Gérante' });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [transactions, setTransactions] = useState(initialTransactions);
  const [inventory, setInventory] = useState(initialInventory);
  const [employees, setEmployees] = useState(initialEmployees);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [currentOrder, setCurrentOrder] = useState([]);

  const todaySales = transactions.reduce((sum, t) => sum + t.total, 0);
  const todayTransactions = transactions.length;
  const averageTicket = todaySales / todayTransactions;
  const lowStockItems = inventory.filter(item => item.stock < item.minStock);

  const addToOrder = (item) => {
    const existingItem = currentOrder.find(i => i.id === item.id);
    if (existingItem) {
      setCurrentOrder(currentOrder.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCurrentOrder([...currentOrder, { ...item, quantity: 1 }]);
    }
  };

  const removeFromOrder = (itemId) => {
    setCurrentOrder(currentOrder.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId, change) => {
    setCurrentOrder(currentOrder.map(i => {
      if (i.id === itemId) {
        const newQuantity = i.quantity + change;
        return newQuantity > 0 ? { ...i, quantity: newQuantity } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const completeOrder = (paymentMethod) => {
    if (currentOrder.length === 0) return;
    
    const total = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      employee: currentUser.name,
      items: currentOrder.reduce((sum, item) => sum + item.quantity, 0),
      total: total,
      payment: paymentMethod
    };
    
    setTransactions([newTransaction, ...transactions]);
    setCurrentOrder([]);
    alert(`Commande validée: ${total.toFixed(2)}€`);
  };

  const dashboardProps = {
    todaySales,
    todayTransactions,
    averageTicket,
    lowStockItems,
    transactions,
    employees
  };

  const posProps = {
    menuItems,
    currentOrder,
    addToOrder,
    removeFromOrder,
    updateQuantity,
    completeOrder
  };

  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentUser={currentUser}
      />
      
      <div className="flex-1 overflow-auto">
        {currentView === 'dashboard' && <DashboardView {...dashboardProps} />}
        {currentView === 'pos' && <POSView {...posProps} />}
        {currentView === 'transactions' && <TransactionsView transactions={transactions} />}
        {currentView === 'inventory' && <InventoryView inventory={inventory} setInventory={setInventory} suppliers={suppliers} />}
        {currentView === 'employees' && <EmployeesView employees={employees} setEmployees={setEmployees} />}
        {currentView === 'suppliers' && <SuppliersView suppliers={suppliers} setSuppliers={setSuppliers} />}
        {currentView === 'reports' && <ReportsView transactions={transactions} inventory={inventory} employees={employees} />}
      </div>
    </div>
  );
}

export default App;

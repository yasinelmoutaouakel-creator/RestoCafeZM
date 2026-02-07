import React, { useState } from 'react';
import { Plus, AlertTriangle, CheckCircle, X } from 'lucide-react';

const InventoryView = ({ inventory, setInventory, suppliers }) => {
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    stock: 0,
    unit: 'kg',
    minStock: 0,
    price: 0,
    supplierId: ''
  });

  const handleAddItem = () => {
    if (!newItem.name || !newItem.category || !newItem.supplierId) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const supplier = suppliers.find(s => s.id === parseInt(newItem.supplierId));
    const item = {
      id: inventory.length + 1,
      ...newItem,
      stock: parseFloat(newItem.stock),
      minStock: parseFloat(newItem.minStock),
      price: parseFloat(newItem.price),
      supplierId: parseInt(newItem.supplierId),
      supplier: supplier ? supplier.name : ''
    };

    setInventory([...inventory, item]);
    setShowModal(false);
    setNewItem({
      name: '',
      category: '',
      stock: 0,
      unit: 'kg',
      minStock: 0,
      price: 0,
      supplierId: ''
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Gestion des stocks</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Nouvel article
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Article</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Stock actuel</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Stock min</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Prix unitaire</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Fournisseur</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {inventory.map(item => {
              const isLowStock = item.stock < item.minStock;
              return (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.category}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`font-bold ${isLowStock ? 'text-orange-600' : 'text-slate-900'}`}>
                      {item.stock} {item.unit}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.minStock} {item.unit}</td>
                  <td className="px-6 py-4 text-sm text-slate-900">{item.price.toFixed(2)}€</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{item.supplier}</td>
                  <td className="px-6 py-4 text-sm">
                    {isLowStock ? (
                      <span className="flex items-center gap-1 text-orange-600 font-medium">
                        <AlertTriangle size={16} />
                        Stock bas
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <CheckCircle size={16} />
                        OK
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Nouvel article</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom de l'article *</label>
                <input
                  type="text"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Café arabica"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie *</label>
                <input
                  type="text"
                  value={newItem.category}
                  onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Boissons"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Stock actuel</label>
                  <input
                    type="number"
                    value={newItem.stock}
                    onChange={(e) => setNewItem({...newItem, stock: e.target.value})}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Unité</label>
                  <select
                    value={newItem.unit}
                    onChange={(e) => setNewItem({...newItem, unit: e.target.value})}
                    className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="kg">kg</option>
                    <option value="L">L</option>
                    <option value="pcs">pcs</option>
                    <option value="sachets">sachets</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Stock minimum</label>
                <input
                  type="number"
                  value={newItem.minStock}
                  onChange={(e) => setNewItem({...newItem, minStock: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Prix unitaire (€)</label>
                <input
                  type="number"
                  step="0.01"
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Fournisseur *</label>
                <select
                  value={newItem.supplierId}
                  onChange={(e) => setNewItem({...newItem, supplierId: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner un fournisseur</option>
                  {suppliers.map(supplier => (
                    <option key={supplier.id} value={supplier.id}>
                      {supplier.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddItem}
                className="flex-1 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ajouter
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 p-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryView;

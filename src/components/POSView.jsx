import React from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

const POSView = ({ menuItems, currentOrder, addToOrder, removeFromOrder, updateQuantity, completeOrder }) => {
  const orderTotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="p-6 h-full">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Point de vente</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 overflow-auto">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => addToOrder(item)}
                className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-blue-100 border-2 border-slate-200 hover:border-blue-400 rounded-xl transition-all transform hover:scale-105"
              >
                <div className="font-semibold text-slate-800 mb-1">{item.name}</div>
                <div className="text-xs text-slate-500 mb-2">{item.category}</div>
                <div className="text-lg font-bold text-blue-600">{item.price.toFixed(2)}€</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-slate-800">Commande en cours</h3>
          
          <div className="flex-1 overflow-auto mb-4">
            {currentOrder.length === 0 ? (
              <div className="text-center text-slate-400 mt-20">
                <ShoppingCart size={48} className="mx-auto mb-2 opacity-50" />
                <p>Aucun article</p>
              </div>
            ) : (
              <div className="space-y-2">
                {currentOrder.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.price.toFixed(2)}€</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 bg-slate-200 hover:bg-slate-300 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 bg-slate-200 hover:bg-slate-300 rounded"
                      >
                        <Plus size={16} />
                      </button>
                      <button 
                        onClick={() => removeFromOrder(item.id)}
                        className="p-1 bg-red-100 hover:bg-red-200 text-red-600 rounded ml-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-slate-200 pt-4 space-y-3">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-2xl text-green-600">{orderTotal.toFixed(2)}€</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => completeOrder('Espèces')}
                disabled={currentOrder.length === 0}
                className="p-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
              >
                Espèces
              </button>
              <button 
                onClick={() => completeOrder('Carte')}
                disabled={currentOrder.length === 0}
                className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
              >
                Carte
              </button>
            </div>
            
            <button 
              onClick={() => window.location.reload()}
              className="w-full p-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSView;

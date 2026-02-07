import React, { useState } from 'react';
import { Plus, X, Phone, Mail, MapPin, Package } from 'lucide-react';

const SuppliersView = ({ suppliers, setSuppliers }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
    address: '',
    category: ''
  });

  const handleAddSupplier = () => {
    if (!newSupplier.name || !newSupplier.contact || !newSupplier.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const supplier = {
      id: suppliers.length + 1,
      ...newSupplier,
      productsSupplied: []
    };

    setSuppliers([...suppliers, supplier]);
    setShowModal(false);
    setNewSupplier({
      name: '',
      contact: '',
      phone: '',
      email: '',
      address: '',
      category: ''
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Gestion des fournisseurs</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Nouveau fournisseur
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map(supplier => (
          <div 
            key={supplier.id} 
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowDetails(supplier)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                {supplier.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800">{supplier.name}</div>
                <div className="text-sm text-slate-500">{supplier.category}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Phone size={14} />
                <span>{supplier.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Mail size={14} />
                <span className="truncate">{supplier.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={14} />
                <span className="truncate">{supplier.address}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 mb-1">Contact principal</div>
              <div className="font-medium text-sm">{supplier.contact}</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Nouveau fournisseur</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom de l'entreprise *</label>
                <input
                  type="text"
                  value={newSupplier.name}
                  onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Distributeur Pro"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Personne de contact *</label>
                <input
                  type="text"
                  value={newSupplier.contact}
                  onChange={(e) => setNewSupplier({...newSupplier, contact: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Ahmed Alami"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone *</label>
                <input
                  type="tel"
                  value={newSupplier.phone}
                  onChange={(e) => setNewSupplier({...newSupplier, phone: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+212 5 22 11 22 33"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newSupplier.email}
                  onChange={(e) => setNewSupplier({...newSupplier, email: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="contact@fournisseur.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Adresse</label>
                <input
                  type="text"
                  value={newSupplier.address}
                  onChange={(e) => setNewSupplier({...newSupplier, address: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 45 Rue Commerce, Casablanca"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Catégorie</label>
                <select
                  value={newSupplier.category}
                  onChange={(e) => setNewSupplier({...newSupplier, category: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Boissons">Boissons</option>
                  <option value="Produits laitiers">Produits laitiers</option>
                  <option value="Pâtisserie">Pâtisserie</option>
                  <option value="Ingrédients">Ingrédients</option>
                  <option value="Équipement">Équipement</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddSupplier}
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

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Détails du fournisseur</h3>
              <button onClick={() => setShowDetails(null)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                {showDetails.name.charAt(0)}
              </div>
              <h4 className="text-2xl font-bold text-slate-800">{showDetails.name}</h4>
              <p className="text-slate-500">{showDetails.category}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Phone size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Téléphone</div>
                  <div className="font-medium">{showDetails.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Mail size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-medium">{showDetails.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <MapPin size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Adresse</div>
                  <div className="font-medium">{showDetails.address}</div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-slate-600 mb-1">Contact principal</div>
                <div className="font-bold text-blue-800">{showDetails.contact}</div>
              </div>

              {showDetails.productsSupplied && showDetails.productsSupplied.length > 0 && (
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Package size={16} className="text-green-600" />
                    <div className="text-xs text-slate-600 font-medium">Produits fournis</div>
                  </div>
                  <div className="space-y-1">
                    {showDetails.productsSupplied.map((product, index) => (
                      <div key={index} className="text-sm text-green-800">• {product}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowDetails(null)}
              className="w-full mt-6 p-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuppliersView;

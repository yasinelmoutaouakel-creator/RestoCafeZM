import React, { useState } from 'react';
import { Plus, X, Mail, Phone, Calendar, DollarSign } from 'lucide-react';

const EmployeesView = ({ employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    shift: 'Matin',
    phone: '',
    email: '',
    salary: 0
  });

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.role) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const employee = {
      id: employees.length + 1,
      ...newEmployee,
      status: 'active',
      sales: 0,
      hireDate: new Date().toISOString().split('T')[0],
      salary: parseFloat(newEmployee.salary)
    };

    setEmployees([...employees, employee]);
    setShowModal(false);
    setNewEmployee({
      name: '',
      role: '',
      shift: 'Matin',
      phone: '',
      email: '',
      salary: 0
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">Gestion des employés</h2>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Nouvel employé
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map(emp => (
          <div key={emp.id} className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowDetails(emp)}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {emp.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-800">{emp.name}</div>
                <div className="text-sm text-slate-500">{emp.role}</div>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Shift:</span>
                <span className="font-medium">{emp.shift}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Statut:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  emp.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-slate-100 text-slate-800'
                }`}>
                  {emp.status === 'active' ? 'En service' : 'Hors service'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm text-slate-600 mb-1">Ventes aujourd'hui</div>
              <div className="text-2xl font-bold text-green-600">{emp.sales.toFixed(2)}€</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Nouvel employé</h3>
              <button onClick={() => setShowModal(false)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom complet *</label>
                <input
                  type="text"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Ahmed Alaoui"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Poste *</label>
                <input
                  type="text"
                  value={newEmployee.role}
                  onChange={(e) => setNewEmployee({...newEmployee, role: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Serveur"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Shift</label>
                <select
                  value={newEmployee.shift}
                  onChange={(e) => setNewEmployee({...newEmployee, shift: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Matin">Matin</option>
                  <option value="Soir">Soir</option>
                  <option value="Journée">Journée</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                <input
                  type="tel"
                  value={newEmployee.phone}
                  onChange={(e) => setNewEmployee({...newEmployee, phone: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+212 6 12 34 56 78"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Salaire mensuel (€)</label>
                <input
                  type="number"
                  value={newEmployee.salary}
                  onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})}
                  className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2500"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                onClick={handleAddEmployee}
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
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Détails de l'employé</h3>
              <button onClick={() => setShowDetails(null)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-3">
                {showDetails.name.charAt(0)}
              </div>
              <h4 className="text-2xl font-bold text-slate-800">{showDetails.name}</h4>
              <p className="text-slate-500">{showDetails.role}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Phone size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Téléphone</div>
                  <div className="font-medium">{showDetails.phone || 'Non renseigné'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Mail size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="font-medium">{showDetails.email || 'Non renseigné'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <Calendar size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Date d'embauche</div>
                  <div className="font-medium">{showDetails.hireDate || 'Non renseigné'}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <DollarSign size={20} className="text-slate-600" />
                <div className="flex-1">
                  <div className="text-xs text-slate-500">Salaire mensuel</div>
                  <div className="font-medium">{showDetails.salary ? `${showDetails.salary}€` : 'Non renseigné'}</div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-slate-600 mb-1">Shift de travail</div>
                <div className="font-bold text-blue-800">{showDetails.shift}</div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="text-xs text-slate-600 mb-1">Ventes aujourd'hui</div>
                <div className="font-bold text-green-800 text-xl">{showDetails.sales.toFixed(2)}€</div>
              </div>
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

export default EmployeesView;

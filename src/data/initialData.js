export const initialTransactions = [
  { id: 1, date: '2026-02-06 09:15', employee: 'Jean Martin', items: 3, total: 24.50, payment: 'Carte' },
  { id: 2, date: '2026-02-06 09:22', employee: 'Sophie Petit', items: 2, total: 15.80, payment: 'Espèces' },
  { id: 3, date: '2026-02-06 09:35', employee: 'Jean Martin', items: 5, total: 42.30, payment: 'Carte' },
  { id: 4, date: '2026-02-06 10:12', employee: 'Marie Dubois', items: 1, total: 4.50, payment: 'Espèces' },
  { id: 5, date: '2026-02-06 10:28', employee: 'Sophie Petit', items: 4, total: 38.90, payment: 'Carte' },
];

export const initialInventory = [
  { id: 1, name: 'Café en grains', category: 'Boissons', stock: 45, unit: 'kg', minStock: 20, price: 18.50, supplier: 'Café Premium', supplierId: 1 },
  { id: 2, name: 'Lait entier', category: 'Produits laitiers', stock: 28, unit: 'L', minStock: 30, price: 1.20, supplier: 'Laiterie Bio', supplierId: 2 },
  { id: 3, name: 'Croissants', category: 'Pâtisserie', stock: 120, unit: 'pcs', minStock: 50, price: 0.85, supplier: 'Boulangerie Artisanale', supplierId: 3 },
  { id: 4, name: 'Sucre', category: 'Ingrédients', stock: 75, unit: 'kg', minStock: 25, price: 2.30, supplier: 'Distributeur Alimentaire', supplierId: 4 },
  { id: 5, name: 'Thé assortiment', category: 'Boissons', stock: 180, unit: 'sachets', minStock: 100, price: 0.15, supplier: 'Thés du Monde', supplierId: 5 },
  { id: 6, name: 'Sirops variés', category: 'Boissons', stock: 32, unit: 'L', minStock: 15, price: 8.90, supplier: 'Monin', supplierId: 6 },
  { id: 7, name: 'Pain sandwich', category: 'Boulangerie', stock: 15, unit: 'pcs', minStock: 20, price: 3.20, supplier: 'Boulangerie Artisanale', supplierId: 3 },
  { id: 8, name: 'Fromage', category: 'Produits laitiers', stock: 8, unit: 'kg', minStock: 10, price: 12.50, supplier: 'Fromagerie locale', supplierId: 7 },
];

export const initialEmployees = [
  { 
    id: 1, 
    name: 'Jean Martin', 
    role: 'Serveur', 
    shift: 'Matin', 
    status: 'active', 
    sales: 186.40,
    phone: '+212 6 12 34 56 78',
    email: 'jean.martin@restaurant.com',
    hireDate: '2024-01-15',
    salary: 2500
  },
  { 
    id: 2, 
    name: 'Sophie Petit', 
    role: 'Serveuse', 
    shift: 'Matin', 
    status: 'active', 
    sales: 254.70,
    phone: '+212 6 23 45 67 89',
    email: 'sophie.petit@restaurant.com',
    hireDate: '2024-03-20',
    salary: 2500
  },
  { 
    id: 3, 
    name: 'Marie Dubois', 
    role: 'Gérante', 
    shift: 'Journée', 
    status: 'active', 
    sales: 98.30,
    phone: '+212 6 34 56 78 90',
    email: 'marie.dubois@restaurant.com',
    hireDate: '2023-06-01',
    salary: 4500
  },
  { 
    id: 4, 
    name: 'Pierre Durand', 
    role: 'Barista', 
    shift: 'Soir', 
    status: 'offline', 
    sales: 0,
    phone: '+212 6 45 67 89 01',
    email: 'pierre.durand@restaurant.com',
    hireDate: '2024-05-10',
    salary: 2800
  },
];

export const menuItems = [
  { id: 1, name: 'Espresso', category: 'Café', price: 2.50 },
  { id: 2, name: 'Cappuccino', category: 'Café', price: 3.80 },
  { id: 3, name: 'Latte', category: 'Café', price: 4.20 },
  { id: 4, name: 'Croissant', category: 'Pâtisserie', price: 2.50 },
  { id: 5, name: 'Pain au chocolat', category: 'Pâtisserie', price: 2.80 },
  { id: 6, name: 'Sandwich jambon', category: 'Restauration', price: 6.50 },
  { id: 7, name: 'Salade César', category: 'Restauration', price: 9.90 },
  { id: 8, name: 'Thé vert', category: 'Thé', price: 3.20 },
  { id: 9, name: 'Jus d\'orange', category: 'Boissons fraîches', price: 3.50 },
  { id: 10, name: 'Cookie maison', category: 'Pâtisserie', price: 2.20 },
];

export const initialSuppliers = [
  { 
    id: 1, 
    name: 'Café Premium', 
    contact: 'Ahmed Alami',
    phone: '+212 5 22 11 22 33',
    email: 'contact@cafepremium.ma',
    address: '45 Rue des Cafés, Casablanca',
    category: 'Boissons',
    productsSupplied: ['Café en grains', 'Café moulu']
  },
  { 
    id: 2, 
    name: 'Laiterie Bio', 
    contact: 'Fatima Bennani',
    phone: '+212 5 22 33 44 55',
    email: 'info@laiteriebio.ma',
    address: '12 Avenue Lait, Rabat',
    category: 'Produits laitiers',
    productsSupplied: ['Lait entier', 'Crème fraîche', 'Yaourt']
  },
  { 
    id: 3, 
    name: 'Boulangerie Artisanale', 
    contact: 'Youssef Tazi',
    phone: '+212 5 22 44 55 66',
    email: 'contact@boulangerie-art.ma',
    address: '78 Boulevard Pain, Casablanca',
    category: 'Pâtisserie',
    productsSupplied: ['Croissants', 'Pain sandwich', 'Baguettes']
  },
  { 
    id: 4, 
    name: 'Distributeur Alimentaire', 
    contact: 'Hassan Idrissi',
    phone: '+212 5 22 55 66 77',
    email: 'sales@distribalim.ma',
    address: '23 Zone Industrielle, Casablanca',
    category: 'Ingrédients',
    productsSupplied: ['Sucre', 'Sel', 'Farine', 'Huile']
  },
  { 
    id: 5, 
    name: 'Thés du Monde', 
    contact: 'Samira Chakir',
    phone: '+212 5 22 66 77 88',
    email: 'contact@thesdumonde.ma',
    address: '56 Rue Thé, Marrakech',
    category: 'Boissons',
    productsSupplied: ['Thé assortiment', 'Thé vert', 'Thé à la menthe']
  },
  { 
    id: 6, 
    name: 'Monin', 
    contact: 'Service Commercial',
    phone: '+212 5 22 77 88 99',
    email: 'maroc@monin.com',
    address: '89 Avenue Sirop, Casablanca',
    category: 'Boissons',
    productsSupplied: ['Sirops variés', 'Sirops aromatisés']
  },
  { 
    id: 7, 
    name: 'Fromagerie locale', 
    contact: 'Omar Berrada',
    phone: '+212 5 22 88 99 00',
    email: 'info@fromagerielocale.ma',
    address: '34 Rue Fromage, Fès',
    category: 'Produits laitiers',
    productsSupplied: ['Fromage', 'Beurre']
  },
];

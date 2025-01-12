export default function SellerDashboard() {
   return (
     <div className="min-h-screen bg-gray-100">
       <header className="bg-green-600 text-white p-4">
         <h1 className="text-2xl font-bold">Seller Dashboard</h1>
       </header>
       <main className="p-8">
         <h2 className="text-xl font-semibold mb-4">Welcome, Seller!</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="bg-white p-4 rounded-md shadow-md">
             <h3 className="font-semibold text-lg">Your Products</h3>
             <p className="text-gray-600">Manage your products here.</p>
           </div>
           <div className="bg-white p-4 rounded-md shadow-md">
             <h3 className="font-semibold text-lg">Orders</h3>
             <p className="text-gray-600">View and manage your orders.</p>
           </div>
           <div className="bg-white p-4 rounded-md shadow-md">
             <h3 className="font-semibold text-lg">Profile Settings</h3>
             <p className="text-gray-600">Update your profile and preferences.</p>
           </div>
         </div>
       </main>
     </div>
   );
 }
 
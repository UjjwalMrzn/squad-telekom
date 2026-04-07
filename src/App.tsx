import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-brand-50">
      <Navbar />
      
      {/* We will build the Hero Section here next! */}
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto h-[60vh] border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
          <p className="text-slate-400 font-medium">Hero Section Canvas</p>
        </div>
      </main>
    </div>
  );
}

export default App;
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="fixed w-full bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-green-500">
                CryptoTracker
              </h1>
              <nav className="space-x-4">
                <a href="#" className="hover:text-green-500 transition-colors">
                  Dashboard
                </a>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Markets
                </a>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Portfolio
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 pt-24">
          {/* Content will go here */}
        </main>
      </div>
    </>
  );
}

export default App;

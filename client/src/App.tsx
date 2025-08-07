import React from 'react';

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🚀 Welcome to Onboarding System</h1>
      <button
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        onClick={() => alert('Let\'s onboard!')}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;

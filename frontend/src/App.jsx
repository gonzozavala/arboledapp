import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <div className="text-center p-12 bg-white rounded-2xl shadow-2xl max-w-lg">
        <h1 className="text-5xl font-bold text-emerald-700 mb-6">
          Arboledapp
        </h1>
        <p className="text-2xl text-gray-700">
          Please be patient,<br />we're brewing something new
        </p>
        <div className="mt-8 text-sm text-gray-500">
          Alpha version • running on pure React + Vite
        </div>
      </div>
    </div>
  )
}

export default App

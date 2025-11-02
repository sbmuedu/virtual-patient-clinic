export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Patient Not Found</h2>
        <p className="text-gray-400 mb-8">
          The medical record you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Return to Clinic
        </a>
      </div>
    </div>
  )
}
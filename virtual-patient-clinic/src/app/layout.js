import './globals.css'

export const metadata = {
  title: 'Virtual Patient Clinic',
  description: 'Interactive 3D Medical Examination Simulator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 overflow-hidden">
        {children}
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Resume-Kiran</title>
      </head>
      <body className='bg-gradient-to-r from-indigo-400 to-indigo-500'>
        
        {children}
      </body>
      
    </html>
  )
}

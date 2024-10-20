import './globals.css';
import ReduxProvider from './ReduxProvider';



export const metadata = {
  title: 'My App',
  description: 'Next.js app with left-side navbar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
          {children} 
</ReduxProvider>
      </body>
    </html>
  );
}

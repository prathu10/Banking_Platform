// used for all main components- home, dashboard, transactions- all ocmponents that uses sidebar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children}

    </main>
    
  );
}

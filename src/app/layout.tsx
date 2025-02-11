import "./globals.css";

export const metadata = {
  title: "Business_Appointments",
  description: "A simple Next.js application with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
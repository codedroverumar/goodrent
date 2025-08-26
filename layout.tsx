import "./globals.css";

export const metadata = {
  title: "GoodRent",
  description: "Apartments & Office Rentals in Cape Town",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// // Since we have a root `not-found.tsx` page, a layout file
// // is required, even if it's just passing children through.
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
  }>) {
    return children;
  }
  
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       {/* <body className={inter.className}>{children}</body> */}
//     </html>
//   );
// }
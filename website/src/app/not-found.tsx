// import Link from 'next/link'

// export default function NotFound() {
//   return <div>
//       <h1>Not found – 404!</h1>
//       <div>
//         <Link href="/">Go back to Home</Link>
//       </div>
//   </div>
// }

'use client';
 
import Error from 'next/error';
 
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
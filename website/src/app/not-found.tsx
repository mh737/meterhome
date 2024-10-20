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

      var PATH_SEGMENTS_TO_SKIP = 1;

      /**
       * DO NOT TOUCH ANYTHING BELOW THIS COMMENT UNLESS YOU KNOW WHAT YOU ARE DOING
       */
      function isUrl(url: string) {
        // Regex from https://stackoverflow.com/a/3809435, with a modification to allow for TLDs of up to 24 characters
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,24}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)+$/.test(
          url
        );
      }

      function redirect() {
        var location = window.location;
        var issueNumber = location.pathname.split("/")[
          PATH_SEGMENTS_TO_SKIP + 1  //how many segments to skip
        ];
        var homepage =
          location.protocol +
          "//" +
          location.hostname +
          (location.port ? ":" + location.port : "") +
          "/" +
          location.pathname.split("/")[PATH_SEGMENTS_TO_SKIP];
       location.replace(homepage);
      }
 redirect();
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}

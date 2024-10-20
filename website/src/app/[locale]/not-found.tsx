"use client"

import {useTranslations} from 'next-intl';
 
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  /**
       * Configuration goes here
       */
      // Format: https://api.github.com/repos/{owner}/{repo}/issues/
      var GITHUB_ISSUES_LINK =
        "https://api.github.com/repos/mh737/meterhome/issues/";
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

        var xhr = new XMLHttpRequest();

        xhr.onload = function () {
          try {
            var payload = JSON.parse(xhr.response);
            var message = payload.message;
            var title = payload.title;

            // Workaround IE 11 lack of support for new URL()
            var url = document.createElement("a");
            url.setAttribute("href", title);

            // Invalid URLs includes invalid issue numbers, issue titles that are not URLs, and recursive destination URLs
            var isInvalidUrl =
              message === "Not Found" ||
              !title ||
              !isUrl(title) ||
              url.hostname === location.hostname;

            if (isInvalidUrl) {
              location.replace(homepage);
            } else {
              location.replace(title);
            }
          } catch (e) {
            location.replace(homepage);
          }
        };
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
 
        
        
        xhr.onerror = function () { //if issue not found back to index
          // await sleep(3000);
          location.replace(homepage);
        };
        console.log(GITHUB_ISSUES_LINK + issueNumber);
        fetch(GITHUB_ISSUES_LINK + issueNumber).then(response => {
          if (!response.ok) {
            location.replace(homepage);
            console.error('Network response was not ok.');
            
          }
          return response.json();
        })
        .then(data => {
          console.log(data.title);
          location.replace(data.title)
          // Logging the titles of the issues
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          location.replace(homepage);
        });
        // location.replace(GITHUB_ISSUES_LINK + issueNumber);
        // xhr.open("GET", GITHUB_ISSUES_LINK + issueNumber);
        // xhr.send();

      }

      redirect();


  return <><h1>{t('title')}</h1></>;
}

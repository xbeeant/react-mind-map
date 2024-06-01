import React from "react";

export const SvgIcons = {
  'undo': (props) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"
          d="M240 424v-96c116.4 0 159.39 33.76 208 96c0-119.23-39.57-240-208-240V88L64 256Z"/>
  </svg>,
  'redo': (props) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"
          d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96Z"/>
  </svg>,
  'format': (props) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
    <path fill="currentColor"
          d="M18 11h8v2h-8zM6 19h8v2H6zm4-3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m12 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/>
    <path fill="currentColor"
          d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"/>
  </svg>,
  'insert': (props) => <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13.5 1H8m5.5 3H8m5.5 3H8m5.5 6H8m5.5-3H8"/>
      <rect width="5" height="5" x=".5" y="1" rx=".5" transform="rotate(-90 3 3.5)"/>
      <rect width="5" height="5" x=".5" y="8" rx=".5" transform="rotate(-90 3 10.5)"/>
    </g>
  </svg>


}

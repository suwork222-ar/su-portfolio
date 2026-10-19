export function HeroLandscape() {
  return (
    <svg className="scene-fallback" viewBox="0 0 960 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="town-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cd7661" />
          <stop offset="0.42" stopColor="#e7a96f" />
          <stop offset="0.75" stopColor="#f0d293" />
          <stop offset="1" stopColor="#b66a53" />
        </linearGradient>
        <radialGradient id="town-sun">
          <stop offset="0" stopColor="#fff1c6" />
          <stop offset="0.78" stopColor="#f7d88e" />
          <stop offset="1" stopColor="#f3c77c" stopOpacity="0.85" />
        </radialGradient>
        <linearGradient id="town-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7f8064" />
          <stop offset="1" stopColor="#485b54" />
        </linearGradient>
        <linearGradient id="town-roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#75453e" />
          <stop offset="1" stopColor="#493333" />
        </linearGradient>
        <filter id="sun-softness" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <rect width="960" height="760" fill="url(#town-sky)" />
      <circle cx="692" cy="280" r="124" fill="#ffe5aa" opacity="0.34" filter="url(#sun-softness)" />
      <circle cx="692" cy="280" r="82" fill="url(#town-sun)" />
      <path d="M0 144c95-23 154-18 221-5 42 9 63 5 88-8 28-15 64-16 100-2 30 12 48 12 75 7 30-6 55 5 66 14H0Z" fill="#fff0d4" opacity=".25" />
      <path d="M0 337c94-67 148-79 232-54 68 20 116 62 189 58 64-4 102-45 169-63 71-19 131-4 203 41 73-19 120-17 167-3v148H0Z" fill="#9c6655" opacity=".7" />
      <path d="M0 390c125-38 208-34 301-5 75 24 123 30 202 7 81-23 137-31 225-15 87 16 145 13 232-4v119H0Z" fill="#72554b" />
      <rect y="427" width="960" height="333" fill="url(#town-sea)" />
      <path d="M0 434c190-21 321 2 463 13 163 12 307-14 497-29v45c-192 15-334 34-503 18C294 465 151 455 0 480Z" fill="#d19a65" opacity=".68" />
      <g fill="#e9c48a" opacity=".55">
        <path d="M574 501h199v4H574zM636 518h272v3H636zM523 536h340v3H523zM669 557h247v3H669zM595 581h295v3H595z" />
      </g>
      <path d="M0 459c67-15 118-10 184 8 46-22 88-24 146-4 53-42 99-49 147-25 42-54 90-64 138-31 42-19 79-14 118 8 54-20 94-18 132 2 27-4 54-3 95 3v140H0Z" fill="#59634f" />
      <g fill="#4b483c">
        <path d="M0 470h107v84H0zM18 448l41-31 49 34-11 16H17zM98 485h130v94H98zM109 461l57-42 63 44-10 18H99zM248 486h114v86H248zM236 468l64-46 74 49-9 19H237zM742 471h100v83H742zM730 453l55-39 66 43-8 17H731zM838 479h122v91H838zM829 457l59-45 71 48-8 19H831z" />
      </g>
      <g fill="#d98b55">
        <path d="M29 492h12v17H29zM67 492h12v17H67zM129 500h14v18h-14zM187 500h14v18h-14zM273 502h12v18h-12zM321 502h12v18h-12zM765 489h13v17h-13zM806 489h13v17h-13zM863 500h14v18h-14zM916 500h14v18h-14z" />
      </g>
      <g fill="#d8b57d" opacity=".7">
        <path d="M52 548h5v31h-5zM150 545h5v36h-5zM294 545h5v34h-5zM781 540h5v35h-5zM889 546h5v36h-5z" />
      </g>
      <path d="M0 609c177-34 306-18 451 1 159 22 314 5 509-21v171H0Z" fill="#3f4540" />
      <path d="M0 647c192-22 342-7 471 10 156 20 315 4 489-18v121H0Z" fill="#343b38" />
      <g stroke="#3c3430" strokeWidth="8" fill="none" opacity=".85">
        <path d="M119 117V511M847 93V469M114 144C300 93 485 93 853 118M119 181C328 131 539 133 848 158" />
      </g>
      <g stroke="#3c3430" strokeWidth="5" opacity=".88">
        <path d="M94 203h52M94 227h52M825 185h45M825 208h45" />
      </g>
      <path d="M342 760 463 606h57L637 760Z" fill="#7a463e" opacity=".92" />
      <path d="M354 760 471 625M625 760 510 625" stroke="#d5a777" strokeWidth="5" opacity=".65" />
      <g fill="#f4d99c" opacity=".67">
        <circle cx="290" cy="475" r="3"/><circle cx="365" cy="493" r="3"/><circle cx="702" cy="474" r="3"/><circle cx="928" cy="467" r="3"/>
      </g>
      <g stroke="#efd19b" strokeWidth="2" opacity=".4">
        <path d="M45 590h130M212 606h109M657 600h126M813 620h91M98 672h188M584 699h157" />
      </g>
    </svg>
  );
}

export function ProjectStillLife() {
  return (
    <svg className="project-fallback" viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="room-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dba66f" />
          <stop offset="1" stopColor="#7c5548" />
        </linearGradient>
        <linearGradient id="window-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e68f68" />
          <stop offset=".58" stopColor="#edc27e" />
          <stop offset="1" stopColor="#626a55" />
        </linearGradient>
        <linearGradient id="desk-wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#876044" />
          <stop offset="1" stopColor="#4a332a" />
        </linearGradient>
      </defs>
      <rect width="800" height="640" fill="url(#room-wall)" />
      <path d="M0 0h800v79H0z" fill="#563b34" opacity=".58" />
      <rect x="83" y="54" width="634" height="336" fill="#69473c" />
      <rect x="101" y="72" width="598" height="301" fill="url(#window-glow)" />
      <circle cx="568" cy="213" r="48" fill="#f7d99d" opacity=".93" />
      <path d="M102 246c88-49 140-38 212-9 63-44 105-45 163-10 52-34 112-41 222-3v65H102Z" fill="#8a5a4d" opacity=".78" />
      <path d="M102 288c95-21 154-23 220 1 73-35 138-36 205-10 77-29 119-25 172-5v99H102Z" fill="#53604f" />
      <path d="M101 331h598v42H101z" fill="#69705b" />
      <path d="M121 334h110v39H121zM241 324h143v49H241zM401 338h117v35H401zM533 326h147v47H533z" fill="#554239" />
      <path d="M83 54h634v336H83z" fill="none" stroke="#4b332e" strokeWidth="18" />
      <path d="M399 63v322M92 230h616" stroke="#4b332e" strokeWidth="12" />
      <path d="M0 415c167-16 271-8 400 0 140 9 271-4 400-18v243H0Z" fill="url(#desk-wood)" />
      <path d="M0 427c189 8 307 15 439 7 159-10 254-11 361-4" stroke="#bb8a5d" strokeWidth="7" opacity=".52" fill="none" />
      <path d="M0 493c201-13 363 6 520 0 119-5 192-15 280-8M0 548c193-12 323 13 468 6 138-6 223-18 332-10" stroke="#bd8a5c" strokeWidth="3" opacity=".4" fill="none" />
      <ellipse cx="411" cy="507" rx="170" ry="21" fill="#332924" opacity=".42" />
      <g>
        <path d="M308 300h209l20 17v150H289V317z" fill="#533c35" />
        <rect x="308" y="318" width="207" height="120" rx="4" fill="#d9b47e" />
        <rect x="323" y="331" width="176" height="91" fill="#78806b" />
        <path d="M323 390c44-32 72-23 98-3 27-30 48-33 78-20v55H323z" fill="#53614f" opacity=".82" />
        <circle cx="485" cy="446" r="3" fill="#e4b664" />
        <path d="M384 468h59l12 31h-82z" fill="#60453a" />
        <path d="M354 500h119v12H354z" fill="#49352e" />
      </g>
      <g>
        <path d="M101 336h92l-9 20h-85z" fill="#a7613d" />
        <path d="M119 339c4-31 20-55 28-79 10 25 17 50 21 79" fill="none" stroke="#63483a" strokeWidth="8" />
        <path d="M124 264h51l-17-17h-17z" fill="#dab56e" />
        <path d="M125 263h48l-10 18h-29z" fill="#f1cf85" opacity=".8" />
        <path d="M151 283v36" stroke="#e6bd75" strokeWidth="3" opacity=".7" />
      </g>
      <path d="M68 398h194l-13 12H79z" fill="#d9bc91" />
      <path d="M81 410v86M246 410v86" stroke="#594034" strokeWidth="9" />
      <path d="M91 420c46-4 98 9 150 6v55c-53 5-104-5-150 1z" fill="#efe0c3" />
      <path d="M110 435c36-8 75 4 109-1M111 447c32-4 67 5 98 1M111 460c35-4 58 4 86 1" stroke="#b79e77" strokeWidth="4" fill="none" opacity=".8" />
      <path d="M246 432 286 405" stroke="#61422f" strokeWidth="9" strokeLinecap="round" />
      <path d="M611 399h76v72h-76z" fill="#a45136" />
      <path d="M621 390h56v19h-56z" fill="#694236" />
      <path d="M627 410h43v17h-43z" fill="#56392f" />
      <path d="M625 422c8-8 31-8 41 0" stroke="#e0a666" strokeWidth="3" fill="none" />
      <path d="M626 471h48v8h-48z" fill="#4c372f" />
      <g fill="#d7b179" opacity=".48">
        <circle cx="556" cy="465" r="4"/><circle cx="575" cy="470" r="3"/><circle cx="259" cy="534" r="3"/><circle cx="723" cy="522" r="4"/>
      </g>
    </svg>
  );
}

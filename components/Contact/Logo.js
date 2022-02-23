function Logo({ platform }) {
  if (platform === "LinkedIn")
    return (
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m116 3h-104a8.91 8.91 0 0 0 -9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81v-104.42a8.93 8.93 0 0 0 -9-8.77z"
          fill="#0076b2"
        />
        <g fill="#fff">
          <path d="m21.06 48.73h18.11v58.27h-18.11zm9.06-29a10.5 10.5 0 1 1 -10.5 10.49 10.5 10.5 0 0 1 10.5-10.49" />
          <path d="m50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41 18.34-.04 21.74 12.03 21.74 27.68v32h-18.11v-28.35c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15v28.79h-18.08z" />
        </g>
      </svg>
    );
  else if (platform === "Twitter")
    return (
      <svg viewBox="0 0 126.24 102.59" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m40.58 115.3c47.64 0 73.69-39.47 73.69-73.69 0-1.12 0-2.24-.07-3.35a52.7 52.7 0 0 0 12.92-13.41 51.7 51.7 0 0 1 -14.87 4.08 26 26 0 0 0 11.38-14.33 51.9 51.9 0 0 1 -16.45 6.29 25.92 25.92 0 0 0 -44.13 23.62 73.53 73.53 0 0 1 -53.38-27.06 25.92 25.92 0 0 0 8 34.58 25.71 25.71 0 0 1 -11.67-3.25v.33a25.91 25.91 0 0 0 20.73 25.39 25.86 25.86 0 0 1 -11.7.44 25.93 25.93 0 0 0 24.2 18 52 52 0 0 1 -32.17 11.06 52.72 52.72 0 0 1 -6.18-.36 73.32 73.32 0 0 0 39.7 11.63"
          fill="#1da1f2"
          transform="translate(-.88 -12.7)"
        />
      </svg>
    );
  else if (platform === "GitHub")
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.801-1.574 8.236-6.074 8.236-11.369 0-6.627-5.373-12-12-12" />
      </svg>
    );
  else if (platform === "Gmail")
    return (
      <svg
        viewBox="0 0 22 16"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <linearGradient
          id="a"
          x1=".00389%"
          x2="100.032232%"
          y1="49.997619%"
          y2="49.997619%"
        >
          <stop offset="0" stopOpacity=".1" />
          <stop offset="1" stopOpacity=".2" />
        </linearGradient>
        <path
          d="m19.6976431 15.9665985h-18.36533634c-.71212528 0-1.31180973-.5809443-1.31180973-1.3118097v-13.26801851c0-.71212528.58094431-1.31180973 1.31180973-1.31180973h18.36533634c.7121253 0 1.3118098.58094431 1.3118098 1.31180973v13.26801851c0 .7308654-.5809444 1.3118097-1.3118098 1.3118097z"
          fill="#e3e3e3"
        />
        <path
          d="m2.6441165 15.9665985 7.8521183-6.31542687.0562205-.33732248-8.09574018-5.82818327-.01874014 12.19983052z"
          fill="#231f20"
          opacity=".1"
        />
        <path
          d="m1.33230676 15.9665985c-.73086542 0-1.31180973-.5809443-1.31180973-1.3118097v-13.28675865c0-.73086542.58094431-.86204639 1.31180973-.86204639.73086543 0 1.31180974.14992111 1.31180974.86204639v14.59856835z"
          fill="#d54b3d"
        />
        <path
          d="m1.33230676.69338515c.93700696 0 1.12440836.28110208 1.12440836.674645v14.41116695h-1.12440836c-.61842458 0-1.12440834-.5059837-1.12440834-1.1244083v-13.28675865c0-.41228306.18740139-.674645 1.12440834-.674645zm0-.18740139c-.73086542 0-1.31180973.14992111-1.31180973.86204639v13.28675865c0 .7308654.58094431 1.3118097 1.31180973 1.3118097h1.31180974v-14.59856835c0-.73086542-.58094431-.86204639-1.31180974-.86204639z"
          fill="#d72b27"
        />
        <path
          d="m19.6976431 15.9665985h-1.3118097v-14.63604862c0-.73086543.5809442-.82456612 1.3118097-.82456612.7308654 0 1.3118098.09370069 1.3118098.82456612v13.34297902c0 .7121253-.5809444 1.2930696-1.3118098 1.2930696z"
          fill="#d54b3d"
        />
        <path
          d="m19.6976431.69338515c.8433063 0 1.1244084.16866125 1.1244084.63716473v13.34297902c0 .6184247-.5059838 1.1244084-1.1244084 1.1244084h-1.1244083v-14.46738742c0-.48724362.281102-.63716473 1.1244083-.63716473zm0-.18740139c-.7308655 0-1.3118097.09370069-1.3118097.82456612v14.65478872h1.3118097c.7308654 0 1.3118098-.5809442 1.3118098-1.3118097v-13.34297902c0-.73086543-.5809444-.82456612-1.3118098-.82456612z"
          fill="#d72b27"
        />
        <path
          d="m14.0756014 15.9665985-13.94530869-14.05362906.73351058.29836698 9.70739211 6.99007191 10.4382578-7.65415364-.0000003 13.12627421c0 .7121253-.5809444 1.2930696-1.3118098 1.2930696z"
          fill="url(#a)"
        />
        <path
          d="m10.4962348 9.65117163-9.9135336-7.1962134c-.58094431-.4310232-.74960557-1.25558932-.31858236-1.83653364.4310232-.58094431 1.27432946-.71212529 1.87401391-.28110208l8.37684215 6.09054521 8.4330626-6.16550577c.5809444-.4310232 1.4055105-.29984223 1.8365337.29984222.4310232.58094432.2998422 1.40551044-.2998422 1.83653364z"
          fill="#d54b3d"
        />
        <path
          d="m19.6976431.18740139c.3560626 0 .6933852.16866125.9182668.46850348.3560626.50598376.2436218 1.1993689-.2436218 1.57417168l-9.8760533 7.19621343-9.80109276-7.12125287c-.50598376-.37480278-.63716473-1.08692806-.28110209-1.57417168.20614153-.28110209.56220417-.46850348.93700695-.46850348.24362182 0 .48724362.07496056.67464502.22488167l8.35810208 6.07180507.1124408.07496056.1124408-.07496056 8.4143225-6.16550577c.2061415-.13118097.4310232-.20614153.674645-.20614153zm0-.18740139c-.2623619 0-.543464.07496056-.7683457.24362181l-8.4330626 6.16550577-8.37684219-6.09054522c-.22488167-.16866125-.50598376-.2436218-.78708585-.2436218-.41228306 0-.82456611.18740139-1.08692806.54346403-.41228307.58094432-.24362181 1.40551044.3373225 1.83653364l9.9135336 7.21495352 9.969754-7.27117394c.5809443-.4310232.7121253-1.23684918.2998422-1.83653364-.2623619-.37480278-.6559048-.56220417-1.0681879-.56220417z"
          fill="#d72b27"
        />
      </svg>
    );
  return <svg></svg>;
}

export default Logo;
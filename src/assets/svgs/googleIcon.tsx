type IconProps = {
  color: string;
  width: number | string;
  height: number | string;
};

export default function GoogleIcon({ color, width, height }: IconProps) {
  return (
    <svg
      width={width || "15"}
      height={height || "16"}
      viewBox="0 0 15 16"
      id="_x32_"
      fill={color || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6284 6.89471H13.125V6.86877H7.5V9.36877H11.0322C10.5169 10.8241 9.13219 11.8688 7.5 11.8688C5.42906 11.8688 3.75 10.1897 3.75 8.11877C3.75 6.04784 5.42906 4.36877 7.5 4.36877C8.45594 4.36877 9.32563 4.7294 9.98781 5.31846L11.7556 3.55065C10.6394 2.51034 9.14625 1.86877 7.5 1.86877C4.04844 1.86877 1.25 4.66721 1.25 8.11877C1.25 11.5703 4.04844 14.3688 7.5 14.3688C10.9516 14.3688 13.75 11.5703 13.75 8.11877C13.75 7.69971 13.7069 7.29065 13.6284 6.89471Z"
        fill="#FFC107"
      />
      <path
        d="M1.9707 5.20971L4.02414 6.71565C4.57977 5.34002 5.92539 4.36877 7.50008 4.36877C8.45602 4.36877 9.3257 4.7294 9.98789 5.31846L11.7557 3.55065C10.6395 2.51034 9.14633 1.86877 7.50008 1.86877C5.09945 1.86877 3.01758 3.22409 1.9707 5.20971Z"
        fill="#FF3D00"
      />
      <path
        d="M7.49961 14.3687C9.11398 14.3687 10.5809 13.7509 11.6899 12.7462L9.75555 11.1094C9.10697 11.6026 8.31444 11.8694 7.49961 11.8687C5.87398 11.8687 4.49367 10.8322 3.97367 9.38562L1.93555 10.9559C2.96992 12.98 5.07055 14.3687 7.49961 14.3687Z"
        fill="#4CAF50"
      />
      <path
        d="M13.6284 6.89471H13.125V6.86877H7.5V9.36877H11.0322C10.7857 10.0614 10.3417 10.6666 9.755 11.1097L9.75594 11.1091L11.6903 12.746C11.5534 12.8703 13.75 11.2438 13.75 8.11877C13.75 7.69971 13.7069 7.29065 13.6284 6.89471Z"
        fill="#1976D2"
      />
    </svg>
  );
}
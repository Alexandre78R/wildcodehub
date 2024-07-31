import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const CSSIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 60 60" {...props}>
      <path
        d="M11.0667 51.0019L6.85547 3.75H53.1455L48.9286 50.9944L29.9723 56.25L11.0667 51.0019Z"
        fill="#1572B6"
      />
      <path
        d="M30 52.2336L45.3187 47.9868L48.9225 7.61426H30V52.2336Z"
        fill="#33A9DC"
      />
      <path
        d="M30 24.7332H37.6688L38.1975 18.7988H30V13.0032H30.0206H44.5312L44.3925 14.5575L42.9694 30.5288H30V24.7332Z"
        fill="white"
      />
      <path
        d="M30.0348 39.7837L30.0086 39.7912L23.5548 38.0474L23.1423 33.4255H20.0055H17.3242L18.1361 42.5249L30.0067 45.8212L30.0348 45.8137V39.7837Z"
        fill="#EBEBEB"
      />
      <path
        d="M37.1763 30.2832L36.4788 38.0438L30.0156 39.7876V45.8176L41.8956 42.5251L41.9838 41.5463L42.9906 30.2832H37.1763Z"
        fill="white"
      />
      <path
        d="M30.0201 13.0032V16.6032V18.7838V18.7988H16.0401H16.0213L15.9051 17.4957L15.6407 14.5575L15.502 13.0032H30.0201Z"
        fill="#EBEBEB"
      />
      <path
        d="M30 24.7332V28.3332V30.5138V30.5288H23.6456H23.6269L23.5106 29.2257L23.2481 26.2875L23.1094 24.7332H30Z"
        fill="#EBEBEB"
      />
    </Icon>
  );
};

export default CSSIcon;

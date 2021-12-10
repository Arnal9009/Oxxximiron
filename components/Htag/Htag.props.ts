import { ReactNode } from "react";

export interface HtagProps {
  children?: ReactNode
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'logo_header_d' | 'logo_header_w' | 'logo_main'
}
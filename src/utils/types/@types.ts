import { ReactNode } from "react"

export type overflow = "visible" | "hidden" | "clip" | "scroll" | "auto"

export interface baseProps {
    children : ReactNode,
    className? : string,
    onClick? : ()=>void
  }
import {notFound} from "next/navigation"

export default function NotFoundCatchAll() {
  notFound()
}

export const runtime = 'experimental-edge';
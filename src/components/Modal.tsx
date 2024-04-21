"use client"

import {useRouter} from "next/navigation"
import {ElementRef, ReactNode, useEffect, useRef, MouseEventHandler} from "react"

export default function Modal({children}: { children: ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<"dialog">>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const closeModal: MouseEventHandler<HTMLDialogElement> = (e) =>
    e.target === dialogRef.current && router.back()

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={router.back}
      className="rounded-lg backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-32">{children}</div>
    </dialog>
  )
}

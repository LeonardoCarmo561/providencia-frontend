'use client'

import { useState } from 'react'

export function ToggleLanguageButton() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div
      className="flex relative h-full justify-end  z-10"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="text-white"
        onClick={() => setOpen((oldValue) => !oldValue)}
      >
        pt
      </button>
      <ul
        data-open={open}
        className="absolute hidden data-[open=true]:block top-full pt-1 bg-black text-white px-2"
      >
        <button>
          <li className="p-2">English</li>
        </button>
        <button>
          <li className="p-2">Italiano</li>
        </button>
        <button>
          <li className="p-2">Français</li>
        </button>
        <button>
          <li className="p-2">Español</li>
        </button>
        <button>
          <li className="p-2">Español</li>
        </button>
        <button>
          <li className="p-2">Magyar</li>
        </button>
        <button>
          <li className="p-2">Polski</li>
        </button>
        <button>
          <li className="p-2">Deutsch</li>
        </button>
      </ul>
    </div>
  )
}

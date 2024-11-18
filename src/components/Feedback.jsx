'use client'

import { GithubIcon } from '@/components/icons/GithubIcon'

export function Feedback() {
  return (
    <div className="relative h-8">
      <div
        className='absolute inset-0 flex items-center justify-center gap-2 md:justify-start'
      >
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Something wrong with this page?
        </p>
        <div className="group flex items-center overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
          <a
            href="https://github.com/luadotsh/docs"
            target='_blank'
            className="px-3 py-1 flex items-center space-x-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"

          >
            <div>
              Edit this page
            </div>
            <GithubIcon className="h-5 w-5 fill-zinc-400" />
          </a>
        </div>
      </div>
    </div>
  )
}

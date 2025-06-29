import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import AllSnippets from './allsnippets'

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            ✨ Next.js Snippet Manager
          </h1>
          <p className="text-gray-600">Easily manage your code snippets</p>
        </div>

        {/* Snippets Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">📂 All Snippets</h2>
          <Link href="/snippets/new">
            <Button className="bg-blue-600 hover:bg-blue-700">➕ Add Snippet</Button>
          </Link>
        </div>

        {/* Snippet List */}
        <AllSnippets />
      </div>
    </main>
  )
}

export default Page

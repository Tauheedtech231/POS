import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { Label } from '@radix-ui/react-label'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    if (!title || !code) {
      throw new Error('Title and code are required')
    }

    await prisma.snippet.create({
      data: { title, code }
    })

    redirect('/snippets')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">📝 Add New Snippet</h1>
          <Link href="/snippets">
            <Button variant="outline">← Back</Button>
          </Link>
        </div>

        {/* Form */}
        <form action={createSnippet} className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-base font-medium">Title</Label>
            <input
              type="text"
              name="title"
              placeholder="Enter the snippet title"
              className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <Label htmlFor="code" className="text-base font-medium">Code</Label>
            <Textarea
              name="code"
              placeholder="Paste your code here..."
              rows={10}
              className="w-full mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            🚀 Save Snippet
          </Button>
        </form>
      </div>
    </main>
  )
}

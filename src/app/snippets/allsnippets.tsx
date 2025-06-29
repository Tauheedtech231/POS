import { prisma } from "@/lib/prisma";

export default async function AllSnippets() {
  const snippets = await prisma.snippet.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
          💡 Code Snippets
        </h1>

        {snippets.length === 0 ? (
          <p className="text-center text-gray-500">No Snippets Found</p>
        ) : (
          <ul className="space-y-6">
            {snippets.map((snippet) => (
              <li
                key={snippet.id}
                className="rounded-xl border border-gray-300 bg-white shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                  {snippet.title}
                </h2>
                <pre className="bg-gray-100 text-sm text-gray-800 font-mono rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                  {snippet.code}
                </pre>
                <p className="text-right text-xs text-gray-500 mt-2">
                  Created: {new Date(snippet.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

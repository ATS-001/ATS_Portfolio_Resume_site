with open("components/CertificateDeck.tsx", "r") as f:
    content = f.read()

target = '{/* Filters */}'
replacement = """{/* Real-time Achievement Counter */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Showing <strong className="text-blue-600 dark:text-blue-400 font-bold">{filteredCards.length}</strong> of <strong className="text-zinc-900 dark:text-white font-bold">{certificatesData.length}</strong> Credentials & Achievements</span>
        </div>

        {/* Filters */}"""

content = content.replace(target, replacement)

with open("components/CertificateDeck.tsx", "w") as f:
    f.write(content)

print("CertificateDeck updated")

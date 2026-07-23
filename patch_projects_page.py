with open("app/projects/page.tsx", "r") as f:
    content = f.read()

# Update getStatusStyles
status_styles_old = """    case 'Under Development': 
    case 'Active Development': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
    case 'Completed (Archived)': return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';"""

status_styles_new = """    case 'Under Development': 
    case 'Active Development': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
    case 'Continuous Integration / Continuous Deployment (CI/CD)': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
    case 'Completed (Archived)': return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';"""

content = content.replace(status_styles_old, status_styles_new)

# Replace Filters & Search section
filters_old = """        {/* Filters & Search */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects, tech stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-zinc-200 dark:border-white/10 rounded-2xl leading-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null 
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md' 
                  : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              All
            </button>
            {ALL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30' 
                    : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>"""

filters_new = """        {/* Filters & Search - Centralized Layout */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 mb-12 max-w-4xl mx-auto w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Centralized Search Bar */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects, tech stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3.5 border border-zinc-200 dark:border-white/10 rounded-2xl leading-5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm md:text-base transition-all shadow-md"
            />
          </div>

          {/* Real-time Websites & Projects Counter */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Showing <strong className="text-blue-600 dark:text-blue-400 font-bold">{filteredProjects.length}</strong> of <strong className="text-zinc-900 dark:text-white font-bold">{PROJECTS.length}</strong> Websites & Projects</span>
          </div>

          {/* Sorting Categories - Positioned Centered Below Search */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full pt-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCategory === null 
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md' 
                  : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            {ALL_CATEGORIES.map((category) => {
              const count = PROJECTS.filter(p => p.categories.includes(category)).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold' 
                      : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>"""

if filters_old in content:
    content = content.replace(filters_old, filters_new)
    print("Filters replaced cleanly")
else:
    print("Filters old block not found, performing targeted replacement")

with open("app/projects/page.tsx", "w") as f:
    f.write(content)

print("app/projects/page.tsx updated successfully")

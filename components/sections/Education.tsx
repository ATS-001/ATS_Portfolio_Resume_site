'use client';

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const EDUCATION_DATA = [
  {
    institution: 'Vidya Academy of Science and Technology, Thrissur',
    course: 'B.Tech in Computer Science Engineering',
    boardServer: 'KTU',
    period: '2025 – 2029',
    status: 'Currently Pursuing'
  },
  {
    institution: 'Nirmal Jyothi Central School, Thrissur',
    level: 'Higher Secondary Education (XII)',
    board: 'CBSE',
    year: '2025',
    result: '79.80%',
    details: 'Participated in Tachyon360’s Stogo Fest by building a website focused on energy conservation.'
  },
  {
    institution: 'Nirmal Jyothi Central School, Thrissur',
    level: 'Secondary Education (X)',
    board: 'CBSE',
    year: '2023',
    result: '81.80%'
  },
  {
    institution: 'Sharjah Indian School, Juwaiza',
    level: 'Primary Education',
    board: 'CBSE',
    result: 'Passed',
    period: '2011 – 2019'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-4 tracking-tight">
            Academic <span className="text-zinc-900 dark:text-zinc-100">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-white/10" />
          
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              <div className="absolute left-0.5 md:left-4 top-1 aspect-square w-8 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/20 rounded-full flex items-center justify-center z-10 shadow-sm dark:shadow-[0_0_15px_rgba(167,139,250,0.3)]">
                <GraduationCap className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              </div>
              
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] hover:bg-zinc-100 dark:hover:bg-white/[0.04] border border-zinc-200 dark:border-white/5 transition-all group backdrop-blur-sm relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 font-mono text-5xl font-bold text-zinc-900 dark:text-white">
                  {`0${index + 1}`}
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold dark:text-white text-zinc-900">
                    {item.course || item.level}
                  </h3>
                  <span className="text-sm font-mono dark:text-zinc-400 text-zinc-500 bg-zinc-200 dark:bg-white/5 px-3 py-1 rounded-full w-fit">
                    {item.period || item.year}
                  </span>
                </div>
                
                <h4 className="text-lg text-zinc-600 dark:text-zinc-300 font-medium mb-3">
                  {item.institution}
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {(item.boardServer || item.board) && (
                    <span className="text-xs px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20">
                      {item.boardServer || item.board}
                    </span>
                  )}
                  {item.status && (
                    <span className="text-xs px-2 py-1 rounded-md bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-500/20">
                      {item.status}
                    </span>
                  )}
                  {item.result && (
                    <span className="text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/10">
                      {item.result}
                    </span>
                  )}
                </div>

                {item.details && (
                  <p className="dark:text-zinc-400 text-zinc-600 text-sm leading-relaxed border-t border-zinc-200 dark:border-white/5 pt-4 mt-2">
                    {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

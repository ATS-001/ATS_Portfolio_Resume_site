"use client";

import React, { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2, MessageSquareQuote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type FeedbackForm = {
  name: string;
  email: string;
  message: string;
  rating?: string;
};

export default function FeedbackPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FeedbackForm>();

  const onSubmit = async (data: FeedbackForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Feedback data:", { ...data, rating: selectedRating });
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setSelectedRating(null);
    
    // Reset success state after a few seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 mb-6">
            <MessageSquareQuote size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            Share Your <span className="text-zinc-900 dark:text-zinc-100">Feedback</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Your insights propel this dossier forward. Tell me what stood out, what could improve, or just drop a friendly note.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent dark:from-white/5 opacity-50 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 text-center relative z-10"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 size={48} className="drop-shadow-lg" />
                </motion.div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Awesome! Thanks</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-sm">
                  I truly appreciate you taking the time to share your thoughts. It means a lot to me.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 relative z-10"
              >
                {/* Rating component */}
                <div className="flex flex-col items-center justify-center pb-6 border-b border-zinc-200 dark:border-white/5">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider">Rate your experience</span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedRating(star)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          selectedRating && star <= selectedRating
                            ? 'text-yellow-500 scale-110 drop-shadow-md'
                            : 'text-zinc-300 dark:text-zinc-700 hover:text-yellow-500/50 hover:scale-110'
                        }`}
                      >
                        <Star size={32} className={selectedRating && star <= selectedRating ? 'fill-yellow-500' : ''} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/20'} outline-none focus:ring-2 transition-all dark:text-white text-zinc-900 shadow-sm`}
                      placeholder="John Doe"
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" /> {errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                      })}
                      className={`w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/20'} outline-none focus:ring-2 transition-all dark:text-white text-zinc-900 shadow-sm`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" /> {errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-500 focus:ring-zinc-500/20'} outline-none focus:ring-2 transition-all dark:text-white text-zinc-900 resize-none shadow-sm`}
                    placeholder="What did you like? What could be better?"
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500" /> {errors.message.message}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 shadow-md active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Feedback
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}

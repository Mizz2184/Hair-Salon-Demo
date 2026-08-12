import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../data/salonData';
import { Star, Quote, CheckCircle2, MessageSquarePlus } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newService, setNewService] = useState('LAYERS & STYLING');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const added = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      date: 'Just now',
      serviceName: newService.toUpperCase(),
      comment: newComment,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      verified: true
    };

    setReviewsList([added, ...reviewsList]);
    setNewAuthor('');
    setNewComment('');
    setShowReviewModal(false);
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-50 dark:bg-zinc-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase text-zinc-900 dark:text-white mt-1">
              HAIRSTYLES & REVIEWS
            </h2>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>LEAVE A RECEPTION REVIEW</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsList.map((rev) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-lg flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-200 dark:text-zinc-800" />

              <div className="space-y-4">
                {/* Stars & Service */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < rev.rating ? 'fill-current' : 'text-zinc-300 dark:text-zinc-700'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    {rev.date}
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {rev.serviceName}
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-sans-body italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-200 dark:border-zinc-700"
                />
                <div>
                  <div className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                    )}
                  </div>
                  <span className="text-[10px] text-zinc-500 uppercase font-medium">Verified Client</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Leave Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-md w-full p-6 relative text-zinc-900 dark:text-white shadow-2xl">
            <button
              onClick={() => setShowReviewModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-2"
            >
              ✕
            </button>

            <h3 className="font-display text-2xl font-bold uppercase mb-4">SHARE YOUR EXPERIENCE</h3>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={e => setNewAuthor(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Service Received</label>
                <select
                  value={newService}
                  onChange={e => setNewService(e.target.value)}
                  className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <option value="LAYERS & STYLING">LAYERS & STYLING</option>
                  <option value="BALAYAGE & GLOSS">BALAYAGE & GLOSS</option>
                  <option value="CURTAIN BANGS & CUT">CURTAIN BANGS & CUT</option>
                  <option value="OMBRÉ COLOR MELT">OMBRÉ COLOR MELT</option>
                  <option value="HAIRDO & UPDO">HAIRDO & UPDO</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star className={`w-6 h-6 ${star <= newRating ? 'text-amber-400 fill-amber-400' : 'text-zinc-300 dark:text-zinc-700'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  value={newComment}
                  onChange={e => setNewComment(e.target.value)}
                  placeholder="Describe your salon experience, stylist care, and results..."
                  className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-bold uppercase tracking-widest text-xs py-3.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                SUBMIT TESTIMONIAL
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

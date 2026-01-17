import { useState, useEffect } from 'react';
import { Star, Send } from 'lucide-react';
import { supabase, Review } from '../lib/supabase';

function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: 5,
  });

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          name: formData.name,
          content: formData.content,
          rating: formData.rating,
          approved: false,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({ name: '', content: '', rating: 5 });

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="space-y-12">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600">
          <h2 className="text-3xl font-bold text-white mb-8">What People Are Saying</h2>

          {loading ? (
            <div className="text-center py-8 text-slate-400">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="text-center py-8 text-slate-400">
              No reviews yet. Be the first to share your thoughts!
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="group bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-600 hover:border-cyan-400/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-sm text-slate-400">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-300">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl blur-2xl"></div>
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600">
          <h3 className="text-3xl font-bold text-white mb-4">Share Your Feedback</h3>
          <p className="text-slate-300 mb-8">
            Let us know what you think! Your review will be visible after approval.
          </p>

          {success && (
            <div className="mb-6 bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg">
              Thank you! Your review has been submitted and will appear after approval.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none placeholder-slate-500 transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-slate-300 mb-3">
                Rating
              </label>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    className="focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= formData.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-600 hover:text-yellow-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-slate-300 mb-2">
                Your Review
              </label>
              <textarea
                id="content"
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none resize-none placeholder-slate-500 transition-all"
                placeholder="Share your thoughts about this website..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-slate-500 disabled:to-slate-600 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;

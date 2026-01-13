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
    <section id="reviews" className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">What People Are Saying</h2>

        {loading ? (
          <div className="text-center py-8 text-slate-600">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-8 text-slate-600">
            No reviews yet. Be the first to share your thoughts!
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-slate-700">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Share Your Feedback</h3>
        <p className="text-slate-600 mb-6">
          Let us know what you think! Your review will be visible after approval.
        </p>

        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Thank you! Your review has been submitted and will appear after approval.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= formData.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300 hover:text-yellow-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
              Your Review
            </label>
            <textarea
              id="content"
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              placeholder="Share your thoughts about this website..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReviewSection;

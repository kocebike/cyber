import { useState, useEffect } from 'react';
import { Shield, LogOut, CheckCircle, XCircle, Trash2, Star, Clock } from 'lucide-react';
import { supabase, Review } from '../lib/supabase';

interface AdminDashboardProps {
  onLogout: () => void;
}

function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ approved: true })
        .eq('id', id);

      if (error) throw error;
      await loadReviews();
    } catch (error) {
      console.error('Error approving review:', error);
      alert('Failed to approve review');
    }
  };

  const handleReject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .update({ approved: false })
        .eq('id', id);

      if (error) throw error;
      await loadReviews();
    } catch (error) {
      console.error('Error rejecting review:', error);
      alert('Failed to reject review');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review permanently?')) {
      return;
    }

    try {
      const { error } = await supabase.from('reviews').delete().eq('id', id);

      if (error) throw error;
      await loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Failed to delete review');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'pending') return !review.approved;
    if (filter === 'approved') return review.approved;
    return true;
  });

  const pendingCount = reviews.filter((r) => !r.approved).length;
  const approvedCount = reviews.filter((r) => r.approved).length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-b from-slate-800 to-slate-700 border-b border-slate-600">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-3 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-slate-400 text-sm">Review Management</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Total Reviews</p>
                <p className="text-4xl font-bold text-white mt-2">{reviews.length}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Pending Approval</p>
                <p className="text-4xl font-bold text-orange-400 mt-2">{pendingCount}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm font-medium">Approved</p>
                <p className="text-4xl font-bold text-green-400 mt-2">{approvedCount}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl shadow-xl border border-slate-600 overflow-hidden">
          <div className="p-8 border-b border-slate-600">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">All Reviews</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  All ({reviews.length})
                </button>
                <button
                  onClick={() => setFilter('pending')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'pending'
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  onClick={() => setFilter('approved')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    filter === 'approved'
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  Approved ({approvedCount})
                </button>
              </div>
            </div>
          </div>

          <div className="p-8">
            {loading ? (
              <div className="text-center py-12 text-slate-400">Loading reviews...</div>
            ) : filteredReviews.length === 0 ? (
              <div className="text-center py-12 text-slate-400">No reviews found</div>
            ) : (
              <div className="space-y-4">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className={`border rounded-xl p-6 transition-all ${
                      review.approved
                        ? 'bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/30 hover:border-green-400/50'
                        : 'bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/30 hover:border-orange-400/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-semibold text-white">{review.name}</p>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              review.approved
                                ? 'bg-green-500/30 text-green-300 border border-green-500/50'
                                : 'bg-orange-500/30 text-orange-300 border border-orange-500/50'
                            }`}
                          >
                            {review.approved ? 'Approved' : 'Pending'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                          {renderStars(review.rating)}
                          <span>•</span>
                          <span>{new Date(review.created_at).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4">{review.content}</p>

                    <div className="flex gap-2">
                      {!review.approved && (
                        <button
                          onClick={() => handleApprove(review.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                      )}
                      {review.approved && (
                        <button
                          onClick={() => handleReject(review.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                        >
                          <XCircle className="w-4 h-4" />
                          Unapprove
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-cyan-400" />
            Security Note
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            This admin panel uses Supabase Auth with Row Level Security (RLS) policies.
            All database queries are protected against SQL injection attacks through Supabase's
            secure query builder. Review submissions from users are automatically sanitized,
            and only authenticated administrators can approve, modify, or delete reviews.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

type Page = 'home' | 'admin-login' | 'admin-dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      (async () => {
        setIsAuthenticated(!!session);
        if (!session && currentPage === 'admin-dashboard') {
          setCurrentPage('admin-login');
        }
      })();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [currentPage]);

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/admin') {
        if (isAuthenticated) {
          setCurrentPage('admin-dashboard');
        } else {
          setCurrentPage('admin-login');
        }
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();
    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, [isAuthenticated]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    } catch (error) {
      console.error('Error checking auth:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin-dashboard');
    window.history.pushState({}, '', '/admin');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  useEffect(() => {
    const adminLink = document.createElement('a');
    adminLink.href = '/admin';
    adminLink.textContent = 'Admin';
    adminLink.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#1e40af;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;z-index:1000;box-shadow:0 4px 6px rgba(0,0,0,0.1);';

    adminLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (isAuthenticated) {
        setCurrentPage('admin-dashboard');
      } else {
        setCurrentPage('admin-login');
      }
      window.history.pushState({}, '', '/admin');
    });

    if (currentPage === 'home') {
      document.body.appendChild(adminLink);
    }

    return () => {
      if (document.body.contains(adminLink)) {
        document.body.removeChild(adminLink);
      }
    };
  }, [currentPage, isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    );
  }

  if (currentPage === 'admin-login') {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentPage === 'admin-dashboard' && isAuthenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  return <HomePage />;
}

export default App;

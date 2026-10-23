import React, { useState, useEffect } from 'react';
import { Lock, Trash2, LogOut, Cloud, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { StorageService, Inquiry } from '../services/storageService';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';

export const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Check auth state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsAuthenticated(!!currentUser);
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const loadInquiries = async () => {
    setIsLoading(true);
    const data = await StorageService.getInquiries();
    setInquiries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchInquiries = async () => {
      if (isAuthenticated && isAuthReady) {
        const data = await StorageService.getInquiries();
        if (isMounted) {
          setInquiries(data);
        }
      }
    };
    fetchInquiries();
    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, isAuthReady]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || 'Failed to sign in');
      } else {
        setError('Failed to sign in');
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const clearData = async () => {
    if (window.confirm('Are you sure you want to delete all inquiries? This cannot be undone.')) {
      await StorageService.clearAll();
      loadInquiries();
    }
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-coffee-50 px-6">
        <RefreshCw size={24} className="animate-spin text-coffee-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-coffee-50 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-8 rounded-sm shadow-card border border-coffee-100"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4 text-coffee-600">
              <Lock size={24} />
            </div>
            <h2 className="font-serif text-3xl text-coffee-900 font-bold">Admin Portal</h2>
            <p className="text-coffee-500 text-sm mt-2">Restricted Access</p>
          </div>

          <form onSubmit={handleLogin}>
            <button
              type="submit"
              className="w-full bg-coffee-900 text-white font-bold uppercase tracking-[0.2em] py-4 hover:bg-coffee-800 transition-colors text-xs rounded-sm flex items-center justify-center gap-2"
            >
              Sign in with Google
            </button>
            {error && <p className="text-red-500 text-xs text-center mt-4 font-bold uppercase tracking-widest">{error}</p>}
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coffee-50 pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-coffee-900 font-bold">Inquiry Dashboard</h2>
            <p className="text-coffee-500 mt-2 flex items-center gap-2">
              Status: 
              <span className="text-green-600 font-bold flex items-center gap-1"><Cloud size={14} /> Cloud Connected</span>
            </p>
          </div>
          <div className="flex gap-4">
            <button 
               onClick={loadInquiries}
               className="flex items-center gap-2 px-6 py-3 bg-white border border-coffee-200 text-coffee-600 hover:bg-coffee-50 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              <RefreshCw size={16} className={isLoading ? "animate-spin" : ""} /> Refresh
            </button>
            <button 
              onClick={clearData}
              className="flex items-center gap-2 px-6 py-3 border border-red-200 text-red-700 bg-red-50 hover:bg-red-100 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              <Trash2 size={16} /> Clear All
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-coffee-900 text-white hover:bg-coffee-800 transition-colors text-xs font-bold uppercase tracking-widest rounded-sm"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {inquiries.length === 0 ? (
          <div className="bg-white p-20 text-center border border-coffee-100 rounded-sm shadow-sm">
            <p className="text-coffee-400 text-lg font-serif italic">No inquiries received yet.</p>
          </div>
        ) : (
          <div className="bg-white border border-coffee-100 rounded-sm shadow-sm overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-coffee-100 text-coffee-900 border-b border-coffee-200">
                <tr>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Date</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Client Details</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Location</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest">Volume</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest w-1/3">Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-coffee-100">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-coffee-50/50 transition-colors">
                    <td className="p-6 text-sm text-coffee-500 whitespace-nowrap">
                      {new Date(inq.date).toLocaleDateString()}
                      <br/>
                      <span className="text-xs opacity-60">{new Date(inq.date).toLocaleTimeString()}</span>
                    </td>
                    <td className="p-6">
                      <p className="font-bold text-coffee-900">{inq.business}</p>
                      <p className="text-sm text-coffee-600">{inq.name}</p>
                      <a href={`tel:${inq.phone}`} className="text-xs text-coffee-400 hover:text-coffee-800 mt-1 block">{inq.phone}</a>
                    </td>
                    <td className="p-6 text-sm text-coffee-700">{inq.location}</td>
                    <td className="p-6">
                      <span className="bg-coffee-100 text-coffee-800 px-3 py-1 rounded-full text-xs font-bold border border-coffee-200 whitespace-nowrap">
                        {inq.volume}
                      </span>
                    </td>
                    <td className="p-6 text-sm text-coffee-600 leading-relaxed italic">
                      "{inq.requirements}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
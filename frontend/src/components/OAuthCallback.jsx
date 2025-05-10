// OAuthCallback.jsx
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', `Bearer ${token}`);
      navigate('/main');
    } else {
      navigate('/login');
    }
  }, [searchParams, navigate]);
  
  return (
    <div className="flex justify-center items-center h-screen">
      <p>Authenticating...</p>
    </div>
  );
}

export default OAuthCallback;
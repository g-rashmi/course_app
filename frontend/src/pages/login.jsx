import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

function Login() { 
  const navigate = useNavigate();

  const handleGoogle = async (e) => {
    e.preventDefault();  
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result); 
      navigate("/")
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={styles.container}>
      <button onClick={handleGoogle} style={styles.button}>
        <div style={styles.iconContainer}>
          <img
            src="https://freelogopng.com/images/all_img/1657955079google-icon-png.png"
            alt="Google icon"
            style={styles.icon}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.text}>Login with Google</h2>
        </div>
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '10px 20px',
    border: '2px solid #0b131b',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  iconContainer: {
    width: '30px',
    marginRight: '10px',
  },
  icon: {
    width: '100%',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #0b131b, #010f1b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
  },
};

export default Login;
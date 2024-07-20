import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  return (
    <div className="ctn__button">
      <button
        onClick={ () => navigate("/") }
      >
        Back to Home
      </button>
    </div>
  );
}

export default Button;
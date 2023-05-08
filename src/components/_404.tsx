import github from "../assets/github-mark-white.svg";

export function UserNotFound() {
  return (
    <div className="card-profile">
      <div className="card-image">
        <img src={github} alt="Not Found" />
      </div>

      <div className="card-network">
        <p>User Not Found</p>
        <a href="#/" target="_blank" className="card-link">
          <button className="card-button" disabled>
            User Not Found
          </button>
        </a>
      </div>
    </div>
  );
}

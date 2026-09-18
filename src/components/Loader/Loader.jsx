import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <h1>V</h1>
        <p>Veerendra</p>
        <span>Loading...</span>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
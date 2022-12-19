export const Link = ({ projectLink, title }) => {
  return (
    <div className="links">
      <a href={projectLink} >
        <h5>{title}</h5>
      </a>
    </div>
  );
};

export default function ProjectCard(props) {
  return (
    <div
      className="project-card clickable"
      onClick={() => {
        window.open(props.link, "_blank");
      }}
    >
      <div className="flex-container">
        <div className="left">
          <img src={props.img} />
        </div>

        <div className="right">
          <h2>{props.title}</h2>
          <a>{props.text}</a>

          <div className="icon-text-pair">
            <img src={props.icon} />
            <a>{props.icon_text}</a>
          </div>

          <a id="date">{props.date}</a>
        </div>
      </div>
    </div>
  );
}

import "./css/text_styles.css";

export const TemperatureView = ({
  location = "<submit location>",
  max_temp,
  min_temp,
}) => {
  let disabled_text_css = "";
  if (!max_temp || !min_temp) disabled_text_css = "disabled-text";

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className={`card-title header-txt ${disabled_text_css}`}>
          {location}
        </h5>
        <p className={`card-text card-txt ${disabled_text_css}`}>
          Max: {max_temp}
          <br />
          Min: {min_temp}
        </p>
      </div>
    </div>
  );
};

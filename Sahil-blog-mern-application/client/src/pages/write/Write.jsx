import "./write.css";

export default function Write() {
  return (
    <>
      {/* write  */}

      <div className="write">
        <img
          className="writeImg"
          src="https://media.istockphoto.com/id/1084780510/photo/young-beautiful-and-confident-asian-korean-student-girl-researching-and-studying-at-home.jpg?s=170667a&w=0&k=20&c=smoA3a8dMdQWLSMzHmAVOO9lbVJgbY4SQ-6IL-Qxqqc="
          alt="labrada"
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}

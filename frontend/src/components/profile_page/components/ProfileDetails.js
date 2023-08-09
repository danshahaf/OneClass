import "./ProfileDetails.css";
import profilePhoto from "../../attachments/profilephoto.jpeg"; // Import the profile photo
import signinBackground from "../../attachments/signin-background.jpeg"; // Import the profile photo

const ProfileDetails = () => {
  return (
    <div className="profile-details-div">
      <div className="frame">
        <div className="overlap-group">
          <div className="background-img-container">
            {/* Set the background image as the background of this container */}
            <img className="background-img" src={signinBackground} alt="Background Image" />
          </div>
          <div className="profile-pic-img">
            {/* Display the profile photo */}
            <img className="profile-photo" src={profilePhoto} alt="Profile Photo" />
          </div>
        </div>
      </div>
      <div className="profile-details">
        <div className="div">
          <h1 className="text-wrapper">Hayden Rothman</h1>
          <div className="text-wrapper-2">Software Engineer</div>
          <div className="text-wrapper-2">Boston, MA, US</div>
          <div className="text-wrapper-3">Resume</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

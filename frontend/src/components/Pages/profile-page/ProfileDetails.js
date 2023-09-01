import "./ProfileDetails.css";
import profilePhoto from "../../../attachments/profilephoto.jpeg"; // Import the profile photo
import signinBackground from "../../../attachments/signin-background.jpeg"; // Import the profile photo
import backgroundPhoto from "../../../attachments/blue-color-waves-particle-and-geometric-abstract-background-design-vector-illustration-2888737634.jpg";


const ProfileDetails = () => {
    // TODO: implement database query to access following user content
    const backgroundImg = backgroundPhoto; // selected background image
    const profileImg = profilePhoto; // user profile photo
    const fullName = "Hayden Rothman"; // user's full name 
    const jobTitle = "Software Engineer"; // user's address
    const address = "Boston, MA, US"; // user's address

    return (
        <div>
            <div className="text-wrapper">
                <h2  className="name"> {fullName} </h2>
                <h4 className="job"> {jobTitle} </h4>
                <h4 className="address"> {address}</h4>
            </div>
            <img className="background-img" src={backgroundImg} alt="Background Image" />
            <img className="profile-image" src={profileImg} alt="Profile Photo" />
        </div>
    );

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

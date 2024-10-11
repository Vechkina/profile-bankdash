import "./userProfileForm.scss";

const UserProfileForm = () => {
  return (
    <form className="form">
      <fieldset>
        <div className="form__input">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue="Charlene Reed"
          />
        </div>
        <div className="form__input">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue="Charlene Reed"
          />
        </div>
        <div className="form__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue="charlenereed@gmail.com"
          />
        </div>
        <div className="form__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue="password"
          />
        </div>
        <div className="form__input">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            name="dob"
            id="dob"
            defaultValue="25 January 1990"
          />
        </div>
        <div className="form__input">
          <label htmlFor="presentAddress">Present Address</label>
          <input
            type="text"
            name="presentAddress"
            id="presentAddress"
            defaultValue="San Jose, California, USA"
          />
        </div>
        <div className="form__input">
          <label htmlFor="permanentAddress">Permanent Address</label>
          <input
            type="text"
            name="permanentAddress"
            id="permanentAddress"
            defaultValue="San Jose, California, USA"
          />
        </div>
        <div className="form__input">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" defaultValue="San Jose" />
        </div>
        <div className="form__input">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            defaultValue="45962"
          />
        </div>
        <div className="form__input">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" defaultValue="USA" />
        </div>

        <button className="form__btn" type="submit">
          Save
        </button>
      </fieldset>
    </form>
  );
};

export default UserProfileForm;

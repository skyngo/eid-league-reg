import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [userField, setUserField] = useState({
    team_name: "",
    f_name: "",
    viber_number: "",
    email: "",
    nid: "",
    p1_fullname: "",
    p1_nid: "",
    p1_ign: "",
    p1_igid: "",
    p2_fullname: "",
    p2_nid: "",
    p2_ign: "",
    p2_igid: "",
    p3_fullname: "",
    p3_nid: "",
    p3_ign: "",
    p3_igid: "",
    p4_fullname: "",
    p4_nid: "",
    p4_ign: "",
    p4_igid: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
  };
  const [loading, setLoading] = useState();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "https://api.sky.ngo/create",
        userField
      );
      console.log(responce);
      setLoading(true);
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  if (loading) {
    return <Home />;
  }

  return (
    <div className="container">
      <h2 className="header">Registeration Form</h2>
      <form>
        {/* <div className="mb-3 mt-3">
                                <label className="form-label"> Full Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeUserFieldHandler(e)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label className="form-label">Phone Number:</label>
                                <input type="text" className="form-control" id="phone_number" placeholder="Enter Phone Number" name="phone_number" onChange={e => changeUserFieldHandler(e)} required/>
                            </div> */}
        <div class="input-box">
          <label>Team Name</label>
          <input
            type="text"
            name="team_name"
            placeholder="Enter team name"
            required
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>

        <div class="input-box">
          <label>IGL Name</label>
          <input
            type="text"
            name="f_name"
            placeholder="Enter IGL Name"
            required
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>

        <div class="input-box" style={{ textTransform: "capitalize" }}>
          <label>NID No</label>
          <input
            type="text"
            name="nid"
            placeholder="Enter NID number"
            required
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>

        <div class="input-box">
          <label>Viber Number</label>
          <input
            type="text"
            name="viber_number"
            placeholder="Enter IGL viber number"
            required
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>

        <div class="input-box">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            required
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>

        <div class="player-reg-container">
          <br />
          <label class="player-label">Player 1</label>
          <div class="column">
            <div class="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="p1_fullname"
                placeholder="Enter full name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>NID Number</label>
              <input
                type="text"
                name="p1_nid"
                placeholder="Enter NID"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
          <div class="column">
            <div class="input-box">
              <label>In-Game Name</label>
              <input
                type="text"
                name="p1_ign"
                placeholder="Enter In-Game Name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>Game ID</label>
              <input
                type="text"
                name="p1_igid"
                placeholder="PUBG ID Number"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>

        <div class="player-reg-container">
          <br />
          <label class="player-label">Player 2</label>
          <div class="column">
            <div class="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="p2_fullname"
                placeholder="Enter full name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>NID Number</label>
              <input
                type="text"
                name="p2_nid"
                placeholder="Enter NID"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
          <div class="column">
            <div class="input-box">
              <label>In-Game Name</label>
              <input
                type="text"
                name="p2_ign"
                placeholder="Enter In-Game Name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>Game ID</label>
              <input
                type="text"
                name="p2_igid"
                placeholder="PUBG ID Number"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
        <div class="player-reg-container">
          <br />
          <label class="player-label">Player 3</label>
          <div class="column">
            <div class="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="p3_fullname"
                placeholder="Enter full name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>NID Number</label>
              <input
                type="text"
                name="p3_nid"
                placeholder="Enter NID"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
          <div class="column">
            <div class="input-box">
              <label>In-Game Name</label>
              <input
                type="text"
                name="p3_ign"
                placeholder="Enter In-Game Name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>Game ID</label>
              <input
                type="text"
                name="p3_igid"
                placeholder="PUBG ID Number"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>
        <div class="player-reg-container">
          <br />
          <label class="player-label">Player 4</label>
          <div class="column">
            <div class="input-box">
              <label>Full Name</label>
              <input
                type="text"
                name="p4_fullname"
                placeholder="Enter full name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>NID Number</label>
              <input
                type="text"
                name="p4_nid"
                placeholder="Enter NID"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
          <div class="column">
            <div class="input-box">
              <label>In-Game Name</label>
              <input
                type="text"
                name="p4_ign"
                placeholder="Enter In-Game Name"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div class="input-box">
              <label>Game ID</label>
              <input
                type="text"
                name="p4_igid"
                placeholder="PUBG ID Number"
                required
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
          </div>
        </div>

        <br />
        {/* <header>Substitutes (optional)</header>
            <div class="player-reg-container">
              <br />
              <label class="player-label">Player 1</label>
              <div class="column">
                <div class="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="f_name"
                    placeholder="Enter full name"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
                <div class="input-box">
                  <label>NID Number</label>
                  <input type="text" name="nid" placeholder="Enter NID" onChange={e => changeUserFieldHandler(e)}/>
                </div>
              </div>
              <div class="column">
                <div class="input-box">
                  <label>In-Game Name</label>
                  <input
                    type="text"
                    name="ign"
                    placeholder="Enter In-Game Name"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
                <div class="input-box">
                  <label>Game ID</label>
                  <input
                    type="number"
                    name="ig_id"
                    placeholder="PUBG ID Number"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
              </div>
            </div>

            <div class="player-reg-container">
              <br />
              <label class="player-label">Player 2</label>
              <div class="column">
                <div class="input-box">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="f_name"
                    placeholder="Enter full name"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
                <div class="input-box">
                  <label>NID Number</label>
                  <input type="text" name="nid" placeholder="Enter NID"onChange={e => changeUserFieldHandler(e)} />
                </div>
              </div>
              <div class="column">
                <div class="input-box">
                  <label>In-Game Name</label>
                  <input
                    type="text"
                    name="ign"
                    placeholder="Enter In-Game Name"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
                <div class="input-box">
                  <label>Game ID</label>
                  <input
                    type="number"
                    name="ig_id"
                    placeholder="PUBG ID Number"
                    onChange={e => changeUserFieldHandler(e)}
                  />
                </div>
              </div>
            </div> */}

        <button
          type="submit"
          className="button"
          onClick={(e) => onSubmitChange(e)}
        >
          Register Now
        </button>
      </form>
      {/* <div className='col-md-8'>
                        <List />
                    </div> */}
    </div>
  );
};

export default Home;

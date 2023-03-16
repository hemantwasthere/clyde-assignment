import React from "react";
import "../styles/dashboard.scss";

function Dashboard() {
  return (
    <>
      <div className="outer-div">
        <div className="inner-div">
          <div className="user-info">
            <p className="name">Hey Name</p>
            <div className="branch">
              Banglore Branch
              <img src="dropdown.svg" alt="" />
            </div>
          </div>

          <div className="quick-actions">
            <p>Quick Actions</p>
            <div className="add-manage">
              <div className="add-members">
                <img src="plus.svg" alt="" />
                Add members
              </div>
              <div className="manage-staff">
                <img src="people.svg" alt="" />
                Manage Staff
              </div>
            </div>

            <div className="gym-branch">
              <img src="setting.svg" alt="" />
              Set Up Gym branch
            </div>

            <div className="customer">
              <img src="edit.svg" alt="" />
              Potential Customer Conversion
            </div>
          </div>

          <div className="sales">
            <p>Sales & Revenue Details</p>
            <div>
              ₹42,893.90
              <p>Total Revenue</p>
            </div>
          </div>

          <div className="subscription">
            <p>Subscription plans</p>
            <div className="gym-branch">
              <img src="subs.svg" alt="" />
              Manage Subscription Plans
            </div>
          </div>
        </div>
      </div>

      <div className="menubar">
        <div>
          <img src="home.svg" alt="" />
          <p className="home">Home</p>
        </div>
        <div>
          <img src="members.svg" alt="" />
          <p>Members</p>
        </div>
        <div>
          <img src="plan.svg" alt="" />
          <p>Plan</p>
        </div>
        <div>
          <img src="profile.svg" alt="" />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

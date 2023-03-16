import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import "../styles/dashboard.scss";

function Dashboard() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="outer-div">
        <div className="inner-div">
          <div className="user-info">
            <p className="name">Hey {user.displayName}</p>
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

      <div className="dashboard-pc">
        <div className="sidebar">
          <div className="logo">
            <img src="logo.svg" alt="" />
            <p>
              FI<span>T</span>NESS
            </p>
          </div>
          <div className="menus">
            <div>
              <img src="dashboard.svg" alt="" />
              <p>Dashboard</p>
            </div>
            <div>
              <img src="members.svg" alt="" />
              <p>Members</p>
            </div>
            <div>
              <img src="exercise.svg" alt="" />
              <p>Exercise Plans</p>
            </div>
            <div>
              <img src="plan.svg" alt="" />
              <p>Diet Plans</p>
            </div>
            <div>
              <img src="profile.svg" alt="" />
              <p>Profile</p>
            </div>
            <div onClick={logout}>
              <img src="logout.svg" alt="" />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="sub-nav">
            <div>
              <h3>Dashboard</h3>
              <p>Welcome back, {user.displayName}!</p>
            </div>
            <div className="notification">
              <img src="notification.svg" alt="" />
              <img src={user.photoURL} alt="" className="profile-img" />
            </div>
          </div>

          <div className="all-data">
            <div className="data">
              <div className="numbers">
                <div className="revenue">
                  <img src="revenue.svg" alt="" />
                  <div>
                    <h3>₹48,783.34</h3>
                    <p>Total Revenue</p>
                  </div>
                </div>
                <div className="sales">
                  <img src="sales.svg" alt="" />
                  <div>
                    <h3>₹48,783.34</h3>
                    <p>Total Sales</p>
                  </div>
                </div>
              </div>

              <div className="members">
                <p>Members</p>
                <img src="graph.svg" alt="" />
              </div>
            </div>

            <div className="coming">
              <img src="coming.svg" alt="" />
            </div>
          </div>

          <div className="quick-actions">
            <p className="quick">Quick Actions</p>

            <div className="actions">
              <div>
                <p>Add Members</p>
                <div>
                  <img src="plus.svg" alt="" />
                </div>
              </div>
              <div>
                <p>Manage Staffs</p>
                <div>
                  <img src="people.svg" alt="" />
                </div>
              </div>
              <div>
                <p>Set Up Gym branch</p>
                <div>
                  <img src="setting.svg" alt="" />
                </div>
              </div>
              <div>
                <p>Manage Subscription Plans</p>
                <div>
                  <img src="subs.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

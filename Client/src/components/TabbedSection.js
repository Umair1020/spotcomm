import React, { useState } from "react";


const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // Tabs data
  const tabs = [
    {
      id: "tab1",
      title: "A Stronger Healthcare Core",
      content: (
        <>
          <ul>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Technology is now a vital part of healthcare.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                With a growing reliance on IT, the need for a stronger, more
                agile data center is critical.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                IT managers must invest in new methods and technologies to
                support the critical infrastructure.
              </span>
            </li>
          </ul>
          <img
            className="tab-image"
            src="/health (5).png"
            alt="Healthcare Core"
          />
        </>
      ),
    },
    {
      id: "tab2",
      title: "Growth at the Healthcare Edge",
      content: (
        <>
          <ul>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Managing data coming from multiple platforms and locations.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Wearables and apps require low latency for patient access.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Requires a fresh approach through converged design.
              </span>
            </li>
          </ul>
          <img
            className="tab-image"
            src="/4adcdf/globalassets/images/on-page-image/800x600/healthcare-infra-2-_800x600__253409_0.png"
            alt="Healthcare Edge"
          />
        </>
      ),
    },
    {
      id: "tab3",
      title: "Visibility at the Facility",
      content: (
        <>
          <ul>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Ensuring security and continuity of the hospital’s IT system.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Proactive approach detects problems before they happen.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Predictive monitoring enables planning for defense.
              </span>
            </li>
          </ul>
          <img
            className="tab-image"
            src="/4adcdf/globalassets/images/on-page-image/800x600/healthcare-infra-4-_800x600__253411_0.png"
            alt="Facility Visibility"
          />
        </>
      ),
    },
    {
      id: "tab4",
      title: "Protecting Critical Healthcare Operations",
      content: (
        <>
          <ul>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Medical equipment requires constant availability.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Power outages put patients at risk; backup is critical.
              </span>
            </li>
            <li style={{ color: "#fe5b1b" }}>
              <span style={{ color: "#333333" }}>
                Power systems need agility and regular testing.
              </span>
            </li>
          </ul>
          <img
            className="tab-image"
            src="/4adcdf/globalassets/images/on-page-image/800x600/healthcare-infra-3-_800x600__253410_0.png"
            alt="Critical Operations"
          />
        </>
      ),
    },
  ];

  return (
    <div className="tabbed-section">
      <h2>Infrastructure Challenges</h2>
      <div className="tab-nav">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className={`tab-pane ${
                  activeTab === tab.id ? "fade-in" : "fade-out"
                }`}
              >
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TabbedSection;

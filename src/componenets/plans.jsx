import React from "react";
import "./plans.css";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      duration: "/month",
      features: ["Full Gym Access", "1 Personal Trainer Session", "Locker Facility"],
    },
    {
      name: "Premium",
      price: "₹1999",
      duration: "/month",
      featured: true,
      features: [
        "All Equipment Access",
        "5 Trainer Sessions",
        "Custom Diet Plan",
        "Body Composition Analysis",
      ],
    },
    {
      name: "Elite",
      price: "₹2999",
      duration: "/month",
      features: [
        "Unlimited Access",
        "Dedicated Personal Trainer",
        "Diet + Yoga + Cardio",
        "Priority Support",
      ],
    },
  ];

  return (
    <section id="plans" className="plans-section">
      <div className="plans-header">
        <h2>Membership Plans</h2>
        <p>Flexible pricing options designed for every fitness level</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`plan-card ${plan.featured ? "featured" : ""}`}
          >
            {plan.featured && <div className="badge">Most Popular</div>}

            <h3>{plan.name}</h3>

            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="duration">{plan.duration}</span>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button className="plan-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;

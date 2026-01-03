import { useState } from "react";

function Dashboard() {
  const [widgets, setWidgets] = useState({
    stats: true,
    activity: true,
    actions: true
  });

  const toggleWidget = (key) => {
    setWidgets(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allHidden = !widgets.stats && !widgets.activity && !widgets.actions;
  if (allHidden) {
    return (
      <>
        <Controls widgets={widgets} toggleWidget={toggleWidget} />
        <p>No widgets selected</p>
      </>
    );
  }

  return (
    <>
      <Controls widgets={widgets} toggleWidget={toggleWidget} />

      {widgets.stats && <Widget title="User Stats" />}
      {widgets.activity && <Widget title="Recent Activity" />}

      {widgets.actions ? (
        <Widget title="Quick Actions" />
      ) : null}
    </>
  );
}

function Controls({ widgets, toggleWidget }) {
  return (
    <div>
      {Object.keys(widgets).map(key => (
        <button key={key} onClick={() => toggleWidget(key)}>
          Toggle {key}
        </button>
      ))}
    </div>
  );
}

function Widget({ title }) {
  return <div className="widget">{title}</div>;
}

export default Dashboard;

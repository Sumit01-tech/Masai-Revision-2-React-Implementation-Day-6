import { useState } from "react";
import Alert from "./Alert";

function AlertContainer() {
    const [alerts, setAlerts] = useState([]);

    const showSampleAlerts = () => {
        setAlerts([
            { id: 1, type: "success", msg: "Success alert" },
            { id: 2, type: "error", msg: "Error alert" },
            { id: 3, type: "warning", msg: "Warning alert" },
            { id: 4, type: "info", msg: "Info alert" }
        ]);
    };

    const removeAlert = (id) => {
        setAlerts(prev => prev.filter(alert => alert.id !== id));
    };

    return (
        <div>
            <button onClick={showSampleAlerts}>
                Show Sample Alerts
            </button>

            <div className="alert-stack">
                {alerts.map(alert => (
                    <Alert
                        key={alert.id}
                        type={alert.type}
                        onClose={() => removeAlert(alert.id)}
                    >
                        {alert.msg}
                    </Alert>
                ))}
            </div>
        </div>
    );
}

export default AlertContainer;

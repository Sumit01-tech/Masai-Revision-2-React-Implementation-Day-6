function Alert({ type, children, onClose }) {
    const icons = {
        success: "✅",
        error: "❌",
        warning: "⚠️",
        info: "ℹ️"
    };

    return (
        <div className={`alert alert-${type}`}>
            <span>{icons[type]}</span>
            <span style={{ marginLeft: "8px", flex: 1 }}>{children}</span>
            <button onClick={onClose}>✖</button>
        </div>
    );
}

export default Alert;

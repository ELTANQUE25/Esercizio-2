export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const btnClass = variant === "primary" ? "button" : "button secondary";
  return (
    <button onClick={onClick} className={`${btnClass} ${className}`}>
      {children}
    </button>
  );
}
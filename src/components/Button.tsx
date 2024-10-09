export default function Button({
  label,
  onSubmit,
}: {
  label: string;
  onSubmit: () => void;
}) {
  return (
    <button onClick={onSubmit} className="btn btn-submit">
      {label}
    </button>
  );
}

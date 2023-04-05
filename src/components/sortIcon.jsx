import { Stack } from "react-bootstrap";

function SortIcon({sortBy, title}) {
  const DESC = 'desc';

  return (
    <Stack direction="horizontal" gap={3}>
      <span className="me-auto">{title}</span>
      <span>
        <svg style={{ transform: sortBy === DESC ? 'rotate(180deg)' : 0 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </span>
    </Stack>
  );
};

export default SortIcon;
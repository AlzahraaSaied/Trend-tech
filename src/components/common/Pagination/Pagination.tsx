interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "2rem" }}>
      {pages.map((page) => (
        <button
  key={page}
  onClick={() => onPageChange(page)}
  style={{
    padding: "0.6rem 1.2rem",
    margin: "0 0.25rem",
    borderRadius: "6px",
    border: page === currentPage ? "2px solid #16a34aff" : "1px solid #cbd5e1",
    backgroundColor: page === currentPage ? "#bfdbfe" : "#f8fafc",
    color: page === currentPage ? "#16a34a" : "#334155",
    fontWeight: page === currentPage ? 600 : 500,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    boxShadow: page === currentPage ? "0 2px 6px  rgba(22, 163, 74, 1)" : "none",
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#e0e7ff";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
      page === currentPage ? "#bfdbfe" : "#f8fafc";
  }}
>
  {page}
</button>
      ))}
    </div>
  );
};

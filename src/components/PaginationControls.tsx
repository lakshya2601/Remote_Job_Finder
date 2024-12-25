import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PaginationType } from "../utils/types";
import { useJobItemsContext } from "../utils/hooks/useJobItemsContext";

export default function PaginationControls() {
  const { currentPage, handlePageChange, totalPages } = useJobItemsContext();
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          currentPage={currentPage}
          onClick={() => handlePageChange("previous")}
        />
      )}
      {currentPage < totalPages && (
        <PaginationButton
          direction="next"
          currentPage={currentPage}
          onClick={() => handlePageChange("next")}
        />
      )}
    </section>
  );
}

const PaginationButton = ({
  direction,
  currentPage,
  onClick,
}: {
  direction: PaginationType;
  currentPage: number;
  onClick: () => void;
}) => {
  return (
    <button
      className={`pagination__button pagination__button--${direction}`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
    </button>
  );
};

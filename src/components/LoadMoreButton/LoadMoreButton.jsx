import css from "./LoadMoreButtonn.module.css";

function LoadMoreButtonn({ onClick }) {
  return (
    <button className={css.moviListLoadMor} onClick={onClick} type="button">
      Load more
    </button>
  );
}

export default LoadMoreButtonn;

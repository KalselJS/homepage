import { SITE } from "@config";
import getPageNumbers from "./getPageNumbers";

interface GetPaginationProps<T> {
  events: T;
  page: string | number;
  isIndex?: boolean;
}

const getPagination = <T>({
  events,
  page,
  isIndex = false,
}: GetPaginationProps<T[]>) => {
  const totalPagesArray = getPageNumbers(events.length);
  const totalPages = totalPagesArray.length;

  const currentPage = isIndex
    ? 1
    : page && !isNaN(Number(page)) && totalPagesArray.includes(Number(page))
      ? Number(page)
      : 0;

  const lastPost = isIndex ? SITE.postPerPage : currentPage * SITE.postPerPage;
  const startPost = isIndex ? 0 : lastPost - SITE.postPerPage;
  const paginatedEvents = events.slice(startPost, lastPost);

  return {
    totalPages,
    currentPage,
    paginatedEvents,
  };
};

export default getPagination;

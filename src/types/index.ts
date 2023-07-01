export type HeaderProps = {logoText: string};
export type FooterProps = {footerText: string};
export interface SearchState {
  searchText: string;
  results: SearchResult[];
  limit: number;
  min: number;
  max: number;
  step: number;
  page: number;
  hasMore: boolean;
}
export interface SearchResult {
  id: number;
  title: string;
  thumbnailUrl: string;
}
export interface SearchResultItemProps {
  result: SearchResult;
}
export type SearchResultListProps = {
  results: SearchResult[];
  hasMore: boolean;
  loadMore: () => void;
};

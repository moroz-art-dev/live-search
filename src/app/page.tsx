'use client';
import {useAppSelector} from '../redux/hooks';

import SearchResultList from '@/components/SearchResultList';

export default function Home() {
  const results = useAppSelector(state => state.search.results);
  return <SearchResultList results={results} />;
}

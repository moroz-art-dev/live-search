'use client';
import React, {useEffect, useRef} from 'react';

import SearchResultList from '@/components/SearchResultList';
import {nextPage, setSearchResults} from '@/redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {fetchSearchResults} from '@/services/searchService';

export default function Home() {
  const dispatch = useAppDispatch();
  const loadMore = () => {
    dispatch(nextPage());
  };

  const {results, searchText, limit, page, hasMore} = useAppSelector(
    state => state.search
  );

  const controllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      controllerRef.current = controller;

      await fetchSearchResults(searchText, limit, page, dispatch);

      controllerRef.current = null;
    };

    if (controllerRef.current) {
      controllerRef.current.abort();
      controllerRef.current = null;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (searchText) {
        fetchData();
      } else {
        dispatch(setSearchResults([]));
      }
      timeoutRef.current = null;
    }, 500);

    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
        controllerRef.current = null;
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [searchText, limit, page, dispatch]);

  return (
    <SearchResultList results={results} loadMore={loadMore} hasMore={hasMore} />
  );
}

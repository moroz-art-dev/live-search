'use client';
import React, {useEffect, useRef} from 'react';

import SearchResultList from '@/components/SearchResultList';
import {
  nextPage,
  setSearchResults,
  updateSearchResults,
  offHasMore,
} from '@/redux/features/searchSlice';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

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

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?q=${searchText}&_limit=${limit}&_page=${page}`,
          {signal: controller.signal}
        );
        const data = await res.json();

        if (data.length < limit) dispatch(offHasMore());

        if (page > 1) dispatch(updateSearchResults(data));
        else dispatch(setSearchResults(data));
      } catch (error) {
        dispatch(offHasMore());
        console.error('Error fetching data:', error);
      }
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

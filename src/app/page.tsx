'use client';
import SearchResultList from '@/components/SearchResultList';

export default function Home() {
  const results = [
    {id: 1, imageUrl: '/', title: 'Image 1'},
    {id: 2, imageUrl: '/', title: 'Image 2'},
  ];
  return <SearchResultList results={results} />;
}

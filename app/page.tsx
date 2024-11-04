"use client";
import { useEffect, useState } from 'react';
import { Box } from '@/components/Box';
import '/styles/button.css';
import DataFetcher from '@/components/test';
import { Search } from '@/components/search';
import SearchComponent from '@/components/testsearch';
import { TopBar } from '@/components/TopBar';
import { Sin } from '@/components/sin';
import HorizontalScroll from '@/components/scrollThing';
import Papa from '@/components/papa';
import { Todo } from '@/components/todo';

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch('/api/cookies');
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      }
    };
    
    fetchSession();
  }, []);

  return (
    <div className="App">
      <Box className='text-lg bg-purple-500 h-[70px] text-center'>
        <TopBar />
        <Sin onTxtchange={() => { }} />
      </Box>
      <div className='grid-cols-3 w-3/4 items-center justify-between'>
        <DataFetcher />
        <Search />
        <SearchComponent />
        <HorizontalScroll />
        <DataFetcher />
        <DataFetcher />
        <Papa />
      </div>
      <Todo />
      {JSON.stringify(session)}
    </div>
  );
}

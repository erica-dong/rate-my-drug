'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Select } from 'antd'

interface DrugOption {
  value: string;
  label: string;
}

export default function Home() {
  const [drugs, setDrugs] = useState<DrugOption[]>([]);

  const onSearch = async () => {
    const response = await axios.get(`http://localhost:5000/api/drugs`);
    setDrugs(response.data);
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex gap-4 items-center">
          <Image
        src="/images/logo.png"
        alt="Logo"
        width={200}
        height={200}
          />
          <h1 className="font-bold text-8xl text-center sm:text-center">Rate My Drugs</h1>
        </div>
        <h2 className="text-2xl text-center sm:text-center">Find ratings and reviews for medications</h2>
        {drugs.length === 0 ? (
          <Select
            className='w-[500px]'
            loading
          />
        ) : (
          <Select
            options={drugs}
            className='w-[500px]'
            showSearch
            placeholder="Select a drug"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            onChange={(value) => {
              window.location.href = `/drugs/${value}`;
            }}
          />
        )}
      </main>
    </div>
  );
};
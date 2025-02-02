'use client';

import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Select } from 'antd'

interface DrugOption {
  value: string;
  label: string;
}

export default function HeaderLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [drugs, setDrugs] = useState<DrugOption[]>([]);

    const onSearch = async () => {
      const response = await axios.get(`http://localhost:5000/api/drugs`);
      setDrugs(response.data);
    };

    useEffect(() => {
      onSearch();
    }, []);

    return (
      <html lang="en">
        <body>
          <header className="w-full bg-black px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
              Rate My Drugs
          </Link>
          <div className="ml-auto w-1/6">
            {drugs.length === 0 ? (
              <Select
                className='w-[250px]'
                loading
              />
            ) : (
              <Select
                options={drugs}
                className='w-[250px]'
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
          </div>
          </header>
          <main>{children}</main>
        </body>
      </html>
    )
  }
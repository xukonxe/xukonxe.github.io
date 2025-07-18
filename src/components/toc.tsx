'use client';

import { useState, useEffect } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TocProps {
  headings: Heading[];
}

export function Toc({ headings }: TocProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.2) {
            currentId = heading.id;
            break;
          }
        }
      }
      if (!currentId) {
        // 如果没有找到合适的，就找第一个在屏幕上方的
        for (let i = headings.length - 1; i >= 0; i--) {
            const element = document.getElementById(headings[i].id);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100) { // 顶部100px的偏移量
                    currentId = headings[i].id;
                    break;
                }
            }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        const yOffset = -80; // 考虑顶部导航栏的高度
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="hidden lg:block sticky top-24 w-64">
      <h3 className="text-lg font-semibold mb-2">本文目录</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`block text-sm transition-colors hover:text-primary
                ${heading.level === 3 ? 'pl-4' : 'pl-0'}
                ${activeId === heading.id ? 'text-primary font-semibold' : 'text-muted-foreground'}
              `}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 
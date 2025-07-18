'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function Comments() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // Giscus 的主题可以是 'light', 'dark', 'preferred_color_scheme', 'transparent_dark' 等
  // 我们根据 next-themes 的主题来动态选择
  const theme = resolvedTheme === 'dark' ? 'transparent_dark' : 'light';

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    // 在这里替换为您从 Giscus 官网获取的配置
    script.setAttribute('data-repo', 'xukonxe/my-githubpage-discussion');
    script.setAttribute('data-repo-id', 'R_kgDOPOkjkA');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOPOkjkM4CtH6C');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'zh-CN');

    ref.current.appendChild(script);
  }, [theme]);

  return <section ref={ref} />;
} 
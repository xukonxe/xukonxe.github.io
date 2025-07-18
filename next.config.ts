/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'docs',
  // 添加以下配置以解决CSS路径问题
  // 如果您的网站是部署在根域名（如 xukonxe.github.io），则basePath应该为空字符串
  // 如果是部署在子目录（如 xukonxe.github.io/repo-name），则设置为 '/repo-name'
  basePath: '/docs',
  // 修改assetPrefix为符合next/font要求的格式
  assetPrefix: '/',
};

export default nextConfig;

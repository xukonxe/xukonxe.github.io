import fs from 'fs';
import path from 'path';

// 项目目录路径
const projectsDirectory = path.join(process.cwd(), 'content/projects');

// 项目元数据类型
export interface ProjectMetadata {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  featured: boolean;
  coverImage: string;
  demoUrl?: string;
  githubUrl?: string;
  date: string;
}

// 获取所有项目的元数据
export function getAllProjects(): ProjectMetadata[] {
  try {
    // 获取项目目录下的所有文件夹名称
    const projectFolders = fs.readdirSync(projectsDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    // 获取每个项目的元数据
    const projectsData = projectFolders.map(folder => {
      const metadataPath = path.join(projectsDirectory, folder, 'metadata.json');
      
      // 检查元数据文件是否存在
      if (fs.existsSync(metadataPath)) {
        const fileContents = fs.readFileSync(metadataPath, 'utf8');
        const metadata = JSON.parse(fileContents) as ProjectMetadata;
        
        // 确保 ID 与文件夹名称一致
        return {
          ...metadata,
          id: folder
        };
      }
      
      // 如果没有元数据文件，返回基本信息
      return {
        id: folder,
        title: folder,
        description: '',
        longDescription: '',
        technologies: [],
        featured: false,
        coverImage: '',
        date: ''
      } as ProjectMetadata;
    });
    
    // 按日期排序
    return projectsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}

// 获取精选项目
export function getFeaturedProjects(): ProjectMetadata[] {
  const allProjects = getAllProjects();
  return allProjects.filter(project => project.featured);
}

// 根据 ID 获取项目数据
export function getProjectById(id: string): ProjectMetadata | null {
  try {
    const metadataPath = path.join(projectsDirectory, id, 'metadata.json');
    
    if (fs.existsSync(metadataPath)) {
      const fileContents = fs.readFileSync(metadataPath, 'utf8');
      return JSON.parse(fileContents) as ProjectMetadata;
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading project ${id}:`, error);
    return null;
  }
}

// 获取项目的封面图片路径
export function getProjectCoverImagePath(id: string, imageName: string): string {
  return `/content/projects/${id}/${imageName}`;
}

// 获取项目中的所有图片
export function getProjectImages(id: string): string[] {
  try {
    const projectPath = path.join(projectsDirectory, id);
    
    if (fs.existsSync(projectPath)) {
      return fs.readdirSync(projectPath)
        .filter(file => {
          const ext = path.extname(file).toLowerCase();
          return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
        })
        .map(file => `/content/projects/${id}/${file}`);
    }
    
    return [];
  } catch (error) {
    console.error(`Error loading project images for ${id}:`, error);
    return [];
  }
} 
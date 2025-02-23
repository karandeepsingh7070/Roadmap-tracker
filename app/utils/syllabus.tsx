// import { nanoid } from 'nanoid'

export interface SYLLABUS {
  id: number, 
  title: string, 
  link: string,
  description: string | null,
  isFinished? : boolean
}
const syllabus : SYLLABUS[] = [
  { id: 1, title: "Introduction", link: "/lesson/1", description: "Complete Tutorial: Learn Data Python from Scratch" },
  { id: 2, title: "Next.js Basics", link: "/lesson/2", description: "Understand the basics of Next.js" },
  { id: 3, title: "App Router", link: "/lesson/3", description: "Learn about dynamic routing in Next.js" },
  { id: 4, title: "API Routes", link: "/lesson/4", description: "Build API routes using Next.js" },
  { id: 5, title: "Deployment", link: "/lesson/5", description: "Deploy your Next.js application" },
  { id: 6, title: "Get Certificate", link: "/certificate", description: 'Cerificate', isFinished : true }
  ];

  export {syllabus}
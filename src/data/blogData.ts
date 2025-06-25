export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Exploring the cutting-edge technologies and methodologies that will shape web development in the coming year.',
    content: `
      <p>The web development landscape continues to evolve at a rapid pace, with new technologies and methodologies emerging that promise to revolutionize how we build and interact with digital experiences.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development. AI-powered coding assistants, automated testing tools, and intelligent debugging systems are becoming essential parts of the modern developer's toolkit.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (WASM) is finally reaching its potential, enabling near-native performance for web applications. We're seeing more complex applications running entirely in the browser, from video editors to 3D modeling tools.</p>
      
      <h2>The Rise of Micro-Frontends</h2>
      <p>As applications grow in complexity, micro-frontend architectures are providing solutions for scalability and team autonomy. This approach allows different teams to work on different parts of the same application independently.</p>
      
      <h2>Enhanced Developer Experience</h2>
      <p>The focus on developer experience continues to drive innovation in build tools, with faster compilation times, better error messages, and more intuitive APIs becoming the standard.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-12-15',
    readTime: '8 min read',
    tags: ['Web Development', 'Technology', 'Trends'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Building Accessible Web Applications: A Comprehensive Guide',
    excerpt: 'Learn how to create inclusive web experiences that work for everyone, regardless of their abilities or disabilities.',
    content: `
      <p>Web accessibility isn't just a legal requirement—it's a moral imperative and good business practice. Creating accessible web applications ensures that everyone can use and benefit from your digital products.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites and applications that can be used by people with disabilities. This includes users who are blind, deaf, have motor difficulties, or cognitive impairments.</p>
      
      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for accessibility. The guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust.</p>
      
      <h2>Practical Implementation</h2>
      <p>Start with semantic HTML, ensure proper color contrast, add alt text to images, and make your site navigable with keyboard-only input. These fundamental steps will dramatically improve your site's accessibility.</p>
      
      <h2>Testing Your Applications</h2>
      <p>Regular testing with screen readers, keyboard navigation, and automated accessibility tools should be part of your development workflow.</p>
    `,
    author: 'Marcus Rodriguez',
    date: '2024-12-10',
    readTime: '12 min read',
    tags: ['Accessibility', 'UX', 'Best Practices'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Mastering React Performance Optimization',
    excerpt: 'Deep dive into advanced techniques for optimizing React applications and delivering lightning-fast user experiences.',
    content: `
      <p>React performance optimization is crucial for creating smooth, responsive user interfaces. Understanding when and how to optimize can make the difference between a sluggish app and a delightful user experience.</p>
      
      <h2>Understanding React's Reconciliation</h2>
      <p>React's virtual DOM and reconciliation algorithm are designed to be fast, but understanding how they work helps you write more efficient components.</p>
      
      <h2>Memoization Strategies</h2>
      <p>React.memo, useMemo, and useCallback are powerful tools for preventing unnecessary re-renders. Learn when to use each and when they might actually hurt performance.</p>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Implementing code splitting with React.lazy and Suspense can dramatically reduce initial bundle sizes and improve loading times.</p>
      
      <h2>Performance Monitoring</h2>
      <p>Use React DevTools Profiler and other monitoring tools to identify performance bottlenecks and measure the impact of your optimizations.</p>
    `,
    author: 'Alex Thompson',
    date: '2024-12-08',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'JavaScript'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox: Choosing the Right Layout System',
    excerpt: 'A practical comparison of CSS Grid and Flexbox to help you choose the best layout solution for your projects.',
    content: `
      <p>Both CSS Grid and Flexbox are powerful layout systems, but they excel in different scenarios. Understanding their strengths helps you choose the right tool for each situation.</p>
      
      <h2>When to Use Flexbox</h2>
      <p>Flexbox is perfect for one-dimensional layouts, component alignment, and distributing space along a single axis. It's ideal for navigation bars, card layouts, and centering content.</p>
      
      <h2>When to Use CSS Grid</h2>
      <p>CSS Grid shines in two-dimensional layouts where you need precise control over rows and columns. It's perfect for page layouts, complex forms, and magazine-style designs.</p>
      
      <h2>Combining Both Systems</h2>
      <p>The real power comes from using Grid and Flexbox together. Use Grid for the overall page layout and Flexbox for component-level alignment and distribution.</p>
      
      <h2>Browser Support and Fallbacks</h2>
      <p>Both technologies have excellent browser support, but understanding graceful degradation ensures your layouts work everywhere.</p>
    `,
    author: 'Emma Wilson',
    date: '2024-12-05',
    readTime: '7 min read',
    tags: ['CSS', 'Layout', 'Design'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  },
  {
    id: '5',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    excerpt: 'Essential patterns and practices for maintaining type safety and code quality in enterprise TypeScript projects.',
    content: `
      <p>TypeScript has become the go-to choice for large-scale JavaScript applications. Its type system helps catch errors early and improves code maintainability, but following best practices is crucial for success.</p>
      
      <h2>Strict Configuration</h2>
      <p>Enable strict mode and all strict checks in your tsconfig.json. This catches more potential issues and enforces better coding practices from the start.</p>
      
      <h2>Type Organization</h2>
      <p>Organize your types in dedicated files or modules. Use index files to create clean public APIs and avoid circular dependencies.</p>
      
      <h2>Generic Constraints</h2>
      <p>Use generic constraints to create more flexible yet type-safe functions and classes. This allows for better code reuse while maintaining type safety.</p>
      
      <h2>Utility Types</h2>
      <p>Leverage TypeScript's built-in utility types like Partial, Pick, and Omit to create derived types efficiently and maintain consistency.</p>
    `,
    author: 'David Park',
    date: '2024-12-01',
    readTime: '9 min read',
    tags: ['TypeScript', 'Best Practices', 'Architecture'],
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false
  }
];
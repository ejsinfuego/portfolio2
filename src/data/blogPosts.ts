export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-year-as-software-developer",
    title: "So Yeah... Here's How I Got My First Dev Job",
    date: "2025-01-02",
    excerpt: "How I handle new challenges in my first year as full stack web developer",
    tags: ["Software Engineering", "Web Development"],
    content: `## How I Got My First Job as a Developer

My journey into professional software development started unexpectedly. During our Capstone Project, I often reached out to a friend of mine—the Lead Developer of our team—for help and guidance. One day, he asked if I’d like to join their team as a Junior Developer. 

At first, I was hesitant. I wasn’t sure if I had the skills or knowledge to contribute meaningfully. But I took the leap—not because I was confident, but because I was eager to learn. I wanted to understand what it’s like to work on a real-world project, collaborate with a team, and see how everything comes together in a production environment.

That decision changed everything.

---

## What I Learned (Beyond Just Coding)

### 1. **It’s Not Always About the Code**
Surprisingly, I spent less time writing new code and more time debugging, testing, and deploying. I learned that software development isn’t just about writing features—it's about delivering value reliably and efficiently.

### 2. **Frameworks and Libraries Are Just Tools**
It’s not about knowing the latest tech stack. It’s about how you use your tools to solve problems. Whether you're using React, Vue, Spring Boot, or something else, the goal is the same: solve a real problem for real users.

### 3. **Documentation Matters More Than I Thought**
I used to think I could remember all the code I wrote. I was wrong. Proper documentation isn't just for others—it’s for your future self too. I learned the hard way that a small, undocumented dependency can break the whole app during a refactor.

### 4. **Asking for Help Saves Time**
There were moments when I spent hours debugging a problem that had a simple fix. I’ve learned that asking questions isn’t a sign of weakness—it’s a way to work smarter.

### 5. **Teamwork Really Does Make the Dream Work**
Solo coding might feel productive, but collaboration drives better results. Sharing progress, clarifying requirements, and helping each other through blockers makes the entire team move faster.

### 6. **You Don’t Need to Know Everything**
During my first week, I felt pressure to understand the entire tech stack—from backend to frontend. But I’ve learned that what matters more is knowing how to learn, how to find answers, and how to ask for help.

### 7. **Mistakes Are Learning Opportunities**
I wish debugging life was as easy as reading a stack trace. But even without one, mistakes still teach you something. Whether it's writing clearer error messages in APIs or improving your development process, every mistake helps you grow.

---

## Final Thoughts

Landing my first job wasn’t just about technical skills. It was about being open to learning, working with others, and embracing the unknown. I still have a lot to learn—but that’s what makes this journey exciting.
`},
  
];
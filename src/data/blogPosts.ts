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
{
  slug: "building-custom-sso-system",
  title: "Building a Custom Single Sign-On (SSO) System",
  date: "2025-05-02",
  coverImage: "/images/blogs/sso.png",
  excerpt: "How I designed and implemented a secure, token-based SSO system to unify authentication across multiple web apps.",
  tags: ["Software Engineering", "Authentication", "Web Development"],
  content: `## Building a Custom SSO System for Multi-App Authentication

### Overview

As part of a recent project, I developed a custom Single Sign-On (SSO) solution to unify authentication across multiple web applications. The goal was to improve security, simplify the user experience, and make it easier for new services to integrate into the platform.

---

### The Challenge

Managing authentication separately for each app caused:

- Inconsistent login experiences
- Redundant session handling
- Increased maintenance overhead

A centralized SSO system was needed to streamline access across the ecosystem.

---

### The Solution

I designed an SSO system based on secure token exchange and redirect-based login flows:

1. Redirect to Auth Portal: If not logged in, users are sent to the main authentication portal.
2. Login & Token Generation: On successful login, a one-time token is created.
3. Redirect Back with Token: The user is redirected back to the original app with the token.
4. Token Validation: The app calls an API to validate the token and fetch user session data.

This ensures that authentication is handled in one place, while apps stay lightweight and secure.

---

### Key Features

- One-Time, Expiring Tokens  
  Tokens are short-lived and single-use to prevent replay attacks.

- App Registration  
  Each app is registered with a client_id and allowed redirect URI to ensure secure access control.

- Simple Integration  
  New apps only need to handle login redirection and one token validation API call.

---

### Developer Support

To support other developers, I documented:

- Redirect and validation flows
- Expected token structure
- Sample API requests
- Integration code snippets

This made onboarding for other teams seamless and fast.

---

### Results

- One login grants access to all connected apps
- Reduced authentication bugs and duplicated logic
- Faster integration of new tools into the platform

---

### What I Learned

- Token expiration and invalidation are essential for security.
- Clear documentation can make or break adoption.
- Designing for extensibility early pays off in the long run.

---

### Final Thoughts

Building a custom SSO system was a rewarding experience that blended security, usability, and scalability. It’s a great example of how thoughtful infrastructure can unlock better experiences for users and developers alike.
`
}

  
];
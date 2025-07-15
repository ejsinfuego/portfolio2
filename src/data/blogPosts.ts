export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "first-year-as-software-developer",
    title: "So Yeah... Here's How I Got My First Dev Job",
    date: "2025-01-02",
    excerpt: "How I handle new challenges in my first year as full stack web developer",
    tags: ["Software Engineering", "Web Development"],
    keywords: [
"first software developer job",
"how to get a developer job",
"starting a career in software engineering",
"junior developer journey",
"breaking into tech",
"first year as a software engineer",
"tips for new developers",
"software engineering career advice",
"entry level developer experience",
"learning to code professionally",
"developer job interview tips",
"software engineering lessons learned",
"teamwork in software development",
"overcoming imposter syndrome in tech",
"growth as a junior developer",
    ],
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
  keywords: [
    "custom SSO system",
    "single sign-on implementation",
    "SSO authentication",
    "token-based authentication",
    "multi-app authentication",
    "secure authentication system",
    "SSO for web apps",
    "SSO integration guide",
    "SSO security best practices",
    "how to build SSO",
    "user authentication strategies",
    "centralized authentication",
    "SSO developer onboarding",
    "SSO token validation",
    "SSO redirect flow",
    "app registration SSO",
    "SSO API design"
  ],
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
},{
  slug: "ci-cd-deployment-strategy",
  title: "My CI/CD Deployment Strategy for Node.js",
  date: "2025-07-15",
  coverImage: "/images/blogs/pm2.png",
  excerpt: "This guide details a robust CI/CD (Continuous Integration/Continuous Deployment) pipeline for a Node.js application, leveraging GitHub Actions, SSH, and PM2. The strategy ensures that every push to the prod branch triggers an automated, secure, and zero-downtime deployment to your production server.",
  tags: ["NodeJS", "VPS", "CI/CD", "Deployment", "PM2"],
keywords: [
  "Node.js CI/CD pipeline",
  "Node.js deployment",
  "Continuous Integration Node.js",
  "Continuous Deployment Node.js",
  "GitHub Actions Node.js",
  "PM2 deployment Node.js",
  "Zero downtime deployment Node.js",
  "Node.js production workflow",
  "Automated deployment Node.js",
  "Node.js server automation",
  "Node.js DevOps best practices",
  "Node.js GitHub Actions workflow",
  "Node.js SSH deployment",
  "Node.js VPS deployment",
  "Node.js backup and rollback",
  "Secure Node.js deployment"
],
  content: `## Overview

  This is my personal guide to a modern CI/CD (Continuous Integration/Continuous Deployment) pipeline for Node.js apps. I use GitHub Actions, SSH, and PM2 to make sure every push to the prod branch results in a secure, automated, and zero-downtime deployment to my production server.
  
  ----
  ## Server Steps
  1. Server Setup
  On my server, I run:
  \`\`\`
  cd /home/$(whoami)
  bash app/scripts/server-setup.sh
  \`\`\`
  2. Github Secrets Configuration
  I add these secrets to my GitHub repository (Settings → Secrets and variables → Actions):

      - **HOST**: My server's IP address or domain name
      - **USERNAME**: The Linux username I use for deployment
      - **SSH_KEY**: The private SSH key (the entire content of my ~/.ssh/id_rsa or ~/.ssh/id_ed25519 file)
      - **PORT**: SSH port (usually 22)
  3. Branch Setup
      - **main**: My development branch
      - **prod**: My production branch (triggers deployment)

  ## My Deployment Workflow
  1. Develop on main branch
  \`\`\`
  git checkout main
  # Make changes
  git add .
  git commit -m "Describe your change"
  git push origin main
  \`\`\`
2. Deploy to production
  \`\`\`
  git checkout prod
  git merge main
  git push origin prod
  \`\`\`
3. GitHub Actions automatically:
  - Runs tests (if any)
  - Builds the application
  - Deploys to my server
  - Restarts the PM2 process
---
## Monitoring
To check deployment status on my server:
  \`\`\`
  pm2 status
  pm2 logs my-app
  \`\`\`
I also check the GitHub Actions tab for workflow logs.

---

## Troubleshooting
### Common Issues I’ve Encountered:

1. Permission denied during deployment
    - I double-check my SSH key and username in the secrets
2. PM2 process not found
    - I run pm2 start ecosystem.config.js manually if needed
3. Build fails
    - I make sure my \`package.json\` scripts and Node.js version are correct
---
## Directory Structure
\`\`\`
Server:
/var/www/my-app/   # Main app directory
/home/user/backups/           # Automatic backups
/home/user/.pm2/              # PM2 config

GitHub:
main branch           # Development
prod branch           # Production (triggers deployment)
.github/workflows/    # GitHub Actions
\`\`\`
---
## Why I Like This Strategy
- ✅ Automated deployment – Push to prod = live update
- ✅ Backups – Automatic before each deployment
- ✅ Zero-downtime – PM2 restarts gracefully
- ✅ Easy rollback – I can revert using backups or git
- ✅ Monitoring – GitHub Actions and PM2 logs show me everything
---
##  Security Notes
I keep my SSH keys secure and rotate them regularly
Only trusted team members have access to the prod branch
For private repos, I use deploy keys if needed

---
This setup has made my deployments fast, safe, and reliable. Happy deploying! 🚀

>Complexity has Disposition, not Predictability” – Liz Keogh
`

}

  
];
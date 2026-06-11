---
title: "Building My Personal Site Stack"
description: "A deep dive into how I engineered this site using Next.js and shadcn."
date: "2026-06-10"
tags: ["Nextjs", "WebDev", "TypeScript"]
coverImage: "/me_squared.JPEG"
---

I recently rebuilt my personal site from scratch. The old version was functional but felt dated, and I wanted something that I could actually iterate on quickly without fighting the tooling. Here's what I landed on and why.

## The Stack

The site runs on **Next.js** with the App Router, styled with **Tailwind CSS v4**, and deployed on **Vercel**. Components come from **shadcn/ui**, which gave me a solid set of components that are easy to use and comes with a modern look.

There's no database. No backend. It's fully static - which is exactly the right call for a personal site where the content does not change often and I don't need user sessions or real-time data.

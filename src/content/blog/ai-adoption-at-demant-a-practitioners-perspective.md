---
title: "🦻 AI Adoption at Demant: A Practitioner's Perspective"
description: "Interview with Jakub Anderwald, Demant R&D, on driving AI adoption across a 1,300-person hardware and software organization."
pubDate: 2026-05-03
---

Interview with Jakub Anderwald, Demant R&D. Quotes translated from Polish.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XFzRUL4uIus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## About the Company and the Challenge

Demant has over 120 years of history. It operates across dozens of countries, with a distribution network in more than 100 markets and 26,000 employees. Jakub took responsibility for AI adoption in the R&D division — about 1,300 people in Poland and Denmark. The division builds hearing aids and the full software stack around them, plus electronics, enclosures, processors, low-level software, high-level software, and the coordination between all of it.

The company had years of experiments, demos, PoCs, and prototypes behind it, but few workflows pulling real value from GenAI.

> "I raised my hand and said I'd try to help."

## What Triggered the Initiative

Two signals converged. Internally, employees had moved further with AI tools than the broader organization or its leaders. A critical mass built up. R&D ran a dedicated demo day where teams showed deployed tools, prototypes, and concepts. The scale of in-house knowledge became visible.

Externally, signals from other Danish companies — including some in regulated industries — showed what was achievable.

> "Regulations are not the obstacle. Neither is technology — we all have access to the same contracts and tools. The blocker is organizational capability, willingness to invest, and structure around adoption."

In late 2024, new model generations (Sonnet, Opus, Gemini 3) raised the quality bar. A market scouting exercise in the second half of the year confirmed how much practical value was within reach. Without a more serious investment, the team would stay stuck at demo and prototype level.

## The Core Challenge

> "We aren't competent in AI as an organization."

The fact that a dedicated change program exists is itself the signal. Standard ways of working, learning, and growth had not absorbed enough knowledge, practice, or tooling.

> "What I want to leave behind isn't a set of workflows or three installed tools. It's enough change in the organization, culture, processes, scouting, learning, and workflow rebuilds that this program isn't needed in following years."

What gets built this year will be outdated within twelve months. The deliverable is the organization's ability to keep adopting.

## How the Work Is Structured

Two tracks. The first is technical: a four-person Enabling Team pulled from existing roles. Their job is technological evangelism — enabling AI in product teams through tools, data access, MCP servers, infrastructure, and hands-on support.

The second is a leadership track. Jakub plus three colleagues from across R&D handle the organizational change: training, culture, knowledge networks, strategy, use case validation, and process changes.

For the organizational design, the team used Gartner's AI adoption framework as a diagnostic, not a playbook.

> "We didn't want to act like consultants pulling out slides saying 'go through these stages and it'll be great.' We took the scope from the framework, because they describe the domains pretty well."

Tool access was decent. Data access gaps were at least understood. Risk assessment and policy for new AI workflows had almost no approach in place. That became a workstream.

## Opening Up Data: A Key Early Win

The biggest early win was opening data access.

> "Our data doesn't sit the way it would in a company you or I would build from scratch — throw everything on GitHub and let AI grind through it. Ours doesn't work that way."

Data sits across many systems, many of them legacy — stable, working, and closed to AI access. Scattered software requirements (medical-grade and functional), architecture descriptions, feature documentation, code repositories.

> "Agents wired to this worked blind. They read the code without knowing the functional description, who the feature was for, who implemented it, what goals it aimed at."

The team built MCP servers for Confluence and Jira on-prem (Atlassian deprioritized AI access for self-hosted), wired them into developer tools, and helped teams extract value from the new context.

The technical build took days. The harder part was adoption: getting product managers used to browsers and Slack questions to switch to VS Code, understand MCP, grasp where the model gets steered.

> "More hours went into that than into building the software itself."

## How They Drove Adoption

The technical team includes someone with a UX background, so they applied product-design thinking to the rollout. Three things in parallel: written setup and prompting guides for self-starters; a recorded installation walkthrough for video preferrers; one-hour drop-in slots for guided support that met each person where they were.

Roughly a third of the target population installed and started using the tools. Analytics tracked usage, retention, and which data sources people hit. The team followed up with the most active users to surface shareable patterns, and with two-time users to ask what was missing.

## Early Results

Time savings show up in single-person cases — an hour a week on tedious tasks. Across 300 people, that adds up. The team is still collecting feedback and use cases.

The surprise was who adopted.

> "Our main users are product managers. They got access to fast synthesis, hypothesis exploration, and information digging. Everyone installed VS Code, grabbed a Copilot license, and uses these tools with real pleasure — because it turned out the tools bring them value too."

One use case: talking to the codebase. Product managers used to ask a developer to dig through code and report back. Now they ask the repository directly — what changed between releases, which screens connect to which feature, what text strings appear across two components.

## What They Would Do Differently

The team assumed content creation and publishing would be a key use case. They built tools that could create and publish content, added a human-in-the-loop review step before AI could change a knowledge base, polished HTML previews, ran user research with team members, recorded sessions. Solid work.

After two weeks with around 80 users, 5 or 6 people had used the content creation tools. Four were from the team itself.

> "People extract information, do the synthesis, and use that synthesis somewhere else — not for publishing for others."

The team stopped investing in that direction. The lesson is to validate use cases against actual user behavior earlier — though, as Jakub notes, any assumption made up front would have been wrong anyway. You only learn this in practice.

## The Hardest Ongoing Problem

> "A big unfamiliarity with AI — its capabilities, the risks of its current state — across a large part of the company."

People fall into two default modes. One group grabs any new tool, doesn't check costs or whether it's covered by a data protection agreement. The other group treats every new AI tool as new and uncertain — runs a six-month risk analysis before deciding whether to buy.

> "In AI, six months can mean the tool you wanted to adopt isn't the one anymore. There's a different one doing the same thing, maybe cheaper, and you'd have to rerun the analysis."

There's no clean answer yet for how to assess tools quickly enough to allow real experimentation while taking legal risk, data exposure, and IP concerns seriously.

A growing secondary issue is cost. Vendor subsidies are shrinking. Microsoft Copilot (web + developer), Anthropic premium tiers ($150/seat for premium), Cursor — per-seat costs add up fast, especially when you want two or three tools to compare during experimentation.

## On Scouting and Learning from Others

Industry organizations and peer networks helped. Comparable scale and domain matter.

> "If you ask Anthropic whether to put more hours into a chunk of architecture or write the code, of course they'll say no — 95% of code there is written by AI. Great. But we're not Anthropic."

AI in hardware development looks completely different from AI in software. Designing PCBs, watching thermals, watching factory precision — different problem set.

> "I have no idea what I'm talking about right now."

A recent gathering of practitioners (Kent Beck and Agile Manifesto folks plus people from OpenAI, Anthropic, and book authors) reached the same conclusion:

> "Nobody has the full picture. Everyone experiments, everyone knows one piece and is completely unaware of another."

Copying another company's approach risks importing their blind spots, or their constraints — different budget, different risk tolerance, different workflow.

## Where to Learn

Jakub looks for sources without a financial stake in AI adoption — not vendors, not consultants who deploy the tools, but people with a different revenue model.

Two he uses: Gergely Orosz's _The Pragmatic Engineer_ (paid subscription, so the funding model is clear), and the Polish podcast _CTO Morning Coffee_ (three speakers running it for community and brand recognition rather than paid placements).

Books written a year ago are often outdated by the time you finish them. External courses are getting more accessible but lag practitioners. Meetups, conferences, and peer networks beat established sources, because the field moves faster than publishing cycles.

## One Piece of Practical Advice

> "Practice works well."

A lot of available knowledge was created some time ago, with some agenda, with a knowledge cutoff. Often you need to find out yourself. If you have time and inclination, dig in personally — try tools, code something, build a workflow. Or have one or two people inside the company scout, try, adopt internally.

Direct experience reveals two things theory can't. Things that looked damn hard turn out to be a switch you flip. And problems everyone claims are long solved fall apart in practice — six months later, companies cut features that never really worked.

The closer the experiment is to your actual context, the better the signal.

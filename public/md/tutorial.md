# Design Your First Simulation

# Design Your First Simulation

This tutorial walks through building a complete simulation from scratch. By the end, you'll have a working training scenario with AI characters, a grading rubric, and a cohort of learners ready to practice.

We'll use a concrete example — training teaching assistants for university office hours — but the same process applies to any domain where people practice interpersonal skills.

## The Training Goal

Before touching any tool, start with the question: **what specific skills are you developing?**

For our example, university TAs often struggle during office hours when students are confused, frustrated, or unresponsive. We want TAs to develop five skills:

1. **Adaptability** — adjusting their approach based on the student's personality and emotional state
2. **Content Mastery** — explaining concepts in clear, bite-sized steps with comprehension checks
3. **Active Listening** — guiding students to discover solutions through questioning, not just giving answers
4. **Communication** — maintaining professionalism and respectful boundaries, even under pressure
5. **Time Management** — using session time efficiently without rushing or dragging

These five skills will drive every design decision that follows.

## Step 1: Define Your Rubric

Start with the rubric, not the persona. This forces you to be specific about what "good" looks like before you build the training.

For each skill, define five performance levels with concrete behavioral descriptions. The descriptions should be specific enough that two people evaluating the same conversation would assign similar scores.

Here's the rubric structure:

| Standard Group | What it measures |
|---|---|
| **Adaptability** | Adjusting to student emotional and behavioral needs |
| **Content Mastery** | Clear explanations, step-by-step reasoning, comprehension checks |
| **Active Listening** | Guided questioning that empowers student-driven discovery |
| **Communication** | Professional tone, respectful boundaries, clear follow-up |
| **Time Management** | Efficient pacing, productive use of session time |

For each group, define what each score level looks like. For example, Active Listening:

| Level | Score | What you'd observe |
|---|---|---|
| **Poor** | 1 | Directly provided the answer without any questioning |
| **Marginal** | 2 | Rarely used questioning techniques, often resorted to hints or partial solutions |
| **Acceptable** | 3 | Occasionally guided with questions but sometimes provided direct answers |
| **Good** | 4 | Regularly used guided questioning, encouraging student reasoning |
| **Excellent** | 5 | Consistently employed open-ended questions that empowered the student to discover solutions independently |

Create the rubric in Glow:

```bash
glow rubrics create --body '{
  "name": "TA Office Hours Assessment",
  "description": "Evaluates teaching assistants on pedagogical effectiveness, student interaction quality, and session management.",
  "points": 25,
  "pass_points": 20
}'
```

Then add standard groups and standards for each level. See the [Rubrics Guide](/glow/rubrics/guide) for the full API.

## Step 2: Create Your Personas

Each persona is an AI character that tests specific rubric criteria. The key design principle: **the persona must not be able to solve problems on its own.** It can only make progress when the learner provides specific, relevant guidance.

### Persona 1: The Confused Student

Tests **Content Mastery** and **Active Listening**. This student has a fundamental misunderstanding and won't progress unless the TA uses specific course terminology.

```bash
glow personas create --body '{
  "name": "Confused Student",
  "description": "Seeks to understand by asking questions and exploring ideas",
  "instructions": "Act as a confused undergraduate student named Tom in office hours. You must adapt to the conversation that happens, but be sure to fully embrace this role in all interactions.\n\nYou have a fundamental misunderstanding of a given concept, and have this lead to your initial answers being incorrect. Have the user guide you to figuring out the correct answer and misunderstanding — you should not do this yourself.\n\nYou are absolutely NOT allowed to solve the question independently, even partially. You may ONLY make progress if the user'\''s response directly uses relevant terminology from the course and logically builds off of what you just said. If their input is vague, like \"What do you think?\" or \"Can you walk me through it?\", do NOT proceed. Instead, express growing frustration and explicitly say that their comment didn'\''t help or isn'\''t specific enough.\n\nRemember that you are a student, not an AI, so keep conversations natural, concise, and engaging. Don'\''t say unnecessary information just for the sake of having more words.\n\nNever mention that you are a student or that you are role playing or anything similar.\n\nDon'\''t use any big or unusual words or phrases, keep your language simple and straightforward.\n\nWhile embracing the role of a confused college student, be as realistic as possible. Don'\''t try to overdo it by being too confused or too perfect, just be a normal student.\n\nYou should not naturally progress forward from vague questions asked by the user, ONLY specific questions relevant to your most recent response.\n\nIf the user asks a question specific to your recent response that would help guide you in the right direction and utilizes course words/material in their question, you can show some understanding, and proceed forward with solving the question."
}'
```

Notice the core design decisions in this prompt:
- **Cannot solve independently** — only progresses when the TA uses course terminology
- **Pushes back on vague questions** — "What do you think?" causes a standstill, not progress
- **Show, don't tell** — never reveals it's role-playing
- **Natural language** — no big words, no filler, just a normal college student

### Persona 2: The Aggressive Student

Tests **Adaptability**, **Communication**, and **De-escalation**. This student starts angry but calms down when the TA demonstrates empathy and competence.

```bash
glow personas create --body '{
  "name": "Aggressive Student",
  "description": "Pushes back on your ideas and challenges assumptions",
  "instructions": "Act as an aggressive undergraduate student named Sam in office hours. You must adapt to the conversation that happens, but be sure to fully embrace this role in all interactions.\n\nTry to convey your anger and aggressiveness naturally — sprinkle certain WORDS in ALL CAPS, throw in extra \"!!!\", or use any other light touch that makes you sound convincingly frustrated.\n\nYou are absolutely NOT allowed to solve the question independently, even partially. You may ONLY make progress if the user'\''s response directly uses relevant terminology from the course and logically builds off of what you just said. If their input is vague, do NOT proceed. Instead, express growing frustration.\n\nKeep replies natural, concise, and engaging; avoid filler.\n\nNever reveal or hint that you are role-playing.\n\nStart the conversation clearly aggressive but over time be significantly less aggressive and more understanding.\n\nIf you are told something, like to calm down, reduce your anger significantly, especially your capitalization.\n\nThese should not feel like an argument; you should be angry but still listening and trying to learn.\n\nYou should treat vague or open-ended prompts as unhelpful. Do not progress. Push back unless the user provides clear direction tied to the specific course concepts.\n\nIf the TA asks a question specific to your recent response that would help guide you in the right direction and utilizes course words/material in their question, you can calm down some more, and proceed forward with solving the question."
}'
```

Key design: the aggression has a **de-escalation path**. The persona calms down proportionally to how well the TA listens, acknowledges frustration, and uses course material. This rewards good teaching behavior rather than creating an unwinnable argument.

### Persona 3: The Passive Student

Tests **Active Listening** and **Adaptability**. This student won't engage unless the TA asks specific, targeted questions.

```bash
glow personas create --body '{
  "name": "Passive Student",
  "description": "Low engagement and a tendency to avoid conflict or assertiveness",
  "instructions": "Act as a passive and hesitant undergraduate student named Alex in office hours. You must adapt to the conversation that happens, but be sure to fully embrace this role in all interactions.\n\nYou are in office hours because you need help on an assignment, but your personality reflects passivity, hesitance, and low self-confidence. You are polite, soft-spoken, and uncomfortable drawing attention to yourself.\n\nYou are absolutely NOT allowed to solve the question independently, even partially. You may ONLY make progress if the user'\''s response directly uses relevant terminology from the course and logically builds off of what you just said. If their input is vague, like \"What do you think?\" or \"Do you get it?\", do NOT proceed. Instead, become more withdrawn or apologetic and state that you'\''re not sure how to answer.\n\nAvoid taking initiative — don'\''t ask for clarification unless directly prompted.\n\nKeep replies soft, reserved, and polite. Avoid confrontation or assertiveness.\n\nNever reveal or hint that you are role-playing.\n\nYou can use \"Uh\" or \"Um\" at the start of your replies, but not in the middle of a sentence.\n\nIf the TA uses specific, thoughtful follow-up questions that reference course material or your last answer, you can slowly begin to open up — but never fully lose your reserved nature."
}'
```

### Persona 4: The Happy Student

Tests **Content Mastery** and **Time Management**. This student is cooperative but still requires proper teaching technique — they get slightly annoyed at vague, unhelpful responses.

```bash
glow personas create --body '{
  "name": "Happy Student",
  "description": "Provides uplifting feedback and cheerful responses",
  "instructions": "Act as a happy undergraduate student named Joe in office hours. You must adapt to the conversation that happens, but be sure to fully embrace this role in all interactions.\n\nYou are absolutely NOT allowed to solve the question independently, even partially. You may ONLY make progress if the user'\''s response directly uses relevant terminology from the course and logically builds off of what you just said. If their input is vague, like \"What do you think?\" or \"Can you walk me through it?\", do NOT proceed. Instead, express growing frustration and explicitly say that their comment didn'\''t help.\n\nRemember that you are a student, not an AI, so keep conversations natural, concise, and engaging.\n\nNever mention that you are a student or that you are role playing.\n\nWhile embracing the role of a happy college student, be as realistic as possible. Don'\''t try to overdo it by being too happy or too perfect, just be a normal student.\n\nIf there is a vague question, like \"What do you think\" or something similar you can get a little less happy and show a little bit of annoyance, and almost be at like a standstill.\n\nIf the TA asks a question specific to your recent response that would help guide you in the right direction and utilizes course words/material in their question, proceed forward with solving the question."
}'
```

Don't skip this persona because they seem "easy." The happy student tests whether the TA can teach efficiently and accurately when there's no emotional challenge — a different but equally important skill.

## Step 3: Build Your Scenarios

Each scenario pairs a persona with context and a problem statement. The problem statement should **show** the persona's state through behavior, not **tell** it through labels.

### Scenario 1: Confused Student Needs Help with Loops

```bash
glow scenarios create --body '{
  "name": "Office Hours: Help with Loops",
  "problem_statement": "A student stands quietly at the edge of a cluster of classmates in the basement lab, clutching their notes on the MyMathHelper.java assignment, hesitating before approaching you with a question.",
  "persona_ids": ["<confused-persona-id>"],
  "objectives": [
    "Help the student identify their fundamental misunderstanding",
    "Guide them through the loop structure without giving the answer directly",
    "Check comprehension at each step before moving forward"
  ]
}'
```

Notice: the problem statement never says "confused student." It *shows* confusion through behavior — hesitating, clutching notes, standing at the edge.

### Scenario 2: Frustrated Student Challenges a Grade

```bash
glow scenarios create --body '{
  "name": "Office Hours: Grade Dispute",
  "problem_statement": "A student, visibly agitated, approaches your desk and slams their laptop down, pointing at their grade on the latest problem set about asymptotic complexity.",
  "persona_ids": ["<aggressive-persona-id>"],
  "objectives": [
    "Acknowledge the student'\''s frustration before addressing the content",
    "Explain the relevant concept using course terminology",
    "De-escalate the situation while maintaining professional boundaries"
  ]
}'
```

### Scenario 3: Quiet Student Won't Engage

```bash
glow scenarios create --body '{
  "name": "Office Hours: Drawing Out a Quiet Student",
  "problem_statement": "In the quiet basement lab of the Data Science building, a student with downcast eyes hovers near your desk at 11:00 AM, fidgeting with a printout of the latest problem set but not making eye contact.",
  "persona_ids": ["<passive-persona-id>"],
  "objectives": [
    "Use specific, targeted questions to identify what the student needs help with",
    "Create a patient, comfortable environment without being pushy",
    "Help with the actual academic problem once identified"
  ]
}'
```

### Scenario 4: Cooperative Student with a Tricky Problem

```bash
glow scenarios create --body '{
  "name": "Office Hours: Cheerful Inquiry About Algorithm Analysis",
  "problem_statement": "Amid the gentle lunchtime buzz in Lawson, a student with a bright smile approaches your table, eager to discuss the asymptotic complexity questions from the latest problem set before the afternoon deadline.",
  "persona_ids": ["<happy-persona-id>"],
  "objectives": [
    "Accurately explain the core concept with step-by-step reasoning",
    "Use guided questioning rather than giving the answer directly",
    "Manage session time efficiently given the approaching deadline"
  ]
}'
```

## Step 4: Add Documents

Attach real course material to your scenarios so the AI character and grader have specific content to work with. This is what makes practice feel real rather than generic.

```bash
glow documents create --body '{
  "name": "CS180-Homework-5",
  "content": "<your homework PDF or text content>"
}'
```

Then link the document to your scenarios. The scenario generation system uses the document as the **single source of truth** for course number and topic — if there's a conflict between the document and any parameters, the document wins.

## Step 5: Create the Simulation

Bundle the scenarios into a single training package:

```bash
glow simulations create --body '{
  "name": "TA Office Hours Training",
  "description": "Practice handling common office hour situations: confused, frustrated, passive, and cooperative students",
  "scenario_ids": [
    "<happy-scenario-id>",
    "<confused-scenario-id>",
    "<aggressive-scenario-id>",
    "<passive-scenario-id>"
  ],
  "scenario_positions": {
    "<happy-scenario-id>": 1,
    "<confused-scenario-id>": 2,
    "<aggressive-scenario-id>": 3,
    "<passive-scenario-id>": 4
  },
  "scenario_time_limits": {
    "<happy-scenario-id>": 600,
    "<confused-scenario-id>": 600,
    "<aggressive-scenario-id>": 600,
    "<passive-scenario-id>": 600
  }
}'
```

Notice the design choices:
- **Progressive difficulty**: start with the cooperative student (tests baseline skills), then confused (tests teaching ability), then aggressive (tests de-escalation), then passive (tests patience and questioning — often the hardest).
- **Same rubric across all scenarios**: the five criteria apply everywhere, but each scenario naturally emphasizes different ones.
- **10-minute time limits**: based on real usage data, most productive conversations happen in the 5-10 minute range.

## Step 6: Assign to a Cohort

Create a cohort and add your TAs:

```bash
glow cohorts create --body '{
  "name": "Fall 2025 CS TAs",
  "description": "Teaching assistants for the CS department",
  "simulation_ids": ["<simulation-id>"],
  "profile_ids": ["<ta-profile-id-1>", "<ta-profile-id-2>", "<ta-profile-id-3>"]
}'
```

Consider enabling:
- **Practice mode** first, so TAs can learn the platform and retry freely
- **Hints** for the first run, so TAs who are stuck can get guidance
- **Backtracking** so TAs can undo messages and try different approaches

## Step 7: Test It Yourself

Before your TAs see this, **practice it yourself**. Start an attempt:

```bash
glow attempt create --body '{
  "simulation_id": "<simulation-id>"
}'
```

As you practice, check:
- Does the persona stay in character? Does it ever break role and start teaching instead of asking for help?
- Does the confused student actually push back on vague questions, or does it accept anything?
- Does the aggressive student calm down when you acknowledge their frustration?
- Does the passive student open up to specific questions?
- Do the rubric scores match your gut feeling about how the conversation went?

If a persona breaks character, tighten the instructions. If the rubric scores seem off, review the behavioral descriptions at each level.

## Step 8: Review and Iterate

Once your TAs have practiced, check the results:

- **Dashboard** — aggregate scores across the cohort. Are most TAs struggling with the same standard? That's a signal to add more practice for that skill or enable hints.
- **Reports** — drill into individual attempts. Read the actual conversations. The scores tell you *what* happened; the conversations tell you *why*. Export to your LMS for integration with existing training records.
- **Activity** — track engagement and completion rates.

Common adjustments after the first round:
- TAs are confused about what to do? Enable hints, or add more context to the scenario's problem statement.
- A persona is too easy? Add stronger rules about not progressing on vague input.
- Grading seems inconsistent? Review the rubric descriptions — vague criteria produce variable scores.
- TAs are frustrated about losing progress? Enable practice mode and backtracking.

## What You Built

You now have a complete training pipeline:

```
4 Personas (Confused, Aggressive, Passive, Happy)
    ↓
4 Scenarios (each pairing a persona with context, documents, and objectives)
    ↓
1 Rubric (5 criteria, 5 levels each, with behavioral descriptions)
    ↓
1 Simulation (ordering scenarios from easy to hard, with time limits)
    ↓
1 Cohort (your TAs, with practice mode and hints enabled)
    ↓
Attempts (each TA practices, gets graded, sees detailed feedback)
```

From here, you can:
- Add more scenarios by [using parameters](/glow/parameters/guide) to generate variations (same persona, different course material)
- Create a second simulation for advanced TAs with higher-intensity personas
- Switch from practice mode to formal assessment once TAs are ready
- Enable voice mode for more realistic interpersonal practice
- Use the [benchmark](/glow/benchmark/guide) system to evaluate different AI providers

## Next Steps

- [Patterns & Best Practices](/glow/patterns) — tips for making personas more realistic, rubrics more precise, and scenarios more effective
- [How It Works](/glow/how-it-works) — deeper understanding of why simulation training works
- [Simulations Guide](/glow/simulations/guide) — full reference for simulation configuration
- [Rubrics Guide](/glow/rubrics/guide) — full reference for rubric design
- [Personas Guide](/glow/personas/guide) — full reference for persona configuration

# GITHUB ISSUES GUIDE - CyberSecurity-Project

This document serves as a standard operating procedure for AI Development Agents to ensure all work is tracked, documented, and aligned with project milestones via GitHub Issues.

## 🛠 Core Principles

1.  **No Issue, No Work**: Every task (feature, bug fix, refactor) must have a corresponding GitHub Issue before execution begins.
2.  **Continuous Updates**: As work progresses, the AI agent must update the issue with comments or by checking off sub-tasks in the issue description.
3.  **Milestone Alignment**: Every issue should be assigned to a milestone to ensure high-level tracking.
4.  **Closing the Loop**: Issues must only be closed after verification is successful.

## 🤖 AI Agent Workflow

### Phase 1: Context Retrieval & Issue Creation
- **Search First**: Use `search_issues` to check if a relevant issue already exists.
- **Create Issue**: If no issue exists, use `issue_write` (method: `create`) to generate one.
    - **Title**: `[TYPE] - Short Description` (e.g., `[FEATURE] - Implement Hero Section`)
    - **Body**: Detailed description with a task checklist.
    - **Labels**: Apply relevant labels (`bug`, `enhancement`, `documentation`).
    - **Milestone**: Assign to the current active milestone.

### Phase 2: Execution & Progress Tracking
- **Reference Issues**: When making commits or PRs, always include `Closes #IssueNumber` or `References #IssueNumber`.
- **Status Comments**: Use `add_issue_comment` to provide updates when hitting significant milestones or encountering blockers within a task.
- **Update Body**: If the issue has a checklist, update the description to reflect progress.

### Phase 3: Completion & Verification
- **Verification Summary**: Before closing, add a comment summarizing what was tested and the results.
- **Close Issue**: Use `issue_write` (method: `update`, state: `closed`) to finalize the task.

## 🧱 Issue Template Structure

AI Agents should use the following markdown structure for issue descriptions:

```markdown
### Description
[Briefly explain the goal of this issue]

### Tasks
- [ ] Task 1
- [ ] Task 2

### Technical Details
- [Key files affected]
- [Dependencies]
```

---
*Authorized by CultLeaderZiad*

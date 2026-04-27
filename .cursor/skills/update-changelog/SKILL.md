---
name: update-changelog
description: >-
  Update CHANGELOG.md at the project root with dated entries. Use when the user
  asks to update the changelog, add changelog entries, or prepare the changelog
  before merging.
---

# Update Changelog

Maintain a `CHANGELOG.md` at the project root with dated headings and bullet-point entries.

## Format

```markdown
# Changelog

## YYYY-MM-DD

- Bullet describing a change.
- Another bullet.

## YYYY-MM-DD

- Older change.
```

- Headings are `## YYYY-MM-DD`, most recent date first.
- Each bullet is a concise, human-readable summary of one logical change.
- Do **not** include commit hashes or author names.

## Workflow

### 1. Read the existing changelog

Read `CHANGELOG.md` in the project root.
If the file does not exist, create it with a `# Changelog` heading and no entries yet.

### 2. Determine new entries

Run:

```bash
git log --oneline --format="%ad|%s" --date=short
```

Compare the commits against the entries already in `CHANGELOG.md`.
Only add bullets for commits (or groups of related commits) that are **not** already represented.

### 3. Write new entries

- Group bullets under the matching `## YYYY-MM-DD` heading.
- If the date heading already exists, append new bullets to it.
- If the date heading does not exist, insert it in chronological order (newest first).
- Collapse trivial or duplicate commit messages (e.g., multiple "fix lint" commits) into a single bullet.
- Reword raw commit messages into clear, user-facing language when needed.

### 4. Verify

- Confirm dates are in descending order (newest at top).
- Confirm no duplicate bullets.
- Run Prettier on the file if the project uses Prettier.

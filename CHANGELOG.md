# CHANGELOG

All notable changes to this project are documented here as part of the Git Mastery Challenge.

---

## v0.1 – Repository Setup
- Initialized the repository from the provided Git Mastery template.
- Set up basic folder structure and added initial configuration files.
- Verified Git installation and initial commit.

---

## v0.2 – Development Environment
- Created `dev` branch for testing new changes.
- Added initial `package.json` and supporting files.
- Introduced `database-config.json` and `app-config.yaml` inside `config/`.
- Configured `.gitignore` to exclude system files.

---

## v0.3 – Conflict-Simulator Setup
- Created `conflict-simulator` branch from `main`.
- Modified multiple configuration files to simulate merge conflicts.
- Added `deploy.sh` and `monitor.js` for DevOps task simulation.

---

## v0.4 – First Merge and Conflict Resolution
- Merged `conflict-simulator` into `main` for the first time.
- Manually resolved conflicts in:
  - `README.md`
  - `.gitignore`
  - `deploy.sh`
  - `monitor.js`
  - `database-config.json`
- Verified no leftover conflict markers.

---

## v0.5 – Dependency Management
- Added `package-lock.json` for dependency tracking.
- Updated `.gitignore` to include `node_modules` exclusion.
- Confirmed successful merges and builds.

---

## v0.6 – Cherry-Picking and Code Sync
- Cherry-picked specific commits from `conflict-simulator` to `main`.
- Tested consistency of app configuration files.
- Cleaned redundant commits and verified commit graph.

---

## v0.7 – Documentation & Clean-Up
- Updated `README.md` with final resolved content.
- Added project overview, branch info, and setup steps.
- Verified that all conflicts were resolved and all branches were synced.

---

## v0.8 – Remote Configuration
- Added remote `instructor` for upstream reference.
- Verified `origin` (student repo) and `instructor` (mentor repo) connections.
- Pulled updates from instructor to sync with latest main branch.

---

## v0.9 – Pre-Final Merge
- Merged `dev` and `conflict-simulator` into `main` one last time.
- Ensured clean working tree and zero conflicts.
- Prepared repository for tagging and submission.

---

## v1.0 – Final Release
- Created annotated tag `v1.0` marking first clean release.
- Added `.gitignore` final updates and README polish.
- Verified commit count (16+) and conflict-free status.

---

## final – Project Submission
- Created `final` annotated tag for submission.
- Added `GIT_JOURNEY.md`, `branches.txt`, `git-graph.txt`, `remotes.txt`, and `tags.txt`.
- Summarized project learning outcomes and merge resolutions.
- Verified remotes, commits, tags, and final documentation.

---

**Total Commits:** 16+  
**Branches:** main, dev, conflict-simulator  
**Tags:** v0.9, v1.0, final  
**Conflicts Resolved:** 6+  
**Remotes:** origin, instructor  
**Status:** ✅ Repository ready for evaluation and submission.

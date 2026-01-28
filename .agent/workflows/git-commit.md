---
description: how to commit code changes using feature branch strategy
---

# Git Commit Workflow

Workflow untuk commit perubahan kode menggunakan strategi feature branch.

## Steps

// turbo-all

1. **Sync dengan remote main**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Buat feature branch baru**
   - Format: `<type>/<short-description>`
   - Contoh: `feature/add-gallery-page`, `fix/login-bug`
   ```bash
   git checkout -b feature/<nama-fitur>
   ```

3. **Lakukan perubahan kode**
   - Implementasi fitur/fix sesuai task

4. **Stage files yang diubah**
   ```bash
   git add <files>
   ```

5. **Commit dengan conventional commit format**
   ```bash
   git commit -m "<type>(<scope>): <description>"
   ```
   Tipe: feat, fix, docs, style, refactor, test, chore, perf

6. **Push feature branch ke remote**
   ```bash
   git push origin feature/<nama-fitur>
   ```

7. **Beri tahu user untuk membuat Pull Request**
   - Informasikan URL untuk membuat PR di GitHub
   - Contoh: https://github.com/qobalaihromi/parrentapp/compare/main...<branch-name>

## Notes

- JANGAN push langsung ke main
- Selalu buat feature branch untuk setiap perubahan
- Gunakan conventional commit messages sesuai CONTRIBUTING.md

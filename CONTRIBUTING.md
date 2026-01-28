# Contributing Guidelines

Panduan kontribusi untuk tim Parent Monitoring App.

## 📝 Commit Message Convention

Kami menggunakan **Conventional Commits** untuk menjaga konsistensi pesan commit.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Tipe Commit

| Type       | Emoji | Deskripsi                                      |
|------------|-------|------------------------------------------------|
| `feat`     | ✨    | Fitur baru                                     |
| `fix`      | 🐛    | Bug fix                                        |
| `docs`     | 📚    | Perubahan dokumentasi                          |
| `style`    | 💄    | Format kode (spacing, semicolon, dll)          |
| `refactor` | ♻️    | Refactoring tanpa mengubah fungsionalitas      |
| `test`     | 🧪    | Menambah atau memperbaiki test                 |
| `chore`    | 🔧    | Maintenance (update dependencies, config, dll) |
| `perf`     | ⚡    | Peningkatan performa                           |
| `ci`       | 👷    | Perubahan CI/CD                                |
| `build`    | 📦    | Perubahan build system                         |
| `revert`   | ⏪    | Revert commit sebelumnya                       |

### Scope (Opsional)

Scope menunjukkan area yang diubah:

- `header` - Komponen header
- `auth` - Autentikasi
- `payment` - Halaman payment
- `learning` - Halaman learning
- `chat` - Halaman chat
- `discovery` - Halaman discovery
- `my-child` - Halaman my child
- `reward` - Halaman reward
- `api` - Backend/API services
- `deps` - Dependencies

### Contoh Commit Messages

```bash
# Fitur baru
feat(header): add user capsule with avatar and silver badge
feat(payment): implement payment history page
feat: add bottom navigation component

# Bug fix
fix(auth): resolve login redirect issue
fix(learning): fix journal tab not displaying correctly

# Dokumentasi
docs(readme): update installation instructions
docs: add API documentation

# Refactoring
refactor(header): simplify HeaderSection component
refactor: reorganize component folder structure

# Maintenance
chore(deps): update next.js to 15.1.0
chore: configure eslint rules
```

---

## 🌿 Branching Strategy

### Branch Utama

| Branch    | Deskripsi                           |
|-----------|-------------------------------------|
| `main`    | Branch production (selalu stable)   |
| `develop` | Branch development (optional)       |

### Branch Fitur

Format: `<type>/<short-description>`

```bash
feature/add-payment-page
feature/user-capsule-header
fix/login-redirect
fix/journal-tab-display
hotfix/critical-auth-bug
```

### Alur Kerja

1. **Sync dengan remote**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Buat branch baru**
   ```bash
   git checkout -b feature/nama-fitur
   ```

3. **Commit secara atomik**
   ```bash
   git add .
   git commit -m "feat(scope): deskripsi singkat"
   ```

4. **Push ke remote**
   ```bash
   git push origin feature/nama-fitur
   ```

5. **Buat Pull Request**
   - Buat PR di GitHub
   - Minta review dari rekan tim
   - Merge setelah di-approve

---

## 🔄 Pull Request Guidelines

### Sebelum Membuat PR

- [ ] Code sudah di-test secara lokal
- [ ] Tidak ada error atau warning
- [ ] Commit message mengikuti convention
- [ ] Branch sudah up-to-date dengan `main`

### Template PR Description

```markdown
## Deskripsi
[Jelaskan perubahan yang dibuat]

## Tipe Perubahan
- [ ] Fitur baru
- [ ] Bug fix
- [ ] Refactoring
- [ ] Dokumentasi

## Screenshot (jika ada perubahan UI)
[Tambahkan screenshot]

## Checklist
- [ ] Sudah di-test secara lokal
- [ ] Tidak ada breaking changes
```

### Review Process

1. Minimal **1 approval** sebelum merge
2. Reviewer harus check:
   - Code quality
   - Naming conventions
   - Potential bugs
   - UI/UX (jika ada perubahan)

---

## ⚠️ Best Practices

### DO ✅

- Commit kecil dan sering
- Tulis pesan commit yang deskriptif
- Pull sebelum push
- Review code sebelum commit
- Resolve conflict segera

### DON'T ❌

- Push langsung ke `main`
- Commit file yang tidak perlu (node_modules, .env, dll)
- Commit dengan pesan "fix" atau "update" tanpa deskripsi
- Biarkan conflict menumpuk
- Force push ke branch yang di-share

---

## 🛠️ Setup Git Hooks (Opsional)

Untuk enforce commit convention, tambahkan git hook:

```bash
# .git/hooks/commit-msg
#!/bin/sh
commit_regex='^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?: .{1,50}'

if ! grep -qE "$commit_regex" "$1"; then
    echo "❌ Commit message tidak sesuai format!"
    echo "Format: <type>(<scope>): <description>"
    echo "Contoh: feat(header): add user capsule"
    exit 1
fi
```

---

## 📞 Kontak

Jika ada pertanyaan tentang contribution guidelines, hubungi:
- [Nama Engineer 1]
- [Nama Engineer 2]

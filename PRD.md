# 📱 Parent Monitoring App - Product Requirements Document

> **Single Source of Truth (SSOT)** untuk pengembangan Parent App

---

## 📋 Document Info

| Field | Value |
|-------|-------|
| **Nama Produk** | Parent Monitoring App |
| **Versi** | 1.0.0-prototype |
| **Status** | 🟡 Prototype untuk Usability Testing |
| **Last Updated** | 28 Januari 2026 |
| **Target Platform** | Mobile Web (responsive, max-width 450px) |
| **Deployment** | Vercel |

---

## 🎯 Vision & Goals

### Vision Statement
Memberikan kemudahan bagi orang tua untuk memantau perkembangan belajar anak secara real-time, mengelola pembayaran, dan berkomunikasi dengan institusi pendidikan dalam satu platform terintegrasi.

### Goals
| Goal | Metric | Target |
|------|--------|--------|
| User Engagement | Daily Active Users | 70% dari total users |
| Task Completion | Core task success rate | ≥ 95% |
| User Satisfaction | NPS Score | ≥ 50 |
| Performance | Page Load Time | < 2 detik |

### Current Phase Objectives
1. ✅ Export design dari Figma ke kode React
2. ⬜ Deploy prototype ke Vercel
3. ⬜ Conduct usability testing dengan 5-8 users
4. ⬜ Iterate berdasarkan feedback

---

## 👥 Target Users

### Primary Persona: Orang Tua Pelajar

```
Nama: Sarah (35 tahun)
Pekerjaan: Working Professional
Anak: 2 anak (SD & PAUD)
Kebutuhan:
- Memantau progress belajar anak dari kantor
- Melihat laporan kelas tanpa harus datang ke sekolah
- Mengelola pembayaran subscription dengan mudah
- Mendapat notifikasi penting dari institusi
```

### User Stories

| ID | User Story | Priority |
|----|------------|----------|
| US-01 | Sebagai orang tua, saya ingin melihat story/update terbaru dari anak saya, agar saya tahu aktivitas mereka hari ini | P0 |
| US-02 | Sebagai orang tua, saya ingin melihat laporan kelas dan kehadiran anak, agar saya bisa memantau progress mereka | P0 |
| US-03 | Sebagai orang tua, saya ingin switch antara profil anak, agar saya bisa melihat data masing-masing anak | P0 |
| US-04 | Sebagai orang tua, saya ingin melihat dan membayar tagihan subscription, agar anak tetap bisa belajar | P1 |
| US-05 | Sebagai orang tua, saya ingin melihat sistem reward/tier anak, agar saya bisa memotivasi mereka | P1 |
| US-06 | Sebagai orang tua, saya ingin berkomunikasi dengan guru via chat, agar saya bisa diskusi progress anak | P2 |

---

## 📱 Feature Specifications

### 1. Home Page (`HomePage.tsx`)

**Purpose:** Landing page utama setelah login, menampilkan overview dan quick actions.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| `HeaderBackground` | Gradient header dengan pattern overlay | ✅ |
| `QuickActions` | 3 shortcut cards: Payment, My Child, Gallery | ✅ |
| `StoryFeed` | Container untuk stories dan updates | ✅ |
| `PromoCard` | Promotional content dari institusi | ✅ |
| `ClassReportCard` | Preview class report | ✅ |
| `AnnouncementCard` | Pengumuman dari institusi | ✅ |

#### Behavior
- Default greeting: "Good Morning" (static untuk prototype)
- Quick action cards navigasi ke halaman masing-masing
- Story feed scrollable vertically
- "See Detail" links ke detail pages

---

### 2. Learning Page (`LearningPage.tsx`)

**Purpose:** Memantau progress belajar anak dengan detail reports dan journals.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| `ChildSelector` | Toggle tabs untuk switch anak (Liam/Dora) | ✅ |
| `ProgramCard` | Info program yang diikuti anak | ✅ |
| `ReportTab` | List class reports dengan horizontal scroll | ✅ |
| `JournalTab` | Unit-based learning journal | ✅ |
| `UnitCard` | Card per unit dengan progress | ✅ |
| `StatsCard` | Lesson Complete & Attendance stats | ✅ |

#### Sub-Pages
| Page | Route (State) | Description |
|------|---------------|-------------|
| `ClassReportListPage` | `reportList` | Full list semua class reports |
| `ClassReportDetailPage` | `reportDetail` | Detail satu report session |
| `JournalDetailPage` | `journalDetail` | Detail per unit journal |

#### Data Structure
```typescript
interface ClassReport {
  id: string;
  unit: string;           // e.g., "Unit A · Language Introduction"
  title: string;          // e.g., "Cooking verbs and kitchen terms"
  date: string;           // e.g., "4 Hours ago"
  status: 'present' | 'absent' | 'sick' | 'excused';
}

interface Child {
  id: string;
  name: string;           // e.g., "Liam A." atau "Dora D."
  program: string;        // e.g., "English Academy" atau "Champions Wonderlab"
  location: string;       // e.g., "Balikpapan - Jendral Sudirman"
  avatar: string;         // image path
}
```

---

### 3. Chat Page (`ChatPage.tsx`)

**Purpose:** Komunikasi dengan guru/institusi.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| ChatHeader | Header dengan judul | ✅ |
| ChatList | List conversations | ✅ |
| ChatItem | Individual chat preview | ✅ |

#### Notes
- Untuk prototype: Static UI, tidak functional
- Production: Akan integrate dengan real-time messaging (e.g., Supabase Realtime)

---

### 4. Payment Page (`PaymentPage.tsx`)

**Purpose:** Mengelola pembayaran dan melihat tagihan.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| PaymentHeader | Back button + title | ✅ |
| InvoiceList | Daftar tagihan pending/paid | ✅ |
| InvoiceCard | Detail per tagihan | ✅ |
| PaymentMethods | Metode pembayaran tersedia | ✅ |

#### Navigation
- Akses dari: Home → Quick Actions → Payment
- Back button returns ke previous page

---

### 5. My Child Page (`MyChildPage.tsx`)

**Purpose:** Mengelola profil anak-anak.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| ChildCard | Profil anak dengan avatar, tier, subscription | ✅ |
| TierBadge | Silver/Gold tier indicator (clickable) | ✅ |
| SubscriptionStrip | Info langganan aktif | ✅ |
| ConnectAccountButton | Button untuk connect akun anak baru | ✅ |
| PromoCarousel | Horizontal scroll promo cards | ✅ |

#### Data Structure
```typescript
interface ChildProfile {
  id: string;
  name: string;
  description: string;    // e.g., "Sekolah Dasar - Kelas 3"
  avatar: string;
  tier: 'silver' | 'gold';
  subscriptionCount: number;
  subscriptionDate: string;
}
```

---

### 6. Reward Page (`RewardPage.tsx`)

**Purpose:** Menampilkan sistem gamifikasi dan reward anak.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| RewardHeader | Child info dengan tier badge | ✅ |
| PointsDisplay | Total points accumulated | ✅ |
| RewardProgress | Progress bar ke tier selanjutnya | ✅ |
| RewardList | Daftar rewards yang bisa diklaim | ✅ |

#### Navigation
- Akses dari: My Child → Tier Badge click
- Back button returns ke My Child page

---

### 7. Auth Page (`AuthPage.tsx`)

**Purpose:** Connect akun anak baru ke parent account.

#### Components
| Component | Description | Status |
|-----------|-------------|--------|
| AuthHeader | Back button + title | ✅ |
| CodeInput | Input kode dari institusi | ✅ |
| OTPInput | 6-digit OTP verification | ✅ |
| SubmitButton | Verify dan connect | ✅ |

#### Flow
1. Parent klik "Connect Account" di My Child page
2. Masukkan kode dari institusi
3. Verify dengan OTP
4. Child account connected

---

## 🧭 Navigation Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    BOTTOM NAVIGATION                         │
├─────────────────────────────────────────────────────────────┤
│     🏠 Home          📚 Learning          💬 Chat           │
└─────────┬────────────────┬───────────────────┬──────────────┘
          │                │                   │
          ▼                ▼                   ▼
    ┌─────────┐      ┌───────────┐       ┌─────────┐
    │  Home   │      │ Learning  │       │  Chat   │
    │  Page   │      │   Page    │       │  Page   │
    └────┬────┘      └─────┬─────┘       └─────────┘
         │                 │
         │    ┌────────────┴────────────┐
         │    │                         │
         ▼    ▼                         ▼
    ┌─────────────┐              ┌─────────────┐
    │   Payment   │              │  Report     │
    │    Page     │              │  List/Detail│
    └─────────────┘              └─────────────┘
         │
         │
         ▼
    ┌─────────────┐
    │  My Child   │
    │    Page     │
    └──────┬──────┘
           │
     ┌─────┴─────┐
     │           │
     ▼           ▼
┌─────────┐  ┌─────────┐
│ Reward  │  │  Auth   │
│  Page   │  │  Page   │
└─────────┘  └─────────┘
```

---

## 🔧 Tech Stack

### Current Implementation

```
📦 Framework & Build
├── React 18.3.1
├── Vite 6.3.5
└── TypeScript (via TSX)

🎨 Styling
├── Tailwind CSS 4.1.12
├── @tailwindcss/vite (plugin)
└── PostCSS

🧩 UI Components
├── Radix UI (primitives)
│   ├── @radix-ui/react-accordion
│   ├── @radix-ui/react-dialog
│   ├── @radix-ui/react-dropdown-menu
│   ├── @radix-ui/react-tabs
│   └── ... (15+ more)
├── MUI (@mui/material, @mui/icons-material)
├── Lucide React (icons)
├── class-variance-authority (variants)
├── clsx (classnames)
└── tailwind-merge

📊 Data Visualization
├── Recharts 2.15.2
└── Custom SVG components

🎬 Animation
├── Framer Motion (motion)
└── tw-animate-css

📱 UI Utilities
├── react-day-picker (calendar)
├── react-hook-form (forms)
├── sonner (toasts)
├── vaul (drawers)
├── cmdk (command palette)
└── embla-carousel-react
```

### Recommended for Production

```
📦 Framework
├── Next.js 14+ (App Router)
├── React 18.3.1
└── TypeScript 5.x

🗄️ Backend
├── Supabase
│   ├── Authentication
│   ├── PostgreSQL Database
│   ├── Realtime (for chat)
│   └── Storage (for images)
├── Prisma (ORM)
└── Vercel Edge Functions

🔐 Authentication
├── Supabase Auth
└── Magic Link / OTP

📊 Analytics
├── Vercel Analytics
├── Posthog (product analytics)
└── Sentry (error tracking)

🧪 Testing
├── Vitest (unit tests)
├── Playwright (E2E)
├── Storybook (component docs)
└── Testing Library
```

---

## 🏗️ Cross-Platform & Monorepo Strategy

### Core Strategy: "The Hybrid Monorepo"
Untuk mengakomodasi kebutuhan **Speed (Web Deployment)** dan **Quality (Native Performance)**, project ini menggunakan strategi Monorepo:

1.  **Apps/Web (Next.js)**:
    *   **Fokus**: Usability Testing (UT), Rapid Prototyping, Web Deployment (Vercel).
    *   **Tech**: Next.js 15, Tailwind CSS.
2.  **Apps/Mobile (React Native)**:
    *   **Fokus**: Handoff Resource ke Engineer, High-Fidelity Native App.
    *   **Tech**: React Native (Expo), NativeWind.
3.  **Packages/Share**:
    *   **Fokus**: Konsistensi Desain.
    *   **Tech**: Shared UI Tokens (Colors, Typography) via NativeWind Config.

### Universal UI Approach
Menggunakan strategi **NativeWind** untuk sharing design tokens.
*   **Web**: Menggunakan Tailwind CSS standard.
*   **Mobile**: Menggunakan NativeWind (Tailwind for RN).
*   **Benefit**: Perubahan warna/spacing di config utama akan berdampak otomatis ke kedua platform.

---

### Design System Rules & Logic
Berikut adalah aturan update UI antara Web dan Mobile:

1.  **Shared Tokens (Warna, Spacing, Typography)**
    *   **Logic**: `packages/ui` adalah **Single Source of Truth** untuk Style Tokens.
    *   **Impact**: Jika Anda mengubah warna (misal: `primary`) di `packages/ui/tailwind.config.js`, **KEDUA** aplikasi (Web & Mobile) akan berubah otomatis setelah rebuild.
    *   **Action**: "Ganti warna brand dari biru ke merah" -> Edit `packages/ui`.

2.  **Application UI (Components & Layout)**
    *   **Logic**: Web (`apps/web`) dan Mobile (`apps/mobile`) memiliki implementasi komponen terpisah (namun mirip visualnya).
    *   **Impact**:
        *   Edit `apps/web/Button.tsx`: Hanya berubah di **Web**.
        *   Edit `apps/mobile/Button.tsx`: Hanya berubah di **Mobile**.
    *   **Reason**: Web menggunakan HTML/DOM, Mobile menggunakan Native Elements (`<View>`, `<Text>`).
    *   **Strategy**: Gunakan *naming convention* class yang sama (Tailwind) agar mudah di-copy paste antar platform.

---

## 📁 Project Structure (Monorepo)

```
project-ruangguru/parentapp/
├── 📄 PRD.md                          # Single Source of Truth
├── 📁 apps/                           # Application Logic
│   ├── 📁 web/                        # Next.js App (Current Prototype)
│   │   ├── 📄 next.config.ts
│   │   ├── 📄 tailwind.config.ts
│   │   └── 📁 src/
│   └── 📁 mobile/                     # React Native App (Future Handoff)
│       ├── 📄 app.json
│       ├── 📄 babel.config.js
│       └── 📄 App.tsx
├── 📁 packages/                       # Shared Resources
│   ├── 📁 ui/                         # Shared Components & Tokens
│   └── 📁 config/                     # Shared Configuration (ESLint, TS)
└── 📄 package.json                    # Workspace Root
```

---

## 🚀 Deployment

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Deploy Commands

```bash
# 1. Navigate to project
cd design-figmamake

# 2. Install dependencies
npm install
npm install react react-dom

# 3. Test build locally
npm run build
npm run preview

# 4. Deploy to Vercel
npx vercel --prod
```

### Environment Variables (Production)

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Supabase project URL | Production |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Production |
| `VITE_API_URL` | Backend API URL | Production |

---

## 🧪 Testing Plan

### Usability Testing (Current Phase)

#### Participants
- **Target:** 5-8 orang tua dengan anak usia SD/PAUD
- **Recruitment:** Via partner institutions

#### Test Tasks
| Task | Description | Success Criteria |
|------|-------------|------------------|
| T1 | Lihat progress belajar anak | User finds class report < 30s |
| T2 | Switch ke anak lain | User switches successfully |
| T3 | Cek status reward/tier | User finds tier info |
| T4 | Akses halaman payment | User navigates to payment |
| T5 | Baca pengumuman | User opens announcement detail |

#### Metrics
- Task completion rate
- Time on task
- Error count
- SUS (System Usability Scale) score
- Qualitative feedback (think-aloud)

### Automated Testing (Production)

```typescript
// Example E2E test with Playwright
test('user can view child learning progress', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="nav-learning"]');
  await page.click('[data-testid="child-tab-liam"]');
  await expect(page.locator('[data-testid="report-card"]')).toBeVisible();
});
```

---

## 📊 Analytics & Monitoring

### Events to Track

| Event | Trigger | Properties |
|-------|---------|------------|
| `page_view` | Navigation change | `page_name`, `previous_page` |
| `child_switch` | Child selector click | `from_child`, `to_child` |
| `report_view` | Report card click | `report_id`, `child_id` |
| `tier_click` | Tier badge click | `tier_level`, `child_id` |
| `payment_access` | Payment page view | `source` |

### Error Monitoring (Sentry)

```typescript
// sentry.config.ts
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
});
```

---

## 📅 Roadmap

### Phase 1: Prototype (Current) 🟡
- [x] Figma design export
- [x] Static prototype implementation
- [ ] Deploy ke Vercel
- [ ] Usability testing

### Phase 2: MVP
- [ ] Backend integration (Supabase)
- [ ] Real authentication
- [ ] Real data fetching
- [ ] Push notifications

### Phase 3: Production
- [ ] Performance optimization
- [ ] Offline support (PWA)
- [ ] Native app wrapper (Capacitor/React Native)
- [ ] Analytics integration

### Phase 4: Enhancement
- [ ] Real-time chat
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Dark mode

---

## ⚠️ Known Limitations

### Prototype Limitations
| Issue | Impact | Mitigation |
|-------|--------|------------|
| Static data | No real updates | Will be replaced with Supabase |
| No auth | Anyone can access | Will add Supabase Auth |
| No persistence | State lost on refresh | Will add state management |
| Fixed width (450px) | Not fully responsive | Design for mobile-first, enhance later |
| No backend | No API calls | Will integrate Supabase |

### Technical Debt
- [ ] Refactor `App.tsx` routing to use React Router
- [ ] Extract common styles to Tailwind config
- [ ] Add proper TypeScript interfaces untuk all data
- [ ] Implement error boundaries
- [ ] Add loading states untuk semua async operations

---

## 📚 Resources

### Design
- **Figma File:** [Parent Monitoring App](https://www.figma.com/design/4mKx01DubHgLHtdgN5q2QE/Parent-Monitoring-App)
- **Figma Make Export:** `/design-figmamake/`

### Documentation
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Supabase Docs](https://supabase.com/docs)

### Related Repositories
- This project: `/Users/fa-15511/Documents/project-ruangguru/parentapp`

---

## 📝 Changelog

### v1.0.0-prototype (28 Jan 2026)
- Initial Figma Make export
- 7 main pages implemented
- 48 UI components ready
- PRD documentation created

---

*This document is the Single Source of Truth (SSOT) for the Parent Monitoring App project.*  
*Last updated: 28 Januari 2026*

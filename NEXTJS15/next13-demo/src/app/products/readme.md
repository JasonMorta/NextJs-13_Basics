# 📂 Understanding Nested and Deeply Nested Routing in Next.js

## 🚀 What is Nested Routing?
Nested routing in Next.js allows for a structured hierarchy of pages inside your app. Each folder inside the `app` directory represents a **URL segment**, making it easier to build well-organized and scalable applications.

### ✅ Key Features:
- **Folders Define URL Segments**: The directory structure reflects the URL structure.
- **Scoped Layouts**: Layout files (`layout.tsx`) at different levels apply only to their nested routes.
- **Supports Dynamic Routing**: Dynamic parameters (`[id]`) allow flexible URL handling.

---

## 📁 Example Nested Structure
```
app
│── dashboard
│   ├── page.tsx        → Renders at `/dashboard`
│   ├── analytics
│   │   ├── page.tsx    → Renders at `/dashboard/analytics`
│   ├── reports
│   │   ├── sales
│   │   │   ├── page.tsx  → Renders at `/dashboard/reports/sales`
```

### 🔍 How It Works
1️⃣ **Each folder represents a URL segment**. A `page.tsx` inside a folder becomes a route at that path.  
2️⃣ **Deeply nested pages inherit layouts** from parent folders if a `layout.tsx` exists in an ancestor directory.  
3️⃣ **Dynamic routing** works the same way within nested structures, e.g., `app/dashboard/[id]/page.tsx` maps to `/dashboard/:id`.  

---

## 🛠 Example: Nested Routing in Action

### 📌 Basic Nested Page
```tsx
// app/dashboard/page.tsx
export default function Dashboard() {
  return <h1>Dashboard Home</h1>;
}
```
🔹 **URL:** `/dashboard`

```tsx
// app/dashboard/analytics/page.tsx
export default function Analytics() {
  return <h1>Dashboard Analytics</h1>;
}
```
🔹 **URL:** `/dashboard/analytics`

---

## 📌 Deeply Nested Routing
```tsx
// app/dashboard/reports/sales/page.tsx
export default function SalesReports() {
  return <h1>Sales Reports</h1>;
}
```
🔹 **URL:** `/dashboard/reports/sales`

---

## 🔀 Dynamic Nested Routing
Dynamic routing allows pages to be rendered dynamically based on URL parameters.

```tsx
// app/dashboard/[id]/page.tsx
export default function DashboardDetail({ params }: { params: { id: string } }) {
  return <h1>Dashboard ID: {params.id}</h1>;
}
```
🔹 **URL Example:** `/dashboard/123` → Displays `Dashboard ID: 123`

```tsx
// app/dashboard/reports/[category]/page.tsx
export default function ReportCategory({ params }: { params: { category: string } }) {
  return <h1>Report Category: {params.category}</h1>;
}
```
🔹 **URL Example:** `/dashboard/reports/finance` → Displays `Report Category: finance`

---

## 🎨 Scoped Layouts in Nested Routing
Layouts help maintain consistency across sections of an app. If you place a `layout.tsx` inside a folder, it applies **only** to routes inside that folder.

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Dashboard Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```
### ✅ Effect:
- `/dashboard` and all nested pages (`/dashboard/analytics`, `/dashboard/reports`) **inherit this layout**.

---

## 🎯 Summary
✔ **Use nested routing** to keep URLs clean and structured.  
✔ **Leverage dynamic routing** for flexible paths and parameters.  
✔ **Use scoped layouts** to maintain a consistent UI across nested routes.  

---

## 🔥 Conclusion
Nested and deeply nested routing in Next.js **simplifies URL management and app structure**. By using a combination of static and dynamic routes, along with scoped layouts, you can build scalable and maintainable applications.
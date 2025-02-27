## 🔒 What is a `(_folder-name)` Folder?
Folders prefixed with an **underscore** (`_folder-name`) are commonly used for private, internal, or utility-related files that should **not** be exposed as routes.

### ✅ Key Features:
- **Not Routable**: Next.js does not generate a route for folders starting with `_`.
- **Organizes Internal Code**: Used for utilities, helper functions, constants, or shared components.
- **Keeps Non-Page Files Separate**: Helps prevent clutter in the `app` directory.

### 🛠 Example Usage
```tsx
// app/_utils/helper.ts
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}
```
```tsx
// app/_constants/config.ts
export const API_URL = "https://api.example.com";
```
These files can be **imported** anywhere in your application without appearing in the URL structure.

---

## 🎯 When to Use `(folder-name)` and `(_folder-name)`?
✔ **Use `(folder-name)`** when you want to **organize pages** without affecting the URL.  
✔ **Use `(_folder-name)`** when you need **private files** that should not be exposed as routes.  
✔ Both help in **structuring your Next.js project** efficiently.  

---

## 🔥 Conclusion
Using `(folder-name)` and `(_folder-name)` in Next.js **improves project organization** while keeping routes clean. It’s perfect for structuring large applications, managing layouts efficiently, and separating internal utilities from public routes.

Happy coding! 🚀


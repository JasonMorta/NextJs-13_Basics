//'use client' is used to force the browser to use the client side rendering
// Without 'use client', components will be rendered on the server side
//'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default async function UserPage() {
  // { cache: "force-cache" }, // this will force the browser to cache the response
  //{ cache: "no-cache" }, // this will force the browser to not cache the response
  //{ cache: "reload" }, // this will force the browser to reload the response
  // { cache: "only-if-cached" }, // this will force the browser to only load the response from cache
  // { cache: "no-store" }, // this will force the browser to not store the response in cache
  // { cache: "default" }, // this will force the browser to use the default cache settings
  // { cache: "no-transform" }, // this will force the browser to not transform the response
  // { cache: "immutable" }, // this will force the browser to treat the response as immutable
  // { next: { revalidate: 1 } }, // this will force the browser to revalidate the response after 1 second
  // { next: { revalidate: 60 } } // this will force the browser to revalidate the response after 60 seconds

  //const pathname = usePathname();
  // usePathname() is a hook that returns the current pathname
  // hooks can only be used inside a component that has the 'use client' directive


  //console.log('pathname', pathname)

  const data = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-cache"});
  const users = await data.json();
  return (
    <div>
      <Link href="/"> back</Link>
      <h1>Users</h1>
   
      <ul>
        {users.map((user) => (
          <>
                   {new Date().toLocaleTimeString()}
              <li key={user.id}>{user.name}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

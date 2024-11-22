"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumb" className="p-4 bg-gray-100">
      <ol className="flex space-x-2 text-sm">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500">{decodeURIComponent(segment)}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
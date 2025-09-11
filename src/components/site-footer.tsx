import { Separator } from "@radix-ui/react-separator";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="backdrop-blur-lg bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center text-center text-sm text-black/60 dark:text-white/60">
        <div className="flex items-center">
          <div>© {year} Gautam Krishnan</div>

          {/* vertical separator between copyright and links on sm+ */}
          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 w-px bg-gray-800 mx-4"
          />
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-center mt-3 sm:mt-0">
          {/* LinkedIn */}
          <Separator
            orientation="horizontal"
            className="w-full h-px bg-gray-800 my-2 sm:hidden"
          />
          <a
            className="px-2 py-1 hover:underline"
            href="https://www.linkedin.com/in/gautam247gk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          {/* horizontal separator for mobile */}
          <Separator
            orientation="horizontal"
            className="w-full h-px bg-gray-800 my-2 sm:hidden"
          />
          {/* vertical separator for sm+ */}
          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 w-px bg-gray-800 mx-4"
          />

          {/* Github */}
          <a
            className="px-2 py-1 hover:underline"
            href="https://github.com/gautam247gk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <Separator
            orientation="horizontal"
            className="w-full h-px bg-gray-800 my-2 sm:hidden"
          />
          <Separator
            orientation="vertical"
            className="hidden sm:block h-4 w-px bg-gray-800 mx-4"
          />

          {/* Email */}
          <a
            className="px-2 py-1 hover:underline"
            href="mailto:gautam247gk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

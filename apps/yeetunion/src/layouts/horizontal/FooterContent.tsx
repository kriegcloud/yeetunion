"use client";
import classnames from "classnames";
import Link from "next/link";
// import { useHorizontalNav } from "@/layouts/horizontal/Provider";

// Util Imports
import { horizontalLayoutClasses } from "@/layouts/layoutClasses";

const FooterContent = () => {
  // Hooks
  // const { isBreakpointReached } = useHorizontalNav();

  return (
    <div
      className={classnames(
        horizontalLayoutClasses.footerContent,
        "flex items-center justify-between flex-wrap gap-4",
      )}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}`}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link
          href="https://e2.solutions"
          target="_blank"
          className="text-primary"
        >
          E2 Solutions
        </Link>
      </p>
    </div>
  );
};

export default FooterContent;

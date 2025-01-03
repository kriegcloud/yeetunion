"use client";
import { verticalLayoutClasses } from "@/layouts/layoutClasses";
// import { useVerticalNav } from "@/layouts/vertical/Provider";
import classnames from "classnames";
import Link from "next/link";

const FooterContent = () => {
  // const { isBreakpointReached } = useVerticalNav();

  return (
    <div
      className={classnames(
        verticalLayoutClasses.footerContent,
        "flex items-center justify-between flex-wrap gap-4",
      )}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, `}</span>
        <Link
          href="https://e2.solutions/"
          target="_blank"
          className="text-primary"
        >
          Yeet Union
        </Link>
      </p>
    </div>
  );
};

export default FooterContent;

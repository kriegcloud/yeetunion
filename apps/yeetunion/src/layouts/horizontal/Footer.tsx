import { horizontalLayoutClasses } from "@/layouts/layoutClasses";
import classnames from "classnames";
import Link from "next/link";
import { HorizontalLayoutFooter } from "./HorizontalLayoutFooter";

const Footer = () => {
  return (
    <HorizontalLayoutFooter>
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
    </HorizontalLayoutFooter>
  );
};

export default Footer;

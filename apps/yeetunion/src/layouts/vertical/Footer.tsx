import { verticalLayoutClasses } from "@/layouts/layoutClasses";
import classnames from "classnames";
import Link from "next/link";
import { VerticalLayoutFooter } from "./VerticalLayoutFooter";

const Footer = () => {
  return (
    <VerticalLayoutFooter>
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
    </VerticalLayoutFooter>
  );
};

export default Footer;

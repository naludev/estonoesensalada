import { socialLinks } from "../constants";
/**
 * Footer Social
 * @returns {JSX.Element}
 */
export function FooterSocial() {
  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className={`p-2 ${social.bgColor} text-foreground border-2 border-background ${social.hoverColor} transition-colors`}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
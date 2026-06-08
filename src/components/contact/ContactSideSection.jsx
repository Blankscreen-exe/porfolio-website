import React, { useState } from "react";
import PropTypes from "prop-types";

// data
import socialLinks from '../../data/socialLinks.json';

// constants
import svgList from '../../constants/svg'

const DISCORD_USERNAME = "blankscreen.exe";
const EMAIL = "mhammad.hassan002@gmail.com";

const buttonClasses =
  "flex items-center gap-3 w-full rounded-lg bg-bg2 px-4 py-3 text-content shadow-sm shadow-shadow/30 transition-all duration-200 hover:-translate-y-0.5 hover:text-primary hover:shadow-md focus:outline-none";

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-green-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 opacity-50">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

function ContactSideSection(props) {
  const [copied, setCopied] = useState(null); // 'discord' | 'email' | null

  const copyToClipboard = (key, text) => {
    const done = () => {
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  };

  const fallbackCopy = (text, done) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    try { document.execCommand("copy"); done(); } catch (e) { /* noop */ }
    document.body.removeChild(el);
  };

  return (
    <div className="px-6 rounded-md mb-16 w-full max-w-sm">
      {/* <h1 className="text-3xl font-bold text-title my-3">Hello!</h1> */}
      <p className="mb-6">I'd love to hear from you! Feel free to drop me a line if you have any questions, project inquiries, or just want to chat.</p>

      <div className="flex flex-col gap-3">
        {/* LinkedIn — opens profile */}
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
          <span className="shrink-0 [&>svg]:w-6 [&>svg]:h-6">{svgList.socialIcons.linkedin}</span>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-bold text-sm">LinkedIn</span>
            <span className="text-xs text-content/60 truncate">View Profile</span>
          </div>
          <span className="ml-auto"><ExternalIcon /></span>
        </a>

        {/* X (Twitter) — opens profile */}
        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
          <span className="shrink-0"><XIcon /></span>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-bold text-sm">X</span>
            <span className="text-xs text-content/60 truncate">View Profile</span>
          </div>
          <span className="ml-auto"><ExternalIcon /></span>
        </a>

        {/* Discord — copies username */}
        <button type="button" onClick={() => copyToClipboard("discord", DISCORD_USERNAME)} className={buttonClasses}>
          <span className="shrink-0 [&>svg]:w-6 [&>svg]:h-6">{svgList.socialIcons.discord}</span>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-bold text-sm">Discord</span>
            <span className="text-xs text-content/60 truncate">
              {copied === "discord" ? "Copied!" : DISCORD_USERNAME}
            </span>
          </div>
          <span className="ml-auto">{copied === "discord" ? <CheckIcon /> : <CopyIcon />}</span>
        </button>

        {/* Email — copies address */}
        <button type="button" onClick={() => copyToClipboard("email", EMAIL)} className={buttonClasses}>
          <span className="shrink-0"><EmailIcon /></span>
          <div className="flex flex-col items-start min-w-0">
            <span className="font-bold text-sm">Email</span>
            <span className="text-xs text-content/60 truncate">
              {copied === "email" ? "Copied!" : EMAIL}
            </span>
          </div>
          <span className="ml-auto">{copied === "email" ? <CheckIcon /> : <CopyIcon />}</span>
        </button>
      </div>

      <p className="mt-6">I'm always happy to connect!</p>
    </div>
  );
}

ContactSideSection.propTypes = {};

export default ContactSideSection;

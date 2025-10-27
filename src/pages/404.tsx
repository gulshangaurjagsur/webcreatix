import Link from "next/link";

export default function Custom404() {
  return (
    <div className="fourOfour">
      <h1 className="title">Oops! Page Not Found</h1>
      <p className="subtitle">
        The page you’re looking for doesn’t exist or may have been moved.
      </p>

      <Link href="/" className="button">
        Back to Home
      </Link>

      <div className="brand">
        <span className="logo">Webcreatix</span>
        <p className="tagline">Creative Web Solutions, That Work.</p>
      </div>
    </div>
  );
}

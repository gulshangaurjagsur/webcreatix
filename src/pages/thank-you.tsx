import { useEffect } from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const hasSuccess = router.query.success === "true";

    // 🚫 Direct access block (optional)
    if (!hasSuccess) {
      setTimeout(() => {
        router.replace("/");
      }, 1500);
      return;
    }

    // ✅ Google Ads conversion fire
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17818948467/R9m_COmC--YbEPOm3rBC",
        value: 40.0,
        currency: "INR",
      });
    }
  }, [router.isReady]);

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>Thank You!</h1>
      <p>Your enquiry has been submitted successfully.</p>

      {/* Back to Home Button */}
      <button
        onClick={() => router.push("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
import { useEffect } from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  const router = useRouter();

  useEffect(() => {
    // 🚫 Direct access block
    if (!router.query.success) {
      router.replace("/"); // ya "/contact"
      return;
    }

    // ✅ Google Ads conversion fire
    if ((window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17818948467/R9m_COmC--YbEPOm3rBC",
        value: 40.0,
        currency: "INR",
      });
    }
  }, [router]);

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>Thank You!</h1>
      <p>Your enquiry has been submitted successfully.</p>
    </div>
  );
};

export default ThankYou;

import styles from "./panIndiaServices.module.scss";
interface CityDataItem {
  city: string;
}

interface PanIndiaProps {
  data: Record<string, CityDataItem>;
}

const PanIndiaServices = ({ data }: PanIndiaProps) => {
  const entries = Object.entries(data).filter(([slug, city], index, allEntries) => {
    const isDuplicateCity = allEntries.some(
      ([otherSlug, otherCity], otherIndex) =>
        otherIndex < index && otherCity.city === city.city
    );

    return !isDuplicateCity;
  });

  return (
    <section className={styles.panIndiaServices}>
      <div className="container">
        <h2 className={styles.panHeading}>India-Wide Website Design & Development Services</h2>
        <p className={styles.panSubHeading}>
          Serving 50+ Cities With <strong>Custom Web Solutions</strong> for Startups, SMEs & Enterprises
        </p>

        <div className={styles.cityList}>
          <ul>
            {entries.map(([slug, city]) => (
              <li key={slug}>
                <a href={`/${slug}`}>
                  Website Designing Company in {city.city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PanIndiaServices;

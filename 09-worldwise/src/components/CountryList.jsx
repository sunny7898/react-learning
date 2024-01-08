import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import { useCities } from "../../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length) {
    return (
      <Message message="Add your first country by clicking on a country on the map" />
    );
  }

  const countries = cities.reduce((arr, city) => {
    return !arr.map((el) => el.country).includes(city.country)
      ? [...arr, { country: city.country, emoji: city.emoji }]
      : arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}
export default CountryList;

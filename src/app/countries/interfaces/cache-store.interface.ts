
import { Continent } from "./continent.type";
import { Country } from "./country.interface";

export interface CacheStore {
  byCapital: TermCountries,
  byCountries: TermCountries,
  byContinent: ContinentCountries,
}

export interface TermCountries {
  term: string;
  countries: Country[];
}
export interface ContinentCountries {
  continent: Continent;
  countries: Country[];
}

import Select from "react-select";
import { useEffect, useState } from "react";
import { fetchDataAsync } from "../../func/fetchDataAsync";
import { SelectionStyled } from "../Selection/SelectionStyled";
// eslint-disable-next-line react/prop-types
export const Selection = ({ onChange }) => {
  const [genreOptions, setGenreOptions] = useState([]);

  useEffect(() => {
    fetchGenreOptions();
  }, []);

  async function fetchGenreOptions() {
    try {
      const genres = await fetchDataAsync();

      const uniqueGenres = genres.reduce((unique, genre) => {
        if (!unique.find((item) => item.value === genre.genre)) {
          unique.push({ value: genre.genre, label: genre.genre });
        }
        return unique;
      }, []);

      setGenreOptions(uniqueGenres);
    } catch (error) {
      console.error(error);
    }
  }

  function handleGenreChange(selectedOption) {
    onChange(selectedOption);
  }

  return (
    <SelectionStyled>
      <Select
        placeholder={"Genre"}
        options={genreOptions}
        onChange={handleGenreChange}
        isClearable={true}
      />
    </SelectionStyled>
  );
};

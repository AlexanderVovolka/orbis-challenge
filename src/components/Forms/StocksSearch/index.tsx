import React, { FC, useState, Fragment, useEffect } from "react";
import { useHistory, generatePath } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgressIcon from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import { BASE_API, API_KEY } from '../../../constants/api';
import Paths from "../../../constants/paths";

interface StockType {
  name: string;
}

const StocksSearch: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [options, setOptions] = useState<StockType[]>([]);
  const [value, setValue] = useState<StockType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSearchChange = (event: any) => {
    const search = event.target.value;
    setSearch(search);
  };

  const handleValueChange = (event:any, value:any) => {
    if (value) {
      console.log(value);
      setValue(value);
      history.push(generatePath(Paths.StocksDetails, { ticker: value.ticker }))
    }
  }

  useEffect(() => {
    if (search && search.length !== 0) {
      setLoading(true);

      const url = `${BASE_API}/v3/reference/tickers?search=${search}&apiKey=${API_KEY}`;
      fetch(url).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }
      }).then((data) => {
        const options = data?.results || [];
        setOptions(options);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        console.log('Error', error)
      })
    }
  }, [search]);


  return (
    <Autocomplete
      value={value}
      onChange={handleValueChange}
      onInputChange={handleSearchChange}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search symbols or companies"
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            startAdornment: <SearchIcon />,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgressIcon size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default StocksSearch;

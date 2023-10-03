import React, { useState } from 'react';
import './newAnnouncement.scss';
import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];

function NewAnnouncement() {
  const [saleBtn, setSaleBtn] = useState(true);
  const [rentBtn, setRentBtn] = useState(false);
  const [estateType, setEstateType] = useState<string | null>(null);
  const [commEstateType, setCommEstateType] = useState<string | null>(null);
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const handleSaleAnnouncement = () => {
    setRentBtn(() => false);
    setEstateType(null);
    setCommEstateType(null);
    setSaleBtn(() => true);
  };
  const handleRentAnnouncement = () => {
    setSaleBtn(() => false);
    setEstateType(null);
    setCommEstateType(null);
    setRentBtn(() => true);
  };

  const handleEstateType = (
    _: React.MouseEvent<HTMLElement>,
    newEstatetype: string | null
  ) => {
    setEstateType(newEstatetype);
  };

  const handleCommEstateType = (
    _: React.MouseEvent<HTMLElement>,
    newCommEstatetype: string | null
  ) => {
    setCommEstateType(newCommEstatetype);
  };

  return (
    <div className="form-wrapper">
      <Typography variant="h6">Тип объявления:</Typography>
      <ButtonGroup>
        <Button
          variant={saleBtn ? 'contained' : 'outlined'}
          onClick={handleSaleAnnouncement}
        >
          Продажа
        </Button>
        <Button
          variant={rentBtn ? 'contained' : 'outlined'}
          onClick={handleRentAnnouncement}
        >
          Аренда
        </Button>
      </ButtonGroup>
      <Typography variant="h6">Тип недвижимости:</Typography>
      <ToggleButtonGroup
        value={estateType}
        exclusive
        color="primary"
        onChange={handleEstateType}
        aria-label="text alignment"
      >
        {rentBtn && (
          <ToggleButton
            value="dayApartment"
            aria-label="apartments for a short term rent"
          >
            Квартиры на сутки
          </ToggleButton>
        )}
        <ToggleButton value="apartment" aria-label="apartments">
          Квартиры
        </ToggleButton>
        <ToggleButton value="room" aria-label="rooms">
          Комнаты
        </ToggleButton>
        <ToggleButton value="house" aria-label="houses">
          Коттеджи/Дома
        </ToggleButton>
        {rentBtn && (
          <ToggleButton
            value="dayHouse"
            aria-label="houses for a short term rent"
          >
            Коттеджи и агроусадьбы на сутки
          </ToggleButton>
        )}
        {saleBtn && (
          <ToggleButton value="dacha" aria-label="country houses">
            Дачи
          </ToggleButton>
        )}
        {saleBtn && (
          <ToggleButton value="plot" aria-label="plot of land">
            Участки
          </ToggleButton>
        )}
        <ToggleButton value="garage" aria-label="garage for a car">
          Гаражи
        </ToggleButton>
        <ToggleButton value="commercial" aria-label="commercial">
          Коммерческая
        </ToggleButton>
      </ToggleButtonGroup>
      {estateType === 'commercial' && (
        <>
          <Typography variant="h6">Тип коммерческой недвижимости:</Typography>
          <ToggleButtonGroup
            value={commEstateType}
            exclusive
            color="primary"
            onChange={handleCommEstateType}
            aria-label="text alignment"
          >
            <ToggleButton value="office" aria-label="office building">
              Офисы
            </ToggleButton>
            <ToggleButton value="services" aria-label="services building">
              Сфера услуг
            </ToggleButton>
            <ToggleButton value="retail" aria-label="retail building">
              Торговые объекты
            </ToggleButton>
            <ToggleButton
              value="manufacture"
              aria-label="manufacture and warehouses buildings"
            >
              Склады и производство
            </ToggleButton>
          </ToggleButtonGroup>
        </>
      )}
      <Typography variant="h6">Адрес:</Typography>
      <div style={{ margin: '10px 0' }}>
        {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
        <div>{`inputValue: '${inputValue}'`}</div>
        <br /> */}
        <Autocomplete
          style={{ width: '790px' }}
          value={value}
          onChange={(_: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={inputValue ? '' : 'Например: Минск Розы Люксембург 110'}
            />
          )}
        />
      </div>
      <div className="yandex-map-wrapper">
        <YMaps
          query={{
            apikey: import.meta.env.VITE_YANDEX_API_KEY,
          }}
        >
          <Map
            style={{ width: '100%', height: '100%' }}
            defaultState={{ center: [53.846284, 27.64259], zoom: 17 }}
          >
            <ZoomControl
              options={{ position: { left: '10px', top: '10px' } }}
            />
            <Placemark
              geometry={[53.846284, 27.64259]}
              properties={{
                balloonContentBody: 'ballon text......',
              }}
              modules={['geoObject.addon.balloon']}
              options={{ iconColor: 'blue' }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default NewAnnouncement;

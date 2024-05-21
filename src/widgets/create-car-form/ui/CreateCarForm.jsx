import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { fetchCreateCar } from "../api/CreateCarApi";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const specificationTags = [
  "Тип двигателя",
  "Тип привода",
  "Рабочий объем, см3",
  "Коробка передач",
  "Число цилиндров",
  "Разгон до 100 км/ч",
  "Максимальная мощность, л.с. / при об/мин",
  "Максимальная скорость, км/ч",
];
const configurationTags = ["Comfort", "Elite", "Premium", "Tech Plus"];
const configFeauteresTags = [
  "Экстерьер",
  "Интерьер",
  "Мультимедиа",
  "Колесные диски",
];

export const CreateCarForm = () => {
  const [carInfo, setCarInfo] = useState({
    name: "",
    cardImage: null,
    image: null,
    video: null,
  });
  const [carSpecifications, setCarSpecifications] = useState({});
  const [selectedSpecification, setSelectedSpecification] = useState(
    specificationTags[0]
  );

  const [carConfigurations, setCarConfigurations] = useState([]);
  const [selectedConfiguration, setSelectedConfiguration] = useState(
    configurationTags[0]
  );
  const [selectedFeature, setSelectedFeature] = useState(
    configFeauteresTags[0]
  );
  const [feautereValue, setFeautereValue] = useState("");

  const [engineOption, setEngineOption] = useState({
    name: "",
    price: 0,
  });

  const handleCreateCar = async (e) => {
    e.preventDefault();
    await fetchCreateCar({
      modelInfo: carInfo,
      specifications: carSpecifications,
		configurations: carConfigurations
    });
  };


  return (
    <form onSubmit={handleCreateCar}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography>Основная информация</Typography>
        <TextField
          placeholder="Название модели машины"
          helperText="Введите название модели машины"
          variant="standard"
          value={carInfo.name}
          onChange={(e) => setCarInfo({ ...carInfo, name: e.target.value })}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onChange={(e) => setCarInfo({ ...carInfo, image: e.target.files[0] })}
        >
          Загрузить главную картинку модели
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onChange={(e) =>
            setCarInfo({ ...carInfo, cardImage: e.target.files[0] })
          }
        >
          Загрузить картинку для карточки модели
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          onChange={(e) => setCarInfo({ ...carInfo, video: e.target.files[0] })}
        >
          Загрузить видео для модели
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>
      <Box sx={{ marginTop: "30px" }}>
        <Typography>Основные характеристики</Typography>
        <Box>
          <Typography>Добавление характеристики</Typography>
          <Select
            value={selectedSpecification}
            onChange={(e) => setSelectedSpecification(e.target.value)}
          >
            {specificationTags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
          <Button
            onClick={() =>
              setCarSpecifications((prev) => ({
                ...prev,
                [selectedSpecification]: "",
              }))
            }
          >
            Добавить характиристику
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {Object.entries(carSpecifications).map(([key, value]) => (
            <Paper
              elevation={1}
              key={key}
              sx={{
                display: "flex",
                gap: "40px",
                padding: "10px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: "40px", padding: "10px" }}>
                <Typography>{key}</Typography>
                <TextField
                  variant="standard"
                  value={value}
                  onChange={(e) =>
                    setCarSpecifications({
                      ...carSpecifications,
                      [key]: e.target.value,
                    })
                  }
                />
              </Box>
              <Button
                color="error"
                onClick={() =>
                  setCarSpecifications((prev) => {
                    const newSpecifications = { ...prev };
                    delete newSpecifications[key];
                    return newSpecifications;
                  })
                }
              >
                Удалить характиристику
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography>Добавление конфигурации</Typography>
          <Box>
            <Select
              value={selectedConfiguration}
              onChange={(e) => setSelectedConfiguration(e.target.value)}
            >
              {configurationTags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              ))}
            </Select>
            <Button
              onClick={() =>
                setCarConfigurations((prev) => [
                  ...prev,
                  {
                    name: selectedConfiguration,
                    engineOptions: [],
                    features: {},
                  },
                ])
              }
            >
              Добавить конфигурацию
            </Button>
          </Box>
          <Box>
            {carConfigurations.map((item) => (
              <Paper
                key={item.name}
                elevation={1}
                sx={{ padding: "20px 10px" }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  Конфигурация - {item.name}
                </Typography>
                <Box>
                  <TextField
                    placeholder="Название двигателя"
                    value={engineOption.name}
                    onChange={(e) =>
                      setEngineOption({ ...engineOption, name: e.target.value })
                    }
                  />
                  <TextField
                    placeholder="Цена двигателя"
                    value={engineOption.price}
                    onChange={(e) =>
                      setEngineOption({
                        ...engineOption,
                        price: e.target.value,
                      })
                    }
                  />
                  <Button
                    onClick={() => {
                      setCarConfigurations((prev) => [
                        ...prev.filter((config) => config.name !== item.name),
                        {
                          ...item,
                          engineOptions: [...item.engineOptions, engineOption],
                        },
                      ]);
                      setEngineOption({ name: "", price: 0 });
                    }}
                  >
                    Добавить двигатель
                  </Button>
                </Box>
                <Box sx={{ borderBottom: "1px solid #000" }}>
                  <Box>
                    <Select
                      value={selectedFeature}
                      onChange={(e) => setSelectedFeature(e.target.value)}
                    >
                      {configFeauteresTags.map((tag) => (
                        <MenuItem key={tag} value={tag}>
                          {tag}
                        </MenuItem>
                      ))}
                    </Select>
                    <TextField
                      placeholder="Введите значение конфигураций"
                      value={feautereValue}
                      onChange={(e) => setFeautereValue(e.target.value)}
                    />
                    <Button
                      onClick={() =>
                        setCarConfigurations((prev) => [
                          ...prev.filter((config) => config.name !== item.name),
                          {
                            ...item,
                            features: {
                              ...item.features,
                              [selectedFeature]: {
                                ...item.features[selectedFeature],
                                [feautereValue]: false,
                              },
                            },
                          },
                        ])
                      }
                    >
                      Добавить конфигурацию
                    </Button>
                  </Box>
                  <Box>
                    {Object.entries(item.features).map(([key, value]) => {
                      return (
                        <Box key={key} sx={{}}>
                          <Typography>{key}</Typography>
                          <Box>
                            {Object.keys(value).map((feature) => (
                              <Box
                                key={feature}
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: "10px 0",
                                }}
                              >
                                <Typography>{feature}</Typography>
                                <Button
                                  onClick={() =>
                                    setCarConfigurations((prev) => [
                                      ...prev.filter(
                                        (config) => config.name !== item.name
                                      ),
                                      {
                                        ...item,
                                        features: {
                                          ...item.features,
                                          [selectedFeature]: {
                                            ...item.features[selectedFeature],
                                            [feautereValue]:
                                              !item.features[selectedFeature][
                                                feautereValue
                                              ],
                                          },
                                        },
                                      },
                                    ])
                                  }
                                >
                                  {value[feature] ? "Нет" : "Да"}
                                </Button>
                                <Button
                                  color="error"
                                  onClick={() => {
                                    setCarConfigurations((prev) => {
                                      const newConfigurations = [...prev];
                                      const newConfig = newConfigurations.find(
                                        (config) => config.name === item.name
                                      );
                                      delete newConfig.features[key][feature];

                                      if (
                                        Object.keys(newConfig.features[key])
                                          .length === 0
                                      ) {
                                        delete newConfig.features[key];
                                      }
                                      return newConfigurations;
                                    });
                                  }}
                                >
                                  Удалить
                                </Button>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
      <Button variant="contained" type="submit">
        Создать модель
      </Button>
    </form>
  );
};

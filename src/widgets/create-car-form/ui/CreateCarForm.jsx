import {
  Box,
  Button,
  Divider,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { fetchCreateCar } from "../api/CreateCarApi";
import { UploadButton } from "@/app/feauters";

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
    starting_price: 0,
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
      configurations: carConfigurations,
    });
  };

  const handleUploadMainImage = (url) => {
    setCarInfo((prev) => ({ ...prev, image: url }));
  };

  const handleUploadCardImage = (url) => {
    setCarInfo((prev) => ({ ...prev, cardImage: url }));
  };

  const handleUploadVideo = (url) => {
    setCarInfo((prev) => ({ ...prev, video: url }));
  };

  return (
    <form onSubmit={handleCreateCar}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px 0px 0px",
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Основная информация
        </Typography>
        <TextField
          required
          placeholder="Название модели машины"
          helperText="Введите название модели машины"
          variant="standard"
          value={carInfo.name}
          onChange={(e) => setCarInfo({ ...carInfo, name: e.target.value })}
        />
        <TextField
          required
          placeholder="Начальная цена машины"
          helperText="Введите начальную цену машины"
          variant="standard"
          value={carInfo.starting_price}
          onChange={(e) =>
            setCarInfo({ ...carInfo, starting_price: e.target.value })
          }
        />
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Изображения
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <UploadButton onUploadComplete={handleUploadMainImage}>
              Загрузить главную картинку
            </UploadButton>
            <UploadButton onUploadComplete={handleUploadCardImage}>
              Загрузить картинку карточки
            </UploadButton>
            <UploadButton onUploadComplete={handleUploadVideo}>
              Загрузить видео
            </UploadButton>
          </Box>
        </Paper>
      </Box>
      <Paper elevation={2} sx={{ marginTop: "30px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Основные характеристики
        </Typography>
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Добавление характеристики
          </Typography>
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
            <Box
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
            </Box>
          ))}
        </Box>
        <Divider />
        <Box sx={{ padding: "20px" }}>
          <Box>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Добавление конфигурации
            </Typography>
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
                sx={{}}
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
                <Box key={item.name} sx={{ padding: "20px 10px" }}>
                  <Typography sx={{ textAlign: "center" }}>
                    Конфигурация - {item.name}
                  </Typography>
                  <Box sx={{ marginTop: "40px" }}>
                    <TextField
                      placeholder="Название двигателя"
                      value={engineOption.name}
                      onChange={(e) =>
                        setEngineOption({
                          ...engineOption,
                          name: e.target.value,
                        })
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
                            engineOptions: [
                              ...item.engineOptions,
                              engineOption,
                            ],
                          },
                        ]);
                        setEngineOption({ name: "", price: 0 });
                      }}
                    >
                      Добавить двигатель
                    </Button>
                  </Box>
                  <Box sx={{ marginTop: "40px" }}>
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
                            ...prev.filter(
                              (config) => config.name !== item.name
                            ),
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
                                        const newConfig =
                                          newConfigurations.find(
                                            (config) =>
                                              config.name === item.name
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
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Paper>

      <Button variant="contained" type="submit">
        Создать модель
      </Button>
    </form>
  );
};

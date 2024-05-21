import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const CarConfigurations = ({ configurations }) => {
  const renderEngineOptions = () => {
    const engines = {};
    configurations.forEach((config) => {
      config.engineOptions.forEach((engine) => {
        if (!engines[engine.name]) engines[engine.name] = {};
        engines[engine.name][config.name] = engine.price;
      });
    });

    return (
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#eee",
              display: "grid",
              gridTemplateColumns: "3fr 1fr 1fr",
            }}
          >
            <TableCell>Комплектация</TableCell>
            {configurations.map((config) => (
              <TableCell sx={{ textAlign: "center" }} key={config.name}>
                {config.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(engines).map((engineName) => (
            <TableRow
              key={engineName}
              sx={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr" }}
            >
              <TableCell>{engineName}</TableCell>
              {configurations.map((config) => (
                <TableCell sx={{ textAlign: "center" }} key={config.name}>
                  {engines[engineName][config.name]
                    ? engines[engineName][config.name].toLocaleString()
                    : "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  const renderFeatures = () => {
    const featureCategories = {};
    configurations.forEach((config) => {
      Object.keys(config.features).forEach((category) => {
        if (!featureCategories[category]) featureCategories[category] = {};
        Object.keys(config.features[category]).forEach((feature) => {
          if (!featureCategories[category][feature])
            featureCategories[category][feature] = {};
          featureCategories[category][feature][config.name] =
            config.features[category][feature];
        });
      });
    });

    return Object.keys(featureCategories).map((category) => (
      <Table>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#eee",
              display: "grid",
              gridTemplateColumns: "3fr 1fr 1fr",
            }}
          >
            <TableCell>{category}</TableCell>
            {configurations.map((config) => (
              <TableCell sx={{ textAlign: "center" }} key={config.name}>
                {config.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(featureCategories[category]).map((featureName) => (
            <TableRow
              sx={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr" }}
              key={featureName}
            >
              <TableCell sx={{ flexGrow: 2 }}>{featureName}</TableCell>
              {configurations.map((config) => (
                <TableCell
                  sx={{ textAlign: "center", flexGrow: 1 }}
                  key={config.name}
                >
                  {featureCategories[category][featureName][config.name]
                    ? "Да"
                    : "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ));
  };

  return (
    <Box>
      {renderEngineOptions()}
      {renderFeatures()}
    </Box>
  );
};

export const ModelDetails = ({ carInfo }) => {
  const { name, video, specifications, configurations } = carInfo;

  return (
    <Box>
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh",
          color: "white",
          fontSize: "2rem",
        }}
      >
        <video
          muted
          loop
          autoPlay
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            position: "absolute",
            zIndex: "-1",
          }}
        >
          <source type="video/mp4" src={video} />
        </video>
        <Container>
          <Box paddingTop="100px">
            <Typography variant="h1" sx={{ fontWeight: "400" }}>
              {name}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "25px",
                color: "#fff",
                backgroundColor: "#000",
                fontWeight: "600",
                fontSize: "18px",
                padding: "10px 30px",
              }}
            >
              Отправить заявку
            </Button>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box sx={{ padding: "50px 0px" }}>
          {specifications && (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "600",
                  marginTop: "50px",
                  textTransform: "uppercase",
                }}
              >
                Основные характиристики
              </Typography>
              <Box
                sx={{
                  marginTop: "30px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                }}
              >
                {Object.entries(specifications).map(([key, value]) => (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "400",
                        flex: 1,
                        color: "#AAAAAA",
                      }}
                    >
                      {key}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ flex: 1, textAlign: "right" }}
                    >
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}

          <Box sx={{ padding: "50px 0px" }}>
            <Typography variant="h6" sx={{ fontWeight: "600" }}>
              {String(`КОМПЛЕКТАЦИИ И ЦЕНЫ ${name}`).toUpperCase()}
            </Typography>
            {configurations && (
              <CarConfigurations configurations={configurations} />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

import dotenv from "dotenv";

const loadEnvVariables = () => {
  dotenv.config();

  const requiredEnvVariables = [
    "PORT",
    "MONGO_URI",
    "MAX_PROCESSORS"
  ];

  requiredEnvVariables.forEach((variable) => {
    if (!process.env[variable]) {
      console.error(`Missing required environment variable: ${variable}`);
      process.exit(1);
    }
  });
};

export { loadEnvVariables };
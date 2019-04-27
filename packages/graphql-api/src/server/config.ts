const environment = process.env.NODE_ENV || "production";

export const configurations = {
  production: { ssl: false, port: 4000, hostname: "localhost" },
  development: { ssl: false, port: 4000, hostname: "localhost" }
};

export const config = configurations[environment];

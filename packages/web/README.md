## How to run locally?

### Development

```
docker-compose up -d
```

The application should be available at http://localhost:3000. Hot reloading should work out of the box--i.e., changes that you make to your source files will automatically be reflected inside the container envrinoment and displayed in your browser.

### Production

```bash
docker build . -t fabulas/sabemos-web
docker run -p 8080:80 fabulas/sabemos-web
```

The applicaiton should be available at http://localhost:8080. Here, the application is first built and then copied to an nginx server where it lives.

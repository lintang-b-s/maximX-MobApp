# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Nyalain dulu openstreetmap tile servernya

   ```bash

    docker run -it --rm -v $(pwd)/osm:/data ghcr.io/systemed/tilemaker:master /data/java-latest.osm.pbf --output /data/java-latest.pmtiles

   ```

   server pmtiles

   ```bash
      mkdir martin
      cd martin

      # Download some sample data
      curl -L -O https://github.com/maplibre/martin/raw/main/tests/fixtures/mbtiles/world_cities.mbtiles

      # Download the latest version of Martin binary, extract it, and make it executable
      curl -L -O https://github.com/maplibre/martin/releases/latest/download/martin-x86_64-unknown-linux-gnu.tar.gz
      tar -xzf martin-x86_64-unknown-linux-gnu.tar.gz
      chmod +x ./martin

      # Show Martin help screen
      ./martin --help

      ./martin ../osm/java-latest.pmtiles
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        options: {
          name: "ikuzmani",
          description: "Yeni nesil insan kaynakları uygulaması",
          productName: "IKUZMANI",
          icon: "./src/logo.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      config: {
        options: {
          name: "ikuzmani",
          description: "Yeni nesil insan kaynakları uygulaması",
          productName: "IKUZMANI",
          icon: "./src/logo.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          name: "ikuzmani",
          description: "Yeni nesil insan kaynakları uygulaması",
          productName: "IKUZMANI",
          icon: "./src/logo.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        options: {
          name: "ikuzmani",
          description: "Yeni nesil insan kaynakları uygulaması",
          productName: "IKUZMANI",
          icon: "./src/logo.png",
        },
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'hypecode-tech',
          name: 'app.ikuzmani.tr'
        },
        draft: false,
        prerelease: false
      }
    }
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

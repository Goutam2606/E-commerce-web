export default {
  packagerConfig: {
    name: 'Techno World',
    executableName: 'techno-world',
    icon: './src/assest/image',
    ignore: [
      /^\/src/,
      /^\/public/,
      /^\/node_modules\/(?!electron)/,
      /\.map$/
    ]
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'techno_world'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin']
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Devendra Singh Rajput',
          homepage: 'https://your-website.com'
        }
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {}
    }
  ]
};
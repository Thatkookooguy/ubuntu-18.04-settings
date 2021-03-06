// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: '"Ubuntu Mono", "icons-in-terminal", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#b2b2b2',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#212121',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    borderColor: '#333',

    // custom CSS to embed in the main window
    css: `
    .header_windowControls {
      width: 70px;
      margin-right: 10px;
    }

    .header_windowControls svg {
      background-color: rgb(212, 25, 25);
      color: #212121;
      width: 15px;
      height: 15px;
      padding: 5px;
      margin: 15px 0;
      border-radius: 50%;
      opacity: 1;
      cursor: pointer;
      stroke-width: 4;
    }

    .header_windowControls svg:nth-last-child(3) {
      background-color: rgb(255, 102, 0);
    }

    .header_windowControls svg:nth-last-child(2) {
      background-color: rgb(53, 122, 240);
    }

    .header_windowControls svg use {
      display: none;
    }

    .header_windowControls svg:hover use {
      display: block;
    }
    `,

    // custom CSS to embed in the terminal window
    termCSS: `
    a {
      color: #EEB146;
      mix-blend-mode: difference;
    }

    span[style="color: rgb(64, 64, 64);"] > a {
      color: inherit;
    }
    `,

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#ffffff',
      red: '#f82772',
      green: '#2afb0c',
      yellow: '#d5be49',
      blue: '#5895f0',
      magenta: '#ca30c7',
      cyan: '#00c5c7',
      white: '#e5e5e5',
      lightBlack: '#404040',
      lightRed: '#ff6e67',
      lightGreen: '#a7e22e',
      lightYellow: '#fffc69',
      lightBlue: '#6871ff',
      lightMagenta: '#ff77ff',
      lightCyan: '#60fdff',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '/bin/zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  hypercwd: {
    initialWorkingDirectory: '~/Development'
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'htyt',
    'hyperlinks',
    'hyper-command-gifs',
    'hyper-statusline',
    'hyper-search',
    'hypercwd',
    'hyperterm-dibdabs',
    'hyperterm-lastpass',
    'hypergravity',
    'hyper-spotify',
    'hyper-autoprofile'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};

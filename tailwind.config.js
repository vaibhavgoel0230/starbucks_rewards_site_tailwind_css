module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "primary-back": "#d4e9e2",
        "primary-button": "#008248",
        "secondary-green-light": "#d4e9e254",
        "primary-dust": "#f3f1e7",
        "secondary-dust": "#f7f7f7",
      }),
      backgroundImage: (theme) => ({
        front: "url('./img/xl-hero-desktop_2021.webp')",
        small: "url('./img/hero-mobile_2021.webp')",
      }),
      backgroundPosition: {
        "1/2": "50%",
        "2/2.5": "50% 100%",
      },
      backgroundSize: {
        "cover-100%": "cover 100%",
        "auto-50%": "auto 50%",
      },
      borderRadius: {
        "1/2": "50px",
        8: "8px",
      },
      maxWidth: {
        "8xl": "1440px",
        vsm: "256px",
        190: "190px",
      },
      screens: {
        umd: { max: "820px" },
        vmd: { min: "820px" },
        belmd: { max: "768px" },
        bellg: { max: "1024px" },
      },
      minWidth: {
        calc: "100%-128px",
      },
      spacing: {
        12.75: "51px",
        27.5: "110px",
        500: "1380px",
        25: "25%",
        "1/3": "33.33%",
        "1/6": "16.6667%",
        "5-vw": "5vw",
        calc: "100%-128px",
        7: "7px",
        30: "30px",
        40: "40%",
        48: "48%",
        22: "92px",
        21.33: "21.33%",
        15.33: "15.33%",
        "4p": "4%",
        "15p": "15%",
        100: "100%",
        18: "18%",
        "1/5": "5%",
        190: "190px",
      },
      fontSize: {
        14: "14px",
        28: "28px",
        19: "19px",
      },
      fontFamily: {
        soDoSans: "SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif",
      },
      textColor: {
        "primary-gold": "#cba258",
        "primary-green": "#008248",
      },
      boxShadow: {
        navshad: "inset 0 -6px #008248",
        formshad: "0 0 0 2px #d62b1f",
        footshad:
          "0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

import Typography from 'typography'
import oceanBeach from 'typography-theme-ocean-beach'

oceanBeach.overrideThemeStyles = ({ rhythm }, options) => ({
    "a": {
        "backgroundImage": "none",
        "textShadow": "none"
    },
    "h1, h2, h3, h4, h5, h5": {
        "margin": "0"
    },
    "ul": {
        "marginBottom": "0"
    }
})

const typography = new Typography(oceanBeach)

export default typography
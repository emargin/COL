import { ColorModeContext } from '@/ThemeBuilder'
import { styled, useTheme } from '@mui/material'
import React from 'react'
const styles = {
    themeToggle: {
        size: '2rem',

        background: 'none',
        border: 'none',
        padding: 0,

        inlineSize: '2rem',
        blockSize: '2rem',
        aspectRatio: '1',
        borderRadius: '50%',
        cursor: 'pointer',
        touchAction: 'manipulation',
        '-webkit-tap-highlight-color': 'transparent',
        outlineOffset: '5px',

        '& > svg': {
            inlineSize: '100%',
            blockSize: '100%',
            strokeLinecap: 'round',
        },
        '@media (hover: none)': {
            size: '48px',
        },
    },
    sun: {
        transition: 'transform .5s 3',
    },
}
const StyledSvg = styled('svg')(({ theme }) => ({
    '& > :is(.moon, .sun, .sun-beams)': {
        transformOrigin: 'center center',
    },

    '& > :is(.moon, .sun)': {
        fill: theme.palette.mode === 'dark' ? '#fff' : '#32323e',
    },

    // animation
    '& > .sun-beams': {
        stroke: '#32323e',
        strokeWidth: '2px',
        transition: 'transform .5s ease, opacity .5s ease', // ?
    },

    '& > .sun': {
        transition: 'transform .5s ease', // ?
    },
    '& > .moon > circle': {
        transition: 'transform .25s ease',
    },

    ...(theme.palette.mode === 'dark' && {
        '& > .sun': {
            transform: 'scale(1.75)',
            transitionTimingFunction: 'ease',
            transitionDuration: '.25s',
        },

        '& > .sun-beams': {
            opacity: 0,
            transform: 'rotateZ(-25deg)',
            transitionDuration: '.15s',
        },

        '& > .moon > circle': {
            transform: 'translateX(-7px)',
            transitionDelay: '.25s',
            transitionDuration: '.5s',
        },
    }),
    '&:hover': {
        // stroke: 'blue',
        fill: 'green',
    },
}))

export default function ThemeSwitchBtn() {
    const { toggleColorMode } = React.useContext(ColorModeContext) // TODO: make normal context
    const theme = useTheme()
    const reflectPreference = () => {
        document.firstElementChild &&
            document.firstElementChild.setAttribute('data-theme', theme.palette.mode)

        document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.palette.mode)
    }
    const onClick = () => {
        reflectPreference()
        toggleColorMode()
    }
    return (
        <button
            style={styles.themeToggle}
            id="theme-toggle"
            title="Toggles light/dark"
            aria-label="auto"
            onClick={onClick}
        >
            <StyledSvg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                <g className="sun-beams" stroke="currentColor">
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
                <mask className="moon" id="moon-mask">
                    <rect x="0" y="0" width="100%" height="100%" fill="white" />
                    <circle cx="24" cy="10" r="6" fill="black" />
                </mask>
            </StyledSvg>
        </button>
    )
}

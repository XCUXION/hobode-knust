import { TypographyBold, TypographySize } from "./style.types"

export const colors = {
    main : {
        primary : '#DB940A'
    },
    text : {
        primary : '#464441',
        secondary : '#777777',
        tetiary : '#818181',
    },
    bg : {
        primary : '#F4F4F4',
        secondary : '#EBEBEB',
        tetiary : '#D0D0D0',
        quantinary : '#1C1C1E',
        alt1 : '#2C2C2C',
        alt2 : '#474747',
        transparent : {
            primary : "#46444108"
        }
    },
    border : {
        primary : "#EBEBEB"
    }
}

export const cssColors = {
    main : {
        primary : 'var(--main-primary)'
    },
    text : {
        primary : 'var(--text-primary)',
        secondary : 'var(--text-secondary)',
        tetiary : 'var(--text-tetiary)',
    },
    bg : {
        primary : 'var(--bg-primary)',
        secondary : 'var(--bg-secondary)',
        tetiary : 'var(--bg-tetiary)',
        quantinary : 'var(--bg-quantinary)',
        alt1 : 'var(--bg-alt1)',
        transparent : {
            primary : 'var(--bg-transparent-primary)'
        }
    },
    border : {
        primary : 'var(--border-primary)'
    }
}

export const theme = {
    colors : {
        ...colors
    },

    typography: {
        size: { 
            body: TypographySize.body,
            HL: TypographySize.HL,
            HM: TypographySize.HM,
        },
        bold: { sm: TypographyBold.sm, md: TypographyBold.md, lg: TypographyBold.lg },
      },
}

export default theme
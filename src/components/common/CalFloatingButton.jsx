import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getCalApi } from '@calcom/embed-react'

// data
import socialLinks from '../../data/socialLinks.json'

const CAL_NAMESPACE = 'general'
const CAL_LINK = socialLinks.calendarBooking.replace(/^https?:\/\/cal\.com\//, '')

// Hex equivalents of colorConstants.light/dark.primary (cal.com's cssVars need hex, not rgb()).
const BRAND_COLOR_LIGHT = '#0694A2'
const BRAND_COLOR_DARK = '#30C3D2'

function CalFloatingButton() {
  const isDarkMode = useSelector((state) => state.persistedReducer.isDarkMode)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    ;(async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('floatingButton', {
        namespace: CAL_NAMESPACE,
        calLink: CAL_LINK,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        buttonText: 'Want To Chat?',
        hideButtonIcon: false,
      })
    })()
  }, [])

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      const theme = 'light' //isDarkMode ? 'dark' : 'light'
      cal('ui', {
        theme,
        cssVarsPerTheme: {
          light: { 'cal-brand': BRAND_COLOR_LIGHT },
          // dark: { 'cal-brand': BRAND_COLOR_DARK },
        },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    })()
  }, [isDarkMode])

  return null
}

export default CalFloatingButton

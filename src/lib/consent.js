import { useEffect, useState } from 'react'

// The only thing stored is whether the visitor allows third-party embeds (the
// Google map, which sets Google's own cookies). It lives in localStorage rather
// than a cookie and never leaves the device.
const STORAGE_KEY = 'pfc-cookie-consent'
const CHANGE_EVENT = 'pfc-consent-change'
const OPEN_EVENT = 'pfc-open-cookie-settings'

export const CONSENT_ALL = 'all'
export const CONSENT_ESSENTIAL = 'essential'

function readConsent() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === CONSENT_ALL || value === CONSENT_ESSENTIAL ? value : null
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage can be blocked (e.g. private browsing); the choice still applies
    // for the rest of this visit via the event below.
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }))
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_EVENT, handler)
  return () => window.removeEventListener(OPEN_EVENT, handler)
}

// `ready` is false during server rendering and hydration, so anything that
// depends on the stored choice waits until the browser has actually been read.
export function useConsent() {
  const [state, setState] = useState({ consent: null, ready: false })

  useEffect(() => {
    setState({ consent: readConsent(), ready: true })
    const onChange = (e) => setState({ consent: e.detail, ready: true })
    window.addEventListener(CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CHANGE_EVENT, onChange)
  }, [])

  return state
}

import { loadMiniPage, reloadPage, setLanguage } from '../pageLoader.js'
import utils from '../utils.js'

import { exec, fullScreen, toast } from '../../kernelsu.js'

export async function loadOnce() {

}

export async function loadOnceView() {

}

export async function onceViewAfterUpdate() {

}

export async function load() {
  const WebUIConfig = JSON.parse(localStorage.getItem('/NoWheel/webui_config') || '{}')

  const lang_page_toggle = document.getElementById('lang_page_toggle')

  utils.addListener(lang_page_toggle, 'click', async () => {
    function setLanguageCb(event) {
      if (event.target === undefined || !event.target.id.startsWith('language:')) return;

      const language = event.target.id.split(':')[1]

      setLanguage(language)
      reloadPage()

      return true
    }

    loadMiniPage('language', () => {
      utils.removeListener(window, 'click', setLanguageCb)
    })

    utils.addListener(window, 'click', setLanguageCb)
  })

  const no_webui_fullscreen_switch = document.getElementById('no_webui_fullscreen_switch')
  if (WebUIConfig.disableFullscreen) no_webui_fullscreen_switch.checked = true

  utils.addListener(no_webui_fullscreen_switch, 'click', () => {
    /* INFO: This is swapped, as it meant to disable the fullscreen */
    WebUIConfig.disableFullscreen = !WebUIConfig.disableFullscreen
    localStorage.setItem('/NoWheel/webui_config', JSON.stringify(WebUIConfig))

    fullScreen(!WebUIConfig.disableFullscreen)
  })
}
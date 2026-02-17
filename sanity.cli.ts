import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rnk0k1nk',
    dataset: 'production',
  },
  studioHost: 'ciel',
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: {
    autoUpdates: true,
    appId: 'ap6fey3pg60xyyx2c17ch3rs',
  },
})

import React from 'react'
import { useTranslation } from 'react-i18next'
import { css } from '@emotion/react'

export const Container = css({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff',
  overflow: 'hidden',
  position: 'relative',
  canvas: {
    '-webkit-font-smoothing': 'none'
  }
})

export default function Dashboard() {
  const { t } = useTranslation()
  return (
    <>
      <div css={Container}>{t('title')}</div>
    </>
  )
}

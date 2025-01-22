import { randomUUID } from 'node:crypto'

import { makeUpload } from '@/tests/factories/make-upload'
import { describe, it } from 'vitest'
import { exportUploads } from './export-uploads'

describe('Export Uploads', () => {
  it('should be able to export uploads', async () => {
    const namePattern = randomUUID()
    const upload1 = await makeUpload({ name: `${namePattern}.webp` })
    const upload2 = await makeUpload({ name: `${namePattern}.webp` })
    const upload3 = await makeUpload({ name: `${namePattern}.webp` })
    const upload4 = await makeUpload({ name: `${namePattern}.webp` })
    const upload5 = await makeUpload({ name: `${namePattern}.webp` })

    const sut = await exportUploads({
      searchQuery: namePattern,
    })
  })
})

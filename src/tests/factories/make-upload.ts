import { db } from '@/db'
import { schema } from '@/db/schemas'
import { fakerPT_BR } from '@faker-js/faker'
import type { InferInsertModel } from 'drizzle-orm'

export async function makeUpload(
  overrides?: Partial<InferInsertModel<typeof schema.uploads>>
) {
  const fileName = fakerPT_BR.system.fileName()

  const result = await db
    .insert(schema.uploads)
    .values({
      name: fileName,
      remoteKey: `images/${fileName}`,
      remoteUrl: `http://example.com/image/${fileName}`,
      ...overrides,
    })
    .returning()

  return result[0]
}

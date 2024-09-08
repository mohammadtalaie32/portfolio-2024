import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {headlineType} from './headlineType'
import { workExperienceType } from './workExperienceType'
import { servicesType } from './serviceTypes'
import { experienceHighlightType } from './experienceHighlightType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, headlineType, workExperienceType, servicesType, experienceHighlightType],
}

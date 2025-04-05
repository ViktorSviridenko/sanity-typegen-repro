import { defineConfig, defineField, defineType } from 'sanity';

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  schema: {
    types: [
      // Referenced type is listed BEFORE use
      defineType({
        type: 'string',
        name: 'SpacingLiteral1',
        options: { list: ['1em', '2em', '3em', '4em'] },
      }),
      defineType({
        type: 'object',
        name: 'PaddingObject1',
        fields: [
          defineField({ type: 'SpacingLiteral1', name: 'top' }),
          defineField({ type: 'SpacingLiteral1', name: 'right' }),
          defineField({ type: 'SpacingLiteral1', name: 'bottom' }),
          defineField({ type: 'SpacingLiteral1', name: 'left' }),
        ],
      }),

      // Referenced type is listed AFTER use
      defineType({
        type: 'object',
        name: 'PaddingObject2',
        fields: [
          defineField({ type: 'SpacingLiteral2', name: 'top' }),
          defineField({ type: 'SpacingLiteral2', name: 'right' }),
          defineField({ type: 'SpacingLiteral2', name: 'bottom' }),
          defineField({ type: 'SpacingLiteral2', name: 'left' }),
        ],
      }),
      defineType({
        name: 'SpacingLiteral2',
        type: 'string',
        options: { list: ['1em', '2em', '3em', '4em'] },
      }),
    ],
  },
});

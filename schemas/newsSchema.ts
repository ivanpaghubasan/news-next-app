import z from "zod";

export const newsSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  image: z.string(),
  date: z.string(),
  content: z.string(),
});

export const newsListSchema = z.array(newsSchema);

export const yearsListSchema = z.array(z.object({
  year: z.string(),
}));

export const monthsListSchema = z.array(z.object({
  month: z.string(),
}));

export type News = z.infer<typeof newsSchema>;
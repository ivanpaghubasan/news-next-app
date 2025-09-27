import z from "zod";

const newsSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  image: z.string(),
  date: z.string(),
  content: z.string(),
});

export type News = z.infer<typeof newsSchema>;
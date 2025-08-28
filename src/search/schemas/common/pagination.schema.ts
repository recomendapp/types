import { z } from 'zod';

export const paginationQuerySchema = z.object({
	page: z.coerce.number().int().min(1).default(1),
	per_page: z.coerce.number().int().min(1).max(50).default(10),
});

export const paginationResponseSchema = z.object({
	total_results: z.number().int(),
	total_pages: z.number().int(),
	current_page: z.number().int(),
	per_page: z.number().int(),
});

export function createPaginatedResponseSchema<T extends z.ZodType>(itemSchema: T) {
	return z.object({
		data: z.array(itemSchema),
		pagination: paginationResponseSchema,
	});
}

export type Pagination = z.infer<typeof paginationResponseSchema>;
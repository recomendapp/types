import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';

export const followerRequestSchema = z.object({
	id: z.number().int().describe('The ID of the follower record'),
	type: z.literal(NotificationTypeEnum.follower_request).describe('Type of notification'),
	sender: z.object({
		id: z.string().uuid().describe('The ID of the user who sent the follower request'),
		username: z.string().describe('The user who sent the follower request'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who sent the follower request'),
	}),
});

export type FollowerRequestPayload = z.infer<typeof followerRequestSchema>;

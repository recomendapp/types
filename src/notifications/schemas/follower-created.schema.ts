import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';

export const followerCreatedSchema = z.object({
	id: z.number().int().describe('The ID of the follower record'),
	type: z.literal(NotificationTypeEnum.follower_created).describe('Type of notification'),
	sender: z.object({
		username: z.string().describe('The user who followed'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who followed'),
	}),
});

export type FollowerCreatedPayload = z.infer<typeof followerCreatedSchema>;

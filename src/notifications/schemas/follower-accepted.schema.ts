import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';
import { defaultSchema } from './common';

export const followerAcceptedSchema = defaultSchema.extend({
	type: z.literal(NotificationTypeEnum.follower_accepted).describe('Type of notification'),
	sender: z.object({
		id: z.string().uuid().describe('The ID of the user who accepted the follower request'),
		username: z.string().describe('The user who accepted the follower request'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who accepted the follower request'),
	}),
});

export type FollowerAcceptedPayload = z.infer<typeof followerAcceptedSchema>;

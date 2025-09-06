import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';
import { defaultSchema } from './common';

export const followerCreatedSchema = defaultSchema.extend({
	type: z.literal(NotificationTypeEnum.follower_created).describe('Type of notification'),
	sender: z.object({
		id: z.string().uuid().describe('The ID of the user who followed'),
		username: z.string().describe('The user who followed'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who followed'),
	}),
});

export type FollowerCreatedPayload = z.infer<typeof followerCreatedSchema>;

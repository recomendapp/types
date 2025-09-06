import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';

export const friendCreatedSchema = z.object({
	id: z.number().int().describe('The ID of the friend record'),
	type: z.literal(NotificationTypeEnum.friend_created).describe('Type of notification'),
	friend: z.object({
		id: z.string().uuid().describe('The ID of the user who you are now friends with'),
		username: z.string().describe('The user who you are now friends with'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who you are now friends with'),
	}),
});

export type FriendCreatedPayload = z.infer<typeof friendCreatedSchema>;

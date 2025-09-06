import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';

export const recoCompletedSchema = z.object({
	id: z.number().int().describe('The ID of the reco'),
	type: z.literal(NotificationTypeEnum.reco_completed).describe('Type of notification'),
	receiver: z.object({
		id: z.string().uuid().describe('The ID of the user who received the reco'),
		username: z.string().describe('The user who received the reco'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who received the reco'),
	}),
	media: z.object({
		id: z.number().int().describe('The ID of the media that was recommended'),
		type: z.string().describe('The type of the media that was recommended'),
		title: z.string().describe('The media that was recommended'),
		url: z.string().describe('The url of the media that was recommended'),
	}),
});

export type RecoCompletedPayload = z.infer<typeof recoCompletedSchema>;

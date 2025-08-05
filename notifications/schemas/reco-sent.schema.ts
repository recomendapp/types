import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';

export const recoSentSchema = z.object({
	id: z.number().int().describe('The ID of the reco'),
	type: z.literal(NotificationTypeEnum.reco_sent).describe('Type of notification'),
	sender: z.object({
		username: z.string().describe('The user who sent the reco'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who sent the reco'),
	}),
	media: z.object({
		title: z.string().describe('The media that was recommended'),
		url: z.string().describe('The url of the media that was recommended'),
	}),
});

export type RecoSentPayload = z.infer<typeof recoSentSchema>;
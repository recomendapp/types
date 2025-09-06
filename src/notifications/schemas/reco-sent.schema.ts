import * as z from 'zod';
import { NotificationTypeEnum } from '../../type.db';
import { defaultSchema } from './common';

export const recoSentSchema = defaultSchema.extend({
	type: z.enum([NotificationTypeEnum.reco_sent_movie, NotificationTypeEnum.reco_sent_tv_series]).describe('Type of notification'),
	sender: z.object({
		id: z.string().uuid().describe('The ID of the user who sent the reco'),
		username: z.string().describe('The user who sent the reco'),
		avatar: z
			.string()
			.nullable()
			.optional()
			.describe('The avatar of the user who sent the reco'),
	}),
	media: z.object({
		id: z.number().int().describe('The ID of the media that was recommended'),
		type: z.string().describe('The type of the media that was recommended'),
		title: z.string().describe('The media that was recommended'),
		url: z.string().describe('The url of the media that was recommended'),
	}),
});

export type RecoSentPayload = z.infer<typeof recoSentSchema>;
import * as z from 'zod';
import { followerAcceptedSchema } from './schemas/follower-accepted.schema';
import { followerRequestSchema } from './schemas/follower-request.schema';
import { followerCreatedSchema } from './schemas/follower-created.schema';
import { friendCreatedSchema } from './schemas/friend-created.schema';
import { recoSentSchema } from './schemas/reco-sent.schema';
import { recoCompletedSchema } from './schemas/reco-completed.schema';

export const notificationPayloadSchema = z.discriminatedUnion('type', [
	followerAcceptedSchema,
	followerRequestSchema,
	followerCreatedSchema,
	friendCreatedSchema,
	recoSentSchema,
	recoCompletedSchema,
]);

export type NotificationPayload = z.infer<typeof notificationPayloadSchema>;

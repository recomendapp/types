import { FollowerAcceptedPayload } from './schemas/follower-accepted.schema';
import { FollowerRequestPayload } from './schemas/follower-request.schema';
import { FollowerCreatedPayload } from './schemas/follower-created.schema';
import { FriendCreatedPayload } from './schemas/friend-created.schema';
import { RecoSentPayload } from './schemas/reco-sent.schema';
import { RecoCompletedPayload } from './schemas/reco-completed.schema';

export type NotificationPayload = 
	FollowerAcceptedPayload
	& FollowerRequestPayload
	& FollowerCreatedPayload
	& FriendCreatedPayload
	& RecoSentPayload
	& RecoCompletedPayload;


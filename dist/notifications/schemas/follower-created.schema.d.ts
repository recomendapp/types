import * as z from 'zod';
export declare const followerCreatedSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodLiteral<"follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed">;
    sender: z.ZodObject<{
        username: z.ZodString;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        avatar?: string | null | undefined;
    }, {
        username: string;
        avatar?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    type: "follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed";
    sender: {
        username: string;
        avatar?: string | null | undefined;
    };
}, {
    id: number;
    type: "follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed";
    sender: {
        username: string;
        avatar?: string | null | undefined;
    };
}>;
export type FollowerCreatedPayload = z.infer<typeof followerCreatedSchema>;
//# sourceMappingURL=follower-created.schema.d.ts.map
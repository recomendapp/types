import * as z from 'zod';
export declare const friendCreatedSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodLiteral<"follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed">;
    friend: z.ZodObject<{
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
    friend: {
        username: string;
        avatar?: string | null | undefined;
    };
}, {
    id: number;
    type: "follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed";
    friend: {
        username: string;
        avatar?: string | null | undefined;
    };
}>;
export type FriendCreatedPayload = z.infer<typeof friendCreatedSchema>;
//# sourceMappingURL=friend-created.schema.d.ts.map
import * as z from 'zod';
export declare const recoCompletedSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodLiteral<"follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed">;
    receiver: z.ZodObject<{
        username: z.ZodString;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        avatar?: string | null | undefined;
    }, {
        username: string;
        avatar?: string | null | undefined;
    }>;
    media: z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        title: string;
        url: string;
        type: string;
    }, {
        id: number;
        title: string;
        url: string;
        type: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: number;
    type: "follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed";
    media: {
        id: number;
        title: string;
        url: string;
        type: string;
    };
    receiver: {
        username: string;
        avatar?: string | null | undefined;
    };
}, {
    id: number;
    type: "follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed";
    media: {
        id: number;
        title: string;
        url: string;
        type: string;
    };
    receiver: {
        username: string;
        avatar?: string | null | undefined;
    };
}>;
export type RecoCompletedPayload = z.infer<typeof recoCompletedSchema>;
//# sourceMappingURL=reco-completed.schema.d.ts.map
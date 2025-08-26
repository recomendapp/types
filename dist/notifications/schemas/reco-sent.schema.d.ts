import * as z from 'zod';
export declare const recoSentSchema: z.ZodObject<{
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
    sender: {
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
    sender: {
        username: string;
        avatar?: string | null | undefined;
    };
}>;
export type RecoSentPayload = z.infer<typeof recoSentSchema>;
//# sourceMappingURL=reco-sent.schema.d.ts.map
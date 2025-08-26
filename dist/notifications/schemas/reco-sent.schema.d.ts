import * as z from 'zod';
export declare const recoSentSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodLiteral<"follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed">;
    sender: z.ZodObject<{
        username: z.ZodString;
        avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    media: z.ZodObject<{
        id: z.ZodNumber;
        type: z.ZodString;
        title: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RecoSentPayload = z.infer<typeof recoSentSchema>;
//# sourceMappingURL=reco-sent.schema.d.ts.map
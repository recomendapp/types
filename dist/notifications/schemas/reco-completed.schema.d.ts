import * as z from 'zod';
export declare const recoCompletedSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodLiteral<"follower_created" | "follower_accepted" | "follower_request" | "friend_created" | "reco_sent" | "reco_completed">;
    receiver: z.ZodObject<{
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
export type RecoCompletedPayload = z.infer<typeof recoCompletedSchema>;

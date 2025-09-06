import z from "zod";
import { NotificationTypeEnum } from "../../../type.db";

export const defaultSchema = z.object({
	id: z.number().int().describe('The ID of the row'),
	type: z.nativeEnum(NotificationTypeEnum).describe('Type of notification'),
});

export type DefaultPayload = z.infer<typeof defaultSchema>;
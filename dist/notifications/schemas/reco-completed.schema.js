"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoCompletedSchema = void 0;
const z = __importStar(require("zod"));
const type_db_1 = require("../../type.db");
exports.recoCompletedSchema = z.object({
    id: z.number().int().describe('The ID of the reco'),
    type: z.literal(type_db_1.NotificationTypeEnum.reco_completed).describe('Type of notification'),
    receiver: z.object({
        username: z.string().describe('The user who received the reco'),
        avatar: z
            .string()
            .nullable()
            .optional()
            .describe('The avatar of the user who received the reco'),
    }),
    media: z.object({
        id: z.number().int().describe('The ID of the media that was recommended'),
        type: z.string().describe('The type of the media that was recommended'),
        title: z.string().describe('The media that was recommended'),
        url: z.string().describe('The url of the media that was recommended'),
    }),
});
//# sourceMappingURL=reco-completed.schema.js.map
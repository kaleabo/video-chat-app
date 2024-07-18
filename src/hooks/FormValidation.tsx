import { z } from "zod";

// Define the validation schema for the room creation form
export const RoomFormSchema = z.object({
  roomName: z
    .string()
    .trim()
    .min(10, "Room name must be at least 10 characters")
    .max(30, "Room name must not exceed 30 characters")
    .regex(/^[a-zA-Z0-9-_ ]+$/, {
      message:
        "Room name can only contain letters, numbers, hyphens, and underscores",
    }),
});
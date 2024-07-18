import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { RoomFormSchema } from "@/hooks/FormValidation";
import { useNavigate } from "react-router-dom";

// Define the type of form data based on the RoomFormSchema
type FormData = z.infer<typeof RoomFormSchema>;

const CreateRoomForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RoomFormSchema),
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    navigate(`/${import.meta.env.VITE_JITSI_APP_ID}/${data.roomName}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register("roomName")}
        placeholder="Enter room name"
        className={cn(
          "px-4 py-3 rounded-lg border border-gray-700 bg-card text-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
          errors.roomName
            ? "focus:ring-red-400 focus:border-red-400 focus:placeholder:text-red-500"
            : ""
        )}
      />
      {errors.roomName && (
        <p className="text-sm text-red-500">{errors.roomName.message}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 font-semibold rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Start Meeting"}
      </button>
    </form>
  );
};

export default CreateRoomForm;

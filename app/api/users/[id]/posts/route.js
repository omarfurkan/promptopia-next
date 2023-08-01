import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        params.id

        const prompts = await Prompt.find({
            ceator: params.id
        }).populate('creator')
        return new Response(JSON.stringify(prompts), {
            status: 200
        })

    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}
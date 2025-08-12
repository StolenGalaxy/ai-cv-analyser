import axios from "axios";

const openai_api_key = ""

export const getReview = async(prompt) => {
    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o",]
                messages: [{ role: "user", content: prompt}],
            },
            {
                headers: {
                    "Authorization": `Bearer ${openai_api_key}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response)
    }
    catch (error) {
        console.log(error)
        return "Oh no! It seems Laksh is unable to review your CV right now..."
    }
}
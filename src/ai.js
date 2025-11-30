import { HfInference } from '@huggingface/inference'

const System_Prompt = `
You are an assistant that recieves a list of ingredients that a user has and suggests a recipe they could make with some or all ingredients. You don't need all ingredients they mention in your recipe. The recipe can include some additional ingredients they didn't mention but try to keep that count low. Format your response in a markdown to make it easier to render to a web page`

const hf = new HfInference(import.meta.env.VITE_HF_KEY);
//https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3
export async function getRecipeFromMistral(ingredientsArr) {
    console.log(hf, ingredientsArr)
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model:"meta-llama/Llama-3.1-8B-Instruct",
            messages:[
                {role:"system", content: System_Prompt},
                {role:"user", content:`I Have ${ingredientsString}. Please give me a recipe yu'd recommend I make`}
            ],
            max_tokens:1024,
        })
        //console.log(response.choices[0].message.content)
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
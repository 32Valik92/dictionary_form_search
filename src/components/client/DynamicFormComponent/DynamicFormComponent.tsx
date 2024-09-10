"use client";
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";

interface FormData {
    word: string;
    criterion: string;
}

const DynamicFormComponent = () => {
   const router = useRouter();

   const {
      register,
      handleSubmit
   } = useForm<FormData>();

   const search: SubmitHandler<FormData> = ({word, criterion}) => {
      router.push(`/${word}/${criterion}`);
   };

   return (
      <form onSubmit={handleSubmit(search)}>
         <input type="text" placeholder="Input for Criterion 1" {...register("word")}/>

         <select {...register("criterion")}>
            <option value="antonyms">antonyms</option>
            <option value="definitions">definitions</option>
            <option value="examples">examples</option>
            <option value="rhymes">rhymes</option>
            <option value="syllables">syllables</option>
            <option value="synonyms">synonyms</option>
         </select>

         <button type="submit">Submit</button>
      </form>
   );
};

export {DynamicFormComponent};

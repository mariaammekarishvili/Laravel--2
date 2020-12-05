<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'classes' => 'required|array|min:1',
            'classes.*.id' => 'required|distinct|exists:my_classes'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        return response()->json($validator->errors())->throwResponse();
    }
}

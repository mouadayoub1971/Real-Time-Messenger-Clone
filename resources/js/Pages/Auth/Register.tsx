import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import GuestLayout from "@/layouts/GuestLayout";
import { RegisterSchema } from "@/types/user";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm<RegisterSchema>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit} className="space-y-4">
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData("name", e.target.value)}

          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData("email", e.target.value)}

          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData("password", e.target.value)}

          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="">
          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
          />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData("password_confirmation", e.target.value)}

          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex">

          <PrimaryButton className="w-full" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
        <div className="flex justify-center">
        <Link
            href={route("login")}
            className="btn-link"
          >
            Already registered?
          </Link>

        </div>

      </form>
    </GuestLayout>
  );
}

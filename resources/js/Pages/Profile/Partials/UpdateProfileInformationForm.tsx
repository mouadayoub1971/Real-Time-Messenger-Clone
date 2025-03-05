import InputError from "@/components/InputError";
import InputLabel from "@/components/InputLabel";
import PrimaryButton from "@/components/PrimaryButton";
import TextInput from "@/components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ChangeEvent, FormEventHandler } from "react";
import { BsCamera } from "react-icons/bs";

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = "",
}: {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
}) {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
    });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route("profile.update"));
  };
  const changeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setData('avatar', files[0])
      const imageUrl = window.URL.createObjectURL(files[0])
    }
  }
  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-foreground">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-secondary-foreground">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="picture relative">
          <img src={user.avatar} alt={user.name} className="w-20 h-20 mx-auto rounded-full border border-secondary" />
          <label htmlFor="avatar" className="btn btn-primary absolute left-1/2 top-6 rounded-full px-2 flex cursor-pointer translate-x-5 items-center justify-center" tabIndex={0}>
            <BsCamera />
            <input type="file" onChange={changeAvatar} id="avatar" className="hidden" />
          </label>
        </div>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            required
            isFocused
            autoComplete="name"
          />

          <InputError className="mt-2" message={errors.name} />
        </div>

        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
            autoComplete="username"
          />

          <InputError className="mt-2" message={errors.email} />
        </div>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="mt-2 text-sm text-foreground">
              Your email address is unverified.
              <Link
                href={route("verification.send")}
                method="post"
                as="button"
                className="rounded-md text-sm text-foreground underline hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === "verification-link-sent" && (
              <div className="mt-2 text-sm font-medium text-success">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-foreground">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}

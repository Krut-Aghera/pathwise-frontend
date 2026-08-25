import FormField from "../components/form/FormField"
import Input from "../components/form/Input"
import PasswordInput from "../components/form/PasswordInput"
import Button from "../components/ui/Button"

const ComponentPreviewPage = () => {

    return (

        <main className="min-h-screen bg-background-base p-10">

            <div className="mx-auto max-w-3xl">

                <h1 className="font-accent text-3xl font-bold text-text-primary">
                    Component Preview
                </h1>

                <p className="mt-2 font-body text-text-secondary">
                    Shared UI component development preview.
                </p>


                {/* Button */}

                <section className="mt-10">

                    <h2 className="font-accent text-xl font-semibold text-text-primary">
                        Button
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-4">

                        <Button>
                            Default Button
                        </Button>

                        <Button type="submit">
                            Submit
                        </Button>

                        <Button loading>
                            Create Account
                        </Button>

                        <Button disabled>
                            Disabled Button
                        </Button>

                    </div>

                </section>


                {/* Input */}

                <section className="mt-10">

                    <h2 className="font-accent text-xl font-semibold text-text-primary">
                        Input
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-4">

                        <Input
                            placeholder="Enter your username"
                        />

                        <Input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <Input
                            value="Disabled input"
                            disabled
                            readOnly
                        />

                    </div>

                </section>


                {/* PasswordInput */}

                <section className="mt-10">

                    <h2 className="font-accent text-xl font-semibold text-text-primary">
                        PasswordInput
                    </h2>

                    <div className="mt-6 max-w-md space-y-6">

                        <PasswordInput
                            placeholder="Enter your password"
                        />

                        <PasswordInput
                            placeholder="Enter your password"
                            value="password123"
                            readOnly
                            error
                        />

                        <PasswordInput
                            value="Disabled password"
                            disabled
                            readOnly
                        />

                    </div>

                </section>


                {/* FormField */}

                <section className="mt-10">

                    <h2 className="font-accent text-xl font-semibold text-text-primary">
                        FormField
                    </h2>

                    <div className="mt-6 max-w-md space-y-6">

                        <FormField
                            label="Username"
                            htmlFor="preview-username"
                        >
                            <Input
                                id="preview-username"
                                placeholder="Enter your username"
                            />
                        </FormField>


                        <FormField
                            label="Email"
                            htmlFor="preview-email"
                            required
                        >
                            <Input
                                id="preview-email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </FormField>


                        <FormField
                            label="Email"
                            htmlFor="preview-error-email"
                            error="Please enter a valid email address."
                            required
                        >
                            <Input
                                id="preview-error-email"
                                type="email"
                                value="invalid@email"
                                error
                                readOnly
                            />
                        </FormField>


                        <FormField
                            label="Password"
                            htmlFor="preview-password"
                            required
                        >
                            <PasswordInput
                                id="preview-password"
                                placeholder="Enter your password"
                            />
                        </FormField>


                        <FormField
                            label="Password"
                            htmlFor="preview-password-error"
                            error="Password must contain at least 8 characters."
                            required
                        >
                            <PasswordInput
                                id="preview-password-error"
                                value="weak"
                                error
                                readOnly
                            />
                        </FormField>

                    </div>

                </section>

            </div>

        </main>
    )
}

export default ComponentPreviewPage
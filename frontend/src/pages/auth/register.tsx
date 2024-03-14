import { useState } from "react";
import { REGISTER } from "@/requetes/mutations/auth.mutations";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Box,
  } from '@chakra-ui/react';
import button from "@/styles/theme/components/Button";
import box from "@/styles/theme/components/Box";

const Register = () => {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        pseudo: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        lastname: '',
        firstname: '',
        pseudo: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newErrors = {
            lastname: '',
            firstname: '',
            pseudo: '',
            email: '',
            password: ''
        };

        // Vérification des champs
        if (!formData.lastname.trim()) {
            newErrors.lastname = 'Last name is required.';
        } 
        if (!formData.firstname.trim()) {
            newErrors.firstname = 'First name is required.';
        }
        if (!formData.pseudo.trim()) {
            newErrors.pseudo = 'Pseudo is required.';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required.';
        }
        
        for (const key in newErrors) {
            if (newErrors[key as keyof typeof newErrors] === "") {
                delete newErrors[key as keyof typeof newErrors];
            }
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Code pour soumettre le formulaire si tout est valide
            console.log("totto")
        }
    }

    return (
        <Box {...box.main}>
        <Box {...box.form}>
            <main>
                <h1>Welcome to Wild Code Hub !</h1>
                <form onSubmit={handleSubmit}>
                    <FormControl isInvalid={!!errors.lastname}>
                        <FormLabel>Enter Last Name</FormLabel>
                        <Input type='text' name='lastname' value={formData.lastname} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.firstname}>
                        <FormLabel>Enter First Name</FormLabel>
                        <Input type='text' name='firstname' value={formData.firstname} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.pseudo}>
                        <FormLabel>Chosse your Pseudo</FormLabel>
                        <Input type='text' name='pseudo' value={formData.pseudo} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.pseudo}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.email}>
                        <FormLabel>Enter your Email</FormLabel>
                        <Input type='email' name='email' value={formData.email} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password}>
                        <FormLabel>Choose your Password</FormLabel>
                        <Input type='password' name='password' value={formData.password} onChange={handleInputChange} />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button {...button.primary.defaultProps} type="submit" variant="solid">
                        Submit
                    </Button>
                    <Button {...button.secondary.defaultProps} type="submit" variant="solid">
                        Submit
                    </Button>
                    <Button {...button.tertiary.defaultProps} type="submit" variant="solid">
                        Submit
                    </Button>
                </form>
            </main>
        </Box>
    </Box>
    );
}

export default Register;
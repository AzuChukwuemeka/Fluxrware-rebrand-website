'use client';
import { projectTypes } from "@/data/projectTypes";
import { Button, MenuItem, TextField, Theme, useTheme } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";


export default function BuildForm() {
    const theme: Theme = useTheme();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [project, setProject] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add validation here if needed
        // For now, just toasting add that later
        toast.success("We will get back to you!")
    }
    const handleNameInputOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
 
    const handleEmailInputOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleProjectSelectOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject(e.target.value);
    }
    const handleDescriptionTextAreaOnChangeEvent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Full Name"
                    value={name}
                    onChange={handleNameInputOnChangeEvent}
                    fullWidth
                    margin="normal"
                    sx = {{
                        background: theme.palette.primary.contrastText, borderRadius: theme.spacing(4),
                        "& .MuiOutlinedInput-root": {
                        borderRadius: theme.spacing(3),
                        },
                    }}
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailInputOnChangeEvent}
                    fullWidth
                    margin="normal"
                    sx = {{
                        background: theme.palette.primary.contrastText, borderRadius: theme.spacing(4),
                        "& .MuiOutlinedInput-root": {
                        borderRadius: theme.spacing(3),
                        },
                    }}
                />

                <TextField
                    label="Project Type"
                    select
                    onChange={handleProjectSelectOnChangeEvent}
                    fullWidth
                    value={project}
                    sx = {{
                        background: theme.palette.primary.contrastText, borderRadius: theme.spacing(4),
                        "& .MuiOutlinedInput-root": {
                        borderRadius: theme.spacing(3),
                        },
                    }}
                >
                    {projectTypes.map((projectType,index) => {
                        return (
                            <MenuItem key = {projectType.name} value={projectType.value}>{projectType.name}</MenuItem>
                        )
                    })}
                </TextField>
                <TextField
                    label="Brief Description"
                    multiline
                    minRows={5}
                    value={description}
                    fullWidth
                    onChange={handleDescriptionTextAreaOnChangeEvent}
                    margin="normal"
                    sx = {{
                        background: theme.palette.primary.contrastText, borderRadius: theme.spacing(4),
                        "& .MuiOutlinedInput-root": {
                        borderRadius: theme.spacing(3),
                        },
                    }}
                />
                <Button variant="contained" fullWidth
                    sx={{
                        borderRadius: theme.spacing(6),
                        paddingBlock: theme.spacing(1),
                        marginTop: theme.spacing(3)
                    }}
                >
                    Start My Project
                </Button>
            </form>

        </React.Fragment>
    )
}

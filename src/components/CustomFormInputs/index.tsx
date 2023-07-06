// src/form-component/FormInputText.tsx
import { Control, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

type FormInputProps = {
  name: string;
  control: any;
  label: string;
};

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  const classes = {
    textField: {
      height: '75px',
      borderRadius: '10px',
      background: '#FFF',
      color: '#000',
      border: '1px solid #9F9F9F',
      padding: '1rem',
      '& .MuiInputBase-input': {
        border: 'none',
      },
      '&:hover': {
        border: '1px solid #9F9F9F',
      },
      '&:active': {
        borderRadius: '10px',
        border: '1px solid #9F9F9F',
      },
    },
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <TextField
          helperText={error ? error.message : null}
          size='small'
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
          sx={classes.textField}
        />
      )}
    />
  );
};

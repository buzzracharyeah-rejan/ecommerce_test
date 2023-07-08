// src/form-component/FormInputText.tsx
import { Control, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormGroup, FormLabel, InputLabel, useTheme } from '@mui/material';

type FormInputProps = {
  name: string;
  control: any;
  label: string;
};

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  const theme = useTheme();

  const classes = {
    textField: {
      borderRadius: '10px',
      background: '#fff',
      padding: '0.85rem 0',
      '& :focus': {
        background: '#f3f3f3',
      },
      '& .MuiInputBase-input': {
        padding: '1rem',
      },
    },
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
        <FormGroup>
          <InputLabel htmlFor={name} sx={{ textTransform: 'capitalize', letterSpacing: '1.2px' }}>
            {name}
          </InputLabel>
          <TextField
            helperText={error ? error.message : null}
            size='small'
            error={!!error}
            onChange={onChange}
            value={value}
            fullWidth
            variant='outlined'
            sx={classes.textField}
          />
        </FormGroup>
      )}
    />
  );
};


export const maxLength = max => value => value && value.length > max ? `Должно быть не более ${max} символов!` : undefined

export const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <div className="warning">{error}</div>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
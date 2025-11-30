import React, { useState, useEffect, useRef } from 'react';
import { LucideIcon, Check, ChevronDown, X, Info, AlertTriangle, CheckCircle, Loader2, ChevronRight, ChevronLeft, MoreVertical, Plus, Minus, Upload, Search, Command, LayoutDashboard, Settings, Star, Filter, ArrowLeft, Menu, File, Download, MessageSquare, Paperclip, MoreHorizontal, Calendar, Clock, User } from 'lucide-react';

/**
 * CIM DESIGN SYSTEM
 * Philosophy: Structural Minimalism
 * Shapes: Rectilinear (No radius)
 * Typography: Inter (Single font family)
 * Colors: Monochromatic with functional accent colors
 */

// --- 1. TYPOGRAPHY ---

export const SectionHeading: React.FC<{ 
  title: string; 
  group?: string; 
  className?: string;
  actions?: React.ReactNode;
}> = ({ title, group, className = '', actions }) => (
  <div className={`mb-6 flex justify-between items-end ${className}`}>
    <div>
      {group && (
        <span className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">
          {group}
        </span>
      )}
      <h2 className="text-xl font-medium text-primary tracking-tight">{title}</h2>
    </div>
    {actions && <div>{actions}</div>}
  </div>
);

export const Label: React.FC<{ children: React.ReactNode; className?: string; required?: boolean }> = ({ children, className = '', required }) => (
  <label className={`block text-[10px] uppercase tracking-widest text-secondary font-bold mb-1.5 ${className}`}>
    {children}
    {required && <span className="text-red-500 ml-0.5">*</span>}
  </label>
);

export const HelperText: React.FC<{ children: React.ReactNode; icon?: React.ReactNode; variant?: 'default' | 'error' }> = ({ children, icon, variant = 'default' }) => (
  <div className={`flex items-center space-x-2 text-[10px] mt-2 italic border-t pt-1 ${variant === 'error' ? 'text-red-500 border-red-100' : 'text-secondary border-border'}`}>
    {icon && <span className={variant === 'error' ? 'text-red-500' : 'text-icon'}>{icon}</span>}
    <span>{children}</span>
  </div>
);

export const Text: React.FC<{ children: React.ReactNode; variant?: 'body' | 'small' | 'tiny' | 'mono'; className?: string }> = ({ children, variant = 'body', className = '' }) => {
  const styles = {
    body: "text-sm text-primary",
    small: "text-xs text-secondary",
    tiny: "text-[10px] text-secondary uppercase tracking-widest font-bold",
    mono: "font-mono text-xs text-primary bg-gray-50 px-1 border border-border"
  };
  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
};

export const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="font-mono text-xs text-red-500 bg-red-50 px-1.5 py-0.5 border border-red-100">{children}</code>
);

export const Kbd: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold font-sans text-secondary bg-gray-100 border border-border rounded-none shadow-sm ml-2">
    {children}
  </kbd>
);

// --- 2. LAYOUT & CONTAINERS ---

export const Card: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  noPadding?: boolean;
  onClick?: () => void;
}> = ({ children, className = '', noPadding = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-card border border-border shadow-none transition-all hover:border-gray-400 ${noPadding ? '' : 'p-5'} ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''} ${className}`}
  >
    {children}
  </div>
);

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <hr className={`border-t border-border my-6 ${className}`} />
);

export const Stack: React.FC<{ children: React.ReactNode; spacing?: number; direction?: 'row' | 'col'; className?: string }> = ({ children, spacing = 4, direction = 'col', className = '' }) => (
  <div className={`flex ${direction === 'col' ? 'flex-col' : 'flex-row'} gap-${spacing} ${className}`}>
    {children}
  </div>
);

// --- 3. ELEMENTS ---

export const Badge: React.FC<{ children: React.ReactNode; variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger' }> = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-primary text-white border-transparent',
    outline: 'bg-transparent text-secondary border-border',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-orange-50 text-orange-700 border-orange-200',
    danger: 'bg-red-50 text-red-700 border-red-200'
  };
  
  return (
    <span className={`
      inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider border
      ${variants[variant]}
    `}>
      {children}
    </span>
  );
};

export const Tag: React.FC<{ children: React.ReactNode; onRemove?: () => void }> = ({ children, onRemove }) => (
  <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-wider border bg-gray-50 text-primary border-border gap-1">
    {children}
    {onRemove && (
      <button onClick={(e) => { e.stopPropagation(); onRemove(); }} className="hover:text-red-500">
        <X size={10} />
      </button>
    )}
  </span>
);

export const Avatar: React.FC<{ src?: string; initials?: string; size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'; className?: string }> = ({ src, initials, size = 'md', className = '' }) => {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-2xl",
    '2xl': "w-32 h-32 text-3xl"
  };
  
  return (
    <div className={`${sizes[size]} bg-gray-100 border border-border flex items-center justify-center font-bold text-primary overflow-hidden shrink-0 ${className}`}>
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  );
};

export const AvatarGroup: React.FC<{ 
  users: { src?: string; initials?: string }[]; 
  max?: number; 
  size?: 'sm' | 'md';
}> = ({ users, max = 3, size = 'md' }) => {
  const displayUsers = users.slice(0, max);
  const remaining = users.length - max;
  const sizeClasses = size === 'sm' ? "w-8 h-8 text-xs -ml-2" : "w-10 h-10 text-sm -ml-3";

  return (
    <div className="flex items-center pl-2">
      {displayUsers.map((u, i) => (
        <div key={i} className={`${sizeClasses} first:ml-0 rounded-full border-2 border-white overflow-hidden relative z-10 hover:z-20 hover:scale-105 transition-all`}>
           <Avatar src={u.src} initials={u.initials} size={size} className="w-full h-full border-none rounded-none" />
        </div>
      ))}
      {remaining > 0 && (
        <div className={`${sizeClasses} bg-gray-100 border-2 border-white flex items-center justify-center font-bold text-secondary text-[10px] z-0`}>
          +{remaining}
        </div>
      )}
    </div>
  );
};

export const StatusDot: React.FC<{ status: 'active' | 'inactive' | 'busy' | 'warning'; label?: string }> = ({ status, label }) => {
  const colors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-300',
    busy: 'bg-red-500',
    warning: 'bg-orange-500'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-2.5 w-2.5">
        {status === 'active' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${colors[status]}`}></span>
      </div>
      {label && <span className="text-xs font-medium text-secondary">{label}</span>}
    </div>
  );
};

export const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => (
  <div className="group relative inline-block">
    {children}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-[10px] font-bold tracking-wide whitespace-nowrap pointer-events-none z-50">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary"></div>
    </div>
  </div>
);

export const CircularProgress: React.FC<{ value: number; size?: number; strokeWidth?: number; label?: string }> = ({ value, size = 60, strokeWidth = 4, label }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E5E5"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#111111"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
          {Math.round(value)}%
        </div>
      </div>
      {label && <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-secondary">{label}</span>}
    </div>
  );
};

// --- 4. ACTIONS ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: LucideIcon;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  className = '',
  loading = false,
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-primary text-white border-primary hover:bg-black/90",
    secondary: "bg-white text-primary border-border hover:bg-gray-50 hover:border-gray-300",
    outline: "bg-transparent text-primary border-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-secondary border-transparent hover:text-primary hover:bg-gray-100",
    danger: "bg-red-600 text-white border-red-600 hover:bg-red-700"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 space-x-1.5 h-8",
    md: "text-sm px-5 py-2.5 space-x-2 h-11",
    lg: "text-sm px-8 py-3.5 space-x-3 h-14",
    icon: "h-10 w-10 p-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 size={size === 'sm' ? 12 : 16} className="animate-spin" />}
      {!loading && Icon && <Icon size={size === 'sm' ? 14 : 16} />}
      {children && <span>{children}</span>}
    </button>
  );
};

// --- 5. FORM ELEMENTS ---

interface InputBaseProps {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
}

export const InputWrapper: React.FC<InputBaseProps & { children: React.ReactNode }> = ({ 
  label, error, helper, leftIcon, rightIcon, children, required
}) => (
  <div className={`group ${error ? 'has-error' : ''}`}>
    {label && <Label required={required}>{label}</Label>}
    <div className={`
      relative flex items-center bg-white border transition-colors
      ${error ? 'border-red-500' : 'border-border group-hover:border-gray-400 group-focus-within:border-primary'}
    `}>
      {leftIcon && <div className="pl-3 text-secondary opacity-70 flex-shrink-0">{leftIcon}</div>}
      <div className="flex-1 min-w-0">
        {children}
      </div>
      {rightIcon && <div className="pr-3 text-icon flex-shrink-0">{rightIcon}</div>}
    </div>
    {error && <p className="text-[10px] text-red-500 mt-1 font-medium flex items-center gap-1"><AlertTriangle size={10} /> {error}</p>}
    {helper && !error && <HelperText>{helper}</HelperText>}
  </div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputBaseProps {}

export const Input: React.FC<InputProps> = ({ label, error, helper, leftIcon, rightIcon, className = '', required, ...props }) => (
  <InputWrapper label={label} error={error} helper={helper} leftIcon={leftIcon} rightIcon={rightIcon} required={required}>
    <input 
      className={`w-full bg-transparent outline-none text-primary font-medium text-sm placeholder-gray-300 px-3 py-3 ${className}`}
      {...props}
    />
  </InputWrapper>
);

export const PinInput: React.FC<{ length?: number; onChange: (val: string) => void }> = ({ length = 4, onChange }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    if (val.length > 1) return; // Prevent multiple chars
    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);
    onChange(newValues.join(''));
    
    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {values.map((v, i) => (
        <input
          key={i}
          ref={el => { inputsRef.current[i] = el; }}
          type="text"
          value={v}
          maxLength={1}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className="w-12 h-14 text-center text-xl font-bold border border-border focus:border-primary outline-none bg-white transition-colors"
        />
      ))}
    </div>
  );
};

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & InputBaseProps> = ({ label, error, helper, className = '', required, ...props }) => (
  <InputWrapper label={label} error={error} helper={helper} required={required}>
    <textarea 
      className={`w-full bg-transparent outline-none text-primary font-medium text-sm placeholder-gray-300 px-3 py-3 min-h-[100px] resize-y ${className}`}
      {...props}
    />
  </InputWrapper>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, InputBaseProps {
  options: { label: string; value: string }[] | string[];
}

export const Select: React.FC<SelectProps> = ({ label, error, helper, options, leftIcon, className = '', required, ...props }) => (
  <InputWrapper label={label} error={error} helper={helper} leftIcon={leftIcon} rightIcon={<ChevronDown size={14} />} required={required}>
    <select 
      className={`w-full bg-transparent outline-none text-primary font-medium text-sm appearance-none cursor-pointer px-3 py-3 ${className}`}
      {...props}
    >
      {options.map((opt, idx) => {
        const val = typeof opt === 'string' ? opt : opt.value;
        const lab = typeof opt === 'string' ? opt : opt.label;
        return <option key={idx} value={val}>{lab}</option>;
      })}
    </select>
  </InputWrapper>
);

export const MultiSelect: React.FC<{
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}> = ({ label, options, selected, onChange, placeholder = 'Select items...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter(s => s !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  return (
    <div className="relative group" ref={containerRef}>
      <Label>{label}</Label>
      <div 
        className="w-full min-h-[46px] bg-white border border-border group-hover:border-gray-400 cursor-pointer px-3 py-2 flex flex-wrap gap-2 items-center transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length === 0 && <span className="text-gray-300 text-sm">{placeholder}</span>}
        {selected.map(item => (
          <Tag key={item} onRemove={() => toggleOption(item)}>{item}</Tag>
        ))}
        <div className="flex-1 text-right">
          <ChevronDown size={14} className="ml-auto text-secondary" />
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute z-20 w-full bg-white border border-border mt-1 shadow-lg max-h-48 overflow-y-auto">
          {options.map((opt, i) => (
            <div 
              key={i} 
              className="px-3 py-2 text-sm hover:bg-gray-50 flex items-center gap-3 cursor-pointer"
              onClick={() => toggleOption(opt)}
            >
              <div className={`w-4 h-4 border flex items-center justify-center ${selected.includes(opt) ? 'bg-primary border-primary text-white' : 'border-border'}`}>
                {selected.includes(opt) && <Check size={10} />}
              </div>
              <span className="text-primary">{opt}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const Toggle: React.FC<{ 
  label: string; 
  checked: boolean; 
  onChange: (checked: boolean) => void;
  helper?: string;
  disabled?: boolean;
}> = ({ label, checked, onChange, helper, disabled }) => (
  <div className={`flex items-center justify-between border border-border p-4 bg-white ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">{label}</span>
      {helper && <span className="text-[10px] text-secondary mt-1">{helper}</span>}
    </div>
    <button 
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`
        relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none 
        ${checked ? 'bg-primary' : 'bg-gray-200'}
      `}
    >
      <span
        aria-hidden="true"
        className={`
          pointer-events-none inline-block h-4 w-4 transform shadow ring-0 transition duration-200 ease-in-out bg-white
          ${checked ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  </div>
);

export const Checkbox: React.FC<{
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}> = ({ label, checked, onChange, disabled }) => (
  <label className={`flex items-center gap-3 cursor-pointer group ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
    <div className={`
      w-5 h-5 border flex items-center justify-center transition-colors
      ${checked ? 'bg-primary border-primary text-white' : 'bg-white border-border group-hover:border-gray-400'}
    `}>
      {checked && <Check size={14} strokeWidth={3} />}
    </div>
    <input type="checkbox" className="hidden" checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
    <span className="text-sm font-medium text-primary">{label}</span>
  </label>
);

export const RadioGroup: React.FC<{
  label: string;
  name: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  direction?: 'row' | 'col';
}> = ({ label, name, options, value, onChange, direction = 'row' }) => (
  <div className="space-y-3">
    <Label>{label}</Label>
    <div className={`flex ${direction === 'col' ? 'flex-col' : 'flex-wrap'} gap-3`}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <label 
            key={opt.value}
            className={`
              cursor-pointer px-4 py-3 border text-xs font-medium transition-all flex items-center space-x-2 flex-1 justify-center min-w-[100px]
              ${isSelected ? 'bg-primary text-white border-primary' : 'bg-white text-secondary border-border hover:border-gray-400'}
            `}
          >
            <input 
              type="radio" 
              name={name} 
              value={opt.value} 
              checked={isSelected}
              onChange={() => onChange(opt.value)}
              className="hidden"
            />
            {isSelected && <Check size={12} />}
            <span>{opt.label}</span>
          </label>
        )
      })}
    </div>
  </div>
);

export const SegmentedControl: React.FC<{
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}> = ({ options, value, onChange }) => (
  <div className="bg-gray-100 p-1 flex border border-border">
    {options.map((opt) => (
      <button
        key={opt.value}
        onClick={() => onChange(opt.value)}
        className={`
          flex-1 py-1.5 text-xs font-bold uppercase tracking-wider transition-all
          ${value === opt.value 
            ? 'bg-white text-primary shadow-sm border border-gray-200' 
            : 'text-secondary hover:text-primary'
          }
        `}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

export const Rating: React.FC<{
  value: number;
  max?: number;
  readOnly?: boolean;
  onChange?: (val: number) => void;
}> = ({ value, max = 5, readOnly = false, onChange }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: max }).map((_, i) => {
      const filled = i < value;
      return (
        <button
          key={i}
          disabled={readOnly}
          onClick={() => !readOnly && onChange?.(i + 1)}
          className={`focus:outline-none ${readOnly ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <Star 
            size={16} 
            className={`${filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        </button>
      );
    })}
  </div>
);

export const FileUpload: React.FC<{ label: string; onUpload?: (files: FileList | null) => void }> = ({ label, onUpload }) => (
  <div>
    <Label>{label}</Label>
    <div className="border border-dashed border-border p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-white hover:border-primary transition-colors cursor-pointer group">
      <Upload size={24} className="text-secondary group-hover:text-primary mb-2" />
      <span className="text-xs font-medium text-primary">Click to upload or drag and drop</span>
      <span className="text-[10px] text-secondary mt-1">SVG, PNG, JPG or GIF (max. 3MB)</span>
      <input type="file" className="hidden" onChange={(e) => onUpload?.(e.target.files)} />
    </div>
  </div>
);

export const Slider: React.FC<{ 
  label: string; 
  value: number; 
  min: number; 
  max: number; 
  onChange: (val: number) => void;
  formatValue?: (val: number) => string;
}> = ({ label, value, min, max, onChange, formatValue }) => (
  <div className="space-y-3">
    <div className="flex justify-between">
      <Label>{label}</Label>
      <span className="text-xs font-bold text-primary">{formatValue ? formatValue(value) : value}</span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-primary"
    />
  </div>
);

export const Combobox: React.FC<{
  label: string;
  options: string[];
  placeholder?: string;
}> = ({ label, options, placeholder }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const filtered = options.filter(opt => opt.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative">
      <Input 
        label={label} 
        value={query} 
        onChange={(e) => { setQuery(e.target.value); setIsOpen(true); }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder={placeholder}
        rightIcon={<ChevronDown size={14} />}
      />
      {isOpen && filtered.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-border mt-1 shadow-lg max-h-48 overflow-y-auto">
          {filtered.map((opt, i) => (
            <button 
              key={i} 
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 text-primary"
              onClick={() => { setQuery(opt); setIsOpen(false); }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const FilterGroup: React.FC<{
  items: string[];
  activeItem: string;
  onChange: (item: string) => void;
}> = ({ items, activeItem, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {items.map(item => (
      <button
        key={item}
        onClick={() => onChange(item)}
        className={`
          px-3 py-1 text-xs font-bold border transition-colors
          ${activeItem === item 
            ? 'bg-primary text-white border-primary' 
            : 'bg-white text-secondary border-border hover:border-gray-400'
          }
        `}
      >
        {item}
      </button>
    ))}
  </div>
);


// --- 6. FEEDBACK ---

export const Alert: React.FC<{ 
  title: string; 
  message?: string; 
  variant?: 'info' | 'success' | 'warning' | 'error';
}> = ({ title, message, variant = 'info' }) => {
  const styles = {
    info: "bg-blue-50 border-blue-100 text-blue-900 icon-blue-500",
    success: "bg-green-50 border-green-100 text-green-900 icon-green-500",
    warning: "bg-orange-50 border-orange-100 text-orange-900 icon-orange-500",
    error: "bg-red-50 border-red-100 text-red-900 icon-red-500"
  };

  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertTriangle
  };

  const Icon = icons[variant];

  return (
    <div className={`border px-4 py-3 flex gap-3 ${styles[variant].split(' ').slice(0,3).join(' ')}`}>
      <Icon className={`shrink-0 mt-0.5 ${styles[variant].split(' ')[3].replace('icon-', 'text-')}`} size={18} />
      <div>
        <h4 className="text-sm font-bold">{title}</h4>
        {message && <p className="text-xs mt-1 opacity-90">{message}</p>}
      </div>
    </div>
  );
};

export const Toast: React.FC<{ title: string; message: string; type?: 'success' | 'error' | 'default'; onClose: () => void }> = ({ title, message, type = 'default', onClose }) => {
  const styles = {
    default: "border-primary bg-primary text-white",
    success: "border-green-600 bg-green-600 text-white",
    error: "border-red-600 bg-red-600 text-white"
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 w-80 p-4 border shadow-lg flex justify-between items-start animate-in slide-in-from-bottom-4 duration-300 ${styles[type]}`}>
      <div>
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-xs mt-1 opacity-90">{message}</p>
      </div>
      <button onClick={onClose} className="opacity-70 hover:opacity-100"><X size={16} /></button>
    </div>
  );
};

export const Progress: React.FC<{ value: number; max?: number; className?: string }> = ({ value, max = 100, className = '' }) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full bg-gray-100 border border-border h-2 ${className}`}>
      <div 
        className="bg-primary h-full transition-all duration-300 ease-out" 
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export const Spinner: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <Loader2 size={size} className={`animate-spin text-primary ${className}`} />
);

export const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 ${className}`}></div>
);

// --- 7. NAVIGATION ---

export const Tabs: React.FC<{
  items: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
}> = ({ items, activeId, onChange }) => (
  <div className="flex border-b border-border">
    {items.map(item => (
      <button
        key={item.id}
        onClick={() => onChange(item.id)}
        className={`
          px-6 py-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors
          ${activeId === item.id 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-gray-300'
          }
        `}
      >
        {item.label}
      </button>
    ))}
  </div>
);

export const Breadcrumb: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex items-center text-[10px] uppercase tracking-widest text-secondary font-bold">
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <span className="mx-2 text-gray-300">/</span>}
        <span className={index === items.length - 1 ? 'text-primary' : ''}>{item}</span>
      </React.Fragment>
    ))}
  </div>
);

export const Stepper: React.FC<{ steps: string[]; currentStep: number }> = ({ steps, currentStep }) => (
  <div className="flex items-center w-full">
    {steps.map((step, index) => {
      const isCompleted = index < currentStep;
      const isCurrent = index === currentStep;
      
      return (
        <React.Fragment key={index}>
          <div className="flex items-center gap-2">
            <div className={`
              w-6 h-6 flex items-center justify-center text-[10px] font-bold border transition-colors
              ${isCompleted ? 'bg-primary border-primary text-white' : ''}
              ${isCurrent ? 'bg-white border-primary text-primary' : ''}
              ${!isCompleted && !isCurrent ? 'bg-white border-gray-200 text-gray-300' : ''}
            `}>
              {isCompleted ? <Check size={12} /> : index + 1}
            </div>
            <span className={`
              text-xs font-bold uppercase tracking-wider
              ${isCompleted || isCurrent ? 'text-primary' : 'text-gray-300'}
            `}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-px mx-4 ${isCompleted ? 'bg-primary' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      );
    })}
  </div>
);

export const Pagination: React.FC<{ 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center space-x-2">
    <Button 
      variant="outline" 
      size="icon" 
      className="h-8 w-8"
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
    >
      <ChevronLeft size={14} />
    </Button>
    <div className="px-2 text-xs font-medium text-secondary">
      Page <span className="text-primary font-bold">{currentPage}</span> of {totalPages}
    </div>
    <Button 
      variant="outline" 
      size="icon" 
      className="h-8 w-8"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
    >
      <ChevronRight size={14} />
    </Button>
  </div>
);

export const SideNav: React.FC<{
  items: { icon: LucideIcon; label: string; active?: boolean }[];
}> = ({ items }) => (
  <nav className="w-64 bg-white border-r border-border h-full flex flex-col p-4">
    <div className="space-y-1">
      {items.map((item, idx) => (
        <button
          key={idx}
          className={`
            w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors
            ${item.active 
              ? 'bg-primary text-white' 
              : 'text-secondary hover:bg-gray-50 hover:text-primary'
            }
          `}
        >
          <item.icon size={16} />
          {item.label}
        </button>
      ))}
    </div>
  </nav>
);

export const NavBar: React.FC<{
  logo: React.ReactNode;
  items: { label: string; active?: boolean; onClick?: () => void }[];
  actions?: React.ReactNode;
  className?: string;
}> = ({ logo, items, actions, className = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white border-b border-border ${className}`}>
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            {logo}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className={`text-sm font-medium transition-colors ${
                  item.active ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">{actions}</div>
          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-3">
             {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { item.onClick?.(); setMobileMenuOpen(false); }}
                className={`text-sm font-medium text-left py-2 ${
                  item.active ? 'text-primary font-bold' : 'text-secondary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {actions && <div className="pt-4 border-t border-border flex flex-col gap-3">{actions}</div>}
        </div>
      )}
    </header>
  );
};

export const VerticalNav: React.FC<{
  items: { id: string; label: string; icon?: LucideIcon; count?: number }[];
  activeId: string;
  onChange: (id: string) => void;
}> = ({ items, activeId, onChange }) => (
  <div className="w-full flex flex-col bg-white border border-border">
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => onChange(item.id)}
        className={`
          flex items-center justify-between px-4 py-3 text-sm font-medium transition-all border-l-2
          ${activeId === item.id 
            ? 'border-primary bg-gray-50 text-primary' 
            : 'border-transparent text-secondary hover:bg-gray-50 hover:text-primary'
          }
        `}
      >
        <div className="flex items-center gap-3">
          {item.icon && <item.icon size={16} className={activeId === item.id ? 'text-primary' : 'text-icon'} />}
          <span>{item.label}</span>
        </div>
        {item.count !== undefined && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 border ${activeId === item.id ? 'bg-white border-gray-200' : 'bg-gray-100 border-transparent'}`}>
            {item.count}
          </span>
        )}
      </button>
    ))}
  </div>
);

export const CommandPalette: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white shadow-2xl border border-border flex flex-col animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search size={18} className="text-secondary mr-3" />
          <input 
            className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            placeholder="Type a command or search..."
            autoFocus
          />
          <Kbd>ESC</Kbd>
        </div>
        <div className="max-h-64 overflow-y-auto p-2">
           <div className="px-2 py-1.5 text-[10px] font-bold text-secondary uppercase tracking-widest">Suggestions</div>
           <button className="w-full text-left px-2 py-2 text-sm text-primary hover:bg-gray-50 flex items-center gap-2">
              <Command size={14} className="text-secondary"/> Dashboard
           </button>
           <button className="w-full text-left px-2 py-2 text-sm text-primary hover:bg-gray-50 flex items-center gap-2">
              <Command size={14} className="text-secondary"/> Settings
           </button>
        </div>
      </div>
    </div>
  );
};


// --- 8. DATA DISPLAY ---

export const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`w-full overflow-x-auto border border-border bg-white ${className}`}>
    <table className="w-full text-left border-collapse">{children}</table>
  </div>
);

export const Thead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-50 border-b border-border">{children}</thead>
);

export const Tbody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody>{children}</tbody>
);

export const Tr: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => (
  <tr 
    onClick={onClick}
    className={`border-b border-border last:border-0 hover:bg-gray-50 transition-colors ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </tr>
);

export const Th: React.FC<{ children: React.ReactNode; align?: 'left' | 'center' | 'right' }> = ({ children, align = 'left' }) => (
  <th className={`px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary whitespace-nowrap text-${align}`}>{children}</th>
);

export const Td: React.FC<{ children: React.ReactNode; align?: 'left' | 'center' | 'right'; className?: string }> = ({ children, align = 'left', className = '' }) => (
  <td className={`px-4 py-3 text-sm text-primary text-${align} ${className}`}>{children}</td>
);

export const DescriptionList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
    {children}
  </dl>
);

export const DescriptionListItem: React.FC<{ label: string; value: React.ReactNode; fullWidth?: boolean }> = ({ label, value, fullWidth }) => (
  <div className={`bg-white p-4 hover:bg-gray-50 transition-colors ${fullWidth ? 'md:col-span-2' : ''}`}>
    <dt className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">{label}</dt>
    <dd className="text-sm font-medium text-primary break-words">{value || '-'}</dd>
  </div>
);

export const Timeline: React.FC<{ items: { title: string; date: string; description?: string; status?: 'completed' | 'current' | 'pending' }[] }> = ({ items }) => (
  <div className="space-y-0">
    {items.map((item, idx) => (
      <div key={idx} className="flex gap-4 group">
        <div className="flex flex-col items-center">
          <div className={`
            w-3 h-3 border my-1.5 flex-shrink-0
            ${item.status === 'completed' ? 'bg-primary border-primary' : ''}
            ${item.status === 'current' ? 'bg-white border-primary animate-pulse' : ''}
            ${item.status === 'pending' || !item.status ? 'bg-white border-gray-300' : ''}
          `} />
          {idx !== items.length - 1 && <div className="w-px h-full bg-border group-hover:bg-gray-300 transition-colors" />}
        </div>
        <div className="pb-8">
          <div className="flex items-center gap-2 mb-1">
             <span className={`text-sm font-bold ${item.status === 'pending' ? 'text-secondary' : 'text-primary'}`}>{item.title}</span>
             <span className="text-[10px] text-secondary border border-border px-1 bg-gray-50">{item.date}</span>
          </div>
          {item.description && <p className="text-xs text-secondary max-w-md">{item.description}</p>}
        </div>
      </div>
    ))}
  </div>
);

export const Statistic: React.FC<{ label: string; value: string; trend?: string; trendUp?: boolean }> = ({ label, value, trend, trendUp }) => (
  <div className="border border-border p-5 bg-white">
    <div className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">{label}</div>
    <div className="flex items-end gap-3">
      <div className="text-2xl font-light text-primary">{value}</div>
      {trend && (
        <div className={`text-xs font-bold mb-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trend}
        </div>
      )}
    </div>
  </div>
);

export const EmptyState: React.FC<{ icon: LucideIcon; title: string; description: string; action?: React.ReactNode }> = ({ icon: Icon, title, description, action }) => (
  <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-border bg-gray-50/50">
    <div className="w-12 h-12 bg-white border border-border flex items-center justify-center mb-4">
      <Icon className="text-secondary" size={24} />
    </div>
    <h3 className="text-sm font-bold text-primary mb-1">{title}</h3>
    <p className="text-xs text-secondary max-w-xs mb-6">{description}</p>
    {action}
  </div>
);

// --- 9. INTERACTIVE & OVERLAYS ---

export const Accordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-bold text-primary">{title}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
           {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
};

export const Dialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-bg w-full max-w-lg shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-border">
          <h2 className="text-lg font-medium text-primary">{title}</h2>
          <button onClick={onClose} className="text-secondary hover:text-primary"><X size={20}/></button>
        </div>
        <div className="p-6 bg-white max-h-[70vh] overflow-y-auto">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-gray-50 border-t border-border flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export const FullPageModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}> = ({ isOpen, onClose, title, children, actions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-bg animate-in slide-in-from-bottom duration-300 flex flex-col">
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-border shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center border border-transparent hover:border-border hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-xl font-medium text-primary">{title}</h2>
        </div>
        <div className="flex gap-3">
          {actions}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-6 md:p-12 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Drawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md h-full bg-bg shadow-2xl border-l border-border animate-in slide-in-from-right duration-300 flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-border">
          <h2 className="text-lg font-medium text-primary">{title}</h2>
          <button onClick={onClose} className="text-secondary hover:text-primary"><X size={20}/></button>
        </div>
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 bg-gray-50 border-t border-border flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export const Dropdown: React.FC<{
  trigger: React.ReactNode;
  items: { label: string; onClick?: () => void; danger?: boolean }[];
}> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-border shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100">
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${item.danger ? 'text-red-600' : 'text-primary'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- 10. PROFILE ELEMENTS ---

export const CoverImage: React.FC<{ src?: string; alt?: string; className?: string; onEdit?: () => void }> = ({ src, alt, className = '', onEdit }) => (
  <div className={`relative w-full h-48 sm:h-64 bg-gray-100 border-b border-border overflow-hidden group ${className}`}>
    {src ? (
      <img src={src} alt={alt || 'Cover'} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
    )}
    {onEdit && (
       <button 
         onClick={onEdit}
         className="absolute top-4 right-4 bg-white/90 border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
       >
         Change Cover
       </button>
    )}
  </div>
);

export const ProfileHeader: React.FC<{
  coverSrc?: string;
  avatarSrc?: string;
  avatarInitials?: string;
  name: string;
  subtitle?: string;
  actions?: React.ReactNode;
  stats?: React.ReactNode;
}> = ({ coverSrc, avatarSrc, avatarInitials, name, subtitle, actions, stats }) => (
  <div className="mb-8">
    <CoverImage src={coverSrc} />
    <div className="px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-border">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-12 sm:-mt-16 w-full md:w-auto">
          <Avatar 
            src={avatarSrc} 
            initials={avatarInitials} 
            size="2xl" 
            className="border-4 border-white bg-white shadow-sm"
          />
          <div className="text-center sm:text-left mb-2">
            <h1 className="text-3xl font-medium text-primary tracking-tight">{name}</h1>
            {subtitle && <p className="text-secondary font-mono text-xs mt-1">{subtitle}</p>}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          {stats && <div className="flex gap-6 mr-4">{stats}</div>}
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      </div>
    </div>
  </div>
);

export const AttributeGrid: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
    {children}
  </div>
);

export const AttributeItem: React.FC<{ label: string; value: React.ReactNode; icon?: LucideIcon }> = ({ label, value, icon: Icon }) => (
  <div className="bg-white border border-border p-4 flex items-start gap-3 hover:border-gray-400 transition-colors">
    {Icon && <Icon size={16} className="text-secondary mt-0.5" />}
    <div className="min-w-0">
      <dt className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">{label}</dt>
      <dd className="text-sm font-medium text-primary truncate">{value || '-'}</dd>
    </div>
  </div>
);

// --- 11. WORKFLOW & MEDIA (NEW) ---

export const KanbanColumn: React.FC<{ title: string; count?: number; children: React.ReactNode; onAdd?: () => void }> = ({ title, count, children, onAdd }) => (
  <div className="flex-1 min-w-[300px] flex flex-col h-full bg-gray-50 border-r border-border last:border-r-0">
    <div className="p-3 border-b border-border flex justify-between items-center bg-white sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">{title}</span>
        {count !== undefined && <span className="bg-gray-100 text-[10px] font-bold px-1.5 py-0.5 border border-border text-secondary">{count}</span>}
      </div>
      {onAdd && (
        <button onClick={onAdd} className="text-secondary hover:text-primary transition-colors">
          <Plus size={14} />
        </button>
      )}
    </div>
    <div className="flex-1 p-3 space-y-3 overflow-y-auto">
      {children}
    </div>
  </div>
);

export const KanbanCard: React.FC<{ 
  title: string; 
  tags?: string[]; 
  assignee?: string; 
  date?: string; 
  priority?: 'high' | 'medium' | 'low';
}> = ({ title, tags, assignee, date, priority }) => (
  <div className="bg-white border border-border p-3 shadow-sm hover:shadow-md hover:border-primary transition-all cursor-grab active:cursor-grabbing group">
    <div className="flex justify-between items-start mb-2">
      {tags && tags.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {tags.map((t, i) => (
             <span key={i} className="text-[9px] uppercase font-bold bg-gray-100 px-1.5 py-0.5 text-secondary">{t}</span>
          ))}
        </div>
      )}
      {priority === 'high' && <div className="w-2 h-2 rounded-full bg-red-500" title="High Priority" />}
    </div>
    <h4 className="text-sm font-medium text-primary mb-3 leading-snug">{title}</h4>
    <div className="flex justify-between items-center mt-2 pt-2 border-t border-dashed border-gray-100">
      <div className="flex items-center gap-2">
         {assignee ? (
           <Avatar initials={assignee} size="sm" className="w-5 h-5 text-[9px]" />
         ) : (
           <div className="w-5 h-5 rounded-full border border-dashed border-gray-300 flex items-center justify-center">
             <User size={10} className="text-gray-300" />
           </div>
         )}
      </div>
      {date && <span className="text-[10px] text-secondary font-mono">{date}</span>}
    </div>
  </div>
);

export const CommentItem: React.FC<{
  author: string;
  avatar?: string;
  initials?: string;
  date: string;
  content: string;
  replies?: number;
}> = ({ author, avatar, initials, date, content, replies }) => (
  <div className="flex gap-3 group">
    <Avatar src={avatar} initials={initials} size="md" className="mt-1" />
    <div className="flex-1">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-primary">{author}</span>
          <span className="text-[10px] text-secondary">{date}</span>
        </div>
      </div>
      <div className="text-sm text-primary mb-2 bg-gray-50 border border-border p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl relative before:absolute before:top-0 before:-left-1.5 before:w-3 before:h-3 before:bg-gray-50 before:border-l before:border-t before:border-border before:-rotate-45 before:content-['']">
        {content}
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary">Reply</button>
        {replies ? <span className="text-[10px] text-secondary">{replies} Replies</span> : null}
      </div>
    </div>
  </div>
);

export const FileCard: React.FC<{
  name: string;
  size: string;
  type: string;
  onDownload?: () => void;
}> = ({ name, size, type, onDownload }) => (
  <div className="flex items-center gap-3 p-3 border border-border bg-white hover:bg-gray-50 transition-colors group">
    <div className="w-10 h-10 bg-gray-100 border border-border flex items-center justify-center shrink-0">
      <File size={20} className="text-secondary" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-sm font-medium text-primary truncate">{name}</div>
      <div className="text-[10px] text-secondary uppercase flex items-center gap-2">
        <span>{type}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full" />
        <span>{size}</span>
      </div>
    </div>
    {onDownload && (
      <button onClick={onDownload} className="text-secondary hover:text-primary p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Download size={16} />
      </button>
    )}
  </div>
);

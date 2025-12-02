import React, { useState, useEffect, useRef, useMemo } from 'react';
import { LucideIcon, Check, ChevronDown, X, Info, AlertTriangle, Loader2, ChevronRight, ChevronLeft, MoreVertical, Plus, Minus, Upload, Search, Calendar as CalendarIcon, Star, Download, Paperclip, MessageSquare, ArrowUp, ArrowDown, ExternalLink, Menu, Bell, User, Settings, File, ShoppingBag, Trash2, Quote, Image as ImageIcon, Play, BarChart2, Zap, CheckCircle2, Shield, Clock } from 'lucide-react';

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
  variant?: 'default' | 'dark' | 'gradient';
}> = ({ children, className = '', noPadding = false, onClick, variant = 'default' }) => {
    const variants: Record<string, string> = {
        default: "bg-card border-border text-primary",
        dark: "bg-[#111] border-[#222] text-white",
        gradient: "bg-gradient-to-br from-gray-900 to-black border-gray-800 text-white"
    };

    return (
      <div 
        onClick={onClick}
        className={`border shadow-none transition-all hover:border-gray-400 ${variants[variant] || variants.default} ${noPadding ? '' : 'p-5'} ${onClick ? 'cursor-pointer active:opacity-95' : ''} ${className}`}
      >
        {children}
      </div>
    );
};

export const Divider: React.FC<any> = () => <hr className="border-t border-border my-6" />;
export const Stack: React.FC<any> = ({ children, className }) => <div className={`flex flex-col gap-4 ${className}`}>{children}</div>;

// --- 3. ELEMENTS ---

export const Button: React.FC<any> = ({ children, variant = 'primary', size = 'md', icon: Icon, className = '', ...props }) => {
    const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variants: any = {
        primary: "bg-primary text-white hover:bg-gray-800",
        secondary: "bg-gray-100 text-primary hover:bg-gray-200 border border-transparent",
        outline: "border border-inputBorder bg-transparent hover:bg-gray-50 text-primary",
        ghost: "hover:bg-gray-100 text-primary",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes: any = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
    };
    return (
        <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {Icon && <Icon size={size === 'sm' ? 14 : 18} className={children ? "mr-2" : ""} />}
            {children}
        </button>
    )
}

export const ButtonGroup: React.FC<{children: React.ReactNode}> = ({children}) => (
    <div className="flex -space-x-px">{children}</div>
);

export const Badge: React.FC<any> = ({ children, variant = 'default' }) => {
    const variants: any = {
        default: "bg-gray-100 text-primary border-gray-200",
        success: "bg-green-50 text-green-700 border-green-200",
        warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
        danger: "bg-red-50 text-red-700 border-red-200",
        outline: "border-gray-200 text-secondary"
    };
    return (
        <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium border ${variants[variant]}`}>
            {children}
        </span>
    );
};

export const Tag: React.FC<any> = ({ children, onRemove, variant = 'default', icon: Icon }) => (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium border border-gray-200 bg-white text-primary`}>
        {Icon && <Icon size={12} className="mr-1" />}
        {children}
        {onRemove && <button onClick={onRemove} className="ml-1 hover:text-red-500"><X size={12} /></button>}
    </span>
);

export const Avatar: React.FC<any> = ({ src, initials, size = 'md', tooltipText }) => {
    const sizes: any = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-16 w-16 text-xl' };
    return (
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-none border border-gray-200 ${sizes[size]}`} title={tooltipText}>
            {src ? <img src={src} className="h-full w-full object-cover" alt="" /> : <span className="font-medium text-gray-600">{initials}</span>}
        </div>
    );
};
export const AvatarGroup: React.FC<any> = ({ children }) => <div className="flex -space-x-2">{children}</div>;

export const StatusDot: React.FC<any> = ({ status, label }) => (
    <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`} />
        {label && <span className="text-xs text-secondary">{label}</span>}
    </div>
);

export const Tooltip: React.FC<any> = ({ children, text }) => (
    <div className="group relative inline-block">
        {children}
        <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs whitespace-nowrap z-50 pointer-events-none">
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black" />
        </div>
    </div>
);

// --- 4. FORMS ---

export const Input: React.FC<any> = ({ label, leftIcon, rightIcon, error, className, ...props }) => (
    <div className={`space-y-1 ${className}`}>
        {label && <Label>{label}</Label>}
        <div className="relative">
            {leftIcon && <div className="absolute left-3 top-2.5 text-icon">{leftIcon}</div>}
            <input className={`flex h-10 w-full border border-inputBorder bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${leftIcon ? 'pl-9' : ''} ${error ? 'border-red-500' : ''}`} {...props} />
        </div>
        {error && <HelperText variant="error">{error}</HelperText>}
    </div>
);

export const Select: React.FC<any> = ({ label, options, error, ...props }) => (
    <div className="space-y-1">
        {label && <Label>{label}</Label>}
        <div className="relative">
            <select className="flex h-10 w-full appearance-none border border-inputBorder bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50" {...props}>
                {options.map((opt: any) => <option key={opt}>{opt}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
        </div>
    </div>
);

export const MultiSelect: React.FC<any> = ({ label, options, selected, onChange }) => (
    <div className="space-y-1">
        {label && <Label>{label}</Label>}
        <div className="flex flex-wrap gap-2 p-2 border border-inputBorder min-h-[42px] bg-white">
            {selected.map((s: string) => (
                <span key={s} className="bg-gray-100 text-xs px-2 py-1 flex items-center gap-1">
                    {s} <button onClick={() => onChange(selected.filter((i:any) => i !== s))}><X size={12}/></button>
                </span>
            ))}
            <button className="text-xs text-secondary hover:text-primary px-1">+ Add</button>
        </div>
    </div>
);

export const Textarea: React.FC<any> = ({ label, ...props }) => (
    <div className="space-y-1">
        {label && <Label>{label}</Label>}
        <textarea className="flex min-h-[80px] w-full border border-inputBorder bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50" {...props} />
    </div>
);

export const Toggle: React.FC<any> = ({ label, checked, onChange }) => (
    <div className="flex items-center justify-between">
        {label && <span className="text-sm font-medium">{label}</span>}
        <button 
            role="switch" 
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-primary' : 'bg-gray-200'}`}
        >
            <span className={`pointer-events-none block h-4 w-4 bg-white shadow-lg ring-0 transition-transform ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
        </button>
    </div>
);

export const Checkbox: React.FC<any> = ({ label, checked, onChange }) => (
    <div className="flex items-center space-x-2">
        <button 
            role="checkbox"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`peer h-4 w-4 shrink-0 border border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-primary text-white' : 'bg-white'}`}
        >
            {checked && <Check className="h-3 w-3 mx-auto" />}
        </button>
        {label && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{label}</label>}
    </div>
);

export const RadioGroup: React.FC<any> = ({ label, options, value, onChange, name }) => (
    <div className="space-y-2">
        {label && <Label>{label}</Label>}
        <div className="space-y-1">
            {options.map((opt: any) => (
                <div key={opt.value} className="flex items-center space-x-2">
                    <input type="radio" id={opt.value} name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} className="text-primary focus:ring-primary" />
                    <label htmlFor={opt.value} className="text-sm">{opt.label}</label>
                </div>
            ))}
        </div>
    </div>
);

export const FileUpload: React.FC<any> = ({ label }) => (
    <div className="space-y-1">
        {label && <Label>{label}</Label>}
        <div className="border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 cursor-pointer">
            <Upload className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-sm text-secondary">Click to upload or drag and drop</span>
        </div>
    </div>
);

export const Slider: React.FC<any> = ({ label, value, onChange, min, max, formatValue }) => (
    <div className="space-y-2">
        <div className="flex justify-between">
            {label && <Label>{label}</Label>}
            <span className="text-xs font-mono">{formatValue ? formatValue(value) : value}</span>
        </div>
        <input 
            type="range" 
            min={min} 
            max={max} 
            value={value} 
            onChange={(e) => onChange(parseInt(e.target.value))} 
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
    </div>
);

export const Combobox: React.FC<any> = (props) => <Select {...props} />;
export const PinInput: React.FC<any> = () => null;
export const Calendar: React.FC<any> = () => null;

// --- 5. FEEDBACK ---

export const Alert: React.FC<any> = ({ title, message, variant = 'info' }) => {
    const styles: any = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        success: "bg-green-50 border-green-200 text-green-900",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
        error: "bg-red-50 border-red-200 text-red-900",
    };
    return (
        <div className={`p-4 border flex gap-3 ${styles[variant]}`}>
            <Info size={20} className="shrink-0" />
            <div>
                <h5 className="font-medium text-sm">{title}</h5>
                <p className="text-sm opacity-90">{message}</p>
            </div>
        </div>
    );
};

export const Toast: React.FC<any> = ({ title, message, type, onClose, action }) => (
    <div className="fixed bottom-4 right-4 z-50 w-80 bg-white border border-gray-200 shadow-lg p-4 animate-in slide-in-from-bottom-5">
        <div className="flex justify-between items-start">
            <div className="flex gap-3">
                {type === 'success' ? <CheckCircle2 className="text-green-500" size={20}/> : <AlertTriangle className="text-red-500" size={20}/>}
                <div>
                    <h5 className="font-medium text-sm">{title}</h5>
                    <p className="text-xs text-secondary mt-1">{message}</p>
                </div>
            </div>
            <button onClick={onClose}><X size={16} className="text-gray-400" /></button>
        </div>
        {action && (
            <div className="mt-3 flex justify-end">
                <Button size="sm" variant="outline" onClick={action.onClick}>{action.label}</Button>
            </div>
        )}
    </div>
);

export const NotificationList: React.FC<any> = ({ children }) => <div className="divide-y divide-border border border-border bg-white">{children}</div>;
export const NotificationItem: React.FC<any> = ({ title, message, time, read, avatar }) => (
    <div className={`p-4 flex gap-3 ${read ? 'bg-white' : 'bg-blue-50/50'}`}>
        <div className="shrink-0">
            {avatar ? <img src={avatar} className="h-8 w-8 bg-gray-200" /> : <div className="h-8 w-8 bg-gray-200 flex items-center justify-center"><Bell size={14}/></div>}
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-secondary mt-0.5">{message}</p>
            <p className="text-[10px] text-gray-400 mt-2">{time}</p>
        </div>
        {!read && <div className="h-2 w-2 bg-blue-500 rounded-full mt-1" />}
    </div>
);

export const Progress: React.FC<any> = ({ value }) => (
    <div className="h-2 w-full bg-gray-100 overflow-hidden">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${value}%` }} />
    </div>
);

export const CircularProgress: React.FC<any> = ({ value, size = 60, strokeWidth = 4, label }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;
    return (
        <div className="flex flex-col items-center">
            <div className="relative" style={{ width: size, height: size }}>
                <svg className="w-full h-full -rotate-90">
                    <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#e5e5e5" strokeWidth={strokeWidth} />
                    <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} className="text-primary transition-all duration-300" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">{value}%</div>
            </div>
            {label && <span className="mt-2 text-xs text-secondary">{label}</span>}
        </div>
    );
};

export const Skeleton: React.FC<any> = ({ className }) => <div className={`animate-pulse bg-gray-200 ${className}`} />;
export const Spinner: React.FC<any> = ({ size = 24 }) => <Loader2 className="animate-spin text-primary" size={size} />;

// --- 6. NAVIGATION ---

export const Tabs: React.FC<any> = () => null;
export const SidebarTab: React.FC<any> = ({ label, icon: Icon, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors border-l-2 ${active ? 'border-primary bg-gray-50 text-primary' : 'border-transparent text-secondary hover:bg-gray-50 hover:text-primary'}`}>
        {Icon && <Icon size={18} />}
        <span>{label}</span>
    </button>
);

export const NavItem: React.FC<any> = () => null;
export const Breadcrumb: React.FC<any> = () => null;
export const Stepper: React.FC<any> = () => null;
export const Pagination: React.FC<any> = () => null;
export const SideNav: React.FC<any> = () => null;
export const VerticalNav: React.FC<any> = () => null;

export const NavBar: React.FC<any> = ({ logo, items, actions }) => (
    <div className="h-16 border-b border-border bg-white px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
            {logo}
            <div className="flex gap-6">
                {items.map((i: any, idx: number) => (
                    <a key={idx} href="#" className={`text-sm font-medium ${i.active ? 'text-primary' : 'text-secondary hover:text-primary'}`}>{i.label}</a>
                ))}
            </div>
        </div>
        <div>{actions}</div>
    </div>
);

export const CommandPalette: React.FC<any> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/20 backdrop-blur-sm">
            <div className="w-full max-w-lg bg-white shadow-2xl border border-gray-200">
                <div className="flex items-center border-b border-gray-100 px-3">
                    <Search className="h-4 w-4 text-gray-400 mr-2" />
                    <input autoFocus placeholder="Type a command or search..." className="flex-1 h-12 text-sm outline-none" />
                    <button onClick={onClose}><span className="text-xs border px-1.5 py-0.5 bg-gray-50">ESC</span></button>
                </div>
                <div className="py-2">
                    <div className="px-3 py-2 text-xs font-bold text-gray-400">SUGGESTIONS</div>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center"><File className="mr-2 h-4 w-4 text-gray-400"/> Search Files</button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 flex items-center"><Settings className="mr-2 h-4 w-4 text-gray-400"/> Settings</button>
                </div>
            </div>
        </div>
    );
}

// --- 7. OVERLAYS ---

export const Dialog: React.FC<any> = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md shadow-2xl border border-gray-200 animate-in zoom-in-95">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-medium text-lg">{title}</h3>
                    <button onClick={onClose}><X size={18} className="text-gray-400 hover:text-black" /></button>
                </div>
                <div className="p-6">{children}</div>
                {footer && <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-2">{footer}</div>}
            </div>
        </div>
    );
}

export const Drawer: React.FC<any> = ({ isOpen, onClose, title, children, footer }) => {
    return (
        <div className={`fixed inset-0 z-50 transition-all ${isOpen ? 'visible' : 'invisible'}`}>
            <div className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
            <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-medium text-lg">{title}</h3>
                        <button onClick={onClose}><X size={18} /></button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">{children}</div>
                    {footer && <div className="p-6 border-t border-gray-100">{footer}</div>}
                </div>
            </div>
        </div>
    );
}

export const FullPageModal: React.FC<any> = ({ isOpen, onClose, title, children, actions }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 bg-bg overflow-y-auto animate-in slide-in-from-bottom-10">
            <div className="sticky top-0 z-10 bg-white border-b border-border px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onClose}><X size={24} className="text-secondary hover:text-primary" /></button>
                    <h2 className="text-lg font-medium">{title}</h2>
                </div>
                <div>{actions}</div>
            </div>
            <div className="max-w-5xl mx-auto p-8">{children}</div>
        </div>
    );
}

export const Accordion: React.FC<any> = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-border bg-white mb-[-1px]">
            <button className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50" onClick={() => setOpen(!open)}>
                <span className="font-medium">{title}</span>
                {open ? <Minus size={16} /> : <Plus size={16} />}
            </button>
            {open && <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-in slide-in-from-top-2">{children}</div>}
        </div>
    );
}

export const Dropdown: React.FC<any> = ({ trigger, items }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: any) => { if (ref.current && !ref.current.contains(event.target)) setOpen(false); };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
        <div className="relative inline-block" ref={ref}>
            <div onClick={() => setOpen(!open)}>{trigger}</div>
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50 py-1">
                    {items.map((item: any, idx: number) => (
                        <button key={idx} onClick={() => { item.onClick(); setOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${item.danger ? 'text-red-600' : 'text-primary'}`}>
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// --- 8. DATA DISPLAY ---

export const Table: React.FC<any> = ({ children }) => <table className="w-full text-left text-sm">{children}</table>;
export const Thead: React.FC<any> = ({ children }) => <thead className="bg-gray-50 border-b border-gray-200">{children}</thead>;
export const Tbody: React.FC<any> = ({ children }) => <tbody className="divide-y divide-gray-100">{children}</tbody>;
export const Tr: React.FC<any> = ({ children }) => <tr>{children}</tr>;
export const Th: React.FC<any> = ({ children }) => <th className="px-4 py-3 font-medium text-secondary text-xs uppercase tracking-wider">{children}</th>;
export const Td: React.FC<any> = ({ children }) => <td className="px-4 py-3 text-primary">{children}</td>;

export const DataGrid: React.FC<any> = ({ columns, data }) => (
    <div className="border border-border overflow-hidden">
        <div className="overflow-x-auto">
            <Table>
                <Thead>
                    <Tr>{columns.map((col: any) => <Th key={col.key}>{col.label}</Th>)}</Tr>
                </Thead>
                <Tbody>
                    {data.map((row: any, i: number) => (
                        <Tr key={i}>
                            {columns.map((col: any) => <Td key={col.key}>{col.render ? col.render(row[col.key], row) : row[col.key]}</Td>)}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    </div>
);

export const DescriptionList: React.FC<any> = ({ children }) => <dl className="divide-y divide-border border-t border-b border-border">{children}</dl>;
export const DescriptionListItem: React.FC<any> = ({ label, value }) => (
    <div className="grid grid-cols-3 gap-4 py-3">
        <dt className="text-sm font-medium text-secondary">{label}</dt>
        <dd className="text-sm text-primary col-span-2">{value}</dd>
    </div>
);

export const StackedList: React.FC<any> = ({ children }) => <ul className="divide-y divide-border border border-border bg-white">{children}</ul>;
export const StackedListItem: React.FC<any> = ({ leading, title, description, meta, trailing }) => (
    <li className="flex items-center justify-between p-4 hover:bg-gray-50">
        <div className="flex items-center gap-4">
            {leading && <div className="shrink-0">{leading}</div>}
            <div>
                <p className="text-sm font-medium">{title}</p>
                {description && <p className="text-xs text-secondary mt-0.5">{description}</p>}
            </div>
        </div>
        <div className="flex items-center gap-4">
            {meta && <div className="text-xs text-secondary">{meta}</div>}
            {trailing}
        </div>
    </li>
);

export const Timeline: React.FC<any> = () => null;

export const Statistic: React.FC<any> = ({ label, value, trend, trendDirection }) => (
    <div className="p-4 border border-border bg-white">
        <dt className="text-xs font-medium text-secondary uppercase tracking-wider">{label}</dt>
        <dd className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-light text-primary">{value}</span>
            {trend && <span className={`text-xs font-bold ${trendDirection === 'up' ? 'text-green-600' : 'text-red-600'}`}>{trend}</span>}
        </dd>
    </div>
);

export const EmptyState: React.FC<any> = ({ icon: Icon, title, description, action }) => (
    <div className="text-center py-12 border-2 border-dashed border-border bg-gray-50">
        {Icon && <Icon className="mx-auto h-12 w-12 text-gray-300 mb-4" />}
        <h3 className="text-sm font-medium text-primary">{title}</h3>
        <p className="mt-1 text-sm text-secondary max-w-sm mx-auto mb-6">{description}</p>
        {action}
    </div>
);

export const Rating: React.FC<any> = () => null;
export const SegmentedControl: React.FC<any> = () => null;
export const FilterGroup: React.FC<any> = () => null;

// --- 9. PROFILE & LAYOUT BLOCKS ---

export const ProfileHeader: React.FC<any> = ({ coverSrc, avatarSrc, name, subtitle, actions }) => (
    <div>
        <div className="h-32 w-full bg-gray-200 overflow-hidden">
            {coverSrc && <img src={coverSrc} className="w-full h-full object-cover" />}
        </div>
        <div className="px-6 pb-6">
            <div className="relative flex justify-between items-end -mt-10 mb-4">
                <div className="h-20 w-20 border-4 border-white bg-white overflow-hidden">
                     <img src={avatarSrc} className="w-full h-full object-cover" />
                </div>
                <div className="mb-2">{actions}</div>
            </div>
            <div>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-sm text-secondary">{subtitle}</p>
            </div>
        </div>
    </div>
);

export const AttributeGrid: React.FC<any> = () => null;
export const AttributeItem: React.FC<any> = () => null;
export const CoverImage: React.FC<any> = () => null;

export const KanbanColumn: React.FC<any> = ({ title, count, children }) => (
    <div className="w-72 flex-shrink-0 flex flex-col h-full border-r border-border bg-gray-50/50">
        <div className="p-3 border-b border-border flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">{title}</span>
            <span className="bg-gray-200 text-xs px-1.5 py-0.5 rounded-none font-mono">{count}</span>
        </div>
        <div className="p-3 space-y-3 overflow-y-auto flex-1">{children}</div>
    </div>
);

export const KanbanCard: React.FC<any> = ({ title, tags, priority }) => (
    <div className="bg-white p-3 border border-gray-200 shadow-sm hover:border-primary cursor-pointer">
        <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium leading-tight">{title}</span>
        </div>
        <div className="flex gap-1 flex-wrap">
            {priority === 'high' && <span className="h-1.5 w-8 bg-red-500 mb-2 block" />}
            {tags?.map((t: string) => <span key={t} className="text-[10px] bg-gray-100 px-1.5 py-0.5 border border-gray-200">{t}</span>)}
        </div>
    </div>
);

export const CommentItem: React.FC<any> = () => null;

export const FileCard: React.FC<any> = ({ name, size, type, onDownload }) => (
    <div className="flex items-center justify-between p-3 border border-border bg-white">
        <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gray-100 flex items-center justify-center border border-gray-200">
                <File className="text-secondary" size={20} />
            </div>
            <div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-secondary">{size} • {type}</p>
            </div>
        </div>
        <button onClick={onDownload} className="text-gray-400 hover:text-primary"><Download size={16}/></button>
    </div>
);

// --- 10. E-COMMERCE & CHARTS ---

export const ColorPalette: React.FC<any> = ({ colors }) => (
    <div className="grid grid-cols-2 gap-4">
        {colors.map((c: any) => (
            <div key={c.name} className="flex gap-3 items-center">
                <div className="h-10 w-10 border border-gray-200 shadow-sm" style={{ backgroundColor: c.value }} />
                <div>
                    <p className="text-sm font-bold">{c.name}</p>
                    <p className="text-xs text-secondary font-mono">{c.value}</p>
                </div>
            </div>
        ))}
    </div>
);

export const ProductCard: React.FC<any> = ({ image, title, price, originalPrice, tag }) => (
    <div className="group border border-border bg-white hover:border-gray-400 transition-all">
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
            <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            {tag && <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1">{tag}</span>}
        </div>
        <div className="p-4">
            <h3 className="text-sm font-medium">{title}</h3>
            <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm font-bold">${price}</span>
                {originalPrice && <span className="text-xs text-secondary line-through">${originalPrice}</span>}
            </div>
        </div>
    </div>
);

export const QuantitySelector: React.FC<any> = () => null;

export const CartItem: React.FC<any> = ({ image, title, variant, price, quantity, onQuantityChange, onRemove }) => (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
        <div className="h-20 w-20 bg-gray-100 border border-border shrink-0">
            <img src={image} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium">{title}</h4>
                    <span className="text-sm font-bold">${price}</span>
                </div>
                <p className="text-xs text-secondary">{variant}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
                 <div className="flex items-center border border-border">
                    <button className="px-2 py-1 hover:bg-gray-50" onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>-</button>
                    <span className="px-2 text-xs font-medium w-8 text-center">{quantity}</span>
                    <button className="px-2 py-1 hover:bg-gray-50" onClick={() => onQuantityChange(quantity + 1)}>+</button>
                 </div>
                 <button onClick={onRemove} className="text-xs text-secondary underline hover:text-red-500">Remove</button>
            </div>
        </div>
    </div>
);

export const OrderSummary: React.FC<any> = ({ items, action }) => (
    <div className="p-4 bg-gray-50 border-t border-border">
        <div className="space-y-2">
            {items.map((i: any, idx: number) => (
                <div key={idx} className={`flex justify-between text-sm ${i.isTotal ? 'font-bold pt-2 border-t border-gray-200 mt-2' : 'text-secondary'}`}>
                    <span>{i.label}</span>
                    <span>{i.value}</span>
                </div>
            ))}
        </div>
        {action}
    </div>
);

export const BarChart: React.FC<any> = ({ data }) => {
    const max = Math.max(...data.map((d: any) => d.value));
    return (
        <div className="flex items-end justify-between h-32 gap-1 pt-4">
            {data.map((d: any, i: number) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                    <div className="w-full bg-primary/90 transition-all hover:bg-primary relative" style={{ height: `${(d.value / max) * 100}%` }}>
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{d.value}</div>
                    </div>
                    <span className="text-[10px] text-secondary font-mono uppercase">{d.label}</span>
                </div>
            ))}
        </div>
    );
};

export const Sparkline: React.FC<any> = ({ data, color }) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min;
    const points = data.map((d: number, i: number) => {
        const x = (i / (data.length - 1)) * 100;
        const y = 100 - ((d - min) / range) * 100;
        return `${x},${y}`;
    }).join(' ');
    return (
        <div className="h-12 w-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline fill="none" stroke={color} strokeWidth="2" points={points} vectorEffect="non-scaling-stroke" />
            </svg>
        </div>
    );
};

export const ImageGallery: React.FC<any> = () => null;

export const PricingCard: React.FC<any> = ({ tier, price, features, isPopular, action }) => (
    <div className={`p-6 border ${isPopular ? 'border-primary shadow-lg' : 'border-border bg-white'}`}>
        {isPopular && <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Most Popular</div>}
        <h3 className="text-xl font-medium">{tier}</h3>
        <div className="mt-4 mb-6">
            <span className="text-4xl font-light">{price}</span>
            <span className="text-secondary text-sm">/month</span>
        </div>
        <ul className="space-y-3 mb-8">
            {features.map((f: string) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-green-600 mt-0.5" />
                    <span>{f}</span>
                </li>
            ))}
        </ul>
        {action}
    </div>
);

export const Testimonial: React.FC<any> = ({ quote, author, role, avatar }) => (
    <div className="p-8 border border-border bg-gray-50">
        <Quote className="text-gray-300 mb-4" size={32} />
        <p className="text-lg font-light italic mb-6">"{quote}"</p>
        <div className="flex items-center gap-3">
            <img src={avatar} className="h-10 w-10 border border-white" />
            <div>
                <p className="text-sm font-bold">{author}</p>
                <p className="text-xs text-secondary">{role}</p>
            </div>
        </div>
    </div>
);

export const FeatureGrid: React.FC<any> = ({ features }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f: any, i: number) => (
            <div key={i} className="p-4 border border-border bg-white hover:border-gray-400 transition-colors">
                <div className="h-10 w-10 bg-gray-100 flex items-center justify-center mb-4 text-primary">
                    <f.icon size={20} />
                </div>
                <h4 className="font-bold text-sm mb-2">{f.title}</h4>
                <p className="text-xs text-secondary leading-relaxed">{f.description}</p>
            </div>
        ))}
    </div>
);

// --- 12. ANALYTICS ---

export const Metric: React.FC<any> = ({ label, value, icon, subtext, indicator, indicatorIntent = 'neutral', variant = 'default' }) => {
    const intentStyles: any = {
        success: variant === 'dark' ? 'border-green-800 text-green-400 bg-green-900/30' : 'border-green-200 bg-green-50 text-green-700',
        warning: variant === 'dark' ? 'border-yellow-800 text-yellow-400 bg-yellow-900/30' : 'border-yellow-200 bg-yellow-50 text-yellow-700',
        danger: variant === 'dark' ? 'border-red-800 text-red-400 bg-red-900/30' : 'border-red-200 bg-red-50 text-red-700',
        neutral: variant === 'dark' ? 'border-gray-700 bg-gray-800 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-600',
    };

    return (
        <div className={`p-6 border flex flex-col justify-between h-full ${variant === 'dark' ? 'bg-[#111] border-[#222] text-white' : 'bg-white border-border text-primary'}`}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    {icon && <span className={variant === 'dark' ? 'text-gray-400' : 'text-icon'}>{icon}</span>}
                    <span className={`text-xs font-bold uppercase tracking-widest ${variant === 'dark' ? 'text-gray-400' : 'text-secondary'}`}>{label}</span>
                </div>
                {indicator && (
                    <div className={`text-xs font-bold px-1.5 py-0.5 border ${intentStyles[indicatorIntent]}`}>
                        {indicator}
                    </div>
                )}
            </div>
            <div>
                <div className="text-3xl font-light mb-1">{value}</div>
                <div className={`text-xs ${variant === 'dark' ? 'text-gray-500' : 'text-secondary'}`}>{subtext}</div>
            </div>
        </div>
    );
};

export const RangeVisualizer: React.FC<any> = ({ label, subLabel, value, unit, indicator, intent = 'neutral', min, max, current }) => {
    const range = max - min;
    const percentage = Math.min(Math.max(((current - min) / range) * 100, 0), 100);
    
    const intentColors: any = {
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        neutral: "bg-gray-400"
    };

    const intentText: any = {
        success: "text-green-600",
        warning: "text-yellow-600",
        danger: "text-red-600",
        neutral: "text-gray-500"
    }

    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
            <div className="w-1/3 min-w-[120px]">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-primary">{label}</span>
                </div>
                {subLabel && <div className="text-xs text-secondary mt-0.5">{subLabel}</div>}
            </div>
            
            <div className="flex-1 px-2">
                <div className="relative h-1.5 bg-gray-100 w-full overflow-hidden">
                    {/* Background track for valid range, customized by intent if needed */}
                    <div className={`absolute left-0 h-full opacity-20 ${intentColors[intent]}`} style={{ width: '100%' }}></div>
                </div>
                <div className="relative w-full h-0">
                    <div 
                        className="absolute top-[-7px] h-3 w-1 bg-black"
                        style={{ left: `${percentage}%` }}
                    />
                </div>
            </div>

            <div className="w-24 text-right">
                <div className="font-mono text-sm font-medium">{value} <span className="text-xs text-secondary">{unit}</span></div>
                <div className={`text-[10px] font-bold uppercase tracking-wider mt-0.5 ${intentText[intent]}`}>{indicator}</div>
            </div>
        </div>
    );
};
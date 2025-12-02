import React, { useState } from 'react';
import { 
  Button, 
  ButtonGroup,
  Input, 
  Select, 
  Textarea,
  Toggle, 
  Checkbox,
  RadioGroup, 
  FileUpload,
  Slider,
  Combobox,
  SectionHeading, 
  Card,
  HelperText,
  Badge,
  Tag,
  Avatar,
  AvatarGroup,
  StatusDot,
  Text,
  Code,
  Kbd,
  Label,
  Alert,
  Toast,
  NotificationList,
  NotificationItem,
  Progress,
  Skeleton,
  Spinner,
  Tabs,
  SidebarTab,
  NavItem,
  Breadcrumb,
  Stepper,
  Pagination,
  SideNav,
  VerticalNav,
  NavBar,
  CommandPalette,
  Dialog,
  Drawer,
  FullPageModal,
  Accordion,
  Dropdown,
  Table, Thead, Tbody, Tr, Th, Td,
  DataGrid,
  DescriptionList, DescriptionListItem,
  StackedList, StackedListItem,
  Timeline,
  Statistic,
  EmptyState,
  Divider,
  Stack,
  Tooltip,
  Rating,
  SegmentedControl,
  FilterGroup,
  ProfileHeader,
  AttributeGrid,
  AttributeItem,
  CoverImage,
  KanbanColumn,
  KanbanCard,
  CommentItem,
  FileCard,
  CircularProgress,
  MultiSelect,
  PinInput,
  Calendar,
  ColorPalette,
  ProductCard,
  QuantitySelector,
  CartItem,
  OrderSummary,
  BarChart,
  Sparkline,
  ImageGallery,
  PricingCard,
  Testimonial,
  FeatureGrid,
  Metric,
  RangeVisualizer
} from './DesignSystem';
import { Mail, Search, Save, Trash2, ArrowRight, User, Settings, Lock, Info, MoreVertical, Sliders, LayoutDashboard, FileText, Bell, Database, Palette, Type, Box, Copy, Briefcase, MapPin, Globe, CreditCard, ChevronLeft, ChevronRight, Hash, Star, Layout, Menu, Home, ShoppingBag, Zap, Shield, BarChart2, Download, Scale, Moon, Activity, Heart, Flame, Server, DollarSign } from 'lucide-react';

const StyleGuide: React.FC<{ onNavigateToDashboard?: () => void }> = ({ onNavigateToDashboard }) => {
  const [toggleState, setToggleState] = useState(false);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioState, setRadioState] = useState('option1');
  const [sliderVal, setSliderVal] = useState(50);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFullModalOpen, setIsFullModalOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState(3);
  const [segValue, setSegValue] = useState('month');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');
  const [selectedTags, setSelectedTags] = useState(['Marketing', 'Design']);
  const [pin, setPin] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSidebarTab, setActiveSidebarTab] = useState('dashboard');
  
  // E-commerce state
  const [cartQty, setCartQty] = useState(1);

  // Dummy data for DataGrid
  const dummyData = [
     { id: 1, name: 'Alice Johnson', role: 'Admin', status: 'Active', department: 'IT', lastLogin: '2023-10-24' },
     { id: 2, name: 'Bob Smith', role: 'User', status: 'Inactive', department: 'Sales', lastLogin: '2023-10-20' },
     { id: 3, name: 'Charlie Brown', role: 'Editor', status: 'Active', department: 'Marketing', lastLogin: '2023-10-23' },
     { id: 4, name: 'Diana Prince', role: 'Admin', status: 'Active', department: 'IT', lastLogin: '2023-10-24' },
     { id: 5, name: 'Evan Wright', role: 'User', status: 'Away', department: 'Support', lastLogin: '2023-10-22' },
     { id: 6, name: 'Fiona Green', role: 'Editor', status: 'Active', department: 'Marketing', lastLogin: '2023-10-18' },
     { id: 7, name: 'George Hall', role: 'User', status: 'Inactive', department: 'Sales', lastLogin: '2023-10-15' },
     { id: 8, name: 'Hannah White', role: 'Admin', status: 'Active', department: 'Finance', lastLogin: '2023-10-24' },
     { id: 9, name: 'Ian Black', role: 'User', status: 'Active', department: 'IT', lastLogin: '2023-10-23' },
     { id: 10, name: 'Julia Roberts', role: 'Editor', status: 'Active', department: 'Marketing', lastLogin: '2023-10-21' },
     { id: 11, name: 'Kevin Hart', role: 'User', status: 'Away', department: 'Support', lastLogin: '2023-10-22' },
     { id: 12, name: 'Laura Croft', role: 'Admin', status: 'Active', department: 'Security', lastLogin: '2023-10-24' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 pb-32">
      
      {/* Header */}
      <div className="border-b border-black pb-8 mb-12">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-light text-primary tracking-tighter mb-4">Design System</h1>
            <p className="text-secondary max-w-2xl text-lg">
              Documentation for <strong className="text-primary font-medium">Structural Minimalism</strong>. 
              Use this guide to implement the UI for the Antigravity project.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {onNavigateToDashboard && (
                <Button onClick={onNavigateToDashboard} variant="outline" icon={LayoutDashboard} className="mb-2">
                    Back to Dashboard
                </Button>
            )}
            <div className="flex flex-col items-end">
                <Badge>v3.7.0</Badge>
                <Text variant="tiny">Ready for Production</Text>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections wrapped in Accordions */}
      <div className="space-y-4">

        {/* TOKENS & SETUP */}
        <Accordion title="00. Tokens & Setup">
          <section className="space-y-12 animate-in fade-in">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <div>
                      <Label>Core Neutrals</Label>
                      <Text className="mb-4">The structural foundation of the system.</Text>
                      <ColorPalette colors={[
                         { name: 'bg', value: '#F8F8F8', description: 'Main Page Background' },
                         { name: 'card', value: '#FFFFFF', description: 'Component Background' },
                         { name: 'border', value: '#E0E0E0', description: 'Divider Lines' },
                         { name: 'inputBorder', value: '#E5E5E5', description: 'Form Borders' },
                      ]} />
                   </div>
                   <div>
                      <Label>Functional Colors</Label>
                      <Text className="mb-4">Used for hierarchy and status.</Text>
                      <ColorPalette colors={[
                         { name: 'primary', value: '#111111', description: 'Headings, Main Text' },
                         { name: 'secondary', value: '#666666', description: 'Subtitles, Labels' },
                         { name: 'icon', value: '#999999', description: 'Inactive Icons' },
                      ]} />
                   </div>
                </div>

                <div className="space-y-8">
                   <div>
                      <Label>Configuration (Tailwind)</Label>
                      <div className="bg-gray-900 p-6 rounded-none text-gray-300 font-mono text-xs overflow-x-auto border border-gray-800">
                        <pre>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#F8F8F8',
        card: '#FFFFFF',
        primary: '#111111',
        secondary: '#666666',
        border: '#E0E0E0',
        inputBorder: '#E5E5E5',
        icon: '#999999',
      },
      borderRadius: {
        DEFAULT: '0px',
        'none': '0px',
        // Force 0px for all sizes
      }
    }
  }
}`}</pre>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        </Accordion>

        {/* TYPOGRAPHY */}
        <Accordion title="01. Typography">
          <section className="space-y-12 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <Label>Headings</Label>
                  <h1 className="text-4xl font-light text-primary mb-2">Display Heading</h1>
                  <h2 className="text-2xl font-medium text-primary mb-2">Section Heading</h2>
                  <h3 className="text-lg font-bold text-primary">Sub-Heading</h3>
                </div>
                <Divider />
                <div>
                  <Label>Body Text</Label>
                  <Text className="mb-2">
                    Default body text. The quick brown fox jumps over the lazy dog. 
                    Inter is the standard typeface used throughout the application.
                  </Text>
                  <Text variant="small" className="mb-2">
                    Small text for descriptions and secondary information.
                  </Text>
                  <Text variant="tiny" className="mb-2">
                    Tiny Uppercase Text
                  </Text>
                  <Text variant="mono">
                    Monospace text for data or code snippets.
                  </Text>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <Label>Inline Elements</Label>
                  <div className="flex flex-col gap-4 mt-2">
                    <Text>Use <Code>Code</Code> for technical terms.</Text>
                    <Text>Use <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> for shortcuts.</Text>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Accordion>

        {/* ELEMENTS */}
        <Accordion title="02. Elements">
          <section className="space-y-12 animate-in fade-in">
            <div className="space-y-12">
              {/* Buttons */}
              <div className="space-y-6">
                <Label>Buttons</Label>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="lg">Large</Button>
                  <Button size="md">Medium</Button>
                  <Button size="sm">Small</Button>
                  <Button size="icon" icon={Search} />
                </div>
              </div>

              <div className="space-y-6">
                <Label>Button Group</Label>
                <div className="flex flex-col gap-4">
                  <ButtonGroup>
                    <Button variant="secondary">Years</Button>
                    <Button variant="secondary">Months</Button>
                    <Button variant="secondary">Days</Button>
                  </ButtonGroup>
                </div>
              </div>

              <Divider />

              {/* Tooltips */}
              <div className="space-y-6">
                 <Label>Tooltips</Label>
                 <div className="flex gap-8 items-center">
                    <Tooltip text="Standard Button Tooltip">
                       <Button variant="outline">Hover Button</Button>
                    </Tooltip>
                    
                    <Tooltip text="Icon Action">
                       <div className="p-2 border border-border hover:bg-gray-50 cursor-pointer">
                          <Info size={20} />
                       </div>
                    </Tooltip>

                    <Tooltip text="Additional information details">
                       <Text className="underline decoration-dotted cursor-help">Hover over text</Text>
                    </Tooltip>
                 </div>
              </div>

              <Divider />

              {/* Actions & Menus */}
              <div className="space-y-6">
                <Label>Actions & Menus</Label>
                <div className="flex gap-4">
                  <Dropdown 
                    trigger={<Button variant="secondary" icon={MoreVertical}>Dropdown Menu</Button>}
                    items={[
                      { label: 'Edit', onClick: () => {} },
                      { label: 'Duplicate', onClick: () => {} },
                      { label: 'Delete', danger: true, onClick: () => {} }
                    ]}
                  />
                  <Button variant="outline" icon={Sliders} onClick={() => setIsDrawerOpen(true)}>Open Filter Drawer</Button>
                </div>
              </div>

              <Divider />

              {/* Badges & Avatars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Label>Badges & Tags</Label>
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                     <Tag onRemove={() => {}}>Standard Tag</Tag>
                     <Tag variant="solid" icon={Star}>Solid Tag</Tag>
                  </div>
                </div>
                <div className="space-y-6">
                  <Label>Avatars</Label>
                  <div className="flex items-end gap-4">
                    <Avatar size="lg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" />
                    <Avatar size="md" initials="AB" tooltipText="Alex Brown" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Accordion>

        {/* FORMS */}
        <Accordion title="03. Forms">
          <section className="space-y-12 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Input label="Default Input" placeholder="Type here..." />
                <Input label="With Icon" leftIcon={<Search size={16}/>} placeholder="Search..." />
                
                <Label className="mt-6">Masked Inputs</Label>
                <div className="space-y-4 p-4 border border-border bg-gray-50">
                  <Input label="Phone Number" mask="phone" placeholder="(555) 555-5555" />
                  <Input label="Date" mask="date" placeholder="MM/DD/YYYY" />
                  <Input label="Credit Card" mask="credit-card" placeholder="0000 0000 0000 0000" />
                </div>

                <Textarea label="Textarea" placeholder="Enter long description..." />
                <FileUpload label="Floor Plan Upload" />
              </div>
              
              <div className="space-y-6">
                <Select label="Select Dropdown" options={['Option 1', 'Option 2', 'Option 3']} />
                <MultiSelect 
                   label="Multi-Select Tags" 
                   options={['Marketing', 'Development', 'Design', 'Sales']}
                   selected={selectedTags}
                   onChange={setSelectedTags}
                />
                
                <Label>Selection Controls</Label>
                <div className="space-y-4 border border-border p-6 bg-white">
                  <Toggle label="Toggle Switch" checked={toggleState} onChange={setToggleState} />
                  <Checkbox label="Checkbox Option" checked={checkboxState} onChange={setCheckboxState} />
                  <RadioGroup 
                    label="Radio Group"
                    name="demo-radio"
                    value={radioState}
                    onChange={setRadioState}
                    options={[{ label: 'Selection A', value: 'option1' }, { label: 'Selection B', value: 'option2' }]}
                  />
                  <Slider label="Range Slider" min={0} max={100} value={sliderVal} onChange={setSliderVal} formatValue={(v) => `${v}%`} />
                </div>
              </div>
            </div>
          </section>
        </Accordion>

        {/* FEEDBACK */}
        <Accordion title="04. Feedback">
          <section className="space-y-12 animate-in fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Label>Alerts</Label>
                <Alert title="Information" message="This is a standard info alert." />
                <Alert variant="success" title="Success" message="Operation completed successfully." />
                
                <div className="space-y-2 pt-4">
                  <Label>Toasts & Notifications</Label>
                  <div className="flex gap-2">
                     <Button onClick={() => { setToastType('success'); setShowToast(true); }}>Success Toast</Button>
                     <Button variant="secondary" onClick={() => { setToastType('error'); setShowToast(true); }}>Error Toast</Button>
                  </div>
                </div>

                {showToast && (
                  <Toast 
                    title={toastType === 'success' ? 'Changes Saved' : 'Connection Failed'} 
                    message={toastType === 'success' ? 'Your profile has been updated successfully.' : 'Could not connect to the server.'} 
                    type={toastType} 
                    action={toastType === 'error' ? { label: 'Retry', onClick: () => {} } : undefined}
                    onClose={() => setShowToast(false)} 
                  />
                )}
              </div>
              <div className="space-y-8">
                <div>
                  <Label>Progress Bar</Label>
                  <div className="space-y-4 mt-2">
                    <Progress value={30} />
                  </div>
                </div>
                <div>
                   <Label>Circular Progress</Label>
                   <div className="flex gap-8 mt-2">
                      <CircularProgress value={65} label="Tasks" />
                   </div>
                </div>
              </div>
            </div>
          </section>
        </Accordion>

        {/* OVERLAYS */}
        <Accordion title="05. Overlays">
          <section className="space-y-12 animate-in fade-in">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Button onClick={() => setIsDialogOpen(true)}>Open Dialog Modal</Button>
                <Button variant="secondary" onClick={() => setIsFullModalOpen(true)}>Open Full Page Modal</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h3 className="font-bold mb-2">Standard Card</h3>
                  <Text variant="small">Basic content container with border.</Text>
                </Card>
              </div>
            </div>
          </section>
        </Accordion>

        {/* DATA & ADVANCED */}
        <Accordion title="06. Data & Advanced">
           <section className="space-y-12 animate-in fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                      <div>
                         <Label>Data Grid</Label>
                         <div className="mt-2">
                           <DataGrid 
                              columns={[
                                 { key: 'name', label: 'Name', sortable: true },
                                 { key: 'role', label: 'Role' },
                                 { key: 'status', label: 'Status', render: (val) => <Badge variant={val === 'Active' ? 'success' : 'outline'}>{val}</Badge> },
                              ]}
                              data={dummyData}
                              pageSize={5}
                           />
                         </div>
                      </div>
                      <div>
                        <Label>Statistics</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <Statistic label="Total Revenue" value="₹ 45L" trend="+12.5%" trendDirection="up" />
                          <Statistic label="Active Leads" value="124" trend="-2.4%" trendDirection="down" />
                        </div>
                      </div>
                  </div>

                  <div className="space-y-8">
                       <div>
                          <Label>Description List</Label>
                          <div className="mt-2">
                            <DescriptionList>
                              <DescriptionListItem label="Full Name" value="Margot Foster" />
                              <DescriptionListItem label="Role" value="Backend Developer" />
                            </DescriptionList>
                          </div>
                       </div>
                       
                       <div>
                         <Label>Stacked List</Label>
                         <div className="mt-2">
                           <StackedList>
                             <StackedListItem 
                               leading={<Avatar size="sm" initials="JD" />}
                               title="Jane Doe"
                               description="Frontend Developer • Engineering"
                               meta={<StatusDot status="active" label="Online" />}
                               trailing={<Button variant="ghost" size="icon" icon={MoreVertical} />}
                             />
                             <StackedListItem 
                               leading={<Avatar size="sm" initials="JS" />}
                               title="John Smith"
                               description="Product Manager • Product"
                               meta={<StatusDot status="inactive" label="Offline" />}
                               trailing={<Button variant="ghost" size="icon" icon={MoreVertical} />}
                             />
                             <StackedListItem 
                               leading={<div className="w-8 h-8 flex items-center justify-center bg-gray-100"><FileText size={14} /></div>}
                               title="Q3 Report.pdf"
                               description="Uploaded 2h ago"
                               trailing={<Button variant="outline" size="sm" icon={Download}>Download</Button>}
                             />
                           </StackedList>
                         </div>
                       </div>

                       <div>
                         <Label>Empty State</Label>
                         <div className="mt-2">
                            <EmptyState 
                              icon={Database} 
                              title="No Data Found" 
                              description="No records available."
                              action={<Button size="sm">Create New</Button>}
                            />
                         </div>
                       </div>
                  </div>
              </div>
           </section>
        </Accordion>

        {/* NAVIGATION */}
        <Accordion title="07. Navigation">
          <section className="space-y-12 animate-in fade-in">
             <div className="mb-12">
                <Label>Top Navigation Bar</Label>
                <div className="mt-2 border border-border">
                  <NavBar 
                    logo={<span className="text-lg font-bold tracking-tighter text-primary">ANTIGRAVITY</span>}
                    items={[{ label: 'Dashboard', active: true }, { label: 'Projects' }]}
                    actions={
                       <div className="flex items-center gap-2">
                          <Dropdown 
                             trigger={<Button variant="ghost" size="icon" icon={Bell} />}
                             items={[]} // Empty items as we render custom content manually for demo
                          />
                          <Avatar size="sm" initials="AM" />
                       </div>
                    }
                  />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                 <div>
                   <Label>Sidebar Tabs (Vertical)</Label>
                   <div className="mt-2 border border-border bg-white w-64">
                      <SidebarTab label="Dashboard" icon={LayoutDashboard} active={activeSidebarTab === 'dashboard'} onClick={() => setActiveSidebarTab('dashboard')} />
                      <SidebarTab label="Projects" icon={FileText} active={activeSidebarTab === 'projects'} onClick={() => setActiveSidebarTab('projects')} />
                      <SidebarTab label="Settings" icon={Settings} active={activeSidebarTab === 'settings'} onClick={() => setActiveSidebarTab('settings')} />
                   </div>
                 </div>

                 <div>
                   <Label>Notification Center (List View)</Label>
                   <div className="mt-2">
                      <NotificationList>
                         <NotificationItem 
                            title="Project Update"
                            message="The 'Alpha' project has moved to the next phase."
                            time="2m ago"
                            read={false}
                         />
                         <NotificationItem 
                            title="New Comment"
                            message="Sarah commented on your design proposal."
                            time="1h ago"
                            avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            read={false}
                         />
                         <NotificationItem 
                            title="System Alert"
                            message="Scheduled maintenance in 2 hours."
                            time="3h ago"
                            read={true}
                         />
                      </NotificationList>
                   </div>
                 </div>
               </div>

               <div className="space-y-8">
                  <div>
                    <Label>Interactive Menus</Label>
                    <div className="mt-2 flex gap-4">
                        <Dropdown 
                          trigger={<Button variant="secondary" icon={MoreVertical}>Options</Button>}
                          items={[{ label: 'Edit', onClick: () => {} }, { label: 'Delete', danger: true, onClick: () => {} }]}
                        />
                        <Button onClick={() => setIsDrawerOpen(true)} icon={Sliders}>Open Drawer</Button>
                    </div>
                  </div>
                  <div>
                     <Label>Command Palette</Label>
                     <div className="mt-2">
                        <Button variant="outline" onClick={() => setIsCmdOpen(true)} className="w-full justify-between text-secondary">
                           <span className="flex items-center gap-2"><Search size={14}/> Search...</span>
                           <Kbd>Cmd + K</Kbd>
                        </Button>
                        <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />
                     </div>
                  </div>
               </div>
             </div>
          </section>
        </Accordion>

        {/* PROFILE & LAYOUTS */}
        <Accordion title="08. Profile & Layouts">
          <section className="space-y-12 animate-in fade-in">
             <div className="space-y-12">
                <div>
                   <Label className="mb-4">Profile Header & Attributes</Label>
                   <Card noPadding className="overflow-hidden">
                      <ProfileHeader 
                         coverSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=300"
                         avatarSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         name="Alex Morgan"
                         subtitle="Senior Sales Executive"
                         actions={<Button variant="primary" size="sm">Edit</Button>}
                      />
                   </Card>
                </div>
             </div>
          </section>
        </Accordion>

        {/* WORKFLOW & MEDIA */}
        <Accordion title="09. Workflow & Media">
           <section className="space-y-12 animate-in fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <div className="space-y-8">
                    <div>
                       <Label className="mb-4">Kanban Board Primitive</Label>
                       <div className="flex h-[300px] border border-border bg-white overflow-x-auto">
                          <KanbanColumn title="New Leads" count={2}>
                             <KanbanCard title="Prestige Estates Inquiry" tags={['Hot']} priority="high" />
                          </KanbanColumn>
                          <KanbanColumn title="In Progress" count={1}>
                             <KanbanCard title="Price Negotiation" tags={['Critical']} />
                          </KanbanColumn>
                       </div>
                    </div>
                    <div>
                       <Label className="mb-4">File List</Label>
                       <div className="space-y-2">
                          <FileCard name="Floor_Plan.pdf" size="2.4 MB" type="PDF" onDownload={() => {}} />
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </Accordion>

        {/* E-COMMERCE & SHOP */}
        <Accordion title="10. E-Commerce & Shop">
            <section className="space-y-12 animate-in fade-in">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Product Grid */}
                  <div className="lg:col-span-2 space-y-8">
                     <Label>Product Grid</Label>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard 
                           image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
                           title="Nike Air Red"
                           price={120.00}
                           originalPrice={150.00}
                           tag="Sale"
                           onAdd={() => {}}
                        />
                        <ProductCard 
                           image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=500&q=80"
                           title="Retro High Green"
                           price={185.00}
                           onAdd={() => {}}
                        />
                        <ProductCard 
                           image="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80"
                           title="Urban Runner"
                           price={95.00}
                        />
                     </div>
                  </div>

                  {/* Cart Summary */}
                  <div className="space-y-8">
                     <Label>Shopping Cart</Label>
                     <Card noPadding>
                        <div className="p-4 border-b border-border bg-gray-50">
                           <span className="font-bold text-sm uppercase">Your Cart (2)</span>
                        </div>
                        <div className="p-4">
                           <CartItem 
                              image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80"
                              title="Nike Air Red"
                              variant="Size: 10"
                              price={120.00}
                              quantity={cartQty}
                              onQuantityChange={setCartQty}
                              onRemove={() => {}}
                           />
                           <CartItem 
                              image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=200&q=80"
                              title="Retro High Green"
                              variant="Size: 9.5"
                              price={185.00}
                              quantity={1}
                              onQuantityChange={() => {}}
                              onRemove={() => {}}
                           />
                        </div>
                        <OrderSummary 
                           items={[
                              { label: 'Subtotal', value: '$305.00' },
                              { label: 'Shipping', value: '$15.00' },
                              { label: 'Tax', value: '$24.40' },
                              { label: 'Total', value: '$344.40', isTotal: true },
                           ]}
                           action={<Button className="w-full mt-4" icon={ShoppingBag}>Checkout</Button>}
                        />
                     </Card>
                  </div>
               </div>
            </section>
        </Accordion>

        {/* VISUALS & CONTENT */}
        <Accordion title="11. Visuals & Content">
            <section className="space-y-12 animate-in fade-in">
               
               {/* Charts */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                     <Label>Simple Charts</Label>
                     <Card>
                        <Text variant="tiny" className="mb-4">Weekly Engagement</Text>
                        <BarChart data={[
                           { label: 'M', value: 40 },
                           { label: 'T', value: 70 },
                           { label: 'W', value: 55 },
                           { label: 'T', value: 90 },
                           { label: 'F', value: 65 },
                           { label: 'S', value: 30 },
                           { label: 'S', value: 45 },
                        ]} />
                     </Card>
                  </div>
                  <div className="space-y-6">
                     <Label>Trend Lines</Label>
                     <Card>
                        <div className="flex justify-between items-baseline mb-4">
                           <Text variant="tiny">Market Trend</Text>
                           <span className="text-green-600 text-xs font-bold">+12.5%</span>
                        </div>
                        <Sparkline data={[10, 25, 20, 35, 30, 45, 40, 60, 55, 75]} color="#111111" />
                     </Card>
                  </div>
               </div>

               {/* Marketing Content */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <PricingCard 
                     tier="Pro Plan"
                     price="$29"
                     features={['Unlimited Projects', 'Custom Domain', '24/7 Support', 'Analytics Dashboard']}
                     isPopular
                     action={<Button className="w-full">Get Started</Button>}
                  />
                  <div className="lg:col-span-2 space-y-8">
                     <Testimonial 
                        quote="This design system has completely transformed how we build our interfaces. It's structural, minimal, and incredibly easy to use."
                        author="Sarah Jenkins"
                        role="Product Designer at TechFlow"
                        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     />
                     <FeatureGrid features={[
                        { icon: Zap, title: 'Lightning Fast', description: 'Optimized for speed with zero runtime overhead.' },
                        { icon: Shield, title: 'Secure by Default', description: 'Enterprise-grade security baked into every component.' },
                        { icon: BarChart2, title: 'Analytics Ready', description: 'Built-in tracking for user interactions.' },
                     ]} />
                  </div>
               </div>
            </section>
        </Accordion>

        {/* ANALYTICS */}
        <Accordion title="12. Analytics">
            <section className="space-y-12 animate-in fade-in">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Universal Example 1: Server Status */}
                  <Metric 
                     label="CPU Usage" 
                     value="92%" 
                     icon={<Server size={16}/>}
                     subtext="High load detected"
                     indicator="Critical" 
                     indicatorIntent="danger"
                     variant="dark"
                  />
                  {/* Universal Example 2: Financial */}
                  <Metric 
                     label="Monthly Budget" 
                     value="$2,450" 
                     icon={<DollarSign size={16}/>}
                     subtext="15% remaining"
                     indicator="On Track" 
                     indicatorIntent="success"
                  />
                  {/* Universal Example 3: Range Visualization */}
                  <Card>
                     <div className="space-y-4">
                        <Label>Goal Tracking</Label>
                        <RangeVisualizer 
                           label="Q4 Sales Target"
                           subLabel="Regional Team A"
                           value="750"
                           unit="Units"
                           indicator="Ahead"
                           intent="success"
                           min={0}
                           max={1000}
                           current={750}
                        />
                     </div>
                  </Card>
               </div>
            </section>
        </Accordion>

      </div>

      {/* Dialog Demo */}
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)}
        title="Example Dialog"
        footer={<Button onClick={() => setIsDialogOpen(false)}>Close</Button>}
      >
        <Text>This is a modal dialog component.</Text>
      </Dialog>

      {/* Drawer Demo */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Configuration Drawer"
        footer={<Button className="w-full" onClick={() => setIsDrawerOpen(false)}>Save</Button>}
      >
        <div className="space-y-6">
            <Input label="Setting Name" />
            <Toggle label="Enable Feature" checked={true} onChange={() => {}} />
        </div>
      </Drawer>

      {/* Full Page Modal Demo */}
      <FullPageModal
        isOpen={isFullModalOpen}
        onClose={() => setIsFullModalOpen(false)}
        title="Create New Campaign"
        actions={<Button onClick={() => setIsFullModalOpen(false)}>Publish</Button>}
      >
         <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeading title="Campaign Details" />
            <Card>
               <div className="space-y-6">
                  <Input label="Campaign Name" />
                  <Textarea label="Description" />
               </div>
            </Card>
         </div>
      </FullPageModal>

    </div>
  );
};

export default StyleGuide;
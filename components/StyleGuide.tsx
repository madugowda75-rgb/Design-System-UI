import React, { useState } from 'react';
import { 
  Button, 
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
  Progress,
  Skeleton,
  Spinner,
  Tabs,
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
  DescriptionList, DescriptionListItem,
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
  CoverImage
} from './DesignSystem';
import { Mail, Search, Save, Trash2, ArrowRight, User, Settings, Lock, Info, MoreVertical, Sliders, LayoutDashboard, FileText, Bell, Database, Palette, Type, Box, Copy, Briefcase, MapPin, Globe, CreditCard } from 'lucide-react';

const StyleGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tokens');
  const [toggleState, setToggleState] = useState(false);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioState, setRadioState] = useState('option1');
  const [sliderVal, setSliderVal] = useState(50);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFullModalOpen, setIsFullModalOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState(3);
  const [segValue, setSegValue] = useState('month');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

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
            <Badge>v3.1.0</Badge>
            <Text variant="tiny">Ready for Production</Text>
          </div>
        </div>
      </div>

      {/* Navigation for Style Guide */}
      <div className="mb-12 sticky top-0 z-20 bg-bg/95 backdrop-blur border-b border-border overflow-x-auto">
        <Tabs 
          activeId={activeTab} 
          onChange={setActiveTab} 
          items={[
            { id: 'tokens', label: '00. Tokens & Setup' },
            { id: 'typography', label: '01. Typography' },
            { id: 'elements', label: '02. Elements' },
            { id: 'forms', label: '03. Forms' },
            { id: 'feedback', label: '04. Feedback' },
            { id: 'overlays', label: '05. Overlays' },
            { id: 'data', label: '06. Data & Advanced' },
            { id: 'nav', label: '07. Navigation' },
            { id: 'profile', label: '08. Profile & Layouts' },
          ]} 
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-20">

        {/* TOKENS & SETUP */}
        {(activeTab === 'tokens' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
             <SectionHeading title="Tokens & Setup" group="Foundation" />
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <div>
                      <Label>Core Colors</Label>
                      <Text className="mb-4">
                        The system uses a strict monochromatic palette. Do not introduce new grays unless absolutely necessary.
                      </Text>
                      <div className="space-y-3">
                         {[
                           { name: 'bg', value: '#F8F8F8', desc: 'Main Page Background' },
                           { name: 'card', value: '#FFFFFF', desc: 'Component Background' },
                           { name: 'primary', value: '#111111', desc: 'Headings, Main Text' },
                           { name: 'secondary', value: '#666666', desc: 'Subtitles, Labels' },
                           { name: 'border', value: '#E0E0E0', desc: 'Divider Lines' },
                           { name: 'inputBorder', value: '#E5E5E5', desc: 'Form Borders' },
                           { name: 'icon', value: '#999999', desc: 'Inactive Icons' },
                         ].map(c => (
                           <div key={c.name} className="flex items-center gap-4 p-3 border border-border bg-white">
                              <div className="w-12 h-12 border border-border" style={{ backgroundColor: c.value }}></div>
                              <div className="flex-1">
                                 <div className="flex justify-between">
                                    <span className="font-bold text-primary">{c.name}</span>
                                    <span className="font-mono text-xs text-secondary">{c.value}</span>
                                 </div>
                                 <p className="text-xs text-secondary">{c.desc}</p>
                              </div>
                           </div>
                         ))}
                      </div>
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
        'sm': '0px', 
        'md': '0px',
        'lg': '0px',
        // Force 0px for all sizes
      }
    }
  }
}`}</pre>
                      </div>
                   </div>

                   <div>
                      <Label>Design Philosophy</Label>
                      <ul className="list-disc list-inside space-y-2 mt-2 text-sm text-primary">
                         <li><strong className="font-medium">Rectilinear:</strong> No rounded corners. 0px border-radius everywhere.</li>
                         <li><strong className="font-medium">High Contrast:</strong> Text is nearly black (#111) on white/gray.</li>
                         <li><strong className="font-medium">Dense:</strong> Use 10px-12px uppercase labels for hierarchy.</li>
                         <li><strong className="font-medium">Borders:</strong> Rely on 1px borders (#E0E0E0) for separation, not shadows.</li>
                      </ul>
                   </div>
                </div>
             </div>
          </section>
        )}

        {/* TYPOGRAPHY */}
        {(activeTab === 'typography' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
            <SectionHeading title="Typography" group="Foundation" />
            
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
                    <Text>
                      Use <Code>Code</Code> for technical terms.
                    </Text>
                    <Text>
                      Use <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> for shortcuts.
                    </Text>
                    <Text>
                      Use <span className="font-bold text-primary">Bold</span> for emphasis.
                    </Text>
                    <Text>
                      Use <span className="italic text-secondary">Italic</span> for subtle emphasis.
                    </Text>
                  </div>
                </div>
                <div>
                  <Label>Labels & Helpers</Label>
                  <div className="mt-4 space-y-4">
                    <Label>Form Label</Label>
                    <Label required>Required Label</Label>
                    <HelperText icon={<Info size={12}/>}>Helper text with icon</HelperText>
                    <HelperText variant="error" icon={<Trash2 size={12}/>}>Error message style</HelperText>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ELEMENTS */}
        {(activeTab === 'elements' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
            <SectionHeading title="Elements" group="Components" />

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
                <div className="flex flex-wrap gap-4 items-center">
                  <Button icon={Mail}>With Icon</Button>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              <Divider />

              {/* Badges & Avatars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Label>Badges & Tags</Label>
                  <div className="flex flex-wrap gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                     <Tag onRemove={() => {}}>Removable Tag</Tag>
                     <Tag>Static Tag</Tag>
                  </div>
                  <div className="flex flex-wrap gap-6 mt-6">
                    <StatusDot status="active" label="Online" />
                    <StatusDot status="busy" label="Do Not Disturb" />
                    <StatusDot status="inactive" label="Offline" />
                  </div>
                </div>
                <div className="space-y-6">
                  <Label>Avatars</Label>
                  <div className="flex items-end gap-4">
                    <Avatar size="lg" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" />
                    <Avatar size="md" initials="AB" />
                    <Avatar size="sm" initials="SM" />
                  </div>
                  <div className="mt-4">
                     <Label className="mb-2">Avatar Group</Label>
                     <AvatarGroup users={[
                       { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64' },
                       { initials: 'JD' },
                       { initials: 'MK' },
                       { initials: 'AR' }
                     ]} />
                  </div>
                </div>
              </div>

              {/* Breadcrumbs */}
              <div className="space-y-6">
                <Label>Breadcrumbs</Label>
                <Breadcrumb items={['Home', 'Clients', 'Profile', 'Settings']} />
              </div>
            </div>
          </section>
        )}

        {/* FORMS */}
        {(activeTab === 'forms' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
            <SectionHeading title="Form Controls" group="Input" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Input label="Default Input" placeholder="Type here..." />
                <Input label="With Icon" leftIcon={<Search size={16}/>} placeholder="Search..." />
                <Input label="With Error" error="Invalid email address" defaultValue="wrong@email" />
                <Textarea label="Textarea" placeholder="Enter long description..." />
                
                <FileUpload label="Floor Plan Upload" />
              </div>
              
              <div className="space-y-6">
                <Select 
                  label="Select Dropdown" 
                  options={['Option 1', 'Option 2', 'Option 3']} 
                />

                <Combobox 
                  label="Combobox / Autocomplete"
                  placeholder="Search countries..."
                  options={['United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France']}
                />
                
                <Label>Selection Controls</Label>
                <div className="space-y-4 border border-border p-6 bg-white">
                  <Toggle 
                    label="Toggle Switch" 
                    checked={toggleState} 
                    onChange={setToggleState}
                    helper="Toggle description text"
                  />
                  <Checkbox 
                    label="Checkbox Option" 
                    checked={checkboxState} 
                    onChange={setCheckboxState} 
                  />
                  <RadioGroup 
                    label="Radio Group"
                    name="demo-radio"
                    value={radioState}
                    onChange={setRadioState}
                    options={[
                      { label: 'Selection A', value: 'option1' },
                      { label: 'Selection B', value: 'option2' }
                    ]}
                  />
                  <div className="pt-4 space-y-2">
                     <Label>Rating</Label>
                     <Rating value={rating} onChange={setRating} />
                  </div>
                  <div className="pt-4">
                     <Slider 
                        label="Range Slider" 
                        min={0} 
                        max={100} 
                        value={sliderVal} 
                        onChange={setSliderVal} 
                        formatValue={(v) => `${v}%`}
                     />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FEEDBACK */}
        {(activeTab === 'feedback' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
            <SectionHeading title="Feedback & Status" group="System" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Label>Alerts</Label>
                <Alert title="Information" message="This is a standard info alert." />
                <Alert variant="success" title="Success" message="Operation completed successfully." />
                <Alert variant="warning" title="Warning" message="Please review your settings." />
                <Alert variant="error" title="Error" message="Something went wrong." />
                
                <Button onClick={() => setShowToast(true)}>Trigger Toast</Button>
                {showToast && (
                  <Toast 
                    title="Action Successful" 
                    message="The changes have been saved to the database." 
                    type="success" 
                    onClose={() => setShowToast(false)} 
                  />
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <Label>Progress Bar</Label>
                  <div className="space-y-4 mt-2">
                    <Progress value={30} />
                    <Progress value={75} />
                  </div>
                </div>

                <div>
                  <Label>Loaders</Label>
                  <div className="flex gap-4 mt-2">
                    <Spinner size={16} />
                    <Spinner size={24} />
                    <Spinner size={32} />
                  </div>
                </div>

                <div>
                  <Label>Skeletons</Label>
                  <div className="space-y-2 mt-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* OVERLAYS */}
        {(activeTab === 'overlays' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
            <SectionHeading title="Overlays & Containers" group="Layout" />

            <div className="space-y-8">
              <div className="flex gap-4">
                <Tooltip text="Tooltip Content">
                   <Button variant="outline">Hover for Tooltip</Button>
                </Tooltip>

                <Button onClick={() => setIsDialogOpen(true)}>Open Dialog Modal</Button>
                <Button variant="secondary" onClick={() => setIsFullModalOpen(true)}>Open Full Page Modal</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <h3 className="font-bold mb-2">Standard Card</h3>
                  <Text variant="small">Basic content container with border.</Text>
                </Card>
                <Card noPadding>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=60" className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold mb-1">Media Card</h3>
                    <Text variant="small">Card with noPadding option.</Text>
                  </div>
                </Card>
                <Card className="bg-primary text-white border-primary">
                  <h3 className="font-bold mb-2">Inverted Card</h3>
                  <p className="text-xs opacity-80">Using utility classes to override styles.</p>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* DATA & ADVANCED */}
        {(activeTab === 'data' || activeTab === 'all') && (
           <section className="space-y-12 animate-in fade-in">
              <SectionHeading title="Data Display" group="Advanced" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                      <div>
                          <Label>Data Table</Label>
                          <Table className="mt-2">
                              <Thead>
                                  <Tr>
                                      <Th>Name</Th>
                                      <Th>Role</Th>
                                      <Th align="right">Status</Th>
                                  </Tr>
                              </Thead>
                              <Tbody>
                                  <Tr>
                                      <Td>Alex Morgan</Td>
                                      <Td>Administrator</Td>
                                      <Td align="right"><Badge variant="success">Active</Badge></Td>
                                  </Tr>
                                  <Tr>
                                      <Td>Sarah Smith</Td>
                                      <Td>Editor</Td>
                                      <Td align="right"><Badge variant="warning">Away</Badge></Td>
                                  </Tr>
                                  <Tr>
                                      <Td>John Doe</Td>
                                      <Td>Viewer</Td>
                                      <Td align="right"><Badge>Inactive</Badge></Td>
                                  </Tr>
                              </Tbody>
                          </Table>
                      </div>

                      <div>
                         <Label>Pagination</Label>
                         <div className="mt-2">
                            <Pagination 
                                currentPage={currentPage} 
                                totalPages={5} 
                                onPageChange={setCurrentPage} 
                            />
                         </div>
                      </div>

                      <div>
                        <Label>Statistics</Label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          <Statistic label="Total Revenue" value="₹ 45L" trend="+12.5%" trendUp />
                          <Statistic label="Active Leads" value="124" trend="-2.4%" />
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
                              <DescriptionListItem label="Email" value="margotfoster@example.com" />
                              <DescriptionListItem label="Salary" value="$120,000" />
                              <DescriptionListItem label="About" value="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat." fullWidth />
                            </DescriptionList>
                          </div>
                       </div>

                       <div>
                          <Label>Timeline</Label>
                          <div className="mt-4 border border-border p-6 bg-white">
                             <Timeline items={[
                               { title: 'Contract Signed', date: 'Oct 24, 2023', status: 'completed', description: 'Legal team approved the drafts.' },
                               { title: 'Site Visit', date: 'Oct 25, 2023', status: 'completed' },
                               { title: 'Documentation', date: 'In Progress', status: 'current' },
                               { title: 'Final Handover', date: 'Nov 01, 2023', status: 'pending' },
                             ]} />
                          </div>
                       </div>

                       <div>
                         <Label>Empty State</Label>
                         <div className="mt-2">
                            <EmptyState 
                              icon={Database} 
                              title="No Data Found" 
                              description="You haven't added any records yet. Start by creating a new entry."
                              action={<Button size="sm">Create New</Button>}
                            />
                         </div>
                       </div>
                  </div>
              </div>
           </section>
        )}

        {/* NAVIGATION & COMMAND */}
        {(activeTab === 'nav' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
             <SectionHeading title="Navigation" group="Structure" />

             <div className="mb-12">
                <Label>Top Navigation Bar</Label>
                <div className="mt-2 border border-border">
                  <NavBar 
                    logo={<span className="text-lg font-bold tracking-tighter text-primary">ANTIGRAVITY</span>}
                    items={[
                      { label: 'Dashboard', active: true },
                      { label: 'Projects' },
                      { label: 'Team' },
                      { label: 'Settings' },
                    ]}
                    actions={
                      <>
                        <Button variant="ghost" size="sm" icon={Bell} className="text-secondary" />
                        <Avatar size="sm" initials="AM" />
                      </>
                    }
                  />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-8">
                 <div>
                   <Label>Side Navigation</Label>
                   <div className="h-64 border border-border mt-2 bg-gray-50">
                      <SideNav items={[
                        { icon: LayoutDashboard, label: 'Dashboard', active: true },
                        { icon: User, label: 'Clients' },
                        { icon: FileText, label: 'Properties' },
                        { icon: Bell, label: 'Notifications' },
                        { icon: Settings, label: 'Settings' },
                      ]} />
                   </div>
                 </div>
                 
                 <div>
                   <Label>Segmented Control</Label>
                   <div className="mt-2">
                      <SegmentedControl 
                        options={[
                          { label: 'Daily', value: 'day' },
                          { label: 'Weekly', value: 'week' },
                          { label: 'Monthly', value: 'month' },
                          { label: 'Yearly', value: 'year' },
                        ]}
                        value={segValue}
                        onChange={setSegValue}
                      />
                   </div>
                 </div>

                 <div>
                    <Label>Filter Group</Label>
                    <div className="mt-2">
                       <FilterGroup 
                          items={['All', 'Active', 'Pending', 'Archived']}
                          activeItem={activeFilter}
                          onChange={setActiveFilter}
                       />
                    </div>
                 </div>
               </div>

               <div className="space-y-8">
                  <div>
                    <Label>Interactive Menus</Label>
                    <div className="mt-2 flex gap-4">
                        <Dropdown 
                          trigger={<Button variant="secondary" icon={MoreVertical}>Options</Button>}
                          items={[
                              { label: 'Edit Details', onClick: () => alert('Edit') },
                              { label: 'Duplicate', onClick: () => alert('Duplicate') },
                              { label: 'Delete', danger: true, onClick: () => alert('Delete') },
                          ]}
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

                  <div>
                    <Label>Stepper</Label>
                    <div className="mt-4">
                        <Stepper steps={['Details', 'Payment', 'Review', 'Done']} currentStep={1} />
                    </div>
                  </div>
               </div>
             </div>
          </section>
        )}

        {/* PROFILE & LAYOUTS */}
        {(activeTab === 'profile' || activeTab === 'all') && (
          <section className="space-y-12 animate-in fade-in">
             <SectionHeading title="Profile & Layouts" group="Application" />

             <div className="space-y-12">
                <div>
                   <Label className="mb-4">Profile Header & Attributes</Label>
                   <Card noPadding className="overflow-hidden">
                      <ProfileHeader 
                         coverSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=300"
                         avatarSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         name="Alex Morgan"
                         subtitle="Senior Sales Executive • Bangalore, IN"
                         stats={
                           <div className="flex gap-4">
                              <div><span className="text-lg font-bold">128</span> <span className="text-xs text-secondary">Deals</span></div>
                              <div><span className="text-lg font-bold">4.8</span> <span className="text-xs text-secondary">Rating</span></div>
                           </div>
                         }
                         actions={<Button variant="primary" size="sm">Edit Profile</Button>}
                      />
                      <div className="px-8 pb-8">
                         <AttributeGrid>
                            <AttributeItem label="Email" value="alex.morgan@company.com" icon={Mail} />
                            <AttributeItem label="Phone" value="+91 98765 43210" icon={Briefcase} />
                            <AttributeItem label="Location" value="Whitefield, Bangalore" icon={MapPin} />
                            <AttributeItem label="Department" value="Residential Sales" icon={Box} />
                            <AttributeItem label="Employee ID" value="EMP-2023-456" icon={CreditCard} />
                            <AttributeItem label="Website" value="www.alexrealty.com" icon={Globe} />
                         </AttributeGrid>
                      </div>
                   </Card>
                </div>

                <div>
                   <Label className="mb-4">Vertical Settings Layout</Label>
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div className="md:col-span-1">
                         <VerticalNav 
                            activeId={activeSettingsTab}
                            onChange={setActiveSettingsTab}
                            items={[
                               { id: 'profile', label: 'My Profile', icon: User },
                               { id: 'account', label: 'Account Settings', icon: Settings },
                               { id: 'billing', label: 'Billing & Plan', icon: CreditCard },
                               { id: 'notifications', label: 'Notifications', icon: Bell, count: 3 },
                            ]}
                         />
                      </div>
                      <div className="md:col-span-3">
                         <Card>
                            <SectionHeading title="Profile Settings" />
                            <div className="space-y-6">
                               <div className="grid grid-cols-2 gap-4">
                                  <Input label="First Name" defaultValue="Alex" />
                                  <Input label="Last Name" defaultValue="Morgan" />
                               </div>
                               <Input label="Email Address" defaultValue="alex.morgan@company.com" />
                               <Textarea label="Bio" defaultValue="Experienced sales executive with a demonstrated history of working in the real estate industry." />
                               <div className="flex justify-end gap-3 pt-4 border-t border-border">
                                  <Button variant="ghost">Cancel</Button>
                                  <Button>Save Changes</Button>
                               </div>
                            </div>
                         </Card>
                      </div>
                   </div>
                </div>
             </div>
          </section>
        )}

      </div>

      {/* Dialog Demo */}
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)}
        title="Example Dialog"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsDialogOpen(false)}>Confirm Action</Button>
          </>
        }
      >
        <Text>
          This is a modal dialog component. It sits on top of the page content 
          and requires user interaction before returning to the main view.
        </Text>
      </Dialog>

      {/* Drawer Demo */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Configuration Drawer"
        footer={<Button className="w-full" onClick={() => setIsDrawerOpen(false)}>Save Changes</Button>}
      >
        <div className="space-y-6">
            <Text>Drawers are perfect for long configuration forms or secondary actions that don't lose context.</Text>
            <Input label="Setting Name" />
            <Select label="Preference" options={['Option A', 'Option B']} />
            <Toggle label="Enable Feature" checked={true} onChange={() => {}} />
            <Divider />
            <Accordion title="Advanced Options">
                <Text variant="small">Hidden settings go here.</Text>
            </Accordion>
        </div>
      </Drawer>

      {/* Full Page Modal Demo */}
      <FullPageModal
        isOpen={isFullModalOpen}
        onClose={() => setIsFullModalOpen(false)}
        title="Create New Campaign"
        actions={
          <>
             <Button variant="ghost" onClick={() => setIsFullModalOpen(false)}>Save Draft</Button>
             <Button onClick={() => setIsFullModalOpen(false)}>Publish Campaign</Button>
          </>
        }
      >
         <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-2">
               <h1 className="text-3xl font-light text-primary">Campaign Details</h1>
               <p className="text-secondary">Configure the basic settings for your new marketing campaign.</p>
            </div>
            
            <Card>
               <div className="space-y-6">
                  <Input label="Campaign Name" placeholder="e.g. Summer Sale 2024" />
                  <div className="grid grid-cols-2 gap-6">
                     <Select label="Type" options={['Email', 'Social Media', 'SMS', 'Print']} />
                     <Select label="Target Audience" options={['All Leads', 'New Leads', 'Past Clients']} />
                  </div>
                  <Textarea label="Description" placeholder="Describe the goals of this campaign..." />
               </div>
            </Card>

            <SectionHeading title="Schedule & Budget" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card>
                  <div className="space-y-4">
                     <Label>Duration</Label>
                     <div className="grid grid-cols-2 gap-4">
                        <Input type="date" label="Start Date" />
                        <Input type="date" label="End Date" />
                     </div>
                  </div>
               </Card>
               <Card>
                  <div className="space-y-4">
                     <Label>Budget Allocation</Label>
                     <Input label="Total Budget" leftIcon={<span className="text-xs font-bold">₹</span>} placeholder="0.00" />
                  </div>
               </Card>
            </div>
         </div>
      </FullPageModal>

    </div>
  );
};

export default StyleGuide;
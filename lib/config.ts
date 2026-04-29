// lib/config.ts

export type UserRole = 
  | 'Administrador' 
  | 'Coordinador' 
  | 'Navegador' 
  | 'Especialista' 
  | 'Enfermeria' 
  | 'Psicosocial' 
  | 'PortalFamiliar';

export interface NavItem {
  title: string;
  href: string;
  icon: string; // Usaremos el nombre del icono para Lucide
  allowedRoles: UserRole[];
}

// Configuración de las secciones (A - H)
export const navigationMenu: NavItem[] = [
  {
    title: 'Torre de Control',
    href: '/torre-control',
    icon: 'Activity',
    allowedRoles: ['Administrador', 'Coordinador', 'Navegador', 'Especialista', 'Enfermeria', 'Psicosocial']
  },
  {
    title: 'Registro Paciente',
    href: '/registro',
    icon: 'UserPlus',
    allowedRoles: ['Administrador', 'Coordinador', 'Navegador', 'Especialista', 'Enfermeria', 'Psicosocial']
  },
  {
    title: 'Bandeja de Navegación',
    href: '/bandeja',
    icon: 'ListTodo',
    allowedRoles: ['Administrador', 'Coordinador', 'Navegador', 'Especialista', 'Enfermeria', 'Psicosocial']
  },
  {
    title: 'Alertas',
    href: '/alertas',
    icon: 'BellRing',
    allowedRoles: ['Administrador', 'Coordinador', 'Navegador', 'Especialista', 'Enfermeria', 'Psicosocial']
  },
  {
    title: 'Tareas',
    href: '/tareas',
    icon: 'CheckSquare',
    allowedRoles: ['Administrador', 'Coordinador', 'Navegador', 'Especialista', 'Enfermeria', 'Psicosocial']
  },
  {
    title: 'Evaluación PedsQL',
    href: '/pedsql',
    icon: 'HeartPulse',
    allowedRoles: ['Administrador', 'Coordinador', 'Psicosocial', 'Especialista']
  },
  {
    title: 'Dashboard KPI',
    href: '/dashboard',
    icon: 'BarChart3',
    allowedRoles: ['Administrador', 'Coordinador'] // Restringido
  },
  {
    title: 'Configuración Catálogos',
    href: '/catalogos',
    icon: 'Database',
    allowedRoles: ['Administrador', 'Coordinador'] // Restringido
  },
  {
    title: 'Gestión del Sistema',
    href: '/sistema',
    icon: 'Settings',
    allowedRoles: ['Administrador'] // Muy Restringido
  }
];

// Configuración exclusiva para el Portal Familiar
export const familyPortalMenu: NavItem[] = [
  { title: 'Inicio', href: '/portal/inicio', icon: 'Home', allowedRoles: ['PortalFamiliar'] },
  { title: 'Mis Citas', href: '/portal/citas', icon: 'Calendar', allowedRoles: ['PortalFamiliar'] },
  { title: 'Plan de Tratamiento', href: '/portal/plan', icon: 'ClipboardList', allowedRoles: ['PortalFamiliar'] },
  { title: 'Educación', href: '/portal/educacion', icon: 'BookOpen', allowedRoles: ['PortalFamiliar'] },
  { title: 'Solicitudes', href: '/portal/solicitudes', icon: 'MessageSquare', allowedRoles: ['PortalFamiliar'] },
];
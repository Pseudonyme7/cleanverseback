// supabase.config.ts

import { createClient } from '@supabase/supabase-js';

export const TABLE_NAMES = {
  NOTIFICATION: 'NOTIFICATION',
  PUBLICATION: 'PUBLICATION',
  STUDENT: 'STUDENT',
  TEACHER: 'TEACHER',
  AUDIO: 'AUDIO',
  INSTITUTE: 'INSTITUTE'
};



export const supabase = createClient(
  'https://gutlboljvnghfkdtpspu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dGxib2xqdm5naGZrZHRwc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0Njk0MTEsImV4cCI6MjAxMTA0NTQxMX0.X76WNlaPYNyJRu67vrV9UAyMI6STsfMg6N-EmKxcTBw',
);

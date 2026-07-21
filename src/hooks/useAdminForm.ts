import { useState } from 'react';
import { api } from '@/lib/api';

export function useAdminForm<T extends Record<string, any>>(
  endpoint: string,
  blankTemplate: T,
  onSuccess: () => void
) {
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState<T>(blankTemplate);
  const [loading, setLoading] = useState(false);

  const openNew = () => {
    setEditing(null);
    setForm({ ...blankTemplate });
    setModal(true);
  };

  const openEdit = (item: any, customFormOverrides?: Partial<T>) => {
    setEditing(item);
    
    // Merge blank template to ensure all keys exist (avoid React warnings)
    const merged = { ...blankTemplate };
    for (const key in blankTemplate) {
      if (item[key] !== undefined && item[key] !== null) {
        merged[key] = item[key];
      }
    }
    
    setForm({ ...merged, ...customFormOverrides } as T);
    setModal(true);
  };

  const set = (key: keyof T, value: any) => {
    setForm(f => ({ ...f, [key]: value }));
  };

  const save = async (transformPayload?: (f: T) => any) => {
    setLoading(true);
    try {
      const payload = transformPayload ? transformPayload(form) : { ...form };
      
      if (editing) {
        // Calculate dirty fields to only send what changed
        const dirtyPayload: any = {};
        for (const key in payload) {
          if (JSON.stringify(payload[key]) !== JSON.stringify(editing[key])) {
            dirtyPayload[key] = payload[key];
          }
        }
        
        // If there are changes, send them
        if (Object.keys(dirtyPayload).length > 0) {
          await api.put(`${endpoint}/${editing._id}`, dirtyPayload);
        }
      } else {
        await api.post(endpoint, payload);
      }
      
      setModal(false);
      onSuccess();
    } catch (err: any) {
      console.error(err);
      alert('Error saving data: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return {
    modal, setModal,
    form, setForm,
    editing,
    set,
    openNew, openEdit,
    save,
    loading
  };
}

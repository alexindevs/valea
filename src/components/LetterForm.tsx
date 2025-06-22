'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";

export function LetterForm({ onBack, onLetterSubmit }: { onBack: () => void, onLetterSubmit: (name: string, email: string, letter: string, file?: string) => void }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [letter, setLetter] = useState('');
  const [isUploading, setUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setUploading(true);

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await axios.post('/api/upload', formData);
    const data = await res.data;
    if (data.secure_url) {
      setUploadedFileUrl(data.secure_url);
    } else {
      alert('Upload failed');
    }
  } catch (err) {
    console.error(err);
    alert('Upload error');
  } finally {
    setUploading(false);
  }
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLetterSubmit(username, email, letter, uploadedFileUrl);
  }
  return (
    <div className="min-h-screen p-6">
          <Button 
            onClick={onBack}
            variant="ghost"
            className="text-sm font-light"
          >
            ← Back to Home
          </Button>
      <form className="max-w-2xl animate-fade-in-up mx-auto mt-8 bg-background p-6 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-2xl mb-4 font-cormorant text-center">Write Your Letter</h2>
          <p className="font-light">Pour your heart out. This letter will find its way back to you when the time is right.</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input 
              type="text" 
              className="w-full p-2 md:p-3 text-sm border rounded-lg"
              placeholder="What should we call you?"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input 
              type="text" 
              className="w-full p-2 md:p-3 text-sm border rounded-lg"
              placeholder="Where should this letter return to?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Letter
            </label>
            <textarea 
              rows={12}
              className="w-full p-2 md:p-3 text-sm border rounded-lg resize-none"
              placeholder="Dear future me..."
              value={letter}
              onChange={(e) => setLetter(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <p className="block text-sm font-medium mb-2">Attachment (optional)</p>
            <div className="flex items-center gap-2 md:gap-4 w-full p-2 md:p-3 text-sm border rounded-lg">
            <input
  type="file"
  name="attachment"
  id="attachment"
  hidden
  onChange={handleFileChange}
/>
<label
  htmlFor="attachment"
  className="block cursor-pointer rounded-md bg-primary py-1 px-2 md:py-2 md:px-4 text-primary-foreground w-fit"
>
  {isUploading ? "Uploading..." : "Choose File"}
</label>
<p className="truncate">{uploadedFileUrl ?? "No file chosen"}</p>
          </div>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button className="flex-1" type="submit">
              Let It Go ✨
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
# RAG Manager - Visual Guide

## 🖥️ What You'll See

### Main Dashboard

```
┌─────────────────────────────────────────────────────────────────────┐
│  [AI4Love Logo]                    RAG Manager      [Show API Info]  │
│                    Centralized document management for your AI KB     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  📤 Upload Document                                          │   │
│  │                                                               │   │
│  │  Upload PDF, Word documents, text files, or markdown files.  │   │
│  │  The latest upload will be tagged as the current source of   │   │
│  │  truth.                                                       │   │
│  │                                                               │   │
│  │  [Choose File] No file chosen                    [Uploading] │   │
│  │                                                               │   │
│  │  ✅ Successfully uploaded guide.pdf (15 chunks)              │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  📚 Document History                                         │   │
│  │                                                               │   │
│  │  ┌───────────────────────────────────────────────────────┐  │   │
│  │  │ 📄 ai4love_guide.pdf    [LATEST VERSION]              │  │   │
│  │  │                                                         │  │   │
│  │  │ Uploaded: Oct 8, 2025, 6:30 PM    Chunks: 15          │  │   │
│  │  │ Type: application/pdf              ID: doc_1728419400  │  │   │
│  │  │                                                         │  │   │
│  │  │                          [Archive]  [Delete]           │  │   │
│  │  └───────────────────────────────────────────────────────┘  │   │
│  │                                                               │   │
│  │  ┌───────────────────────────────────────────────────────┐  │   │
│  │  │ 📄 old_guide.pdf        [ARCHIVED]                    │  │   │
│  │  │                                                         │  │   │
│  │  │ Uploaded: Oct 1, 2025, 2:15 PM    Chunks: 12          │  │   │
│  │  │ Type: application/pdf              ID: doc_1727804100  │  │   │
│  │  │                                                         │  │   │
│  │  │                        [Unarchive]  [Delete]           │  │   │
│  │  └───────────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

### API Info Panel (When Expanded)

```
┌─────────────────────────────────────────────────────────────────────┐
│  🔌 API Connection Details                                           │
│                                                                       │
│  Endpoint: https://ai4love.com/api/rag/query                        │
│  Method: POST                                                        │
│                                                                       │
│  [cURL] [Python] [JavaScript] [ChatGPT] [Claude] [Perplexity]      │
│  ─────                                                               │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ curl -X POST https://ai4love.com/api/rag/query \            │   │
│  │   -H "Content-Type: application/json" \                      │   │
│  │   -d '{"query": "What is AI4Love?", "topK": 5}'             │   │
│  │                                                               │   │
│  │                                                  [Copy]       │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## 🎨 Color Scheme

- **Primary Red**: `#ec3b25` (AI4Love brand color)
- **Latest Version Badge**: Red background with white text
- **Archived Badge**: Gray background with white text
- **Success Messages**: Green background
- **Error Messages**: Red background
- **Background**: Gradient from gray-50 to gray-100

## 🎭 Interactive Elements

### Upload Area
- **Idle**: Gray border, white background
- **Hover**: Slightly darker border
- **Uploading**: Spinner animation, disabled state
- **Success**: Green success message appears
- **Error**: Red error message appears

### Document Cards
- **Latest Version**: Red border, light red background
- **Archived**: Gray border, gray background, reduced opacity
- **Regular**: Gray border, white background

### Buttons
- **Archive**: Gray background → Green on hover
- **Unarchive**: Green background → Darker green on hover
- **Delete**: Red background → Darker red on hover
- **Show API Info**: Red background → Darker red on hover
- **All buttons**: Scale up on hover, scale down on click

### Animations
- **Page Load**: Fade in from top
- **Document Cards**: Slide up and fade in
- **Success/Error Messages**: Slide down from top
- **Button Hover**: Scale 1.05x
- **Button Click**: Scale 0.95x

## 📱 Responsive Design

### Desktop (>1024px)
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  RAG Manager                        [Show API Info]  │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Upload Document (Full Width)                       │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Document History                                    │    │
│  │  ┌────────────────────────────────────────────────┐ │    │
│  │  │  Document 1 (Full Width)                       │ │    │
│  │  └────────────────────────────────────────────────┘ │    │
│  │  ┌────────────────────────────────────────────────┐ │    │
│  │  │  Document 2 (Full Width)                       │ │    │
│  │  └────────────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌───────────────────────────────────────────┐
│  [Logo]  RAG Manager    [Show API Info]   │
│                                            │
│  ┌──────────────────────────────────┐    │
│  │  Upload Document                 │    │
│  └──────────────────────────────────┘    │
│                                            │
│  ┌──────────────────────────────────┐    │
│  │  Document History                │    │
│  │  ┌────────────────────────────┐  │    │
│  │  │  Document 1                │  │    │
│  │  └────────────────────────────┘  │    │
│  └──────────────────────────────────┘    │
└───────────────────────────────────────────┘
```

### Mobile (<768px)
```
┌─────────────────────────┐
│  [Logo]  RAG Manager    │
│  [Show API Info]        │
│                          │
│  ┌────────────────────┐ │
│  │  Upload Document   │ │
│  └────────────────────┘ │
│                          │
│  ┌────────────────────┐ │
│  │  Document History  │ │
│  │  ┌──────────────┐  │ │
│  │  │  Document 1  │  │ │
│  │  │  Stacked     │  │ │
│  │  │  Buttons     │  │ │
│  │  └──────────────┘  │ │
│  └────────────────────┘ │
└─────────────────────────┘
```

## 🎬 User Flow Examples

### Scenario 1: First Upload
```
1. User visits /rag-manager
   → Sees empty state: "No documents uploaded yet"

2. User clicks "Choose File"
   → File picker opens

3. User selects "company_guide.pdf"
   → File name appears next to button

4. Upload starts automatically
   → Spinner appears
   → "Uploading..." text shows

5. Upload completes (3-5 seconds)
   → ✅ "Successfully uploaded company_guide.pdf (23 chunks)"
   → Document appears in list with [LATEST VERSION] badge

6. User clicks "Show API Info"
   → Panel expands with connection details
   → User copies cURL example
```

### Scenario 2: Updating Knowledge Base
```
1. User has existing document "guide_v1.pdf" [LATEST VERSION]

2. User uploads "guide_v2.pdf"
   → Upload processes
   → guide_v2.pdf appears with [LATEST VERSION] badge
   → guide_v1.pdf automatically loses [LATEST VERSION] badge

3. User archives guide_v1.pdf
   → Clicks [Archive] button
   → Badge changes to [ARCHIVED]
   → Background turns gray
   → Button changes to [Unarchive]

4. User tests API
   → Only guide_v2.pdf content is returned in queries
   → guide_v1.pdf is excluded (archived)
```

### Scenario 3: Integrating with ChatGPT
```
1. User clicks "Show API Info"
   → Panel expands

2. User clicks "ChatGPT" tab
   → Instructions appear

3. User clicks [Copy] button
   → Instructions copied to clipboard

4. User opens ChatGPT in new tab
   → Pastes instructions
   → ChatGPT confirms understanding

5. User asks: "What does our company do?"
   → ChatGPT queries RAG API
   → Returns answer based on uploaded documents
```

## 🎯 Visual States

### Document Card States

#### Latest Version (Active)
```
┌─────────────────────────────────────────────┐
│ 📄 guide.pdf  [LATEST VERSION]              │ ← Red badge
│                                              │
│ Uploaded: Oct 8, 2025    Chunks: 15         │
│ Type: PDF                ID: doc_123        │
│                                              │
│                    [Archive]  [Delete]      │
└─────────────────────────────────────────────┘
   ↑ Red border, light red background
```

#### Archived
```
┌─────────────────────────────────────────────┐
│ 📄 old_guide.pdf  [ARCHIVED]                │ ← Gray badge
│                                              │
│ Uploaded: Oct 1, 2025    Chunks: 12         │
│ Type: PDF                ID: doc_456        │
│                                              │
│                  [Unarchive]  [Delete]      │
└─────────────────────────────────────────────┘
   ↑ Gray border, gray background, 60% opacity
```

#### Regular (Not Latest, Not Archived)
```
┌─────────────────────────────────────────────┐
│ 📄 another_doc.pdf                           │
│                                              │
│ Uploaded: Oct 5, 2025    Chunks: 8          │
│ Type: PDF                ID: doc_789        │
│                                              │
│                    [Archive]  [Delete]      │
└─────────────────────────────────────────────┘
   ↑ Gray border, white background
```

## 🔔 Notification Messages

### Success
```
┌─────────────────────────────────────────────┐
│ ✅ Successfully uploaded guide.pdf (15      │
│    chunks)                                   │
└─────────────────────────────────────────────┘
   ↑ Green background, green text
```

### Error
```
┌─────────────────────────────────────────────┐
│ ❌ Error uploading file: File too large     │
└─────────────────────────────────────────────┘
   ↑ Red background, red text
```

### Info
```
┌─────────────────────────────────────────────┐
│ ℹ️ Deleted old_guide.pdf (12 chunks)        │
└─────────────────────────────────────────────┘
   ↑ Blue background, blue text
```

## 🎨 Typography

- **Headings**: Poppins font family (AI4Love brand)
- **Body Text**: System default (San Francisco on Mac)
- **Code**: Monospace font
- **Sizes**:
  - Page Title: 3xl (30px)
  - Section Headings: 2xl (24px)
  - Document Names: lg (18px)
  - Body Text: base (16px)
  - Small Text: sm (14px)
  - Tiny Text: xs (12px)

## 🖱️ Interaction Feedback

### Hover States
- **Buttons**: Background darkens, cursor changes to pointer
- **Document Cards**: Subtle shadow appears
- **Links**: Underline appears

### Click States
- **Buttons**: Scale down to 95%, then bounce back
- **Document Cards**: No click action (buttons inside handle clicks)

### Loading States
- **Upload**: Spinner animation, button disabled
- **Archive/Delete**: Button shows loading spinner
- **Page Load**: Skeleton screens or loading spinner

## 📊 Empty States

### No Documents
```
┌─────────────────────────────────────────────┐
│                                              │
│              📄                              │
│                                              │
│    No documents uploaded yet.                │
│    Upload your first document above!         │
│                                              │
└─────────────────────────────────────────────┘
   ↑ Centered, gray text
```

### API Info Not Loaded
```
┌─────────────────────────────────────────────┐
│  Loading connection details...               │
│  [Spinner]                                   │
└─────────────────────────────────────────────┘
```

## 🎪 Animation Timeline

### Page Load (0-1 second)
```
0.0s: Page structure appears
0.2s: Header fades in from top
0.4s: Upload section slides up
0.6s: Document list fades in
0.8s: Individual documents slide up (staggered)
1.0s: All animations complete
```

### Upload Flow (3-10 seconds)
```
0.0s: User selects file
0.1s: File name appears
0.2s: Upload starts, spinner appears
3-10s: Processing (depends on file size)
0.0s: Success message slides down
0.5s: New document card slides up
1.0s: Success message fades out
```

---

## 💡 Tips for Best Experience

1. **Use Chrome or Safari** for best performance
2. **Enable JavaScript** (required for functionality)
3. **Stable internet connection** for uploads
4. **Modern browser** (last 2 versions)
5. **Screen resolution** 1280x720 or higher recommended

## 🎉 What Makes It Special

- **Zero configuration UI** - Just upload and go
- **Real-time feedback** - Know exactly what's happening
- **Beautiful animations** - Smooth, professional feel
- **Mobile-friendly** - Works on all devices
- **Accessible** - Keyboard navigation supported
- **Fast** - Optimized for performance
- **Intuitive** - No learning curve required

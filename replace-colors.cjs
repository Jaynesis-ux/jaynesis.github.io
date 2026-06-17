const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  const replaceMap = {
    'bg-[#0C0C0C]': 'bg-bg-primary',
    'bg-[#FFFFFF]': 'bg-bg-inverse',
    'text-[#D7E2EA]': 'text-text-primary',
    'text-[#0C0C0C]': 'text-text-inverse',
    'border-[#D7E2EA]': 'border-text-primary',
    'border-[#0C0C0C]': 'border-text-inverse',
    'border-[#0C0C0C]/10': 'border-border-subtle',
    'from-[#0C0C0C]': 'from-bg-primary',
    'to-[#0C0C0C]': 'to-bg-primary',
    'from-[#1A1C20]': 'from-bg-primary',
    '[rgba(215,226,234,0.1)]': 'border-subtle',
    '[rgba(215,226,234,0.15)]': 'border-subtle',
    '[rgba(215,226,234,0.2)]': 'border-subtle',
    '[rgba(215,226,234,0.3)]': 'border-subtle',
    '#0C0C0C': 'var(--bg-primary)',
    '#D7E2EA': 'var(--text-primary)',
  };

  for(const [key, value] of Object.entries(replaceMap)) {
    content = content.split(key).join(value);
  }
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated:', file);
  }
});

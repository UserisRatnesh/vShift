import { PipelineToolbar } from './components/toolbar.js';
import { PipelineUI } from './components/ui.js';
import { SubmitButton } from './components/submit.js';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </RecoilRoot>
  );
}

export default App;

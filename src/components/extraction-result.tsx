import Button from './ui/button';

type ExtractionResultProps = {
  imageUrl: string;
  details: any; 
  onNewExtraction: () => void;
};

const ExtractionResult = ({
  imageUrl,
  details,
  onNewExtraction,
}: ExtractionResultProps) => {
  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Extraction Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          <div className="w-[500px] max-w-full h-[500px] bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={imageUrl} alt="Receipt" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
        <div className="space-y-4">
          <Detail label="Vendor" value={details?.vendor_name ?? '-'} />
          <Detail label="Date" value={details?.date ?? '-'} />
          <Detail
            label="Total"
            value={
              details?.total != null
                ? `${details?.currency ?? ''} ${Number(details.total).toFixed(2)}`
                : '-'
            }
          />
          <hr />
          <h3 className="text-lg font-semibold">Items</h3>
          <div className="space-y-2">
            {((details?.receipt_items ?? details?.items) as any[] ?? []).map((item: any, index: number) => {
              const name = item?.item_name ?? item?.name ?? '-';
              const costRaw = item?.item_cost ?? item?.cost ?? 0;
              const cost = Number(costRaw) || 0;
              return (
                <div key={index} className="flex justify-between">
                  <span>{name}</span>
                  <span>{`${details?.currency ?? ''} ${cost.toFixed(2)}`}</span>
                </div>
              );
            })}
          </div>
          <hr />
          <Detail
            label="Tax"
            value={
              details?.tax != null
                ? `${details?.currency ?? ''} ${Number(details.tax).toFixed(2)}`
                : '-'
            }
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <Button onClick={onNewExtraction}>
          Start New Extraction
        </Button>
      </div>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="font-semibold">{label}</span>
    <span>{value}</span>
  </div>
);

export default ExtractionResult;

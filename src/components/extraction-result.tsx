import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Download, RefreshCw, Receipt } from 'lucide-react';

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
  const items = (details?.receipt_items ?? details?.items ?? []) as any[];
  const totalAmount = details?.total ? Number(details.total).toFixed(2) : '0.00';
  const taxAmount = details?.tax ? Number(details.tax).toFixed(2) : '0.00';
  const currency = details?.currency ?? '$';

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Receipt className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Extraction Complete!</h2>
        <p className="text-gray-600">Your receipt has been successfully processed</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Receipt Image */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Receipt className="w-5 h-5 mr-2" />
              Original Receipt
            </CardTitle>
            <CardDescription>
              Uploaded image preview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center min-h-[400px]">
              <img 
                src={imageUrl} 
                alt="Receipt" 
                className="max-w-full max-h-[500px] object-contain rounded-lg shadow-sm" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Extracted Data */}
        <div className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Receipt Details</CardTitle>
              <CardDescription>
                Extracted information from your receipt
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <DetailRow label="Vendor" value={details?.vendor_name ?? 'Not detected'} />
              <DetailRow label="Date" value={details?.date ?? 'Not detected'} />
              <DetailRow 
                label="Total Amount" 
                value={`${currency} ${totalAmount}`}
                highlight={true}
              />
            </CardContent>
          </Card>

          {/* Items */}
          {items.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Items
                  <Badge variant="secondary">{items.length} items</Badge>
                </CardTitle>
                <CardDescription>
                  Individual items found on the receipt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item: any, index: number) => {
                    const name = item?.item_name ?? item?.name ?? `Item ${index + 1}`;
                    const costRaw = item?.item_cost ?? item?.cost ?? 0;
                    const cost = Number(costRaw) || 0;
                    return (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-900 font-medium">{name}</span>
                        <span className="text-gray-600 font-mono">{`${currency} ${cost.toFixed(2)}`}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <DetailRow label="Subtotal" value={`${currency} ${(Number(totalAmount) - Number(taxAmount)).toFixed(2)}`} />
              <DetailRow label="Tax" value={`${currency} ${taxAmount}`} />
              <hr className="my-3" />
              <DetailRow 
                label="Total" 
                value={`${currency} ${totalAmount}`} 
                highlight={true}
                large={true}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={onNewExtraction} variant="outline" size="lg">
          <RefreshCw className="w-4 h-4 mr-2" />
          Process Another Receipt
        </Button>
        <Button 
          onClick={() => {
            // Download functionality could be implemented here
            console.log('Download data:', details);
          }}
          variant="gradient" 
          size="lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

const DetailRow = ({ 
  label, 
  value, 
  highlight = false, 
  large = false 
}: { 
  label: string; 
  value: string; 
  highlight?: boolean;
  large?: boolean;
}) => (
  <div className={`flex justify-between items-center ${large ? 'py-2' : ''}`}>
    <span className={`${highlight ? 'font-semibold text-gray-900' : 'text-gray-600'} ${large ? 'text-lg' : ''}`}>
      {label}
    </span>
    <span className={`${highlight ? 'font-bold text-green-600' : 'text-gray-900'} ${large ? 'text-xl' : ''} font-mono`}>
      {value}
    </span>
  </div>
);

export default ExtractionResult;

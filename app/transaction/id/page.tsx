import { Bell, ChevronDown, MoreHorizontal, Search } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function TransactionPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 space-y-4 sm:space-y-0">
          <div className="font-semibold">Transaction</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search"
                className="w-full sm:w-[300px] pl-9 bg-gray-100 border-0"
              />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative bg-gray-100 rounded-lg p-2">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 w-full sm:w-auto">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex-grow sm:flex-grow-0">
                  <div className="text-sm font-medium">Double CTRL Z</div>
                  <div className="text-xs text-gray-500">doublecrtl@opensales.com</div>
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold mb-1">Order ID : TXNID983274</h1>
            <p className="text-gray-500 text-sm sm:text-base">Let's boost your sales with powerful insights and effective strategies today</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none">Send Invoice</Button>
            <Button className="bg-orange-500 hover:bg-orange-600 flex-1 sm:flex-none">Contact Buyer</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                <Badge variant="secondary" className="bg-orange-100 text-orange-500 rounded-full px-3 py-1">With courier en route.</Badge>
                <span className="text-gray-500 text-sm">No Resi : 34u2394y239y</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Order made", subtitle: "Create order", icon: "📦" },
                  { title: "Order Paid", subtitle: "Customer payment", icon: "💳" },
                  { title: "Shipped", subtitle: "On delivery", icon: "🚚" },
                  { title: "Completed", subtitle: "Order completed", icon: "✅" },
                ].map((step, index) => (
                  <div key={index} className={`flex items-start gap-2 p-4 rounded-lg ${index === 2 ? 'bg-orange-50' : 'bg-gray-50'} hover:shadow-md transition-shadow duration-200`}>
                    <div className={`p-2 rounded-lg ${index === 2 ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>
                      {step.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium truncate">{step.title}</div>
                      <div className="text-sm text-gray-500 truncate">{step.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="font-medium flex items-center justify-between">
                    Shipping Address (Seller)
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Double CTRL Z</div>
                    <div className="text-sm text-gray-500">1234 Market Street, Apt 56,</div>
                    <div className="text-sm text-gray-500">Philadelphia, PA 19107</div>
                    <div className="text-sm text-gray-500">United States of America</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium flex items-center justify-between">
                    Shipping Address (Buyer)
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="font-medium">Rucas Royal</div>
                    <div className="text-sm text-gray-500">4567 Elm Street, Apt 3B,</div>
                    <div className="text-sm text-gray-500">Philadelphia, PA 19104, USA, Near</div>
                    <div className="text-sm text-gray-500">University City</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-medium">Order Item</div>
                <div className="space-y-4">
                  {[
                    { name: "SNEAKERS INVERNI BW", color: "Black", size: "42", price: "449.000" },
                    { name: "JACKET PISSED", color: "Black", size: "XL", price: "439.000" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-lg bg-gray-200" />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">Color: {item.color} | Size: {item.size}</div>
                        </div>
                      </div>
                      <div className="font-medium">1 X RP {item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="font-medium mb-4">Order Summary</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Product Price</span>
                    <span>2 Item</span>
                    <span>RP 888.000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping Cost Subtotal</span>
                    <span>Shipping Discount</span>
                    <span>-RP67.500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Platform fees</span>
                    <span></span>
                    <span>-RP4.000</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total Sales</span>
                    <span></span>
                    <span>RP 876.500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-medium mb-4">Package travel</h3>
            <div className="space-y-4">
              {[
                { title: "Delivered to recipient", date: "08/22/2022 15:29" },
                { title: "With courier en route", date: "08/22/2022 15:29", resi: "(Royal)" },
                { title: "With courier en route", date: "08/22/2022 15:29", resi: "(Jobra)" },
                { title: "Arrived at Chicago facility", date: "08/22/2022 15:29" },
                { title: "Arrived at Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Arrived at Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Shipped from Philadelphia facility", date: "08/22/2022 15:29" },
                { title: "Arrived at distribution hub", date: "08/22/2022 15:29" },
                { title: "Handed over to courier", date: "08/22/2022 15:29" },
                { title: "Shipment scheduled by seller", date: "08/22/2022 15:29" },
              ].map((event, index) => (
                <div key={index} className="flex gap-4 group hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
                  <div className="relative">
                    <div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-orange-500" />
                    {index !== 9 && <div className="absolute top-3 left-2.5 h-full w-0.5 bg-gray-200" />}
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium flex justify-between flex-wrap">
                      <span>{event.title}</span>
                      {event.resi && <span className="text-gray-500 text-sm">{event.resi}</span>}
                    </div>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
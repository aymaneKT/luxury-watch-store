export default function Footer() {
  return (
    <div className="flex flex-col gap-2.5 py-3.5 border-t-1">
      <ul className="flex justify-center gap-4 font-[Assistant] font-[600] uppercase items-center">
        <li className="cursor-pointer">Shipping & Returns</li>
        <li className="cursor-pointer">CONTACT</li>
        <li className="cursor-pointer">Terms & Conditions</li>
        <li className="cursor-pointer">Instagram</li>
      </ul>
      <ul className="flex justify-center gap-4 font-[Assistant] font-[600] uppercase items-center">
        <li className="cursor-pointer">Terms of Service</li>
        <li className="cursor-pointer">Refund Policy</li>
      </ul>
    </div>
  );
}

// চ্যালেঞ্জ নাম্বার টু

// একটা ডিসকাউন্ট ক্যালকুলেটর এর প্রাকটিস দিয়েছি। সেটা করো। যেখানে একটা প্রাইস লেখা থাকবে এবং একটা বাটন আছে। সেটাতে ক্লিক করলে প্রাইস ৩০% কমে যাবে। এইটার আরেকটু এডভান্সড ভার্সন হবে। তুমি যেদিন Apply বাটনে ক্লিক করবে তখন যদি পাশের টেক্সট বক্স এ DOM লেখা থাকে তাহলে ডিসকাউন্ট কাজ করবে। প্রাইস ৩০% কমবে। আর যদি DOM না লিখে অন্য কিছু লিখে। যেমন ধরো dom বা drum বা অন্য কিছু। তাহলে ডিসকাউন্ট কাজ হবে না।


document.getElementById('apply-btn').addEventListener('click', function () {

  const discountValue = 30;
  // total price ------------

  const totalPriceOld = document.getElementById('total-price');
  const totalPriceString = totalPriceOld.innerText;
  const total = parseFloat(totalPriceString);
  const discountedPrice = total - (total * discountValue / 100);
  // condition
  const voucher = document.getElementById('input-value');
  const voucherCode = voucher.value;
  voucher.value = '';
  const discount = document.getElementById('discount')

  if (voucherCode == 'DOM') {
    totalPriceOld.innerText = discountedPrice;
    discount.innerText = '30%'
    totalPriceOld.style.color = 'orange';
    totalPriceOld.style.fontSize = '2rem';
    discount.style.color = '#F36B07';
  }
  else {
    return alert('ekhane goriber khawa nai . ami grib tai ami jete parchi na');
  }


})





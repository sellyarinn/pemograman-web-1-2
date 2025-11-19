<?php
$saldo = $_POST['saldo'];
$bulan = $_POST['bulan'];

for ($i = 1; $i <= $bulan; $i++)
{
    if ($saldo < 1100000)
        $bunga = 0.03 / 12 * $saldo;
    else
        $bunga = 0.04 / 12 * $saldo;

    $saldo = $saldo + $bunga;
    $saldo = $saldo - 9000;
}

echo "Saldo akhir setelah ".$bulan." bulan adalah Rp ".number_format($saldo,0,",",".");
?>

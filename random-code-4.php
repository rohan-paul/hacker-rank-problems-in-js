<?php
$a = [5, 10, 8, 7, 6, 5];
$size = sizeof($a)/sizeof($a[0]);
$max_diff = -1;
$min_element = $a[0];
for ($i=1; $i<$size; $i++) {

    if ($a[$i] > $min_element) {
         $diff = $a[$i] - $min_element;
         if ($diff > $max_diff) {
            $max_diff = $diff;
         }
      }
      else {
         $min_element = $a[$i];
      }
}

echo $max_diff;
### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [42](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  1157.0<br />
<br />
Final Rank Value (1157.0) = Starting Rank Value (1152.1) + Head To Head Adjustments (5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.561[<sup>1</sup>](#table2)
- Bounty Collected: 0.442[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.366[<sup>2</sup>](#table1)

The average of these factors is 0.380<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1152.1
- 400 + ( ( 0.380 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1152.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |      498 | 2024-12-01 | Complexity        | L   | 0.889      | -            | -                | -                | -         |    -7.76 | decenty, felps, noway, try, VINI  |
|           59 |      524 | 2024-11-30 | FURIA             | L   | 0.884      | -            | -                | -                | -         |    -2.86 | decenty, felps, noway, try, VINI  |
|           58 |      532 | 2024-11-29 | paiN              | L   | 0.882      | -            | -                | -                | -         |    -4.87 | decenty, felps, noway, try, VINI  |
|           57 |      828 | 2024-11-15 | RED Canids        | W   | 0.782      | -            | -                | -                | 1 (0.782) |     8.97 | decenty, felps, noway, try, VINI  |
|           56 |      871 | 2024-11-14 | KRÜ               | W   | 0.776      | -            | -                | -                | 1 (0.776) |     2.93 | decenty, felps, noway, try, VINI  |
|           55 |      903 | 2024-11-12 | paiN              | L   | 0.768      | -            | -                | -                | -         |    -4.23 | decenty, felps, noway, try, VINI  |
|           54 |      917 | 2024-11-12 | MIBR              | L   | 0.764      | -            | -                | -                | -         |    -5.39 | decenty, felps, noway, try, VINI  |
|           53 |      935 | 2024-11-12 | Case              | W   | 0.762      | -            | -                | -                | 1 (0.762) |     2.31 | decenty, felps, noway, try, VINI  |
|           52 |     1260 | 2024-10-26 | The MongolZ       | L   | 0.652      | -            | -                | -                | -         |    -0.56 | decenty, felps, noway, try, VINI  |
|           51 |     1286 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.645      | 0.477        | 0.079 (0.024)    | -                | 0 (0.000) |     7.72 | decenty, felps, noway, try, VINI  |
|           50 |     1315 | 2024-10-23 | Legacy            | W   | 0.632      | 0.477        | 0.074 (0.022)    | 0.503 (0.152)    | 0 (0.000) |     8.16 | decenty, felps, noway, try, VINI  |
|           49 |     1316 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.631      | -            | -                | -                | -         |   -12.41 | decenty, felps, noway, try, VINI  |
|           48 |     1426 | 2024-10-17 | RED Canids        | L   | 0.594      | -            | -                | -                | -         |   -11.80 | decenty, felps, noway, try, VINI  |
|           47 |     1458 | 2024-10-16 | Sharks            | W   | 0.587      | 0.450        | 0.110 (0.029)    | 0.596 (0.157)    | 0 (0.000) |     9.28 | decenty, felps, noway, try, VINI  |
|           46 |     1487 | 2024-10-15 | adalYamigos       | L   | 0.580      | -            | -                | -                | -         |   -16.66 | decenty, felps, noway, try, VINI  |
|           45 |     1578 | 2024-10-09 | Solid             | W   | 0.540      | 0.450        | -                | 0.691 (0.168)    | 0 (0.000) |     3.61 | decenty, felps, noway, try, VINI  |
|           44 |     1581 | 2024-10-09 | Solid             | W   | 0.540      | 0.450        | -                | 0.691 (0.168)    | 0 (0.000) |     3.73 | decenty, felps, noway, try, VINI  |
|           43 |     1611 | 2024-10-08 | paiN              | W   | 0.533      | 0.450        | 0.257 (0.062)    | 0.640 (0.154)    | -         |    14.04 | decenty, felps, noway, try, VINI  |
|           42 |     1618 | 2024-10-08 | paiN              | L   | 0.533      | -            | -                | -                | -         |    -2.72 | decenty, felps, noway, try, VINI  |
|           41 |     1643 | 2024-10-07 | Complexity        | L   | 0.527      | -            | -                | -                | -         |    -4.26 | decenty, felps, noway, try, VINI  |
|           40 |     1655 | 2024-10-07 | Natus Vincere     | L   | 0.524      | -            | -                | -                | -         |    -0.49 | decenty, felps, noway, try, VINI  |
|           39 |     1665 | 2024-10-06 | MIBR              | L   | 0.520      | -            | -                | -                | -         |    -2.93 | decenty, felps, noway, try, VINI  |
|           38 |     1666 | 2024-10-06 | MIBR              | W   | 0.520      | 0.450        | 0.211 (0.049)    | 0.614 (0.144)    | -         |    13.69 | decenty, felps, noway, try, VINI  |
|           37 |     1732 | 2024-10-04 | RED Canids        | L   | 0.507      | -            | -                | -                | -         |    -9.75 | decenty, felps, noway, try, VINI  |
|           36 |     1800 | 2024-10-02 | Hype              | W   | 0.493      | -            | -                | -                | -         |     1.41 | decenty, felps, noway, VINI, zqkS |
|           35 |     1807 | 2024-10-02 | Hype              | W   | 0.493      | -            | -                | -                | -         |     1.43 | decenty, felps, noway, VINI, zqkS |
|           34 |     1852 | 2024-10-01 | Sharks            | W   | 0.487      | 0.450        | 0.110 (0.024)    | 0.596 (0.131)    | -         |     8.24 | decenty, felps, noway, try, VINI  |
|           33 |     1856 | 2024-10-01 | Sharks            | L   | 0.486      | -            | -                | -                | -         |    -7.24 | decenty, felps, noway, try, VINI  |
|           32 |     1888 | 2024-09-30 | Fluxo             | L   | 0.480      | -            | -                | -                | -         |    -9.14 | decenty, felps, noway, try, VINI  |
|           31 |     1890 | 2024-09-30 | Fluxo             | L   | 0.480      | -            | -                | -                | -         |    -9.51 | decenty, felps, noway, try, VINI  |
|           30 |     2041 | 2024-09-26 | Sharks            | W   | 0.452      | -            | -                | -                | -         |     7.25 | decenty, felps, noway, try, VINI  |
|           29 |     2082 | 2024-09-25 | BESTIA            | L   | 0.447      | -            | -                | -                | -         |    -9.73 | decenty, felps, noway, try, VINI  |
|           28 |     2086 | 2024-09-25 | BESTIA            | W   | 0.446      | 0.450        | 0.156 (0.031)    | 0.622 (0.125)    | -         |     4.37 | decenty, felps, noway, try, VINI  |
|           27 |     2091 | 2024-09-25 | BESTIA            | W   | 0.446      | -            | -                | -                | -         |     4.52 | decenty, felps, noway, try, VINI  |
|           26 |     2332 | 2024-09-18 | Spirit            | L   | 0.398      | -            | -                | -                | -         |    -0.13 | decenty, felps, noway, try, VINI  |
|           25 |     2433 | 2024-09-14 | M80               | L   | 0.372      | -            | -                | -                | -         |    -5.87 | decenty, felps, noway, try, VINI  |
|           24 |     2533 | 2024-09-11 | MOUZ              | W   | 0.352      | 0.889        | 0.679 (0.213)    | 0.479 (0.150)    | 1 (0.352) |    10.79 | decenty, felps, noway, try, VINI  |
|           23 |     2570 | 2024-09-10 | BIG               | W   | 0.345      | 0.889        | 0.257 (0.079)    | 0.491 (0.151)    | 1 (0.345) |     8.38 | decenty, felps, noway, try, VINI  |
|           22 |     2658 | 2024-09-06 | ODDIK             | W   | 0.320      | 0.450        | 0.088 (0.013)    | -                | -         |     2.33 | decenty, felps, noway, try, VINI  |
|           21 |     2659 | 2024-09-06 | ODDIK             | W   | 0.320      | -            | -                | -                | -         |     2.37 | decenty, felps, noway, try, VINI  |
|           20 |     2796 | 2024-09-02 | Galorys           | W   | 0.293      | -            | -                | -                | -         |     0.59 | decenty, felps, noway, try, VINI  |
|           19 |     2798 | 2024-09-02 | Galorys           | W   | 0.293      | -            | -                | -                | -         |     0.59 | decenty, felps, noway, try, VINI  |
|           18 |     3049 | 2024-08-26 | Players           | W   | 0.247      | -            | -                | -                | -         |     0.63 | decenty, felps, noway, try, VINI  |
|           17 |     3050 | 2024-08-26 | Players           | W   | 0.246      | -            | -                | -                | -         |     0.64 | decenty, felps, noway, try, VINI  |
|           16 |     3307 | 2024-08-20 | Dusty Roots       | W   | 0.207      | -            | -                | -                | -         |     1.10 | decenty, felps, noway, try, VINI  |
|           15 |     3308 | 2024-08-20 | Dusty Roots       | W   | 0.206      | -            | -                | -                | -         |     1.11 | decenty, felps, noway, try, VINI  |
|           14 |     3532 | 2024-08-12 | inSanitY          | W   | 0.154      | -            | -                | -                | -         |     0.43 | decenty, felps, noway, try, VINI  |
|           13 |     3537 | 2024-08-12 | inSanitY          | W   | 0.153      | -            | -                | -                | -         |     0.43 | decenty, felps, noway, try, VINI  |
|           12 |     3630 | 2024-08-09 | paiN              | L   | 0.131      | -            | -                | -                | -         |    -0.55 | decenty, felps, noway, try, VINI  |
|           11 |     3686 | 2024-08-07 | FURIA             | L   | 0.119      | -            | -                | -                | -         |    -0.30 | decenty, felps, noway, try, VINI  |
|           10 |     4025 | 2024-07-29 | paiN              | L   | 0.060      | -            | -                | -                | -         |    -0.26 | decenty, felps, noway, try, VINI  |
|            9 |     4028 | 2024-07-29 | MIBR              | W   | 0.060      | -            | -                | -                | -         |     1.70 | decenty, felps, noway, try, VINI  |
|            8 |     4053 | 2024-07-28 | paiN              | L   | 0.054      | -            | -                | -                | -         |    -0.23 | decenty, felps, noway, try, VINI  |
|            7 |     4061 | 2024-07-28 | MIBR              | W   | 0.053      | -            | -                | -                | -         |     1.51 | decenty, felps, noway, try, VINI  |
|            6 |     4107 | 2024-07-26 | Fluxo             | W   | 0.040      | -            | -                | -                | -         |     0.08 | decenty, felps, noway, try, VINI  |
|            5 |     4110 | 2024-07-26 | Sharks            | W   | 0.039      | -            | -                | -                | -         |     0.75 | decenty, felps, noway, try, VINI  |
|            4 |     4139 | 2024-07-25 | Solid             | W   | 0.034      | -            | -                | -                | -         |     0.03 | decenty, felps, noway, try, VINI  |
|            3 |     4143 | 2024-07-25 | Yawara            | W   | 0.034      | -            | -                | -                | -         |     0.07 | decenty, felps, noway, try, VINI  |
|            2 |     4213 | 2024-07-23 | Solid             | L   | 0.020      | -            | -                | -                | -         |    -0.62 | decenty, felps, noway, try, VINI  |
|            1 |     4221 | 2024-07-23 | Atrix             | W   | 0.020      | -            | -                | -                | -         |     0.04 | decenty, felps, noway, try, VINI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37,499.02)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.903 | $10,000.00     | $9,033.17       |
| 2024-10-26 |      0.653 | $20,000.00     | $13,062.87      |
| 2024-10-20 |      0.613 | $3,000.00      | $1,839.15       |
| 2024-10-13 |      0.566 | $4,000.00      | $2,263.70       |
| 2024-10-05 |      0.513 | $1,875.00      | $961.35         |
| 2024-09-22 |      0.426 | $23,500.00     | $10,007.16      |
| 2024-08-09 |      0.133 | $2,500.00      | $331.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [38](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [11]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  1173.0<br />
<br />
Final Rank Value (1173.0) = Starting Rank Value (1170.7) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.549[<sup>1</sup>](#table2)
- Bounty Collected: 0.456[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.390[<sup>2</sup>](#table1)

The average of these factors is 0.396<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1170.7
- 400 + ( ( 0.396 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1170.7


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
|           68 |      415 | 2024-12-01 | Complexity        | L   | 1.000      | -            | -                | -                | -         |    -7.98 | decenty, felps, noway, try, VINI  |
|           67 |      441 | 2024-11-30 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -3.37 | decenty, felps, noway, try, VINI  |
|           66 |      449 | 2024-11-29 | paiN              | L   | 1.000      | -            | -                | -                | -         |    -5.67 | decenty, felps, noway, try, VINI  |
|           65 |      745 | 2024-11-15 | RED Canids        | W   | 0.904      | -            | -                | -                | 1 (0.904) |    10.20 | decenty, felps, noway, try, VINI  |
|           64 |      788 | 2024-11-14 | KRÜ               | W   | 0.897      | -            | -                | -                | 1 (0.897) |     3.50 | decenty, felps, noway, try, VINI  |
|           63 |      820 | 2024-11-12 | paiN              | L   | 0.890      | -            | -                | -                | -         |    -5.04 | decenty, felps, noway, try, VINI  |
|           62 |      834 | 2024-11-12 | MIBR              | L   | 0.885      | -            | -                | -                | -         |    -7.36 | decenty, felps, noway, try, VINI  |
|           61 |      852 | 2024-11-12 | Case              | W   | 0.884      | -            | -                | -                | 1 (0.884) |     2.82 | decenty, felps, noway, try, VINI  |
|           60 |     1177 | 2024-10-26 | The MongolZ       | L   | 0.773      | -            | -                | -                | -         |    -0.79 | decenty, felps, noway, try, VINI  |
|           59 |     1203 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.766      | 0.477        | 0.077 (0.028)    | -                | 0 (0.000) |     9.44 | decenty, felps, noway, try, VINI  |
|           58 |     1232 | 2024-10-23 | Legacy            | W   | 0.754      | 0.477        | -                | 0.479 (0.172)    | 0 (0.000) |     9.77 | decenty, felps, noway, try, VINI  |
|           57 |     1233 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.753      | -            | -                | -                | -         |   -14.44 | decenty, felps, noway, try, VINI  |
|           56 |     1343 | 2024-10-17 | RED Canids        | L   | 0.715      | -            | -                | -                | -         |   -14.28 | decenty, felps, noway, try, VINI  |
|           55 |     1375 | 2024-10-16 | Sharks            | W   | 0.708      | 0.450        | 0.099 (0.032)    | 0.631 (0.201)    | 0 (0.000) |     9.76 | decenty, felps, noway, try, VINI  |
|           54 |     1404 | 2024-10-15 | inSanitY          | L   | 0.701      | -            | -                | -                | -         |   -19.52 | decenty, felps, noway, try, VINI  |
|           53 |     1495 | 2024-10-09 | Solid             | W   | 0.661      | 0.450        | -                | 0.614 (0.183)    | 0 (0.000) |     4.25 | decenty, felps, noway, try, VINI  |
|           52 |     1498 | 2024-10-09 | Solid             | W   | 0.661      | 0.450        | -                | 0.614 (0.183)    | 0 (0.000) |     4.41 | decenty, felps, noway, try, VINI  |
|           51 |     1528 | 2024-10-08 | paiN              | W   | 0.655      | 0.450        | 0.243 (0.072)    | 0.696 (0.205)    | -         |    17.15 | decenty, felps, noway, try, VINI  |
|           50 |     1535 | 2024-10-08 | paiN              | L   | 0.654      | -            | -                | -                | -         |    -3.36 | decenty, felps, noway, try, VINI  |
|           49 |     1560 | 2024-10-07 | Complexity        | L   | 0.648      | -            | -                | -                | -         |    -4.57 | decenty, felps, noway, try, VINI  |
|           48 |     1572 | 2024-10-07 | Natus Vincere     | L   | 0.646      | -            | -                | -                | -         |    -0.53 | decenty, felps, noway, try, VINI  |
|           47 |     1582 | 2024-10-06 | MIBR              | L   | 0.641      | -            | -                | -                | -         |    -4.30 | decenty, felps, noway, try, VINI  |
|           46 |     1583 | 2024-10-06 | MIBR              | W   | 0.641      | 0.450        | 0.194 (0.056)    | 0.652 (0.188)    | -         |    16.24 | decenty, felps, noway, try, VINI  |
|           45 |     1649 | 2024-10-04 | RED Canids        | L   | 0.628      | -            | -                | -                | -         |   -11.93 | decenty, felps, noway, try, VINI  |
|           44 |     1717 | 2024-10-02 | Hype              | W   | 0.615      | -            | -                | -                | -         |     1.76 | decenty, felps, noway, VINI, zqkS |
|           43 |     1724 | 2024-10-02 | Hype              | W   | 0.614      | -            | -                | -                | -         |     1.79 | decenty, felps, noway, VINI, zqkS |
|           42 |     1769 | 2024-10-01 | Sharks            | W   | 0.608      | 0.450        | 0.099 (0.027)    | 0.631 (0.173)    | -         |     9.06 | decenty, felps, noway, try, VINI  |
|           41 |     1773 | 2024-10-01 | Sharks            | L   | 0.608      | -            | -                | -                | -         |   -10.31 | decenty, felps, noway, try, VINI  |
|           40 |     1805 | 2024-09-30 | Fluxo             | L   | 0.601      | -            | -                | -                | -         |   -11.55 | decenty, felps, noway, try, VINI  |
|           39 |     1807 | 2024-09-30 | Fluxo             | L   | 0.601      | -            | -                | -                | -         |   -12.14 | decenty, felps, noway, try, VINI  |
|           38 |     1958 | 2024-09-26 | Sharks            | W   | 0.573      | -            | -                | -                | -         |     7.77 | decenty, felps, noway, try, VINI  |
|           37 |     1999 | 2024-09-25 | BESTIA            | L   | 0.568      | -            | -                | -                | -         |   -13.48 | decenty, felps, noway, try, VINI  |
|           36 |     2003 | 2024-09-25 | BESTIA            | W   | 0.568      | 0.450        | 0.102 (0.026)    | 0.564 (0.144)    | -         |     4.38 | decenty, felps, noway, try, VINI  |
|           35 |     2008 | 2024-09-25 | BESTIA            | W   | 0.567      | -            | -                | -                | -         |     4.54 | decenty, felps, noway, try, VINI  |
|           34 |     2249 | 2024-09-18 | Spirit            | L   | 0.519      | -            | -                | -                | -         |    -0.21 | decenty, felps, noway, try, VINI  |
|           33 |     2350 | 2024-09-14 | M80               | L   | 0.493      | -            | -                | -                | -         |    -7.63 | decenty, felps, noway, try, VINI  |
|           32 |     2450 | 2024-09-11 | MOUZ              | W   | 0.474      | 0.889        | 0.644 (0.271)    | 0.500 (0.210)    | 1 (0.474) |    14.43 | decenty, felps, noway, try, VINI  |
|           31 |     2487 | 2024-09-10 | BIG               | W   | 0.466      | 0.889        | 0.230 (0.095)    | 0.504 (0.209)    | 1 (0.466) |    11.00 | decenty, felps, noway, try, VINI  |
|           30 |     2575 | 2024-09-06 | ODDIK             | W   | 0.441      | 0.450        | 0.093 (0.019)    | -                | -         |     3.56 | decenty, felps, noway, try, VINI  |
|           29 |     2576 | 2024-09-06 | ODDIK             | W   | 0.441      | 0.450        | 0.093 (0.019)    | -                | -         |     3.66 | decenty, felps, noway, try, VINI  |
|           28 |     2713 | 2024-09-02 | Galorys           | W   | 0.415      | -            | -                | -                | -         |     0.83 | decenty, felps, noway, try, VINI  |
|           27 |     2715 | 2024-09-02 | Galorys           | W   | 0.414      | -            | -                | -                | -         |     0.83 | decenty, felps, noway, try, VINI  |
|           26 |     2966 | 2024-08-26 | Players           | W   | 0.368      | -            | -                | -                | -         |     0.81 | decenty, felps, noway, try, VINI  |
|           25 |     2967 | 2024-08-26 | Players           | W   | 0.368      | -            | -                | -                | -         |     0.81 | decenty, felps, noway, try, VINI  |
|           24 |     3224 | 2024-08-20 | Dusty Roots       | W   | 0.328      | -            | -                | -                | -         |     1.34 | decenty, felps, noway, try, VINI  |
|           23 |     3225 | 2024-08-20 | Dusty Roots       | W   | 0.328      | -            | -                | -                | -         |     1.35 | decenty, felps, noway, try, VINI  |
|           22 |     3449 | 2024-08-12 | inSanitY          | W   | 0.275      | -            | -                | -                | -         |     0.89 | decenty, felps, noway, try, VINI  |
|           21 |     3454 | 2024-08-12 | inSanitY          | W   | 0.274      | -            | -                | -                | -         |     0.90 | decenty, felps, noway, try, VINI  |
|           20 |     3547 | 2024-08-09 | paiN              | L   | 0.252      | -            | -                | -                | -         |    -1.02 | decenty, felps, noway, try, VINI  |
|           19 |     3603 | 2024-08-07 | FURIA             | L   | 0.240      | -            | -                | -                | -         |    -0.62 | decenty, felps, noway, try, VINI  |
|           18 |     3942 | 2024-07-29 | paiN              | L   | 0.182      | -            | -                | -                | -         |    -0.76 | decenty, felps, noway, try, VINI  |
|           17 |     3945 | 2024-07-29 | MIBR              | W   | 0.181      | -            | -                | -                | -         |     5.15 | decenty, felps, noway, try, VINI  |
|           16 |     3970 | 2024-07-28 | paiN              | L   | 0.175      | -            | -                | -                | -         |    -0.72 | decenty, felps, noway, try, VINI  |
|           15 |     3978 | 2024-07-28 | MIBR              | W   | 0.174      | -            | -                | -                | -         |     4.97 | decenty, felps, noway, try, VINI  |
|           14 |     4024 | 2024-07-26 | Fluxo             | W   | 0.161      | -            | -                | -                | -         |     2.08 | decenty, felps, noway, try, VINI  |
|           13 |     4027 | 2024-07-26 | Sharks            | W   | 0.161      | -            | -                | -                | -         |     2.87 | decenty, felps, noway, try, VINI  |
|           12 |     4056 | 2024-07-25 | Solid             | W   | 0.155      | -            | -                | -                | -         |     0.86 | decenty, felps, noway, try, VINI  |
|           11 |     4060 | 2024-07-25 | Yawara            | W   | 0.155      | -            | -                | -                | -         |     0.29 | decenty, felps, noway, try, VINI  |
|           10 |     4130 | 2024-07-23 | Solid             | L   | 0.141      | -            | -                | -                | -         |    -3.69 | decenty, felps, noway, try, VINI  |
|            9 |     4138 | 2024-07-23 | Atrix             | W   | 0.141      | -            | -                | -                | -         |     0.26 | decenty, felps, noway, try, VINI  |
|            8 |     4224 | 2024-07-20 | paiN              | L   | 0.121      | -            | -                | -                | -         |    -0.47 | decenty, felps, noway, try, VINI  |
|            7 |     4312 | 2024-07-18 | BESTIA            | W   | 0.107      | -            | -                | -                | -         |     1.08 | decenty, felps, noway, try, VINI  |
|            6 |     4317 | 2024-07-18 | ODDIK             | L   | 0.106      | -            | -                | -                | -         |    -2.55 | decenty, felps, noway, try, VINI  |
|            5 |     4325 | 2024-07-18 | Amigos de T2M4SS  | W   | 0.106      | -            | -                | -                | -         |     0.04 | decenty, felps, noway, try, VINI  |
|            4 |     4365 | 2024-07-17 | KRÜ               | W   | 0.101      | -            | -                | -                | -         |     0.35 | decenty, felps, noway, try, VINI  |
|            3 |     4373 | 2024-07-17 | KRÜ               | W   | 0.101      | -            | -                | -                | -         |     0.35 | decenty, felps, noway, try, VINI  |
|            2 |     4491 | 2024-07-15 | Case              | L   | 0.087      | -            | -                | -                | -         |    -2.47 | decenty, felps, noway, VINI, zakk |
|            1 |     4494 | 2024-07-15 | Case              | L   | 0.087      | -            | -                | -                | -         |    -2.47 | decenty, felps, noway, VINI, zakk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,116.29)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-26 |      0.774 | $20,000.00     | $15,486.72      |
| 2024-10-20 |      0.734 | $3,000.00      | $2,202.73       |
| 2024-10-13 |      0.687 | $4,000.00      | $2,748.47       |
| 2024-10-05 |      0.634 | $1,875.00      | $1,188.58       |
| 2024-09-22 |      0.547 | $23,500.00     | $12,855.19      |
| 2024-08-09 |      0.254 | $2,500.00      | $634.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

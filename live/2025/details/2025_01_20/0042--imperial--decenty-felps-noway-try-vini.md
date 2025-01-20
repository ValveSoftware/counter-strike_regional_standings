### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [42](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_20.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_01_20.md)<br />
<br />
Final Rank Value:  1152.9<br />
<br />
Final Rank Value (1152.9) = Starting Rank Value (1147.1) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.560[<sup>1</sup>](#table2)
- Bounty Collected: 0.439[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.362[<sup>2</sup>](#table1)

The average of these factors is 0.376<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1147.1
- 400 + ( ( 0.376 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1147.1


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
|           60 |      484 | 2024-12-01 | Complexity        | L   | 0.870      | -            | -                | -                | -         |    -7.68 | decenty, felps, noway, try, VINI  |
|           59 |      510 | 2024-11-30 | FURIA             | L   | 0.864      | -            | -                | -                | -         |    -2.66 | decenty, felps, noway, try, VINI  |
|           58 |      518 | 2024-11-29 | paiN              | L   | 0.863      | -            | -                | -                | -         |    -4.63 | decenty, felps, noway, try, VINI  |
|           57 |      814 | 2024-11-15 | RED Canids        | W   | 0.763      | -            | -                | -                | 1 (0.763) |     8.77 | decenty, felps, noway, try, VINI  |
|           56 |      857 | 2024-11-14 | KRÜ               | W   | 0.756      | -            | -                | -                | 1 (0.756) |     2.89 | decenty, felps, noway, try, VINI  |
|           55 |      889 | 2024-11-12 | paiN              | L   | 0.749      | -            | -                | -                | -         |    -4.00 | decenty, felps, noway, try, VINI  |
|           54 |      903 | 2024-11-12 | MIBR              | L   | 0.744      | -            | -                | -                | -         |    -5.05 | decenty, felps, noway, try, VINI  |
|           53 |      921 | 2024-11-12 | Case              | W   | 0.743      | -            | -                | -                | 1 (0.743) |     2.24 | decenty, felps, noway, try, VINI  |
|           52 |     1246 | 2024-10-26 | The MongolZ       | L   | 0.632      | -            | -                | -                | -         |    -0.52 | decenty, felps, noway, try, VINI  |
|           51 |     1272 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.625      | 0.477        | 0.078 (0.023)    | -                | 0 (0.000) |     7.46 | decenty, felps, noway, try, VINI  |
|           50 |     1301 | 2024-10-23 | Legacy            | W   | 0.613      | 0.477        | 0.075 (0.022)    | 0.500 (0.146)    | 0 (0.000) |     7.84 | decenty, felps, noway, try, VINI  |
|           49 |     1302 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.612      | -            | -                | -                | -         |   -12.07 | decenty, felps, noway, try, VINI  |
|           48 |     1412 | 2024-10-17 | RED Canids        | L   | 0.574      | -            | -                | -                | -         |   -11.39 | decenty, felps, noway, try, VINI  |
|           47 |     1444 | 2024-10-16 | Sharks            | W   | 0.567      | 0.450        | 0.110 (0.028)    | 0.595 (0.152)    | 0 (0.000) |     9.08 | decenty, felps, noway, try, VINI  |
|           46 |     1473 | 2024-10-15 | inSanitY          | L   | 0.560      | -            | -                | -                | -         |   -15.61 | decenty, felps, noway, try, VINI  |
|           45 |     1564 | 2024-10-09 | Solid             | W   | 0.520      | 0.450        | -                | 0.649 (0.152)    | 0 (0.000) |     3.49 | decenty, felps, noway, try, VINI  |
|           44 |     1567 | 2024-10-09 | Solid             | W   | 0.520      | 0.450        | -                | 0.649 (0.152)    | 0 (0.000) |     3.60 | decenty, felps, noway, try, VINI  |
|           43 |     1597 | 2024-10-08 | paiN              | W   | 0.514      | 0.450        | 0.253 (0.059)    | 0.717 (0.166)    | -         |    13.61 | decenty, felps, noway, try, VINI  |
|           42 |     1604 | 2024-10-08 | paiN              | L   | 0.513      | -            | -                | -                | -         |    -2.53 | decenty, felps, noway, try, VINI  |
|           41 |     1629 | 2024-10-07 | Complexity        | L   | 0.507      | -            | -                | -                | -         |    -4.16 | decenty, felps, noway, try, VINI  |
|           40 |     1641 | 2024-10-07 | Natus Vincere     | L   | 0.505      | -            | -                | -                | -         |    -0.49 | decenty, felps, noway, try, VINI  |
|           39 |     1651 | 2024-10-06 | MIBR              | L   | 0.500      | -            | -                | -                | -         |    -2.71 | decenty, felps, noway, try, VINI  |
|           38 |     1652 | 2024-10-06 | MIBR              | W   | 0.500      | 0.450        | 0.210 (0.047)    | 0.610 (0.137)    | -         |    13.27 | decenty, felps, noway, try, VINI  |
|           37 |     1718 | 2024-10-04 | RED Canids        | L   | 0.487      | -            | -                | -                | -         |    -9.35 | decenty, felps, noway, try, VINI  |
|           36 |     1786 | 2024-10-02 | Hype              | W   | 0.474      | -            | -                | -                | -         |     1.37 | decenty, felps, noway, VINI, zqkS |
|           35 |     1793 | 2024-10-02 | Hype              | W   | 0.473      | -            | -                | -                | -         |     1.39 | decenty, felps, noway, VINI, zqkS |
|           34 |     1838 | 2024-10-01 | Sharks            | W   | 0.467      | 0.450        | 0.110 (0.023)    | 0.595 (0.125)    | -         |     7.99 | decenty, felps, noway, try, VINI  |
|           33 |     1842 | 2024-10-01 | Sharks            | L   | 0.467      | -            | -                | -                | -         |    -6.85 | decenty, felps, noway, try, VINI  |
|           32 |     1874 | 2024-09-30 | Fluxo             | L   | 0.460      | -            | -                | -                | -         |    -8.71 | decenty, felps, noway, try, VINI  |
|           31 |     1876 | 2024-09-30 | Fluxo             | L   | 0.460      | -            | -                | -                | -         |    -9.05 | decenty, felps, noway, try, VINI  |
|           30 |     2027 | 2024-09-26 | Sharks            | W   | 0.432      | -            | -                | -                | -         |     7.04 | decenty, felps, noway, try, VINI  |
|           29 |     2068 | 2024-09-25 | BESTIA            | L   | 0.427      | -            | -                | -                | -         |    -9.22 | decenty, felps, noway, try, VINI  |
|           28 |     2072 | 2024-09-25 | BESTIA            | W   | 0.427      | 0.450        | 0.155 (0.030)    | 0.600 (0.115)    | -         |     4.27 | decenty, felps, noway, try, VINI  |
|           27 |     2077 | 2024-09-25 | BESTIA            | W   | 0.426      | -            | -                | -                | -         |     4.41 | decenty, felps, noway, try, VINI  |
|           26 |     2318 | 2024-09-18 | Spirit            | L   | 0.379      | -            | -                | -                | -         |    -0.12 | decenty, felps, noway, try, VINI  |
|           25 |     2419 | 2024-09-14 | M80               | L   | 0.353      | -            | -                | -                | -         |    -5.56 | decenty, felps, noway, try, VINI  |
|           24 |     2519 | 2024-09-11 | MOUZ              | W   | 0.333      | 0.889        | 0.673 (0.199)    | 0.481 (0.142)    | 1 (0.333) |    10.20 | decenty, felps, noway, try, VINI  |
|           23 |     2556 | 2024-09-10 | BIG               | W   | 0.325      | 0.889        | 0.299 (0.086)    | 0.493 (0.142)    | 1 (0.325) |     8.04 | decenty, felps, noway, try, VINI  |
|           22 |     2644 | 2024-09-06 | ODDIK             | W   | 0.300      | 0.450        | 0.085 (0.012)    | -                | -         |     2.15 | decenty, felps, noway, try, VINI  |
|           21 |     2645 | 2024-09-06 | ODDIK             | W   | 0.300      | -            | -                | -                | -         |     2.19 | decenty, felps, noway, try, VINI  |
|           20 |     2782 | 2024-09-02 | Galorys           | W   | 0.274      | -            | -                | -                | -         |     0.55 | decenty, felps, noway, try, VINI  |
|           19 |     2784 | 2024-09-02 | Galorys           | W   | 0.273      | -            | -                | -                | -         |     0.55 | decenty, felps, noway, try, VINI  |
|           18 |     3035 | 2024-08-26 | Players           | W   | 0.227      | -            | -                | -                | -         |     0.60 | decenty, felps, noway, try, VINI  |
|           17 |     3036 | 2024-08-26 | Players           | W   | 0.227      | -            | -                | -                | -         |     0.60 | decenty, felps, noway, try, VINI  |
|           16 |     3293 | 2024-08-20 | Dusty Roots       | W   | 0.187      | -            | -                | -                | -         |     1.02 | decenty, felps, noway, try, VINI  |
|           15 |     3294 | 2024-08-20 | Dusty Roots       | W   | 0.187      | -            | -                | -                | -         |     1.03 | decenty, felps, noway, try, VINI  |
|           14 |     3518 | 2024-08-12 | inSanitY          | W   | 0.134      | -            | -                | -                | -         |     0.47 | decenty, felps, noway, try, VINI  |
|           13 |     3523 | 2024-08-12 | inSanitY          | W   | 0.133      | -            | -                | -                | -         |     0.47 | decenty, felps, noway, try, VINI  |
|           12 |     3616 | 2024-08-09 | paiN              | L   | 0.111      | -            | -                | -                | -         |    -0.45 | decenty, felps, noway, try, VINI  |
|           11 |     3672 | 2024-08-07 | FURIA             | L   | 0.099      | -            | -                | -                | -         |    -0.24 | decenty, felps, noway, try, VINI  |
|           10 |     4011 | 2024-07-29 | paiN              | L   | 0.041      | -            | -                | -                | -         |    -0.17 | decenty, felps, noway, try, VINI  |
|            9 |     4014 | 2024-07-29 | MIBR              | W   | 0.040      | -            | -                | -                | -         |     1.14 | decenty, felps, noway, try, VINI  |
|            8 |     4039 | 2024-07-28 | paiN              | L   | 0.035      | -            | -                | -                | -         |    -0.14 | decenty, felps, noway, try, VINI  |
|            7 |     4047 | 2024-07-28 | MIBR              | W   | 0.033      | -            | -                | -                | -         |     0.94 | decenty, felps, noway, try, VINI  |
|            6 |     4093 | 2024-07-26 | Fluxo             | W   | 0.021      | -            | -                | -                | -         |     0.04 | decenty, felps, noway, try, VINI  |
|            5 |     4096 | 2024-07-26 | Sharks            | W   | 0.020      | -            | -                | -                | -         |     0.38 | decenty, felps, noway, try, VINI  |
|            4 |     4125 | 2024-07-25 | Solid             | W   | 0.014      | -            | -                | -                | -         |     0.01 | decenty, felps, noway, try, VINI  |
|            3 |     4129 | 2024-07-25 | Yawara            | W   | 0.014      | -            | -                | -                | -         |     0.03 | decenty, felps, noway, try, VINI  |
|            2 |     4199 | 2024-07-23 | Solid             | L   | 0.001      | -            | -                | -                | -         |    -0.02 | decenty, felps, noway, try, VINI  |
|            1 |     4207 | 2024-07-23 | Atrix             | W   | 0.000      | -            | -                | -                | -         |     0.00 | decenty, felps, noway, try, VINI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,222.47)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.884 | $10,000.00     | $8,836.40       |
| 2024-10-26 |      0.633 | $20,000.00     | $12,669.33      |
| 2024-10-20 |      0.593 | $3,000.00      | $1,780.12       |
| 2024-10-13 |      0.546 | $4,000.00      | $2,184.99       |
| 2024-10-05 |      0.493 | $1,875.00      | $924.45         |
| 2024-09-22 |      0.406 | $23,500.00     | $9,544.76       |
| 2024-08-09 |      0.113 | $2,500.00      | $282.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

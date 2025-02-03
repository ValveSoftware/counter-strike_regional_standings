### Roster Details<br />
Team Name: Imperial<br />
Roster: decenty, felps, noway, try, VINI<br />
Global Rank: [42](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_03.md)<br />
Regional Rank: [11]( ../../standings_americas_2025_02_03.md)<br />
<br />
Final Rank Value:  1099.9<br />
<br />
Final Rank Value (1099.9) = Starting Rank Value (1084.3) + Head To Head Adjustments (15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.555[<sup>1</sup>](#table2)
- Bounty Collected: 0.422[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1084.3
- 400 + ( ( 0.353 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1084.3


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
|           50 |      805 | 2024-12-01 | Complexity        | L   | 0.771      | -            | -                | -                | -         |    -7.86 | decenty, felps, noway, try, VINI  |
|           49 |      831 | 2024-11-30 | FURIA             | L   | 0.765      | -            | -                | -                | -         |    -1.83 | decenty, felps, noway, try, VINI  |
|           48 |      839 | 2024-11-29 | paiN              | L   | 0.764      | -            | -                | -                | -         |    -3.45 | decenty, felps, noway, try, VINI  |
|           47 |     1135 | 2024-11-15 | RED Canids        | W   | 0.664      | -            | -                | -                | 1 (0.664) |     8.30 | decenty, felps, noway, try, VINI  |
|           46 |     1178 | 2024-11-14 | KRÜ               | W   | 0.657      | -            | -                | -                | 1 (0.657) |     3.34 | decenty, felps, noway, try, VINI  |
|           45 |     1210 | 2024-11-12 | paiN              | L   | 0.650      | -            | -                | -                | -         |    -2.88 | decenty, felps, noway, try, VINI  |
|           44 |     1224 | 2024-11-12 | MIBR              | L   | 0.645      | -            | -                | -                | -         |    -3.46 | decenty, felps, noway, try, VINI  |
|           43 |     1242 | 2024-11-12 | Case              | W   | 0.644      | -            | -                | -                | 1 (0.644) |     2.24 | decenty, felps, noway, try, VINI  |
|           42 |     1567 | 2024-10-26 | The MongolZ       | L   | 0.534      | -            | -                | -                | -         |    -0.26 | decenty, felps, noway, try, VINI  |
|           41 |     1593 | 2024-10-25 | Ninjas in Pyjamas | W   | 0.526      | 0.477        | 0.071 (0.018)    | -                | 0 (0.000) |     6.08 | decenty, felps, noway, try, VINI  |
|           40 |     1622 | 2024-10-23 | Legacy            | W   | 0.514      | 0.477        | 0.079 (0.019)    | 0.487 (0.119)    | 0 (0.000) |     6.82 | decenty, felps, noway, try, VINI  |
|           39 |     1623 | 2024-10-23 | Ninjas in Pyjamas | L   | 0.513      | -            | -                | -                | -         |   -10.34 | decenty, felps, noway, try, VINI  |
|           38 |     1733 | 2024-10-17 | RED Canids        | L   | 0.475      | -            | -                | -                | -         |    -8.86 | decenty, felps, noway, try, VINI  |
|           37 |     1765 | 2024-10-16 | Sharks            | W   | 0.468      | 0.450        | 0.107 (0.023)    | 0.717 (0.151)    | 0 (0.000) |     8.09 | decenty, felps, noway, try, VINI  |
|           36 |     1794 | 2024-10-15 | adalYamigos       | L   | 0.461      | -            | -                | -                | -         |   -12.41 | decenty, felps, noway, try, VINI  |
|           35 |     1885 | 2024-10-09 | Solid             | W   | 0.421      | 0.450        | 0.048 (0.009)    | 0.767 (0.146)    | 0 (0.000) |     3.73 | decenty, felps, noway, try, VINI  |
|           34 |     1888 | 2024-10-09 | Solid             | W   | 0.421      | 0.450        | -                | 0.767 (0.145)    | 0 (0.000) |     3.85 | decenty, felps, noway, try, VINI  |
|           33 |     1918 | 2024-10-08 | paiN              | W   | 0.415      | 0.450        | 0.328 (0.061)    | 0.799 (0.149)    | -         |    11.39 | decenty, felps, noway, try, VINI  |
|           32 |     1925 | 2024-10-08 | paiN              | L   | 0.415      | -            | -                | -                | -         |    -1.67 | decenty, felps, noway, try, VINI  |
|           31 |     1950 | 2024-10-07 | Complexity        | L   | 0.408      | -            | -                | -                | -         |    -3.93 | decenty, felps, noway, try, VINI  |
|           30 |     1962 | 2024-10-07 | Natus Vincere     | L   | 0.406      | -            | -                | -                | -         |    -0.25 | decenty, felps, noway, try, VINI  |
|           29 |     1972 | 2024-10-06 | MIBR              | L   | 0.401      | -            | -                | -                | -         |    -1.71 | decenty, felps, noway, try, VINI  |
|           28 |     1973 | 2024-10-06 | MIBR              | W   | 0.401      | 0.450        | 0.225 (0.041)    | 0.649 (0.117)    | -         |    11.07 | decenty, felps, noway, try, VINI  |
|           27 |     2039 | 2024-10-04 | RED Canids        | L   | 0.388      | -            | -                | -                | -         |    -6.98 | decenty, felps, noway, try, VINI  |
|           26 |     2107 | 2024-10-02 | Swingers          | W   | 0.375      | -            | -                | -                | -         |     2.00 | decenty, felps, noway, VINI, zqkS |
|           25 |     2114 | 2024-10-02 | Swingers          | W   | 0.375      | -            | -                | -                | -         |     2.03 | decenty, felps, noway, VINI, zqkS |
|           24 |     2159 | 2024-10-01 | Sharks            | W   | 0.368      | 0.450        | 0.107 (0.018)    | 0.717 (0.119)    | -         |     6.77 | decenty, felps, noway, try, VINI  |
|           23 |     2163 | 2024-10-01 | Sharks            | L   | 0.368      | -            | -                | -                | -         |    -4.91 | decenty, felps, noway, try, VINI  |
|           22 |     2195 | 2024-09-30 | Fluxo             | L   | 0.362      | -            | -                | -                | -         |    -6.23 | decenty, felps, noway, try, VINI  |
|           21 |     2197 | 2024-09-30 | Fluxo             | L   | 0.361      | -            | -                | -                | -         |    -6.43 | decenty, felps, noway, try, VINI  |
|           20 |     2348 | 2024-09-26 | Sharks            | W   | 0.333      | -            | -                | -                | -         |     5.96 | decenty, felps, noway, try, VINI  |
|           19 |     2389 | 2024-09-25 | BESTIA            | L   | 0.328      | -            | -                | -                | -         |    -6.34 | decenty, felps, noway, try, VINI  |
|           18 |     2393 | 2024-09-25 | BESTIA            | W   | 0.328      | 0.450        | 0.160 (0.024)    | 0.887 (0.131)    | -         |     4.05 | decenty, felps, noway, try, VINI  |
|           17 |     2398 | 2024-09-25 | BESTIA            | W   | 0.327      | -            | -                | -                | -         |     4.16 | decenty, felps, noway, try, VINI  |
|           16 |     2639 | 2024-09-18 | Spirit            | L   | 0.280      | -            | -                | -                | -         |    -0.06 | decenty, felps, noway, try, VINI  |
|           15 |     2740 | 2024-09-14 | M80               | L   | 0.254      | -            | -                | -                | -         |    -4.00 | decenty, felps, noway, try, VINI  |
|           14 |     2840 | 2024-09-11 | MOUZ              | W   | 0.234      | 0.889        | 0.691 (0.144)    | 0.478 (0.099)    | 1 (0.234) |     7.14 | decenty, felps, noway, try, VINI  |
|           13 |     2877 | 2024-09-10 | BIG               | W   | 0.226      | 0.889        | 0.352 (0.071)    | 0.608 (0.122)    | 1 (0.226) |     6.12 | decenty, felps, noway, try, VINI  |
|           12 |     2965 | 2024-09-06 | ODDIK             | W   | 0.201      | -            | -                | -                | -         |     1.59 | decenty, felps, noway, try, VINI  |
|           11 |     2966 | 2024-09-06 | ODDIK             | W   | 0.201      | -            | -                | -                | -         |     1.61 | decenty, felps, noway, try, VINI  |
|           10 |     3103 | 2024-09-02 | Galorys           | W   | 0.175      | -            | -                | -                | -         |     0.44 | decenty, felps, noway, try, VINI  |
|            9 |     3105 | 2024-09-02 | Galorys           | W   | 0.175      | -            | -                | -                | -         |     0.44 | decenty, felps, noway, try, VINI  |
|            8 |     3356 | 2024-08-26 | Players           | W   | 0.128      | -            | -                | -                | -         |     0.46 | decenty, felps, noway, try, VINI  |
|            7 |     3357 | 2024-08-26 | Players           | W   | 0.128      | -            | -                | -                | -         |     0.46 | decenty, felps, noway, try, VINI  |
|            6 |     3614 | 2024-08-20 | Dusty Roots       | W   | 0.088      | -            | -                | -                | -         |     0.56 | decenty, felps, noway, try, VINI  |
|            5 |     3615 | 2024-08-20 | Dusty Roots       | W   | 0.088      | -            | -                | -                | -         |     0.56 | decenty, felps, noway, try, VINI  |
|            4 |     3839 | 2024-08-12 | inSanitY          | W   | 0.035      | -            | -                | -                | -         |     0.12 | decenty, felps, noway, try, VINI  |
|            3 |     3844 | 2024-08-12 | inSanitY          | W   | 0.035      | -            | -                | -                | -         |     0.12 | decenty, felps, noway, try, VINI  |
|            2 |     3937 | 2024-08-09 | paiN              | L   | 0.012      | -            | -                | -                | -         |    -0.04 | decenty, felps, noway, try, VINI  |
|            1 |     3993 | 2024-08-07 | FURIA             | L   | 0.000      | -            | -                | -                | -         |     0.00 | decenty, felps, noway, try, VINI  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,808.34)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.785 | $10,000.00     | $7,847.71       |
| 2024-10-26 |      0.535 | $20,000.00     | $10,691.95      |
| 2024-10-20 |      0.495 | $3,000.00      | $1,483.52       |
| 2024-10-13 |      0.447 | $4,000.00      | $1,789.52       |
| 2024-10-05 |      0.394 | $1,875.00      | $739.07         |
| 2024-09-22 |      0.307 | $23,500.00     | $7,221.33       |
| 2024-08-09 |      0.014 | $2,500.00      | $35.25          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Metizport<br />
Roster: isak, Jackinho, L00m1, MaiL09, Plopski<br />
Global Rank: [76](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  884.5<br />
<br />
Final Rank Value (884.5) = Starting Rank Value (867.7) + Head To Head Adjustments (16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.7
- 400 + ( ( 0.247 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 867.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      234 | 2025-07-18 | Partizan           | L   | 1.000      | -            | -                | -                | -         |   -14.53 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           50 |      252 | 2025-07-17 | RUBY               | L   | 1.000      | -            | -                | -                | -         |   -16.98 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           49 |      280 | 2025-07-16 | NIP Impact         | W   | 1.000      | 0.371        | 0.044 (0.016)    | -                | 0 (0.000) |    11.40 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           48 |      361 | 2025-07-12 | Passion UA         | L   | 1.000      | -            | -                | -                | -         |    -5.84 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           47 |      394 | 2025-07-11 | NOVAQ              | W   | 1.000      | 0.486        | -                | 0.380 (0.185)    | 0 (0.000) |     5.17 | isak, Jackinho, L00m1, MaiL09, Plopski |
|           46 |      727 | 2025-06-14 | Sashi              | L   | 0.860      | -            | -                | -                | -         |   -10.94 | hampus, isak, L00m1, Lekr0, Plopski    |
|           45 |      737 | 2025-06-14 | Ninjas in Pyjamas  | L   | 0.860      | -            | -                | -                | -         |    -1.67 | hampus, isak, L00m1, Lekr0, Plopski    |
|           44 |      756 | 2025-06-13 | Johnny Speeds      | W   | 0.854      | 0.360        | 0.026 (0.008)    | 0.280 (0.086)    | 1 (0.854) |    14.83 | hampus, isak, L00m1, Lekr0, Plopski    |
|           43 |      916 | 2025-06-04 | Imperial           | L   | 0.795      | -            | -                | -                | -         |    -8.95 | adamb, hampus, isak, L00m1, Plopski    |
|           42 |      929 | 2025-06-03 | TYLOO              | L   | 0.789      | -            | -                | -                | -         |    -0.33 | adamb, hampus, isak, L00m1, Plopski    |
|           41 |      939 | 2025-06-03 | Wildcard           | L   | 0.787      | -            | -                | -                | -         |    -9.47 | adamb, hampus, isak, L00m1, Plopski    |
|           40 |     1370 | 2025-05-10 | Alliance           | L   | 0.626      | -            | -                | -                | -         |    -5.87 | adamb, hampus, isak, L00m1, Plopski    |
|           39 |     1526 | 2025-05-04 | Sangal             | L   | 0.587      | -            | -                | -                | -         |    -9.32 | adamb, hampus, isak, L00m1, Plopski    |
|           38 |     1682 | 2025-04-28 | TNL                | L   | 0.546      | -            | -                | -                | -         |    -4.20 | adamb, hampus, isak, L00m1, Plopski    |
|           37 |     1726 | 2025-04-26 | Northern Lights    | W   | 0.534      | -            | -                | -                | 0 (0.000) |     0.81 | adamb, hampus, isak, L00m1, Plopski    |
|           36 |     1732 | 2025-04-26 | Viperio            | W   | 0.533      | -            | -                | -                | 0 (0.000) |     0.78 | adamb, hampus, isak, L00m1, Plopski    |
|           35 |     1736 | 2025-04-26 | CYBERSHOKE         | W   | 0.533      | 0.435        | -                | 0.780 (0.180)    | 0 (0.000) |     7.58 | hampus, isak, L00m1, Plopski, Ro1f     |
|           34 |     1849 | 2025-04-18 | Nexus              | L   | 0.480      | -            | -                | -                | -         |    -7.84 | adamb, hampus, isak, L00m1, Plopski    |
|           33 |     1856 | 2025-04-18 | ENCE               | W   | 0.479      | 0.657        | 0.137 (0.043)    | 0.768 (0.242)    | 0 (0.000) |    10.45 | adamb, hampus, isak, L00m1, Plopski    |
|           32 |     1859 | 2025-04-18 | Spirit Academy     | L   | 0.479      | -            | -                | -                | -         |    -6.09 | adamb, hampus, isak, L00m1, Plopski    |
|           31 |     1883 | 2025-04-17 | BetBoom            | L   | 0.473      | -            | -                | -                | -         |    -1.38 | adamb, hampus, isak, L00m1, Plopski    |
|           30 |     1891 | 2025-04-17 | LA MASIA           | L   | 0.472      | -            | -                | -                | -         |   -12.43 | adamb, hampus, isak, L00m1, Plopski    |
|           29 |     1917 | 2025-04-16 | Astralis           | W   | 0.466      | 0.143        | 0.888 (0.059)    | -                | 0 (0.000) |    14.49 | adamb, hampus, isak, L00m1, Plopski    |
|           28 |     1936 | 2025-04-15 | OG                 | L   | 0.460      | -            | -                | -                | -         |    -5.03 | adamb, hampus, isak, L00m1, Plopski    |
|           27 |     1959 | 2025-04-14 | BC.Game            | W   | 0.453      | -            | -                | -                | 0 (0.000) |     6.21 | adamb, hampus, isak, L00m1, Plopski    |
|           26 |     1970 | 2025-04-14 | B8                 | W   | 0.451      | 0.143        | 0.139 (0.009)    | -                | 0 (0.000) |    12.19 | adamb, hampus, isak, L00m1, Plopski    |
|           25 |     2223 | 2025-04-03 | 9 Pandas           | L   | 0.381      | -            | -                | -                | -         |    -6.95 | adamb, hampus, isak, L00m1, Plopski    |
|           24 |     2233 | 2025-04-03 | Imperial Valkyries | W   | 0.379      | 0.471        | 0.047 (0.008)    | -                | -         |     4.21 | adamb, hampus, isak, L00m1, Plopski    |
|           23 |     2281 | 2025-04-02 | Complexity         | L   | 0.374      | -            | -                | -                | -         |    -1.00 | adamb, hampus, isak, L00m1, Plopski    |
|           22 |     2285 | 2025-04-02 | Nemiga             | L   | 0.373      | -            | -                | -                | -         |    -2.84 | adamb, hampus, isak, L00m1, Plopski    |
|           21 |     2306 | 2025-04-02 | Passion UA         | W   | 0.372      | 0.471        | 0.097 (0.017)    | 1.000 (0.175)    | -         |     9.96 | adamb, hampus, isak, L00m1, Plopski    |
|           20 |     2341 | 2025-04-01 | Ninjas in Pyjamas  | L   | 0.367      | -            | -                | -                | -         |    -0.60 | adamb, hampus, isak, L00m1, Plopski    |
|           19 |     2361 | 2025-03-31 | Nemiga             | W   | 0.361      | -            | -                | -                | -         |     8.91 | adamb, hampus, isak, L00m1, Plopski    |
|           18 |     2365 | 2025-03-31 | Sangal             | L   | 0.359      | -            | -                | -                | -         |    -5.57 | adamb, hampus, isak, L00m1, Plopski    |
|           17 |     2385 | 2025-03-30 | BetBoom            | W   | 0.354      | 0.143        | 0.315 (0.016)    | -                | -         |    10.29 | adamb, hampus, isak, L00m1, Plopski    |
|           16 |     2394 | 2025-03-30 | ECSTATIC           | W   | 0.352      | 0.396        | 0.115 (0.016)    | 0.938 (0.131)    | -         |     9.68 | adamb, hampus, isak, L00m1, Plopski    |
|           15 |     2434 | 2025-03-29 | TNL                | W   | 0.348      | -            | -                | -                | -         |     8.79 | adamb, hampus, isak, L00m1, Plopski    |
|           14 |     2453 | 2025-03-29 | GUN5               | W   | 0.346      | 0.396        | -                | 0.830 (0.114)    | -         |     7.28 | adamb, hampus, isak, L00m1, Plopski    |
|           13 |     2496 | 2025-03-28 | 9 Pandas           | W   | 0.341      | -            | -                | -                | -         |     5.16 | adamb, hampus, isak, L00m1, Plopski    |
|           12 |     2564 | 2025-03-27 | Eternal Fire       | W   | 0.334      | -            | -                | -                | -         |     3.77 | adamb, hampus, isak, L00m1, Plopski    |
|           11 |     2598 | 2025-03-27 | Fire Flux          | W   | 0.332      | 0.396        | -                | 0.512 (0.067)    | -         |     4.22 | adamb, hampus, isak, L00m1, Plopski    |
|           10 |     2973 | 2025-03-14 | Betclic            | L   | 0.246      | -            | -                | -                | -         |    -1.94 | adamb, hampus, isak, L00m1, Plopski    |
|            9 |     3028 | 2025-03-11 | BC.Game            | L   | 0.226      | -            | -                | -                | -         |    -3.71 | adamb, hampus, isak, L00m1, Plopski    |
|            8 |     3051 | 2025-03-10 | Nemiga             | W   | 0.221      | 0.435        | 0.075 (0.007)    | 0.739 (0.071)    | -         |     5.76 | adamb, hampus, isak, L00m1, Plopski    |
|            7 |     3124 | 2025-03-09 | GUN5               | W   | 0.212      | 0.435        | -                | 0.830 (0.077)    | -         |     4.46 | adamb, hampus, isak, L00m1, Plopski    |
|            6 |     3204 | 2025-03-08 | Partizan           | L   | 0.205      | -            | -                | -                | -         |    -2.49 | adamb, hampus, isak, L00m1, Plopski    |
|            5 |     3273 | 2025-03-07 | Leo                | L   | 0.198      | -            | -                | -                | -         |    -5.27 | adamb, hampus, isak, L00m1, Plopski    |
|            4 |     3942 | 2025-02-11 | HEROIC             | L   | 0.040      | -            | -                | -                | -         |    -0.04 | adamb, hampus, isak, L00m1, Plopski    |
|            3 |     3951 | 2025-02-11 | Nemiga             | W   | 0.039      | -            | -                | -                | -         |     1.02 | adamb, hampus, isak, L00m1, Plopski    |
|            2 |     3963 | 2025-02-10 | GamerLegion        | L   | 0.035      | -            | -                | -                | -         |    -0.02 | adamb, hampus, isak, L00m1, Plopski    |
|            1 |     3982 | 2025-02-10 | Nexus              | W   | 0.033      | -            | -                | -                | -         |     0.63 | adamb, hampus, isak, L00m1, Plopski    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,943.87)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      1.000 | $2,930.00      | $2,930.00       |
| 2025-05-01 |      0.566 | $1,500.00      | $849.33         |
| 2025-04-20 |      0.494 | $6,000.00      | $2,966.21       |
| 2025-04-03 |      0.381 | $5,000.00      | $1,904.13       |
| 2025-03-31 |      0.359 | $6,000.00      | $2,156.32       |
| 2025-03-11 |      0.228 | $5,000.00      | $1,137.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

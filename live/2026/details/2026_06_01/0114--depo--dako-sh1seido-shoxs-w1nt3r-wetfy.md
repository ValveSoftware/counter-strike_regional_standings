### Roster Details<br />
Team Name: DEPO<br />
Roster: dako, sh1seido, shoxs, w1nt3r, wetfy<br />
Global Rank: [114](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [13]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  1014.9<br />
<br />
Final Rank Value (1014.9) = Starting Rank Value (1058.0) + Head To Head Adjustments (-43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.749[<sup>2</sup>](#table1)

The average of these factors is 0.345<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1058.0
- 400 + ( ( 0.345 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1058.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |       54 | 2026-05-30 | Omega           | L   | 1.000      | -            | -                | -                | -         |   -16.89 | dako, sh1seido, shoxs, w1nt3r, wetfy     |
|           20 |       66 | 2026-05-30 | HOTU            | L   | 1.000      | -            | -                | -                | -         |    -3.66 | dako, sh1seido, shoxs, w1nt3r, wetfy     |
|           19 |       87 | 2026-05-29 | Dark Moon       | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.033 (0.012)    | 1 (1.000) |     3.33 | dako, sh1seido, shoxs, w1nt3r, wetfy     |
|           18 |       94 | 2026-05-29 | Omega           | L   | 1.000      | -            | -                | -                | -         |   -17.25 | dako, sh1seido, shoxs, w1nt3r, wetfy     |
|           17 |      103 | 2026-05-29 | Game Point      | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     1.51 | dako, sh1seido, shoxs, w1nt3r, wetfy     |
|           16 |     1241 | 2026-04-26 | Omega           | W   | 0.959      | 0.297        | 0.016 (0.005)    | 0.598 (0.170)    | 1 (0.959) |    12.41 | buster, kade0, sh1seido, shoxs, wetfy    |
|           15 |     1250 | 2026-04-26 | TURAN           | W   | 0.958      | 0.297        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.958) |     1.57 | buster, kade0, sh1seido, shoxs, wetfy    |
|           14 |     1481 | 2026-04-19 | Winners         | W   | 0.912      | 0.277        | 0.001 (0.000)    | 0.030 (0.008)    | 1 (0.912) |     4.20 | buster, kade0, sh1seido, shoxs, wetfy    |
|           13 |     1491 | 2026-04-19 | Winners         | W   | 0.911      | 0.277        | 0.001 (0.000)    | 0.030 (0.008)    | 1 (0.911) |     4.14 | buster, kade0, sh1seido, shoxs, wetfy    |
|           12 |     1508 | 2026-04-18 | THE UNIT        | W   | 0.904      | 0.277        | -                | 0.000 (0.000)    | 1 (0.904) |     1.31 | buster, kade0, sh1seido, shoxs, wetfy    |
|           11 |     2101 | 2026-04-02 | The Huns        | L   | 0.798      | -            | -                | -                | -         |    -8.14 | buster, kade0, sh1seido, shoxs, wetfy    |
|           10 |     2115 | 2026-04-01 | Ground Zero     | W   | 0.797      | 0.769        | 0.008 (0.005)    | 0.256 (0.157)    | 0 (0.000) |     8.64 | buster, kade0, sh1seido, shoxs, wetfy    |
|            9 |     2173 | 2026-04-01 | Haunted House   | W   | 0.793      | 0.624        | 0.005 (0.003)    | 0.164 (0.081)    | 0 (0.000) |     6.62 | buster, kade0, sh1seido, shoxs, wetfy    |
|            8 |     2187 | 2026-04-01 | Legion          | W   | 0.792      | 0.624        | 0.001 (0.000)    | 0.145 (0.072)    | -         |     3.91 | buster, kade0, sh1seido, shoxs, wetfy    |
|            7 |     2255 | 2026-03-31 | THE UNIT        | W   | 0.786      | 0.624        | 0.000 (0.000)    | -                | -         |     1.23 | buster, kade0, sh1seido, shoxs, wetfy    |
|            6 |     2265 | 2026-03-31 | Legion          | L   | 0.786      | -            | -                | -                | -         |   -21.12 | buster, kade0, sh1seido, shoxs, wetfy    |
|            5 |     3179 | 2026-03-15 | Omega           | L   | 0.679      | -            | -                | -                | -         |    -9.27 | botirshoT, kade0, sh1seido, shoxs, wetfy |
|            4 |     3186 | 2026-03-15 | ALTAY           | W   | 0.678      | -            | -                | -                | 1 (0.678) |     1.02 | botirshoT, kade0, sh1seido, shoxs, wetfy |
|            3 |     3370 | 2026-03-10 | Rare Atom       | L   | 0.650      | -            | -                | -                | -         |    -8.53 | buster, kade0, sh1seido, shoxs, wetfy    |
|            2 |     3416 | 2026-03-10 | Blazing Beavers | W   | 0.644      | -            | -                | -                | -         |     0.52 | buster, kade0, sh1seido, shoxs, wetfy    |
|            1 |     3482 | 2026-03-08 | NEXVOID         | L   | 0.637      | -            | -                | -                | -         |    -8.64 | buster, kade0, sh1seido, shoxs, wetfy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,874.23)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-31 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-04-26 |      0.959 | $2,145.00      | $2,057.07       |
| 2026-04-19 |      0.912 | $1,234.00      | $1,125.83       |
| 2026-03-15 |      0.679 | $1,018.00      | $691.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: BluePho3nix, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  829.3<br />
<br />
Final Rank Value (829.3) = Starting Rank Value (814.6) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.6
- 400 + ( ( 0.193 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 814.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       59 | 2024-07-16 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.14 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           18 |     1958 | 2024-04-21 | Nexus           | L   | 0.621      | -            | -                | -                | -         |    -8.29 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           17 |     1982 | 2024-04-20 | Passion UA      | L   | 0.614      | -            | -                | -                | -         |    -5.96 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           16 |     2066 | 2024-04-18 | Nexus           | W   | 0.601      | 0.500        | 0.011 (0.003)    | 0.432 (0.130)    | 0 (0.000) |    10.90 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |     2412 | 2024-04-07 | 3DMAX           | L   | 0.526      | -            | -                | -                | -         |    -1.59 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           14 |     2894 | 2024-03-14 | ex-sYnck        | L   | 0.366      | -            | -                | -                | -         |    -9.95 | BluePho3nix, dex, maxster, MisteM, Silence      |
|           13 |     2998 | 2024-03-10 | 500             | W   | 0.340      | 0.358        | 0.001 (0.000)    | 0.169 (0.021)    | 0 (0.000) |     4.26 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           12 |     3024 | 2024-03-09 | AURA            | W   | 0.333      | 0.143        | 0.000 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     1.51 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     3097 | 2024-03-06 | HEROIC          | L   | 0.314      | -            | -                | -                | -         |    -0.06 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     3131 | 2024-03-05 | fnatic          | L   | 0.307      | -            | -                | -                | -         |    -0.15 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     3144 | 2024-03-05 | Permitta        | L   | 0.306      | -            | -                | -                | -         |    -3.17 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     3155 | 2024-03-04 | Aurora          | W   | 0.300      | 0.500        | 0.514 (0.077)    | 0.813 (0.122)    | 0 (0.000) |     9.36 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     3172 | 2024-03-03 | BIG             | W   | 0.294      | 0.500        | 0.212 (0.031)    | 0.382 (0.056)    | 0 (0.000) |     8.88 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     3226 | 2024-03-01 | BLEED           | L   | 0.280      | -            | -                | -                | -         |    -1.82 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     3239 | 2024-02-29 | Zero Tenacity   | L   | 0.273      | -            | -                | -                | -         |    -1.55 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            4 |     3248 | 2024-02-28 | AMKAL           | W   | 0.267      | 0.500        | 0.134 (0.018)    | 0.523 (0.070)    | 0 (0.000) |     7.10 | BluePho3nix, maxster, MisteM, REZ, Silence      |
|            3 |     3474 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.201      | 0.358        | 0.050 (0.004)    | 0.644 (0.046)    | 0 (0.000) |     5.08 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     3649 | 2024-02-11 | Portugal        | W   | 0.154      | 0.358        | 0.006 (0.000)    | 0.162 (0.009)    | 0 (0.000) |     1.98 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     3755 | 2024-02-03 | ex-Anonymo      | W   | 0.101      | 0.358        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,629.92)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.341 | $5,000.00      | $1,706.91       |
| 2024-03-06 |      0.314 | $12,500.00     | $3,923.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
